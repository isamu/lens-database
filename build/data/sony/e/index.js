import { sonyFEZoomLensDataSet } from "./fe-zoom";
import { sonyFEPrimeLensDataSet } from "./fe-prime";
import { sonyEAPSCLensDataSet } from "./apsc";
export const sonyELensDataSet = [
    ...sonyFEZoomLensDataSet,
    ...sonyFEPrimeLensDataSet,
    ...sonyEAPSCLensDataSet,
];
