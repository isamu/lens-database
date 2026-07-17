import { nikonFPrimeLensDataSet } from "./prime";
import { nikonFZoomLensDataSet } from "./zoom";
export const nikonFLensDataSet = [
    ...nikonFZoomLensDataSet,
    ...nikonFPrimeLensDataSet,
];
