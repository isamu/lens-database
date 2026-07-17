import { LensData } from "../../types";
import { sonyFEZoomLensDataSet } from "./fe-zoom";
import { sonyFEPrimeLensDataSet } from "./fe-prime";
import { sonyEAPSCLensDataSet } from "./apsc";

export const sonyELensDataSet: LensData[] = [
  ...sonyFEZoomLensDataSet,
  ...sonyFEPrimeLensDataSet,
  ...sonyEAPSCLensDataSet,
];
