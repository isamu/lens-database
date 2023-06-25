import * as fs from "fs";
import * as lens from "../data/index";

import { lensData2Markdown } from "./utils";
import { Maker, Mount, LensData } from "../data/types";

type MakerMountDataObject = { [key in Maker]: { [key in Mount]: LensData[] } };

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

const validateLensData = (dataObj: MakerMountDataObject) => {
  const jans: { [key: string]: boolean } = {};
  const ids: { [key: string]: boolean } = {};

  let ret = true;
  Object.keys(dataObj).map((maker) => {
    Object.keys(dataObj[maker]).map((mount) => {
      dataObj[maker][mount].map((data) => {
        const { id, JANCode } = data;
        // console.log(id, JANCode)
        if (ids[id]) {
          console.log("duplicate id: ", id);
          ret = false;
        }
        if (jans[JANCode]) {
          console.log("duplicate JANCode: ", JANCode);
          ret = false;
        }
        ids[id] = true;
        jans[JANCode] = true;
      });
    });
  });

  return ret;
};

const main = () => {
  const dataObj = getLensDataObject(lens);

  // validate
  if (!validateLensData(dataObj)) {
    console.log("invalid data");
    return false;
  }

  const index: string[] = [];

  Object.keys(dataObj).map((maker) => {
    Object.keys(dataObj[maker]).map((mount) => {
      const dir = `./docs/${maker.toLowerCase()}/${mount.toLowerCase()}`;
      fs.mkdirSync(dir, { recursive: true });

      const texts = [`# ${maker}/${mount} Mount`, ""];
      index.push(
        ` - [${maker}/${mount}](./${maker.toLowerCase()}/${mount.toLowerCase()}/index.md)`
      );
      dataObj[maker][mount].map((data) => {
        texts.push(lensData2Markdown(data).join("\n"));
      });
      fs.writeFileSync(`${dir}/index.md`, texts.join("\n"));
    });
  });

  fs.writeFileSync(`./docs/README.md`, index.join("\n"));
};

main();