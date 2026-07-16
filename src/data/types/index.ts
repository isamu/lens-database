export type Maker =
  | "Canon"
  | "Fujifilm"
  | "SONY"
  | "Nikon"
  | "Leica"
  | "ZEISS"
  | "SIGMA"
  | "TAMRON"
  | "Panasonic"
  | "OLYMPUS"
  | "OM SYSTEM"
  | "PENTAX"
  | "Tokina"
  | "COSINA"
  | "Voigtländer"
  | "TTArtisan"
  | "7Artisans"
  | "SG-image"
  | "Thypoch";

export type CanonMount = "RF" | "RF-S" | "EF" | "EF-S" | "EF-M" | "FD";
export type FujifilmMount = "X" | "G" | "R";
export type SonyMount = "A" | "E";
export type NikonMount = "Z" | "F";
export type OlympusMount = "FourThirds" | "MicroFourThirds";
export type PanasonicMount = "L" | "FourThirds" | "MicroFourThirds";
export type PentaxMount = "K" | "645";
export type SigmaMount = "SA";
export type LeicaMount = "M" | "L";

export type Mount =
  | CanonMount
  | FujifilmMount
  | SonyMount
  | NikonMount
  | OlympusMount
  | PanasonicMount
  | PentaxMount
  | SigmaMount
  | LeicaMount;

export type Format = "Large" | "Full-Frame" | "APS-C" | "FourThirds";

export type Focus = "AF" | "MF";

export type LensUrls = {
  kakaku?: string; // 価格.com
  amazonjp?: string; // Amazon Japan
  official?: string; // 公式サイト
  bcn?: string; // BCN
  yodobashi?: string; // ヨドバシ
  [key: string]: string | undefined;
};

export type LensData = {
  id: string; // Primary key (EAN/JAN code or unique identifier)
  EANCode?: string; // EAN/JAN code if available
  maker: Maker;
  name: string;
  mount: Mount;
  focalLength: number[]; // [prime lens value] or [min, max] for zoom
  fStop: number[]; // [fixed aperture] or [wide end, tele end]
  format: Format;
  focus: Focus[];
  hasStabilizer: boolean;
  hasDustMoistureResistance: boolean; // Dust and moisture resistance
  filterDiameter?: number; // mm
  minFocusDistance?: number; // Minimum focusing distance in meters
  weight?: number; // grams

  // Optical specifications
  maxMagnification?: number; // Maximum magnification ratio
  bladesCount?: number; // Number of aperture blades
  elements?: number; // Number of lens elements
  groups?: number; // Number of lens groups

  // Physical dimensions
  diameter?: number; // Lens diameter in mm
  length?: number; // Lens length in mm

  // Features
  isInternalFocus?: boolean; // Internal focusing system

  // URLs and references
  officialUrl?: string;
  images?: string[];
  urls?: LensUrls;

  // Availability
  releaseDate?: string; // YYYY or YYYY-MM-DD
  discontinued?: boolean; // Production discontinued
  discontinuedDate?: string; // YYYY or YYYY-MM-DD

  // Accessories
  hoodModel?: string; // Lens hood model number
  caseModel?: string; // Lens case model number
};

export type MakerMountDataObject = {
  [key in Maker]: { [key in Mount]: LensData[] };
};
