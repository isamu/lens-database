import { LensData } from "../../types";
import { canonRFLLensDataSet } from "./l";
import { canonRFStandardLensDataSet } from "./standard";

export const canonRFLensDataSet: LensData[] = [
  ...canonRFLLensDataSet,
  ...canonRFStandardLensDataSet,
];
