export type Lens = {
  id: string;
  EANCode?: string;
  maker: string;
  name: string;
  mount: string;
  focalLength: number[];
  fStop: number[];
  format: string;
  focus: string[];
  hasStabilizer: boolean;
  hasDustMoistureResistance: boolean;
  filterDiameter?: number;
  minFocusDistance?: number;
  weight?: number;
  maxMagnification?: number;
  bladesCount?: number;
  elements?: number;
  groups?: number;
  diameter?: number;
  length?: number;
  isInternalFocus?: boolean;
  officialUrl?: string;
  images?: string[];
  urls?: Record<string, string | undefined>;
  releaseDate?: string;
  discontinued?: boolean;
  discontinuedDate?: string;
  hoodModel?: string;
  caseModel?: string;
  note?: string;
  // Extended fields — see src/data/types/index.ts on the parent package for
  // the source-of-truth definitions.
  hasMacro?: boolean;
  hasFisheye?: boolean;
  hasTiltShift?: boolean;
  hasSoftFocus?: boolean;
  angleOfView?: number[];
  imageCircle?: number;
  msrp?: number;
  predecessorId?: string;
  successorId?: string;
  compatibleBodies?: string[];
};

export type ViewMode = "bars" | "list" | "gallery" | "chart";
export type SortKey = "focal" | "fstop" | "release" | "name";
export type SortDir = "asc" | "desc";
export type StatusFilter = "all" | "current" | "discontinued";

// Numeric axes that the scatter chart lets the user pin to X/Y.
export type ChartAxis =
  | "focal"
  | "fstop"
  | "weight"
  | "length"
  | "diameter"
  | "filterDiameter"
  | "minFocusDistance"
  | "maxMagnification"
  | "elements"
  | "bladesCount"
  | "angleOfView"
  | "releaseYear"
  | "msrp";
