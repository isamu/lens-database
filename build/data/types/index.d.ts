export type Maker = "Canon" | "Fujifilm" | "SONY" | "Nikon" | "Leica" | "ZEISS" | "SIGMA" | "Panasonic" | "OLYMPUS" | "PENTAX" | "Tokina" | "COSINA";
export type CanonMount = "RF" | "RF-S" | "EF" | "EF-S" | "EF-M" | "FD";
export type FujifilmMount = "X" | "R";
export type SonyMount = "A" | "E";
export type Mount = CanonMount | FujifilmMount | SonyMount | "M";
export type Format = "Large" | "Full-Frame" | "APS-C" | "FourThirds";
export type Focus = "AF" | "MF";
export type LensData = {
    id: string;
    EANCode: string;
    maker: Maker;
    name: string;
    mount: Mount;
    focalLength: number[];
    fStop: number[];
    format: Format;
    focus: Focus[];
    hasStabilizer: boolean;
    hasDustMoistureResistance: boolean;
    filterDiameter?: number;
    theShortestShootingDistance?: number;
    weight?: number;
    officialUrl?: string;
    images?: string[];
    urls: {
        [key: string]: string;
    };
    releaseDate?: string;
};
export type MakerMountDataObject = {
    [key in Maker]: {
        [key in Mount]: LensData[];
    };
};
