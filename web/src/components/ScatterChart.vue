<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { AXES, axisByKey, shapeOf, type AxisSpec } from "../lib/axes";
import { fStopLabel, focalLabel, mountColor } from "../lib/lens";
import { useLangPath } from "../composables/useLangPath";
import type { ChartAxis, Lens } from "../types";

const props = defineProps<{
  lenses: Lens[];
  xKey: ChartAxis;
  yKey: ChartAxis;
  logX: "" | "1" | "0";
  logY: "" | "1" | "0";
  equiv: boolean;
}>();

const emit = defineEmits<{
  (e: "update:xKey", v: ChartAxis): void;
  (e: "update:yKey", v: ChartAxis): void;
  (e: "update:logX", v: "" | "1" | "0"): void;
  (e: "update:logY", v: "" | "1" | "0"): void;
}>();

const { t } = useI18n();
const router = useRouter();
const { lensPath } = useLangPath();

// Chart layout (client-side viewBox — CSS scales the SVG).
const WIDTH = 780;
const HEIGHT = 520;
const M = { top: 16, right: 24, bottom: 44, left: 60 };
const innerW = WIDTH - M.left - M.right;
const innerH = HEIGHT - M.top - M.bottom;

const xAxis = computed<AxisSpec>(() => axisByKey(props.xKey));
const yAxis = computed<AxisSpec>(() => axisByKey(props.yKey));

const effectiveLog = (state: "" | "1" | "0", axis: AxisSpec): boolean => {
  if (state === "1") return true;
  if (state === "0") return false;
  return axis.logDefault;
};

const useLogX = computed(() => effectiveLog(props.logX, xAxis.value));
const useLogY = computed(() => effectiveLog(props.logY, yAxis.value));

type PlotItem = {
  lens: Lens;
  xs: number[];
  ys: number[];
};

const items = computed<PlotItem[]>(() =>
  props.lenses
    .map((lens): PlotItem | undefined => {
      const xs = xAxis.value.extract(lens);
      const ys = yAxis.value.extract(lens);
      if (!xs || !ys || !xs.length || !ys.length) return undefined;
      // Filter out non-positive values in log mode — undefined below on scale.
      if (useLogX.value && xs.some((v) => v <= 0)) return undefined;
      if (useLogY.value && ys.some((v) => v <= 0)) return undefined;
      return { lens, xs, ys };
    })
    .filter((v): v is PlotItem => v !== undefined),
);

const bounds = computed(() => {
  let xmin = Infinity;
  let xmax = -Infinity;
  let ymin = Infinity;
  let ymax = -Infinity;
  for (const it of items.value) {
    for (const v of it.xs) {
      if (v < xmin) xmin = v;
      if (v > xmax) xmax = v;
    }
    for (const v of it.ys) {
      if (v < ymin) ymin = v;
      if (v > ymax) ymax = v;
    }
  }
  if (!Number.isFinite(xmin)) {
    xmin = 0;
    xmax = 1;
  }
  if (!Number.isFinite(ymin)) {
    ymin = 0;
    ymax = 1;
  }
  // Pad so extremes aren't glued to the axis. Use a small multiplicative pad
  // for log axes so it stays proportional.
  const padLin = (lo: number, hi: number): [number, number] => {
    const span = hi - lo || 1;
    return [lo - span * 0.03, hi + span * 0.03];
  };
  const padLog = (lo: number, hi: number): [number, number] => [lo * 0.9, hi * 1.1];
  const [xLo, xHi] = useLogX.value ? padLog(xmin, xmax) : padLin(xmin, xmax);
  const [yLo, yHi] = useLogY.value ? padLog(ymin, ymax) : padLin(ymin, ymax);
  return { xLo, xHi, yLo, yHi };
});

const scaleX = (value: number): number => {
  const { xLo, xHi } = bounds.value;
  if (useLogX.value) {
    const l = Math.log10(value);
    const lo = Math.log10(xLo);
    const hi = Math.log10(xHi);
    return M.left + ((l - lo) / (hi - lo)) * innerW;
  }
  return M.left + ((value - xLo) / (xHi - xLo)) * innerW;
};

const scaleY = (value: number): number => {
  const { yLo, yHi } = bounds.value;
  if (useLogY.value) {
    const l = Math.log10(value);
    const lo = Math.log10(yLo);
    const hi = Math.log10(yHi);
    return M.top + innerH - ((l - lo) / (hi - lo)) * innerH;
  }
  return M.top + innerH - ((value - yLo) / (yHi - yLo)) * innerH;
};

type RenderShape =
  | { kind: "point"; lens: Lens; color: string; cx: number; cy: number }
  | { kind: "segment"; lens: Lens; color: string; x1: number; y1: number; x2: number; y2: number };

