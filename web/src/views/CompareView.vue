<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { findLens } from "../data/lenses";
import { bestIndices, buildCompareRows, toCsv } from "../lib/compare";
import { mountColor } from "../lib/lens";
import { useCompareShortlist, MAX_COMPARE } from "../composables/useCompareShortlist";
import { useLangPath } from "../composables/useLangPath";
import { writeClipboard } from "../lib/clipboard";
import LensImage from "../components/LensImage.vue";
import type { Lens } from "../types";

const COPIED_FEEDBACK_MS = 2000;

const route = useRoute();
const router = useRouter();
const { t } = useI18n();
const { lensPath, catalogPath } = useLangPath();
const shortlist = useCompareShortlist();

// IDs come from either the URL (?ids=a,b,c,d) or, as a fallback, from the
// persistent compare shortlist. URL wins so links stay shareable.
const idsParam = computed<string[]>(() => {
  const q = route.query.ids;
  if (typeof q !== "string" || !q) return shortlist.ids.value;
  return q
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, MAX_COMPARE);
});

// Free-text question the user asks about the pinned lenses (e.g. "which of
// these is best for astrophotography?"). Seeded once from ?q= so shared links
// restore it; kept as a local ref so typing never loses focus.
const question = ref<string>(typeof route.query.q === "string" ? route.query.q : "");

// Single source of truth for the shareable state, so the address bar and the
// copied link can never drift apart.
const buildQuery = (ids: string[]): Record<string, string> => {
  const query: Record<string, string> = {};
  if (ids.length) query.ids = ids.join(",");
  const q = question.value.trim();
  if (q) query.q = q;
  return query;
};

// router.replace (not history.replaceState) so route params stay reactive and
// the table re-renders when a column is removed.
const writeUrl = (ids: string[]) => {
  router.replace({ path: route.path, query: buildQuery(ids) });
};

watch(question, () => writeUrl(idsParam.value));

// Canonicalize the address bar when arriving from the tray fallback (shortlist
// present but no ?ids= yet) so the link is shareable before any edit.
onMounted(() => {
  if (idsParam.value.length && typeof route.query.ids !== "string") {
    writeUrl(idsParam.value);
  }
});

const shareUrl = computed<string>(() => {
  const search = new URLSearchParams(buildQuery(idsParam.value)).toString();
  const base = typeof window !== "undefined" ? window.location.origin : "";
  return `${base}${route.path}${search ? `?${search}` : ""}`;
});

const copied = ref(false);
const copyTimer = ref<ReturnType<typeof setTimeout> | undefined>(undefined);

const copyShareUrl = async () => {
  try {
    await writeClipboard(shareUrl.value);
    copied.value = true;
    if (copyTimer.value) clearTimeout(copyTimer.value);
    copyTimer.value = setTimeout(() => (copied.value = false), COPIED_FEEDBACK_MS);
  } catch {
    copied.value = false;
  }
};

const pinnedLenses = computed<Lens[]>(() =>
  idsParam.value.map((id) => findLens(id)).filter((l): l is Lens => !!l),
);

const rows = computed(() => buildCompareRows(pinnedLenses.value));

const highlightSet = computed<Set<string>>(() => {
  const set = new Set<string>();
  for (const row of rows.value) {
    for (const i of bestIndices(row)) set.add(`${row.key}#${i}`);
  }
  return set;
});

const isBest = (rowKey: string, colIdx: number): boolean =>
  highlightSet.value.has(`${rowKey}#${colIdx}`);

const removeColumn = (lens: Lens) => {
  shortlist.remove(lens.id);
  writeUrl(idsParam.value.filter((id) => id !== lens.id));
};

const downloadCsv = () => {
  const csv = toCsv(pinnedLenses.value, rows.value, (key) => t(key));
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  const stamp = new Date().toISOString().slice(0, 10);
  anchor.href = url;
  anchor.download = `lens-compare-${stamp}.csv`;
  anchor.click();
  URL.revokeObjectURL(url);
};
</script>

