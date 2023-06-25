import * as fs from "fs";
import * as lens from "../data/index";

import { lensData2Markdown } from "./utils";
import { Maker, Mount, LensData } from "../data/types";

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
  }, {} as { [key in Maker]: { [key in Mount]: LensData[] } });
  return dataObj;
};

const main = () => {
  const dataObj = getLensDataObject(lens);
  // console.log(JSON.stringify(dataObj, null , "\t"));

  const index = [];
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
