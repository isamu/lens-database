<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { lenses } from "../data/lenses";
import { equivMax, equivMin, mountColor, sortLenses } from "../lib/lens";
import { useCatalogState } from "../composables/useCatalogState";
import type { Lens, SortDir, SortKey, StatusFilter, ViewMode } from "../types";
import ChipGroup from "../components/ChipGroup.vue";
import SegmentedControl from "../components/SegmentedControl.vue";
import FocalBars from "../components/FocalBars.vue";
import LensList from "../components/LensList.vue";
import LensGallery from "../components/LensGallery.vue";
import ScatterChart from "../components/ScatterChart.vue";

const { t } = useI18n();
const state = useCatalogState();

const uniqueSorted = (values: string[]): string[] => [...new Set(values)].sort();

const makerOptions = computed(() =>
  uniqueSorted(lenses.map((l) => l.maker)).map((value) => ({ value, label: value })),
);
const mountOptions = computed(() =>
  uniqueSorted(lenses.map((l) => l.mount)).map((value) => ({
    value,
    label: value,
    color: mountColor(value),
  })),
);
const formatOptions = computed(() =>
  uniqueSorted(lenses.map((l) => l.format)).map((value) => ({ value, label: value })),
);

const matchesStatus = (lens: Lens): boolean => {
  if (state.status.value === "current") return !lens.discontinued;
  if (state.status.value === "discontinued") return lens.discontinued === true;
  return true;
};

const matchesList = (selected: string[], value: string): boolean =>
  selected.length === 0 || selected.includes(value);

const matchesFocal = (lens: Lens): boolean => {
  const from = state.focalFrom.value;
  const to = state.focalTo.value;
  if (from === undefined && to === undefined) return true;
  const lo = equivMin(lens, state.equiv.value);
  const hi = equivMax(lens, state.equiv.value);
  return (from === undefined || hi >= from) && (to === undefined || lo <= to);
};

const matchesFStop = (lens: Lens): boolean =>
  state.fstopMax.value === undefined ||
  (lens.fStop.length > 0 && lens.fStop[0] <= state.fstopMax.value);

const filtered = computed(() =>
  lenses.filter(
    (lens) =>
      matchesList(state.makers.value, lens.maker) &&
      matchesList(state.mounts.value, lens.mount) &&
      matchesList(state.formats.value, lens.format) &&
      matchesFocal(lens) &&
      matchesFStop(lens) &&
      matchesStatus(lens),
  ),
);

const F_STOP_CHOICES = [1, 1.4, 1.8, 2, 2.8, 4, 5.6] as const;

const numberInput = (param: typeof state.focalFrom): ReturnType<typeof computed<number | "">> =>
  computed({
    get: () => param.value ?? "",
    set: (value) => {
      param.value = typeof value === "number" && value > 0 ? value : undefined;
    },
  });

const focalFromInput = numberInput(state.focalFrom);
const focalToInput = numberInput(state.focalTo);

const fstopSelect = computed({
  get: () => state.fstopMax.value ?? 0,
  set: (value: number) => {
    state.fstopMax.value = value > 0 ? value : undefined;
  },
});

const sorted = computed(() =>
  sortLenses(filtered.value, state.sort.value, state.dir.value, state.equiv.value),
);

const coverage = computed(() => {
  if (!filtered.value.length) return "—";
  const lo = Math.min(...filtered.value.map((l) => equivMin(l, state.equiv.value)));
  const hi = Math.max(...filtered.value.map((l) => equivMax(l, state.equiv.value)));
  return `${Math.round(lo)}–${Math.round(hi)}mm`;
});

const makerCount = computed(() => new Set(filtered.value.map((l) => l.maker)).size);

const hasFilters = computed(
  () =>
    state.makers.value.length > 0 ||
    state.mounts.value.length > 0 ||
    state.formats.value.length > 0 ||
    state.focalFrom.value !== undefined ||
    state.focalTo.value !== undefined ||
    state.fstopMax.value !== undefined ||
    state.status.value !== "all",
);

const shownMounts = computed(() => uniqueSorted(filtered.value.map((l) => l.mount)));

const modeOptions = computed((): { value: ViewMode; label: string }[] => [
  { value: "bars", label: t("mode.bars") },
  { value: "list", label: t("mode.list") },
  { value: "gallery", label: t("mode.gallery") },
  { value: "chart", label: t("mode.chart") },
]);
const sortOptions = computed((): { value: SortKey; label: string }[] => [
  { value: "focal", label: t("sort.focal") },
  { value: "fstop", label: t("sort.fstop") },
  { value: "release", label: t("sort.release") },
  { value: "name", label: t("sort.name") },
]);
const dirOptions = computed((): { value: SortDir; label: string }[] => [
  { value: "asc", label: t("sort.asc") },
  { value: "desc", label: t("sort.desc") },
]);
const statusOptions = computed((): { value: StatusFilter; label: string }[] => [
  { value: "all", label: t("filter.all") },
  { value: "current", label: t("filter.current") },
  { value: "discontinued", label: t("filter.discontinued") },
]);
</script>

