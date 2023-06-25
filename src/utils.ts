import { LensData } from "../data/types";

export const lensData2Markdown = (lensData: LensData) => {
  // console.log();
  const {
    id,
    EANCode,
    maker,
    name,
    mount,
    focalLength,
    fStop,
    format,
    focus,
    hasStabilizer,
    hasDustMoistureResistance,
    filterDiameter,
    weight,
    officialUrl,
    urls,
    releaseDate,
  } = lensData;

  const fl =
    focalLength.length === 1
      ? focalLength[0]
      : `${focalLength[0]} - ${focalLength[1]}`;
  const fs = fStop.length === 1 ? fStop[0] : `${fStop[0]} - ${fStop[1]}`;

  const _urls = urls || {};
  const flattenUrls = Object.keys(_urls).map(key => {
    return `[${key}](${urls[key]})`;
  }).join("<br />");
  
  return [
    `### ${name}`,
    `|  | |`,
    `| -- | -- |`,
    `| Mount  | ${mount} mount |`,
    `| Focus length | ${fl}mm |`,
    `| FStop | F${fs} |`,
    `| Format  | ${format} |`,
    `| Image Stabilizer  | ${hasStabilizer ? "YES" : ""}  |`,
    `| Dust / Moisture Resistance | ${
      hasDustMoistureResistance ? "YES" : ""
    }  |`,
    `| Filter Diameter | ${filterDiameter}mm |`,
    `| weight | ${weight || "-"}g |`,
    `| Release Date | ${releaseDate || ""} |`,
    `| Official URL | ${officialUrl || ""} |`,
    `| URL | ${flattenUrls || ""} |`,
    `| EAN/JAN Code | ${EANCode || ""} |`,
    "",
  ];
  // return [];
};
