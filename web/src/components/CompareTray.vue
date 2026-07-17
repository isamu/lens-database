<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { findLens } from "../data/lenses";
import { useCompareShortlist, MAX_COMPARE } from "../composables/useCompareShortlist";
import { useLangPath } from "../composables/useLangPath";

// Fixed bottom tray showing the current compare shortlist. Hidden when the
// shortlist is empty. "Open" navigates to /compare?ids=...
const { t } = useI18n();
const { comparePath } = useLangPath();
const shortlist = useCompareShortlist();

const pinnedLenses = computed(() =>
  shortlist.ids.value.map((id) => findLens(id)).filter((v): v is NonNullable<typeof v> => !!v),
);

const compareLink = computed(() => comparePath(pinnedLenses.value.map((l) => l.id)));
</script>

<template>
  <transition
    enter-active-class="transition-transform duration-150"
    leave-active-class="transition-transform duration-150"
    enter-from-class="translate-y-full"
    leave-to-class="translate-y-full"
  >
    <div
      v-if="pinnedLenses.length"
      class="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-card2/95 px-4 py-2 shadow-lg backdrop-blur"
    >
      <div class="mx-auto flex max-w-5xl flex-wrap items-center gap-2 text-xs">
        <span class="text-mut">
          {{ t("compare.trayLabel", { n: pinnedLenses.length, max: MAX_COMPARE }) }}
        </span>
        <ul class="flex flex-wrap gap-1.5">
          <li
            v-for="lens in pinnedLenses"
            :key="lens.id"
            class="border-line bg-card inline-flex items-center gap-1.5 rounded-full border py-0.5 pr-1 pl-2"
          >
            <span class="max-w-[10rem] truncate">
              {{ lens.maker }} · {{ lens.name }}
            </span>
            <button
              type="button"
              class="text-mut hover:text-red-300"
              :title="t('compare.remove')"
              @click="shortlist.remove(lens.id)"
            >
              ×
            </button>
          </li>
        </ul>
        <span class="ml-auto flex items-center gap-2">
          <RouterLink
            :to="compareLink"
            class="rounded-lg border border-sky-500 bg-sky-500/15 px-2.5 py-1 font-semibold text-sky-300 hover:bg-sky-500/25"
          >
            {{ t("compare.open") }}
          </RouterLink>
          <button
            type="button"
            class="text-mut hover:text-txt border-line rounded-lg border px-2 py-1"
            @click="shortlist.clear()"
          >
            {{ t("compare.clear") }}
          </button>
        </span>
      </div>
    </div>
  </transition>
</template>