const shapes = computed<RenderShape[]>(() => {
  return items.value
    .map((it): RenderShape | undefined => {
      const shape = shapeOf(it.xs, it.ys);
      if (!shape) return undefined;
      const color = mountColor(it.lens.mount);
      if (shape.kind === "point") {
        return {
          kind: "point",
          lens: it.lens,
          color,
          cx: scaleX(shape.at.x),
          cy: scaleY(shape.at.y),
        };
      }
      return {
        kind: "segment",
        lens: it.lens,
        color,
        x1: scaleX(shape.a.x),
        y1: scaleY(shape.a.y),
        x2: scaleX(shape.b.x),
        y2: scaleY(shape.b.y),
      };
    })
    .filter((v): v is RenderShape => v !== undefined);
});

// Build "nice" tick marks. Simple approach: 5 ticks between bounds.
const linearTicks = (lo: number, hi: number, count = 5): number[] => {
  const span = hi - lo;
  const raw = span / (count - 1);
  const magnitude = Math.pow(10, Math.floor(Math.log10(raw || 1)));
  const stepChoices = [1, 2, 2.5, 5, 10].map((k) => k * magnitude);
  const step = stepChoices.find((s) => span / s <= count + 1) ?? stepChoices[stepChoices.length - 1];
  const start = Math.ceil(lo / step) * step;
  const ticks: number[] = [];
  for (let v = start; v <= hi + 1e-9; v += step) ticks.push(Math.round(v * 1e6) / 1e6);
  return ticks;
};

const logTicks = (lo: number, hi: number): number[] => {
  if (lo <= 0) return [];
  const loLog = Math.floor(Math.log10(lo));
  const hiLog = Math.ceil(Math.log10(hi));
  const ticks: number[] = [];
  for (let e = loLog; e <= hiLog; e++) {
    for (const m of [1, 2, 5]) {
      const v = m * Math.pow(10, e);
      if (v >= lo && v <= hi) ticks.push(v);
    }
  }
  return ticks;
};

const formatTick = (value: number): string => {
  if (value >= 10000) return `${Math.round(value / 1000)}k`;
  if (value >= 1000) return `${(value / 1000).toFixed(1)}k`;
  if (value >= 100) return String(Math.round(value));
  if (value >= 10) return value.toFixed(0);
  if (value >= 1) return value.toFixed(1);
  return value.toFixed(2);
};

const xTicks = computed(() => {
  const { xLo, xHi } = bounds.value;
  return useLogX.value ? logTicks(xLo, xHi) : linearTicks(xLo, xHi);
});
const yTicks = computed(() => {
  const { yLo, yHi } = bounds.value;
  return useLogY.value ? logTicks(yLo, yHi) : linearTicks(yLo, yHi);
});

const hovered = ref<{ lens: Lens; x: number; y: number } | null>(null);

const showTooltip = (event: MouseEvent, lens: Lens) => {
  const svg = (event.currentTarget as SVGElement).closest("svg");
  if (!svg) return;
  const rect = svg.getBoundingClientRect();
  const pt = svg.createSVGPoint();
  pt.x = event.clientX;
  pt.y = event.clientY;
  const ctm = svg.getScreenCTM();
  if (!ctm) return;
  const local = pt.matrixTransform(ctm.inverse());
  hovered.value = {
    lens,
    x: local.x,
    y: local.y - 8,
  };
  void rect;
};

const hideTooltip = () => {
  hovered.value = null;
};

const openLens = (lens: Lens) => {
  router.push(lensPath(lens.id));
};

const legendMounts = computed(() => {
  const seen = new Set<string>();
  for (const it of items.value) seen.add(it.lens.mount);
  return [...seen].sort();
});

const toggleLog = (which: "x" | "y") => {
  const current = which === "x" ? props.logX : props.logY;
  const axis = which === "x" ? xAxis.value : yAxis.value;
  // Cycle default → override-to-opposite → default
  const next: "" | "1" | "0" =
    current === "" ? (axis.logDefault ? "0" : "1") : "";
  if (which === "x") emit("update:logX", next);
  else emit("update:logY", next);
};
</script>

