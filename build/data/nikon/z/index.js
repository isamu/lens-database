import { nikonZPrimeLensDataSet } from "./prime";
import { nikonZZoomLensDataSet } from "./zoom";
export const nikonZLensDataSet = [
    ...nikonZZoomLensDataSet,
    ...nikonZPrimeLensDataSet,
];
