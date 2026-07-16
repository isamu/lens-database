import { LensData } from "../../types";
import { fujifilmXZoonLensDataSet } from "./zoom";
import { fujifilmXPrimeLensDataSet } from "./prime";
import { fujifilmXCLensDataSet } from "./xc";

export const fujifilmXLensDataSet: LensData[] = [
  ...fujifilmXZoonLensDataSet,
  ...fujifilmXPrimeLensDataSet,
  ...fujifilmXCLensDataSet,
];