<template>
  <div class="space-y-3">
    <div class="flex flex-wrap items-center gap-3 text-xs">
      <label class="flex items-center gap-1.5">
        <span class="text-mut">{{ t("chart.xAxis") }}</span>
        <select
          class="bg-card border-line rounded border px-2 py-1"
          :value="xKey"
          @change="emit('update:xKey', ($event.target as HTMLSelectElement).value as ChartAxis)"
        >
          <option v-for="axis in AXES" :key="axis.key" :value="axis.key">
            {{ t(axis.labelKey) }}
          </option>
        </select>
        <button
          class="text-mut border-line hover:text-txt rounded border px-1.5 py-0.5"
          :class="useLogX ? 'bg-card2 text-txt' : ''"
          type="button"
          @click="toggleLog('x')"
        >
          log
        </button>
      </label>
      <label class="flex items-center gap-1.5">
        <span class="text-mut">{{ t("chart.yAxis") }}</span>
        <select
          class="bg-card border-line rounded border px-2 py-1"
          :value="yKey"
          @change="emit('update:yKey', ($event.target as HTMLSelectElement).value as ChartAxis)"
        >
          <option v-for="axis in AXES" :key="axis.key" :value="axis.key">
            {{ t(axis.labelKey) }}
          </option>
        </select>
        <button
          class="text-mut border-line hover:text-txt rounded border px-1.5 py-0.5"
          :class="useLogY ? 'bg-card2 text-txt' : ''"
          type="button"
          @click="toggleLog('y')"
        >
          log
        </button>
      </label>
      <span class="text-mut ml-auto">
        {{ t("chart.plotted", { count: items.length }) }}
      </span>
    </div>

    <div class="bg-card border-line rounded-xl border p-2">
      <svg
        :viewBox="`0 0 ${WIDTH} ${HEIGHT}`"
        preserveAspectRatio="xMidYMid meet"
        class="h-auto w-full select-none"
      >
        <!-- Axes background & gridlines -->
        <rect
          :x="M.left"
          :y="M.top"
          :width="innerW"
          :height="innerH"
          fill="none"
          class="stroke-line"
        />
        <g class="stroke-line/30 text-mut" font-size="10">
          <g v-for="v in xTicks" :key="`gx-${v}`">
            <line :x1="scaleX(v)" :x2="scaleX(v)" :y1="M.top" :y2="M.top + innerH" />
            <text :x="scaleX(v)" :y="M.top + innerH + 14" text-anchor="middle" fill="currentColor">
              {{ formatTick(v) }}
            </text>
          </g>
          <g v-for="v in yTicks" :key="`gy-${v}`">
            <line :x1="M.left" :x2="M.left + innerW" :y1="scaleY(v)" :y2="scaleY(v)" />
            <text
              :x="M.left - 6"
              :y="scaleY(v) + 3"
              text-anchor="end"
              fill="currentColor"
            >
              {{ formatTick(v) }}
            </text>
          </g>
        </g>
        <!-- Axis titles -->
        <text
          :x="M.left + innerW / 2"
          :y="HEIGHT - 8"
          text-anchor="middle"
          class="text-txt"
          font-size="12"
          fill="currentColor"
        >
          {{ t(xAxis.labelKey) }}{{ xAxis.unit ? ` (${xAxis.unit})` : "" }}
        </text>
        <text
          :x="14"
          :y="M.top + innerH / 2"
          text-anchor="middle"
          class="text-txt"
          font-size="12"
          fill="currentColor"
          :transform="`rotate(-90 14 ${M.top + innerH / 2})`"
        >
          {{ t(yAxis.labelKey) }}{{ yAxis.unit ? ` (${yAxis.unit})` : "" }}
        </text>

        <!-- Data: segments first so points sit on top -->
        <g v-for="(s, i) in shapes" :key="`s-${i}`">
          <line
            v-if="s.kind === 'segment'"
            :x1="s.x1"
            :y1="s.y1"
            :x2="s.x2"
            :y2="s.y2"
            :stroke="s.color"
            stroke-width="2"
            stroke-opacity="0.55"
            stroke-linecap="round"
            class="cursor-pointer transition-opacity hover:opacity-100"
            @mouseenter="showTooltip($event, s.lens)"
            @mouseleave="hideTooltip"
            @click="openLens(s.lens)"
          />
        </g>
        <g v-for="(s, i) in shapes" :key="`p-${i}`">
          <circle
            v-if="s.kind === 'point'"
            :cx="s.cx"
            :cy="s.cy"
            r="4"
            :fill="s.color"
            fill-opacity="0.7"
            :stroke="s.color"
            stroke-width="1"
            class="cursor-pointer transition-transform hover:scale-125"
            @mouseenter="showTooltip($event, s.lens)"
            @mouseleave="hideTooltip"
            @click="openLens(s.lens)"
          />
        </g>

        <!-- Tooltip -->
        <g v-if="hovered" :transform="`translate(${hovered.x}, ${hovered.y})`" pointer-events="none">
          <rect
            x="-140"
            y="-58"
            width="280"
            height="52"
            rx="6"
            class="fill-card2 stroke-line"
            fill-opacity="0.95"
          />
          <text x="0" y="-38" text-anchor="middle" class="text-txt" font-size="11" fill="currentColor">
            {{ hovered.lens.maker }} — {{ hovered.lens.name }}
          </text>
          <text x="0" y="-22" text-anchor="middle" class="text-mut" font-size="10" fill="currentColor">
            {{ focalLabel(hovered.lens, equiv) }} · {{ fStopLabel(hovered.lens) }} ·
            {{ hovered.lens.mount }}
          </text>
          <text x="0" y="-8" text-anchor="middle" class="text-mut" font-size="10" fill="currentColor">
            {{ t("chart.clickToOpen") }}
          </text>
        </g>
      </svg>
    </div>

    <div class="flex flex-wrap items-center gap-2 text-[11px]">
      <span class="text-mut">{{ t("chart.legend") }}:</span>
      <span
        v-for="m in legendMounts"
        :key="m"
        class="border-line inline-flex items-center gap-1 rounded border px-1.5 py-0.5"
      >
        <span class="inline-block h-2 w-2 rounded-full" :style="`background:${mountColor(m)}`" />
        {{ m }}
      </span>
    </div>
  </div>
</template>
