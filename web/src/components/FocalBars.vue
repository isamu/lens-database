<script setup lang="ts">
import { computed } from "vue";
import type { Lens } from "../types";
import { equivMax, equivMin, fStopLabel, focalLabel, isZoom, mountColor } from "../lib/lens";
import { useLangPath } from "../composables/useLangPath";
import MountChip from "./MountChip.vue";

const props = defineProps<{ lenses: Lens[]; equiv: boolean }>();
const { lensPath } = useLangPath();

const TICK_CANDIDATES = [
  4, 6, 8, 10, 14, 20, 28, 35, 50, 70, 100, 135, 200, 300, 400, 600, 800, 1200,
];

const scale = computed(() => {
  const mins = props.lenses.map((lens) => equivMin(lens, props.equiv));
  const maxs = props.lenses.map((lens) => equivMax(lens, props.equiv));
  const lo = Math.min(...mins, 8) * 0.92;
  const hi = Math.max(...maxs, 50) * 1.05;
  return { lo: Math.log(lo), hi: Math.log(hi) };
});

const pos = (mm: number): number =>
  ((Math.log(mm) - scale.value.lo) / (scale.value.hi - scale.value.lo)) * 100;

const ticks = computed(() =>
  TICK_CANDIDATES.filter(
    (tick) => tick >= Math.exp(scale.value.lo) && tick <= Math.exp(scale.value.hi),
  ),
);

const barStyle = (lens: Lens) => ({
  left: `${pos(equivMin(lens, props.equiv)).toFixed(2)}%`,
  width: `${(pos(equivMax(lens, props.equiv)) - pos(equivMin(lens, props.equiv))).toFixed(2)}%`,
  background: mountColor(lens.mount),
});

const dotStyle = (lens: Lens) => ({
  left: `${pos(equivMin(lens, props.equiv)).toFixed(2)}%`,
  background: mountColor(lens.mount),
});

const labelStyle = (lens: Lens) => ({
  left: `calc(${pos(equivMax(lens, props.equiv)).toFixed(2)}% + ${isZoom(lens) ? 8 : 12}px)`,
});
</script>

<template>
  <div>
    <div class="border-line relative ml-[140px] h-[22px] border-b md:ml-[232px]" aria-hidden="true">
      <div
        v-for="tick in ticks"
        :key="tick"
        class="text-mut absolute top-0 -translate-x-1/2 text-[10px] tabular-nums"
        :style="{ left: `${pos(tick).toFixed(2)}%` }"
      >
        {{ tick }}
        <span class="bg-line absolute top-[15px] left-1/2 h-[7px] w-px"></span>
      </div>
    </div>
    <div class="relative">
      <div class="pointer-events-none absolute inset-y-0 right-0 left-[140px] md:left-[232px]">
        <div
          v-for="tick in ticks"
          :key="tick"
          class="absolute top-0 bottom-0 w-px bg-white/[0.035]"
          :style="{ left: `${pos(tick).toFixed(2)}%` }"
        ></div>
      </div>
      <RouterLink
        v-for="lens in lenses"
        :key="lens.id"
        :to="lensPath(lens.id)"
        class="grid grid-cols-[140px_1fr] items-center rounded-md py-[3px] hover:bg-white/5 md:grid-cols-[232px_1fr]"
        :class="{ 'opacity-50': lens.discontinued }"
      >
        <div class="min-w-0 pr-3">
          <div class="truncate text-[12.5px] font-semibold">{{ lens.name }}</div>
          <div class="text-mut mt-px truncate text-[10.5px]">
            <MountChip :mount="lens.mount" />
            {{ [lens.maker, fStopLabel(lens)].filter(Boolean).join(" · ") }}
          </div>
        </div>
        <div class="relative h-[26px] overflow-hidden">
          <template v-if="isZoom(lens)">
            <div
              class="absolute top-1/2 h-[9px] -translate-y-1/2 rounded-full"
              :class="{ 'bar-discontinued': lens.discontinued }"
              :style="barStyle(lens)"
            ></div>
          </template>
          <template v-else>
            <div
              class="border-bg absolute top-1/2 h-[13px] w-[13px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[2.5px]"
              :style="dotStyle(lens)"
            ></div>
          </template>
          <div
            class="text-mut absolute top-1/2 -translate-y-1/2 text-[10.5px] whitespace-nowrap tabular-nums"
            :style="labelStyle(lens)"
          >
            {{ focalLabel(lens, equiv) }}
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.bar-discontinued {
  background-image: repeating-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.25) 0 4px,
    transparent 4px 8px
  );
}
</style>
