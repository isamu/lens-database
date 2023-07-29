import * as lens from "./index";
import { Mount, LensData, MakerMountDataObject } from "./types";

export * from "./index";

const getLensDataObject = (lensDataSet: { [key: string]: LensData[] }) => {
  const dataObj = Object.values(lensDataSet).reduce((tmp, dataSet) => {
    dataSet.map((data: LensData) => {
      if (!tmp[data.maker]) {
        tmp[data.maker] = {} as { [key in Mount]: LensData[] };
      }
      if (!tmp[data.maker][data.mount]) {
        tmp[data.maker][data.mount] = [] as LensData[];
      }
      tmp[data.maker][data.mount].push(data);
    });
    return tmp;
  }, {} as MakerMountDataObject);
  return dataObj;
};

const allData = getLensDataObject(lens);
export default allData;
