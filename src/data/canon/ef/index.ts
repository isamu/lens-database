import { LensData } from "../../types";
import { canonEFZoomLensDataSet } from "./zoom";
import { canonEFPrimeLensDataSet } from "./prime";

export const canonEFLensDataSet: LensData[] = [
  ...canonEFZoomLensDataSet,
  ...canonEFPrimeLensDataSet,
];
