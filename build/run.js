import * as fs from "fs";
import allLens from "./data/all";
import { lensData2Markdown } from "./utils";
const validateLensData = (dataObj) => {
    const jans = {};
    const ids = {};
    let ret = true;
    Object.keys(dataObj).map((_) => {
        const maker = _;
        Object.keys(dataObj[maker]).map((__) => {
            const mount = __;
            dataObj[maker][mount].map((data) => {
                const { id, EANCode } = data;
                // console.log(id, EANCode)
                if (ids[id]) {
                    console.log("duplicate id: ", id);
                    ret = false;
                }
                if (jans[EANCode]) {
                    console.log("duplicate EANCode: ", EANCode);
                    ret = false;
                }
                ids[id] = true;
                jans[EANCode] = true;
            });
        });
    });
    return ret;
};
const createMarkdown = (dataObj) => {
    const index = [];
    Object.keys(dataObj).map((_) => {
        const maker = _;
        Object.keys(dataObj[maker]).map((__) => {
            const mount = __;
            const dir = `./docs/${maker.toLowerCase()}/${mount.toLowerCase()}`;
            fs.mkdirSync(dir, { recursive: true });
            const texts = [`# ${maker}/${mount} Mount`, ""];
            index.push(` - [${maker}/${mount}](./${maker.toLowerCase()}/${mount.toLowerCase()}/index.md)`);
            dataObj[maker][mount].map((data) => {
                texts.push(lensData2Markdown(data).join("\n"));
            });
            fs.writeFileSync(`${dir}/index.md`, texts.join("\n"));
        });
    });
    fs.writeFileSync(`./docs/README.md`, index.join("\n"));
};
const createArtifacts = (dataObj) => {
    fs.writeFileSync(`./artifacts/data.json`, JSON.stringify(dataObj, null, 2));
    // fs.writeFileSync(`./artifacts/data.ts`, "const data = " + JSON.stringify(dataObj, null, 2) + ";\nexport default data;");
    // fs.writeFileSync(`./artifacts/data.js`, "const data = " + JSON.stringify(dataObj, null, 2) + ";\nexport default data;");
};
const main = () => {
    // validate
    if (!validateLensData(allLens)) {
        console.log("invalid data");
        return false;
    }
    createMarkdown(allLens);
    createArtifacts(allLens);
};
main();
