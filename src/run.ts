import * as fs from "fs";
import allLens from "./data/all";

import { lensData2Markdown } from "./utils";
import { isValidEan13 } from "./ean";
import { deriveLensData } from "./derive";
import { Mount, MakerMountDataObject } from "./data/types";

const validateLensData = (dataObj: MakerMountDataObject) => {
  const jans: { [key: string]: boolean } = {};
  const ids: { [key: string]: boolean } = {};

  let ret = true;
  Object.keys(dataObj).map((_) => {
    const maker = _ as keyof MakerMountDataObject;
    Object.keys(dataObj[maker]).map((__) => {
      const mount = __ as Mount;
      dataObj[maker][mount].map((data) => {
        const { id, EANCode } = data;
        // console.log(id, EANCode)
        if (ids[id]) {
          console.log("duplicate id: ", id);
          ret = false;
        }
        if (EANCode && jans[EANCode]) {
          console.log("duplicate EANCode: ", EANCode);
          ret = false;
        }
        if (EANCode && !isValidEan13(EANCode)) {
          console.log("invalid EANCode (checksum): ", id, EANCode);
          ret = false;
        }
        ids[id] = true;
        if (EANCode) {
          jans[EANCode] = true;
        }
      });
    });
  });

  return ret;
};

const createMarkdown = (dataObj: MakerMountDataObject) => {
  const index: string[] = [];

  Object.keys(dataObj).map((_) => {
    const maker = _ as keyof MakerMountDataObject;
    Object.keys(dataObj[maker]).map((__) => {
      const mount = __ as Mount;
      const dir = `./docs/${maker.toLowerCase()}/${mount.toLowerCase()}`;
      fs.mkdirSync(dir, { recursive: true });

      const texts = [`# ${maker}/${mount} Mount`, ""];
      index.push(
        ` - [${maker}/${mount}](./${maker.toLowerCase()}/${mount.toLowerCase()}/index.md)`,
      );
      dataObj[maker][mount].map((data) => {
        texts.push(lensData2Markdown(data).join("\n"));
      });
      fs.writeFileSync(`${dir}/index.md`, texts.join("\n"));
    });
  });

  fs.writeFileSync(`./docs/README.md`, index.join("\n"));
};

const createArtifacts = (dataObj: MakerMountDataObject) => {
  fs.mkdirSync(`./artifacts`, { recursive: true });
  fs.writeFileSync(`./artifacts/data.json`, JSON.stringify(dataObj, null, 2));
  // fs.writeFileSync(`./artifacts/data.ts`, "const data = " + JSON.stringify(dataObj, null, 2) + ";\nexport default data;");
  // fs.writeFileSync(`./artifacts/data.js`, "const data = " + JSON.stringify(dataObj, null, 2) + ";\nexport default data;");
};

// Apply auto-derivation (feature flags from name, angle-of-view from focal
// length + format) once here so consumers see canonical values in every
// artifact — markdown docs, data.json, and downstream Vue build.
const decorateLensData = (
  dataObj: MakerMountDataObject,
): MakerMountDataObject => {
  const out: MakerMountDataObject = {} as MakerMountDataObject;
  Object.keys(dataObj).forEach((_) => {
    const maker = _ as keyof MakerMountDataObject;
    out[maker] = {} as MakerMountDataObject[typeof maker];
    Object.keys(dataObj[maker]).forEach((__) => {
      const mount = __ as Mount;
      out[maker][mount] = dataObj[maker][mount].map(deriveLensData);
    });
  });
  return out;
};

const main = () => {
  // validate
  if (!validateLensData(allLens)) {
    console.log("invalid data");
    return false;
  }
  const decorated = decorateLensData(allLens);
  createMarkdown(decorated);
  createArtifacts(decorated);
};

main();
