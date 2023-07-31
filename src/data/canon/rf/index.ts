import { LensData } from "../../types";
import { canonRFLLensDataSet } from "./l";

export const canonRFLensDataSet: LensData[] = [
  ...canonRFLLensDataSet,
  {
    id: "4549292219487",
    EANCode: "4549292219487",
    maker: "Canon",
    name: "RF28mm F2.8 STM",
    mount: "RF",
    focalLength: [28],
    fStop: [2.8],
    format: "Full-Frame",
    focus: ["AF", "MF"],
    hasStabilizer: false,
    hasDustMoistureResistance: false,
    filterDiameter: 55,
    theShortestShootingDistance: 0.23,
    weight: 120,
    urls: {
      kakaku: "https://kakaku.com/item/K0001539493/",
    },
    releaseDate: "2023-07-07"
  },
  {
    id: "4549292181623",
    EANCode: "4549292181623",
    maker: "Canon",
    name: "RF50mm F1.8 STM",
    mount: "RF",
    focalLength: [50],
    fStop: [1.8],
    format: "Full-Frame",
    focus: ["AF", "MF"],
    hasStabilizer: false,
    hasDustMoistureResistance: false,
    filterDiameter: 43,
    weight: 160,
    urls: {
      kakaku: "https://kakaku.com/item/K0001309216/",
    },
    releaseDate: "2020-12-24"
  },
  {
    id: "4549292207446",
    EANCode: "4549292207446",
    maker: "Canon",
    name: "RF24-50mm F4.5-6.3 IS STM",
    mount: "RF",
    focalLength: [24, 50],
    fStop: [4.5, 6.3],
    format: "Full-Frame",
    focus: ["AF", "MF"],
    hasStabilizer: true,
    hasDustMoistureResistance: false,
    filterDiameter: 58,
    weight: 210,
    urls: {
      kakaku: "https://kakaku.com/item/K0001514881/",
    },
    releaseDate: "2023-04-14"
  },
  {
    id: "4549292186765",
    EANCode: "4549292186765",
    maker: "Canon",
    name: "RF100-400mm F5.6-8 IS USM",
    mount: "RF",
    focalLength: [100, 400],
    fStop: [5.6, 8],
    format: "Full-Frame",
    focus: ["AF", "MF"],
    hasStabilizer: true,
    hasDustMoistureResistance: false,
    filterDiameter: 67,
    weight: 635,
    urls: {
      kakaku: "https://kakaku.com/item/K0001383775/",
    },
    releaseDate: "2021-10-28"
  },
];
