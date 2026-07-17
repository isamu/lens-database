import { focalMax, focalMin, isZoom } from "./lens";
import type { Lens } from "../types";

// Direction used to decide which value is "best" in a compare row.
// "smaller" — smaller is better (weight, filter thread, F-number).
// "larger" — larger is better (magnification, aperture blades, focal reach).
// "none" — don't highlight (name, mount, format — categorical).
export type BestDirection = "smaller" | "larger" | "none";

export type CompareRow = {
  key: string; // stable row id (also used for CSV column)
  labelKey: string; // i18n key
  direction: BestDirection;
  values: (string | undefined)[]; // display strings, one per lens
  raws: (number | undefined)[]; // raw numeric values for "best" comparison
};

const fmt = {
  focal: (l: Lens): [string, number] => {
    const lo = focalMin(l);
    const hi = focalMax(l);
    return [isZoom(l) ? `${lo}–${hi} mm` : `${lo} mm`, hi];
  },
  fstop: (l: Lens): [string, number] | undefined => {
    if (!l.fStop.length) return undefined;
    const wide = l.fStop[0];
    const tele = l.fStop[l.fStop.length - 1];
    return [wide === tele ? `F${wide}` : `F${wide}–${tele}`, wide];
  },
  angleOfView: (l: Lens): [string, number] | undefined => {
    if (!l.angleOfView?.length) return undefined;
    const [a, b] = l.angleOfView;
    const wide = a;
    const disp = b !== undefined && b !== a ? `${a}° – ${b}°` : `${a}°`;
    return [disp, wide];
  },
  mm: (v: number | undefined, suffix = "mm"): [string, number] | undefined =>
    v === undefined ? undefined : [`${v} ${suffix}`, v],
  metres: (v: number | undefined): [string, number] | undefined =>
    v === undefined ? undefined : [`${v} m`, v],
  grams: (v: number | undefined): [string, number] | undefined =>
    v === undefined ? undefined : [`${v} g`, v],
  x: (v: number | undefined): [string, number] | undefined =>
    v === undefined ? undefined : [`${v}×`, v],
  yen: (v: number | undefined): [string, number] | undefined =>
    v === undefined
      ? undefined
      : [`¥${v.toLocaleString("en-US")}`, v],
  count: (v: number | undefined): [string, number] | undefined =>
    v === undefined ? undefined : [`${v}`, v],
  year: (l: Lens): [string, number] | undefined => {
    if (!l.releaseDate) return undefined;
    const y = Number(l.releaseDate.slice(0, 4));
    return Number.isFinite(y) ? [l.releaseDate, y] : undefined;
  },
  bool: (v: boolean | undefined): [string, number] | undefined =>
    v === undefined ? undefined : [v ? "◯" : "—", v ? 1 : 0],
};

type RowSpec = {
  key: string;
  labelKey: string;
  direction: BestDirection;
  cell: (l: Lens) => [string, number] | undefined;
};

