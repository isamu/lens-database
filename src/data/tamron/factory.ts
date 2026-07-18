import { LensData, Mount } from "../types";

type TamronVariant = Partial<
  Pick<
    LensData,
    | "EANCode"
    | "name"
    | "hasStabilizer"
    | "weight"
    | "length"
    | "releaseDate"
    | "discontinued"
    | "discontinuedDate"
    | "note"
    | "urls"
    | "officialUrl"
    | "msrp"
  >
> & { mount: Mount };

export const tamronVariants = (
  model: string,
  base: Omit<LensData, "id" | "mount">,
  variants: TamronVariant[],
): LensData[] =>
  variants.map(({ mount, ...overrides }) => ({
    ...base,
    ...overrides,
    mount,
    id:
      overrides.EANCode ??
      `tamron-${model.toLowerCase()}-${mount.toLowerCase()}`,
  }));
