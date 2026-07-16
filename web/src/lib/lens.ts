import type { Lens, SortDir, SortKey } from "../types";

export const focalMin = (lens: Lens): number => lens.focalLength[0];
export const focalMax = (lens: Lens): number => lens.focalLength[lens.focalLength.length - 1];
export const isZoom = (lens: Lens): boolean => focalMax(lens) > focalMin(lens);

const CANON_APSC_CROP = 1.6;
const DEFAULT_APSC_CROP = 1.5;
const FOUR_THIRDS_CROP = 2.0;
const LARGE_FORMAT_CROP = 0.79;

export const cropFactor = (lens: Lens): number => {
  if (lens.format === "APS-C") return lens.maker === "Canon" ? CANON_APSC_CROP : DEFAULT_APSC_CROP;
  if (lens.format === "FourThirds") return FOUR_THIRDS_CROP;
  if (lens.format === "Large") return LARGE_FORMAT_CROP;
  return 1.0;
};

export const equivMin = (lens: Lens, equiv: boolean): number =>
  focalMin(lens) * (equiv ? cropFactor(lens) : 1);
export const equivMax = (lens: Lens, equiv: boolean): number =>
  focalMax(lens) * (equiv ? cropFactor(lens) : 1);

export const focalLabel = (lens: Lens, equiv: boolean): string => {
  const approx = equiv && cropFactor(lens) !== 1 ? "≈" : "";
  const lo = Math.round(equivMin(lens, equiv));
  const hi = Math.round(equivMax(lens, equiv));
  return approx + (isZoom(lens) ? `${lo}-${hi}` : `${lo}`) + "mm";
};

export const fStopLabel = (lens: Lens): string => {
  const wide = lens.fStop[0];
  const tele = lens.fStop[lens.fStop.length - 1];
  if (wide === undefined) return "";
  return `F${wide}` + (tele !== wide ? `-${tele}` : "");
};

export const releaseYear = (lens: Lens): string => lens.releaseDate?.slice(0, 4) ?? "";

const MOUNT_COLORS: Record<string, string> = {
  RF: "#ef4444",
  "RF-S": "#f87171",
  EF: "#f59e0b",
  "EF-S": "#fbbf24",
  "EF-M": "#d97706",
  FD: "#b45309",
  X: "#22c55e",
  G: "#4ade80",
  M: "#38bdf8",
  L: "#0ea5e9",
  Z: "#facc15",
  F: "#eab308",
  E: "#6366f1",
  A: "#818cf8",
};

const OTHER_MOUNT_COLOR = "#a78bfa";

export const mountColor = (mount: string): string => MOUNT_COLORS[mount] ?? OTHER_MOUNT_COLOR;

const dirSegment = (value: string): string => value.toLowerCase().replace(/\s+/g, "-");

// src/data/sigma has no ef-s/ directory; SIGMA EF-S lenses live in sigma/ef/.
const DATA_DIR_OVERRIDES: Record<string, string> = {
  "SIGMA/EF-S": "sigma/ef",
};

export const dataDir = (lens: Lens): string =>
  DATA_DIR_OVERRIDES[`${lens.maker}/${lens.mount}`] ??
  `${dirSegment(lens.maker)}/${dirSegment(lens.mount)}`;

const IMAGES_BASE = "https://raw.githubusercontent.com/isamu/lens-database-images/main/images";
const DATA_REPO_BASE = "https://github.com/isamu/lens-database/tree/master/src/data";

export const IMAGES_REPO_URL = "https://github.com/isamu/lens-database-images";
export const DATA_REPO_URL = "https://github.com/isamu/lens-database";

export const imageUrl = (lens: Lens): string => `${IMAGES_BASE}/${dataDir(lens)}/${lens.id}.jpg`;
export const editDataUrl = (lens: Lens): string => `${DATA_REPO_BASE}/${dataDir(lens)}`;

const UNKNOWN_RELEASE_SENTINEL = "9999";
const UNKNOWN_FSTOP_SENTINEL = 99;

const comparators: Record<SortKey, (equiv: boolean) => (a: Lens, b: Lens) => number> = {
  focal: (equiv) => (a, b) =>
    equivMin(a, equiv) - equivMin(b, equiv) || equivMax(a, equiv) - equivMax(b, equiv),
  fstop: () => (a, b) =>
    (a.fStop[0] ?? UNKNOWN_FSTOP_SENTINEL) - (b.fStop[0] ?? UNKNOWN_FSTOP_SENTINEL),
  release: () => (a, b) =>
    (a.releaseDate ?? UNKNOWN_RELEASE_SENTINEL).localeCompare(
      b.releaseDate ?? UNKNOWN_RELEASE_SENTINEL,
    ),
  name: () => (a, b) => a.name.localeCompare(b.name),
};

export const sortLenses = (items: Lens[], sort: SortKey, dir: SortDir, equiv: boolean): Lens[] => {
  const sign = dir === "desc" ? -1 : 1;
  const compare = comparators[sort](equiv);
  return [...items].sort((a, b) => sign * compare(a, b));
};
