import * as lens from "./index";
export * from "./index";
const getLensDataObject = (lensDataSet) => {
    const dataObj = Object.values(lensDataSet).reduce((tmp, dataSet) => {
        dataSet.map((data) => {
            if (!tmp[data.maker]) {
                tmp[data.maker] = {};
            }
            if (!tmp[data.maker][data.mount]) {
                tmp[data.maker][data.mount] = [];
            }
            tmp[data.maker][data.mount].push(data);
        });
        return tmp;
    }, {});
    return dataObj;
};
const allData = getLensDataObject(lens);
const getFlatLensDataObject = (lensDataSet) => {
    const dataObj = Object.values(lensDataSet).reduce((tmp, dataSet) => {
        dataSet.map((data) => {
            tmp[data.id] = data;
        });
        return tmp;
    }, {});
    return dataObj;
};
export const allLensData = getFlatLensDataObject(lens);
export default allData;
