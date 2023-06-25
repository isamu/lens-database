export type Maker = "Canon";

export type Mount = "RF" | "EF" | "EF-S";

export type Format = "Large" | "Full-Frame" | "APS-C" | "FourThirds";

export type Focus = "AF" | "MF";


export type LensData = {
  id: string; // EAN/JAN code
  maker: Maker;
  name: string;
  mount: Mount;
  focalLength: number[];
  fStop: number[];
  format?: Format;
  focus: Focus[];
  hasStabilizer: boolean;
  hasDustMoistureResistance: boolean;
  filterDiameter: number;
  weight: numner;
  url: string;
};
