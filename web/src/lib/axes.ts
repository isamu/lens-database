import type { ChartAxis, Lens } from "../types";

// Extract the numeric value(s) a lens contributes on a given axis.
// - Returns `[value]` for scalar axes (weight, filter thread, elements, …).
// - Returns `[wide, tele]` for focal / fstop / angleOfView on zooms; the
//   ScatterChart pairs these positionally so a zoom renders as a line segment
//   from (focalWide, fstopWide, aovWide) to (focalTele, fstopTele, aovTele).
// - Returns `undefined` when the value is missing — the point is then hidden
//   on that axis' plot.
export type AxisSpec = {
  key: ChartAxis;
  labelKey: string; // i18n key
  short: string; // short label used inside the chart itself
  unit?: string;
  logDefault: boolean;
  extract: (lens: Lens) => number[] | undefined;
};

const scalar = (value: number | undefined): number[] | undefined =>
  value === undefined || !Number.isFinite(value) ? undefined : [value];

const releaseYear = (lens: Lens): number | undefined => {
  const year = Number(lens.releaseDate?.slice(0, 4));
  return Number.isFinite(year) ? year : undefined;
};

export const AXES: readonly AxisSpec[] = [
  {
    key: "focal",
    labelKey: "chart.axis.focal",
    short: "mm",
    unit: "mm",
    logDefault: true,
    extract: (l) => l.focalLength.slice(0, 2),
  },
  {
    key: "fstop",
    labelKey: "chart.axis.fstop",
    short: "F",
    logDefault: true,
    extract: (l) => l.fStop.slice(0, 2),
  },
  {
    key: "angleOfView",
    labelKey: "chart.axis.angleOfView",
    short: "°",
    unit: "°",
    logDefault: false,
    extract: (l) => l.angleOfView?.slice(0, 2),
  },
  {
    key: "weight",
    labelKey: "chart.axis.weight",
    short: "g",
    unit: "g",
    logDefault: true,
    extract: (l) => scalar(l.weight),
  },
  {
    key: "length",
    labelKey: "chart.axis.length",
    short: "L",
    unit: "mm",
    logDefault: false,
    extract: (l) => scalar(l.length),
  },
  {
    key: "diameter",
    labelKey: "chart.axis.diameter",
    short: "⌀",
    unit: "mm",
    logDefault: false,
    extract: (l) => scalar(l.diameter),
  },
  {
    key: "filterDiameter",
    labelKey: "chart.axis.filterDiameter",
    short: "ø",
    unit: "mm",
    logDefault: false,
    extract: (l) => scalar(l.filterDiameter),
  },
  {
    key: "minFocusDistance",
    labelKey: "chart.axis.minFocusDistance",
    short: "MFD",
    unit: "m",
    logDefault: true,
    extract: (l) => scalar(l.minFocusDistance),
  },
  {
    key: "maxMagnification",
    labelKey: "chart.axis.maxMagnification",
    short: "×",
    logDefault: true,
    extract: (l) => scalar(l.maxMagnification),
  },
  {
    key: "elements",
    labelKey: "chart.axis.elements",
    short: "el",
    logDefault: false,
    extract: (l) => scalar(l.elements),
  },
  {
    key: "bladesCount",
    labelKey: "chart.axis.bladesCount",
    short: "◇",
    logDefault: false,
    extract: (l) => scalar(l.bladesCount),
  },
  {
    key: "releaseYear",
    labelKey: "chart.axis.releaseYear",
    short: "yr",
    logDefault: false,
    extract: (l) => scalar(releaseYear(l)),
  },
  {
    key: "msrp",
    labelKey: "chart.axis.msrp",
    short: "¥",
    unit: "¥",
    logDefault: true,
    extract: (l) => scalar(l.msrp),
  },
] as const;

export const axisByKey = (key: ChartAxis): AxisSpec =>
  AXES.find((a) => a.key === key) ?? AXES[0];

// Pair two extracted arrays into a "shape" the chart can render:
// - point: single {x, y}
// - segment: two {x, y} endpoints (zoom shown as a line)
// When only one axis is a range and the other is scalar, the segment lies
// parallel to that axis at the scalar's value.
export type ShapePoint = { x: number; y: number };
export type Shape = { kind: "point"; at: ShapePoint } | { kind: "segment"; a: ShapePoint; b: ShapePoint };

export const shapeOf = (xs: number[], ys: number[]): Shape | undefined => {
  if (!xs.length || !ys.length) return undefined;
  const xRange = xs.length > 1 && xs[0] !== xs[1];
  const yRange = ys.length > 1 && ys[0] !== ys[1];
  if (!xRange && !yRange) return { kind: "point", at: { x: xs[0], y: ys[0] } };
  return {
    kind: "segment",
    a: { x: xs[0], y: ys[0] },
    b: { x: xRange ? xs[1] : xs[0], y: yRange ? ys[1] : ys[0] },
  };
};