const ROW_SPECS: RowSpec[] = [
  { key: "maker", labelKey: "compare.row.maker", direction: "none", cell: (l) => [l.maker, 0] },
  { key: "mount", labelKey: "compare.row.mount", direction: "none", cell: (l) => [l.mount, 0] },
  { key: "format", labelKey: "compare.row.format", direction: "none", cell: (l) => [l.format, 0] },
  { key: "focal", labelKey: "compare.row.focal", direction: "larger", cell: fmt.focal },
  { key: "fstop", labelKey: "compare.row.fstop", direction: "smaller", cell: (l) => fmt.fstop(l) },
  { key: "angleOfView", labelKey: "compare.row.angleOfView", direction: "larger", cell: fmt.angleOfView },
  { key: "weight", labelKey: "compare.row.weight", direction: "smaller", cell: (l) => fmt.grams(l.weight) },
  { key: "length", labelKey: "compare.row.length", direction: "smaller", cell: (l) => fmt.mm(l.length) },
  { key: "diameter", labelKey: "compare.row.diameter", direction: "smaller", cell: (l) => fmt.mm(l.diameter) },
  { key: "filterDiameter", labelKey: "compare.row.filterDiameter", direction: "smaller", cell: (l) => fmt.mm(l.filterDiameter) },
  { key: "minFocusDistance", labelKey: "compare.row.minFocusDistance", direction: "smaller", cell: (l) => fmt.metres(l.minFocusDistance) },
  { key: "maxMagnification", labelKey: "compare.row.maxMagnification", direction: "larger", cell: (l) => fmt.x(l.maxMagnification) },
  { key: "elements", labelKey: "compare.row.elements", direction: "none", cell: (l) => fmt.count(l.elements) },
  { key: "bladesCount", labelKey: "compare.row.bladesCount", direction: "larger", cell: (l) => fmt.count(l.bladesCount) },
  { key: "focus", labelKey: "compare.row.focus", direction: "none", cell: (l) => [l.focus.join(" / "), 0] },
  { key: "hasStabilizer", labelKey: "compare.row.stabilizer", direction: "larger", cell: (l) => fmt.bool(l.hasStabilizer) },
  { key: "hasDustMoistureResistance", labelKey: "compare.row.weatherResistance", direction: "larger", cell: (l) => fmt.bool(l.hasDustMoistureResistance) },
  { key: "hasMacro", labelKey: "compare.row.macro", direction: "none", cell: (l) => fmt.bool(l.hasMacro) },
  { key: "hasFisheye", labelKey: "compare.row.fisheye", direction: "none", cell: (l) => fmt.bool(l.hasFisheye) },
  { key: "hasTiltShift", labelKey: "compare.row.tiltShift", direction: "none", cell: (l) => fmt.bool(l.hasTiltShift) },
  { key: "releaseYear", labelKey: "compare.row.releaseDate", direction: "larger", cell: fmt.year },
  { key: "msrp", labelKey: "compare.row.msrp", direction: "smaller", cell: (l) => fmt.yen(l.msrp) },
];

export const buildCompareRows = (lenses: Lens[]): CompareRow[] =>
  ROW_SPECS.map((spec) => {
    const cells = lenses.map((l) => spec.cell(l));
    return {
      key: spec.key,
      labelKey: spec.labelKey,
      direction: spec.direction,
      values: cells.map((c) => c?.[0]),
      raws: cells.map((c) => c?.[1]),
    };
  }).filter((row) => row.values.some((v) => v !== undefined));

// Return the indices of "best" cells on a row. Ties all win (all get
// highlighted). Categorical rows return no highlights.
export const bestIndices = (row: CompareRow): number[] => {
  if (row.direction === "none") return [];
  const nums = row.raws
    .map((v, i) => (v === undefined ? undefined : { v, i }))
    .filter((x): x is { v: number; i: number } => x !== undefined);
  if (nums.length < 2) return [];
  const best = nums.reduce(
    (acc, cur) =>
      row.direction === "smaller"
        ? cur.v < acc
          ? cur.v
          : acc
        : cur.v > acc
        ? cur.v
        : acc,
    row.direction === "smaller" ? Infinity : -Infinity,
  );
  return nums.filter((x) => x.v === best).map((x) => x.i);
};

// Emit CSV: first column is the row label, following columns are lens names.
export const toCsv = (
  lenses: Lens[],
  rows: CompareRow[],
  labels: (key: string) => string,
): string => {
  const escape = (value: string): string =>
    /[",\n]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;
  const header = ["", ...lenses.map((l) => `${l.maker} — ${l.name}`)]
    .map(escape)
    .join(",");
  const body = rows.map((row) =>
    [labels(row.labelKey), ...row.values.map((v) => v ?? "")].map(escape).join(","),
  );
  return [header, ...body].join("\n");
};
