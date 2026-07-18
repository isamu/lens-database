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
  | "Thypoch"
  | "Viltrox"
  | "Laowa"
  | "Samyang"
  | "Meike"
  | "Zhongyi"
  | "AstrHori"
  | "Sirui"
  | "Yashica"
  | "Konica"
  | "Minolta"
  | "Pergear"
  | "Brightin"
  | "Kamlan"
  | "Kowa"
  | "Meyer"
  | "Zenit"
  | "Chinon"
  | "Ricoh"
  | "Rollei"
  | "Miranda"
  | "Petri"
  | "Fujica";

export type CanonMount = "RF" | "RF-S" | "EF" | "EF-S" | "EF-M" | "FD" | "FL";
export type FujifilmMount = "X" | "G" | "R";
export type SonyMount = "A" | "E";
export type NikonMount = "Z" | "F";
export type OlympusMount = "FourThirds" | "MicroFourThirds" | "OM";
export type PanasonicMount = "L" | "FourThirds" | "MicroFourThirds";
export type PentaxMount = "K" | "645" | "M42";
export type SigmaMount = "SA";
export type LeicaMount = "M" | "L" | "R";
export type YashicaMount = "CY" | "M42";
// Contax autofocus / medium-format ecosystems (Kyocera-Contax, 1994-2005).
// All lenses were designed and built by Zeiss (maker: "ZEISS").
// - G: Contax G rangefinder AF (G1 / G2 bodies, 1994-2005).
// - N: Contax N AF SLR (N1 / NX bodies, 2000-2005).
// - 645: Contax 645 medium-format AF (Contax 645 body, 1999-2005).
//   Note the "645" tag collides with PentaxMount "645"; each record's
//   `maker` disambiguates.
export type ContaxGMount = "G";
export type ContaxNMount = "N";
export type Contax645Mount = "645";
export type KonicaMount = "AR";
export type MinoltaMount = "MD" | "A";
// Rollei QBM (Quick Bayonet Mount) used on Rolleiflex SL35 series (1970-1982).
// SL is the earlier breech-lock mount on Rolleiflex SL26/SL66 systems.
export type RolleiMount = "QBM" | "SL";
// Miranda bayonet used on Miranda SLR bodies (1955-1978).
export type MirandaMount = "Miranda";
// Petri breech-lock bayonet used on Petri SLR bodies (1959-1977).
export type PetriMount = "Petri";
// Fujica FX bayonet used on Fujica AX SLR bodies (1979-1984).
// Distinct from Fujifilm X mirrorless mount — FX = Fujica bayonet.
export type FujicaMount = "FX";
// Universal M42 x1 screw mount used across many makers (1949-1970s).
// Kept as a stand-alone mount so brand-independent M42 lenses can be
// registered under any maker without extending each maker's own union.
export type M42Mount = "M42";

export type Mount =
  | CanonMount
  | FujifilmMount
  | SonyMount
  | NikonMount
  | OlympusMount
  | PanasonicMount
  | PentaxMount
  | SigmaMount
  | LeicaMount
  | YashicaMount
  | KonicaMount
  | MinoltaMount
  | RolleiMount
  | MirandaMount
  | PetriMount
  | FujicaMount
  | M42Mount
  | ContaxGMount
  | ContaxNMount
  | Contax645Mount;

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
  hasMacro?: boolean; // Macro / close-up specialty (0.5:1 or better as marketed)
  hasFisheye?: boolean; // Fisheye projection (diagonal or circular)
  hasTiltShift?: boolean; // Tilt / shift / perspective-control movements
  hasSoftFocus?: boolean; // Soft-focus / defocus-control specialty

  // Optics — extended
  angleOfView?: number[]; // Diagonal angle of view in degrees. [prime] or [wide, tele] for zoom
  imageCircle?: number; // Image circle diameter in mm (mainly for tilt-shift and macro probe)

  // Availability & pricing
  msrp?: number; // Manufacturer suggested retail price, JPY (tax-inclusive when the source is JP)

  // Relationships
  predecessorId?: string; // id of the earlier generation this lens replaces
  successorId?: string; // id of the newer generation that replaces this lens
  compatibleBodies?: string[]; // Camera body model names this lens is officially supported on

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

  note?: string; // Free-form remark (e.g. overseas-only model, kit-only)
};

export type MakerMountDataObject = {
  [key in Maker]: { [key in Mount]: LensData[] };
};
