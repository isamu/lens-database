import { LensData } from "../../types";
import { nikonFPrimeLensDataSet } from "./prime";
import { nikonFZoomLensDataSet } from "./zoom";

export const nikonFLensDataSet: LensData[] = [
  ...nikonFZoomLensDataSet,
  ...nikonFPrimeLensDataSet,
];
