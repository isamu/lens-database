import { LensData } from "../../types";
import { fujifilmXZoonLensDataSet } from "./zoom";

export const fujifilmXLensDataSet: LensData[] = [
  ...fujifilmXZoonLensDataSet,
  {
    id: "4547410206159",
    EANCode: "4547410206159",
    maker: "Fujifilm",
    name: "XF35mmF1.4 R",
    mount: "X",
    focalLength: [35],
    fStop: [1.4],
    format: "APS-C",
    focus: ["AF", "MF"],
    hasStabilizer: false,
    hasDustMoistureResistance: false,
    filterDiameter: 52,
    weight: 187,
    urls: {
      kakaku: "https://kakaku.com/item/K0000336433/",
    },
    releaseDate: "2012-02-18",
  },
  {
    id: "4547410435856",
    EANCode: "4547410435856",
    maker: "Fujifilm",
    name: "XF50mmF1.0 R WR",
    mount: "X",
    focalLength: [50],
    fStop: [1.0],
    format: "APS-C",
    focus: ["AF", "MF"],
    hasStabilizer: false,
    hasDustMoistureResistance: true,
    filterDiameter: 77,
    weight: 845,
    urls: {
      kakaku: "https://kakaku.com/item/K0001286475/",
    },
    releaseDate: "2020-09-24",
  },
];