<template>
  <div>
    <RouterLink :to="catalogPath()" class="text-mut hover:text-txt text-[13px]">
      ← {{ t("detail.back") }}
    </RouterLink>

    <div class="mt-3 flex flex-wrap items-center justify-between gap-2">
      <h1 class="text-xl font-bold">{{ t("compare.title") }}</h1>
      <button
        v-if="pinnedLenses.length"
        type="button"
        class="border-line hover:border-line2 rounded-lg border px-3 py-1.5 text-[12px] font-semibold"
        @click="downloadCsv"
      >
        ⤓ {{ t("compare.exportCsv") }}
      </button>
    </div>

    <section v-if="pinnedLenses.length" class="border-line bg-card2 mt-4 rounded-xl border p-3">
      <label for="compare-question" class="text-mut mb-1.5 block text-[12px] font-semibold">
        {{ t("compare.ask", { n: pinnedLenses.length }) }}
      </label>
      <textarea
        id="compare-question"
        v-model="question"
        rows="2"
        :placeholder="t('compare.askPlaceholder')"
        class="border-line focus:border-line2 bg-card text-txt w-full resize-y rounded-lg border px-3 py-2 text-sm outline-none"
      />
      <div class="mt-2 flex flex-wrap items-center gap-2">
        <button
          type="button"
          class="rounded-lg border border-sky-500 bg-sky-500/15 px-3 py-1.5 text-[12px] font-semibold text-sky-300 hover:bg-sky-500/25"
          @click="copyShareUrl"
        >
          🔗 {{ t("compare.copyUrl") }}
        </button>
        <span v-if="copied" class="text-[12px] font-semibold text-emerald-300">
          ✓ {{ t("compare.copied") }}
        </span>
      </div>
    </section>

    <p v-if="!pinnedLenses.length" class="text-mut mt-6 text-sm">
      {{ t("compare.empty") }}
    </p>

    <div v-else class="mt-4 overflow-x-auto">
      <table class="w-full min-w-[560px] border-collapse text-[12px]">
        <thead>
          <tr>
            <th class="border-line sticky left-0 z-10 bg-card2 border-b px-2 py-2 text-left"></th>
            <th
              v-for="lens in pinnedLenses"
              :key="lens.id"
              class="border-line border-b px-2 py-2 text-left align-top"
              style="min-width: 180px"
            >
              <RouterLink :to="lensPath(lens.id)" class="block">
                <div
                  class="border-line mx-auto aspect-square w-24 overflow-hidden rounded-lg border"
                >
                  <LensImage :lens="lens" icon-class="h-8 w-8" label-class="text-[10px]" />
                </div>
                <div class="mt-2 text-[10px] text-mut">{{ lens.maker }}</div>
                <div class="mt-0.5 font-semibold leading-snug hover:text-sky-300">
                  {{ lens.name }}
                </div>
                <div class="mt-1 inline-flex items-center gap-1 text-[10px] text-mut">
                  <span
                    class="inline-block h-2 w-2 rounded-full"
                    :style="{ background: mountColor(lens.mount) }"
                  />
                  {{ lens.mount }}
                </div>
              </RouterLink>
              <button
                type="button"
                class="text-mut hover:text-red-300 mt-1 text-[10px]"
                @click="removeColumn(lens)"
              >
                ×
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.key">
            <th
              class="border-line text-mut sticky left-0 z-10 bg-card2 border-b px-2 py-1.5 text-left align-top font-normal"
            >
              {{ t(row.labelKey) }}
            </th>
            <td
              v-for="(cell, idx) in row.values"
              :key="idx"
              class="border-line border-b px-2 py-1.5 align-top"
              :class="
                cell !== undefined && isBest(row.key, idx)
                  ? 'bg-emerald-900/25 font-semibold text-emerald-200'
                  : ''
              "
            >
              {{ cell ?? "—" }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
