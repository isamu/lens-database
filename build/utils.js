export const lensData2Markdown = (lensData) => {
    // console.log();
    const { id, EANCode, maker, name, mount, focalLength, fStop, format, focus, hasStabilizer, hasDustMoistureResistance, filterDiameter, minFocusDistance, weight, maxMagnification, bladesCount, elements, groups, diameter, length, isInternalFocus, officialUrl, urls, releaseDate, discontinued, discontinuedDate, hoodModel, caseModel, } = lensData;
    const fl = focalLength.length === 1
        ? focalLength[0]
        : `${focalLength[0]} - ${focalLength[1]}`;
    const fs = fStop.length === 1 ? fStop[0] : `${fStop[0]} - ${fStop[1]}`;
    const _urls = urls || {};
    const flattenUrls = Object.keys(_urls)
        .map((key) => {
        return `[${key}](${_urls[key]})`;
    })
        .join("<br />");
    const rows = [
        `### ${name}`,
        `|  | |`,
        `| -- | -- |`,
        `| Mount  | ${mount} mount |`,
        `| Focal Length | ${fl}mm |`,
        `| Aperture | F${fs} |`,
        `| Format  | ${format} |`,
        `| Focus | ${focus.join(", ")} |`,
        `| Image Stabilizer  | ${hasStabilizer ? "YES" : "NO"}  |`,
        `| Dust / Moisture Resistance | ${hasDustMoistureResistance ? "YES" : "NO"}  |`,
    ];
    if (filterDiameter)
        rows.push(`| Filter Diameter | ${filterDiameter}mm |`);
    if (minFocusDistance)
        rows.push(`| Min Focus Distance | ${minFocusDistance}m |`);
    if (weight)
        rows.push(`| Weight | ${weight}g |`);
    if (maxMagnification)
        rows.push(`| Max Magnification | ${maxMagnification}x |`);
    if (bladesCount)
        rows.push(`| Aperture Blades | ${bladesCount} |`);
    if (elements && groups)
        rows.push(`| Optical Construction | ${elements} elements in ${groups} groups |`);
    else if (elements)
        rows.push(`| Lens Elements | ${elements} |`);
    if (diameter)
        rows.push(`| Diameter | ${diameter}mm |`);
    if (length)
        rows.push(`| Length | ${length}mm |`);
    if (isInternalFocus)
        rows.push(`| Internal Focus | YES |`);
    if (releaseDate)
        rows.push(`| Release Date | ${releaseDate} |`);
    if (discontinued)
        rows.push(`| Discontinued | YES${discontinuedDate ? ` (${discontinuedDate})` : ""} |`);
    if (hoodModel)
        rows.push(`| Lens Hood | ${hoodModel} |`);
    if (caseModel)
        rows.push(`| Lens Case | ${caseModel} |`);
    if (officialUrl)
        rows.push(`| Official URL | ${officialUrl} |`);
    if (flattenUrls)
        rows.push(`| URL | ${flattenUrls} |`);
    if (EANCode)
        rows.push(`| EAN/JAN Code | ${EANCode} |`);
    rows.push("");
    return rows;
};
