import type { LensData, Format } from "./data/types";
export declare const deriveLensData: (data: LensData) => LensData;
export declare const _testables: {
    isFisheye: (name: string) => boolean;
    isMacro: (name: string) => boolean;
    isTiltShift: (name: string) => boolean;
    isSoftFocus: (name: string) => boolean;
    computeAngleOfView: (focalMm: number, format: Format) => number | undefined;
};
