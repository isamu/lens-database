import { LensData, Mount } from "../types";
type TamronVariant = Partial<Pick<LensData, "EANCode" | "name" | "hasStabilizer" | "weight" | "length" | "releaseDate" | "discontinued" | "note" | "urls" | "officialUrl">> & {
    mount: Mount;
};
export declare const tamronVariants: (model: string, base: Omit<LensData, "id" | "mount">, variants: TamronVariant[]) => LensData[];
export {};
