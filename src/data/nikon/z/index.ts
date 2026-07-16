import { LensData } from "../../types";
import { nikonZPrimeLensDataSet } from "./prime";
import { nikonZZoomLensDataSet } from "./zoom";

export const nikonZLensDataSet: LensData[] = [
  ...nikonZZoomLensDataSet,
  ...nikonZPrimeLensDataSet,
];
