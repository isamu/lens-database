export type Maker = "Canon" | "Fujifilm" | "SIGMA" | "Leica" | "COSINA" | "ZEISS" | "Panasonic" | "OLYMPUS";

export type Mount = "RF" | "EF" | "EF-S" | "X" | "M";

export type Format = "Large" | "Full-Frame" | "APS-C" | "FourThirds";

export type Focus = "AF" | "MF";

export type LensData = {
  id: string; // EAN/JAN code
  JANCode?: string;
  maker: Maker;
  name: string;
  mount: Mount;
  focalLength: number[];
  fStop: number[];
  format: Format;
  focus: Focus[];
  hasStabilizer: boolean;
  hasDustMoistureResistance: boolean;
  filterDiameter: number;
  weight?: numner;
  officialUrl?: string;
  urls?: { [key: string]: string };
  releaseDate?: string; // YYYY or YYYY-MM-DD
};