<template>
  <div>
    <div class="mb-4 flex flex-wrap gap-2">
      <div class="bg-card border-line rounded-xl border px-3.5 py-2">
        <div class="text-[19px] leading-none font-bold">{{ filtered.length }}</div>
        <div class="text-mut mt-1 text-[10px]">{{ t("catalog.lenses") }}</div>
      </div>
      <div class="bg-card border-line rounded-xl border px-3.5 py-2">
        <div class="text-[19px] leading-none font-bold">{{ makerCount }}</div>
        <div class="text-mut mt-1 text-[10px]">{{ t("catalog.makers") }}</div>
      </div>
      <div class="bg-card border-line rounded-xl border px-3.5 py-2">
        <div class="text-[19px] leading-none font-bold tabular-nums">{{ coverage }}</div>
        <div class="text-mut mt-1 text-[10px]">
          {{ state.equiv.value ? t("catalog.coverageEq") : t("catalog.coverage") }}
        </div>
      </div>
    </div>

    <div class="bg-card/50 border-line mb-4 flex flex-col gap-2 rounded-xl border p-3">
      <ChipGroup v-model="state.makers.value" :label="t('filter.maker')" :options="makerOptions" />
      <ChipGroup v-model="state.mounts.value" :label="t('filter.mount')" :options="mountOptions" />
      <ChipGroup
        v-model="state.formats.value"
        :label="t('filter.format')"
        :options="formatOptions"
      />
      <div class="flex flex-wrap items-center gap-1.5">
        <span class="text-mut w-20 shrink-0 text-[11px]">{{ t("filter.focal") }}</span>
        <input
          v-model.number="focalFromInput"
          type="number"
          min="1"
          inputmode="numeric"
          placeholder="min"
          class="bg-card border-line text-txt w-20 rounded-lg border px-2 py-1 text-xs"
        />
        <span class="text-mut text-xs">–</span>
        <input
          v-model.number="focalToInput"
          type="number"
          min="1"
          inputmode="numeric"
          placeholder="max"
          class="bg-card border-line text-txt w-20 rounded-lg border px-2 py-1 text-xs"
        />
        <span class="text-mut ml-3 shrink-0 text-[11px]">{{ t("filter.fstopMax") }}</span>
        <select
          v-model.number="fstopSelect"
          class="bg-card border-line text-txt cursor-pointer rounded-lg border px-2 py-1 text-xs"
        >
          <option :value="0">{{ t("filter.fstopAny") }}</option>
          <option v-for="f in F_STOP_CHOICES" :key="f" :value="f">
            {{ t("filter.fstopAtMost", { value: f }) }}
          </option>
        </select>
      </div>
      <div class="flex flex-wrap items-center gap-1.5">
        <span class="text-mut w-20 shrink-0 text-[11px]">{{ t("filter.status") }}</span>
        <button
          v-for="option in statusOptions"
          :key="option.value"
          type="button"
          class="cursor-pointer rounded-full border px-2.5 py-0.5 text-xs transition-colors"
          :class="
            state.status.value === option.value
              ? 'bg-card2 text-txt border-line2 font-semibold'
              : 'text-mut border-line hover:text-txt'
          "
          @click="state.status.value = option.value"
        >
          {{ option.label }}
        </button>
        <button
          v-if="hasFilters"
          type="button"
          class="text-mut border-line hover:text-txt ml-auto cursor-pointer rounded-lg border px-2.5 py-1 text-xs"
          @click="state.clearFilters()"
        >
          {{ t("filter.clear") }}
        </button>
      </div>
    </div>

    <div class="mb-4 flex flex-wrap items-center gap-2">
      <SegmentedControl v-model="state.mode.value" :options="modeOptions" />
      <label class="text-mut flex items-center gap-1.5 text-xs">
        {{ t("sort.label") }}
        <select
          v-model="state.sort.value"
          class="bg-card border-line text-txt cursor-pointer rounded-lg border px-2.5 py-1.5 text-[13px]"
        >
          <option v-for="option in sortOptions" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </label>
      <SegmentedControl v-model="state.dir.value" :options="dirOptions" />
      <button
        type="button"
        class="cursor-pointer rounded-lg border px-3 py-1.5 text-[13px]"
        :class="
          state.equiv.value
            ? 'bg-card2 text-txt border-line2 font-semibold'
            : 'bg-card text-mut border-line'
        "
        :title="t('equiv.title')"
        @click="state.equiv.value = !state.equiv.value"
      >
        {{ t("equiv.label") }}
      </button>
      <div
        v-if="state.mode.value === 'bars'"
        class="text-mut ml-auto flex flex-wrap gap-2.5 text-[11px]"
      >
        <span v-for="mount in shownMounts" :key="mount" class="inline-flex items-center gap-1">
          <i class="h-2.5 w-2.5 rounded-sm" :style="{ background: mountColor(mount) }"></i>
          {{ mount }}
        </span>
      </div>
    </div>

    <p v-if="!sorted.length" class="text-sm text-red-300">{{ t("catalog.noMatch") }}</p>
    <FocalBars
      v-else-if="state.mode.value === 'bars'"
      :lenses="sorted"
      :equiv="state.equiv.value"
    />
    <LensList v-else-if="state.mode.value === 'list'" :lenses="sorted" :equiv="state.equiv.value" />
    <LensGallery
      v-else-if="state.mode.value === 'gallery'"
      :lenses="sorted"
      :equiv="state.equiv.value"
    />
    <ScatterChart
      v-else
      :lenses="sorted"
      :x-key="state.chartX.value"
      :y-key="state.chartY.value"
      :log-x="state.chartLogX.value"
      :log-y="state.chartLogY.value"
      :equiv="state.equiv.value"
      @update:x-key="state.chartX.value = $event"
      @update:y-key="state.chartY.value = $event"
      @update:log-x="state.chartLogX.value = $event"
      @update:log-y="state.chartLogY.value = $event"
    />
  </div>
</template>
