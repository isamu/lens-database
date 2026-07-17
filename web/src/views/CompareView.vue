<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { findLens } from "../data/lenses";
import { bestIndices, buildCompareRows, toCsv } from "../lib/compare";
import { mountColor } from "../lib/lens";
import { useCompareShortlist, MAX_COMPARE } from "../composables/useCompareShortlist";
import { useLangPath } from "../composables/useLangPath";
import LensImage from "../components/LensImage.vue";
import type { Lens } from "../types";

const route = useRoute();
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
  // Rewrite the URL to drop the removed id, keeping share-links accurate.
  const q = route.query.ids;
  if (typeof q === "string") {
    const next = idsParam.value.filter((id) => id !== lens.id);
    const query = { ...route.query, ids: next.length ? next.join(",") : undefined };
    if (!next.length) delete query.ids;
    // Use pushState directly to avoid full router recompute (safer here than
    // dispatching a new route since we're already on it).
    const search = new URLSearchParams(
      Object.entries(query).filter((entry): entry is [string, string] => typeof entry[1] === "string"),
    );
    const url = `${route.path}${search.toString() ? "?" + search.toString() : ""}`;
    window.history.replaceState(null, "", url);
  }
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
