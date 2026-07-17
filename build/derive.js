// Feature flags derived from the lens name when not explicitly set on the record.
// The source-of-truth is still the explicit field on the source file; derivation
// only fills in the blank so consumers of artifacts/data.json can filter
// reliably without every contributor remembering to set every flag.
const isFisheye = (name) => /fish[-\s]?eye/i.test(name) || /フィッシュアイ/.test(name);
// Match lenses branded as macro / makro / mikro / マクロ, plus Nikon's
// "Micro-NIKKOR" / "Micro NIKKOR" (Nikon's own word for macro) and Canon
// MP-E. Do NOT match "close-focus" or zooms that advertise a macro-ish
// reproduction ratio without the name flag — those aren't macro specialties.
const isMacro = (name) => /(?:^|[\s\-])(?:macro|makro|mikro)(?:[\s\-]|$)/i.test(name) ||
    /ultra[-\s]?macro/i.test(name) ||
    /マクロ/.test(name) ||
    /\bMicro[-\s]?NIKKOR\b/i.test(name) ||
    /\bMP-E\b/i.test(name);
// Tilt / shift / perspective-control lenses. Covers Canon TS-E (name has no
// space, e.g. "TS-E17mm F4L"), Nikon PC-E / PC-Nikkor, and generic "Tilt" /
// "Shift" branding used by Laowa etc.
const isTiltShift = (name) => /\btilt\b/i.test(name) ||
    /\bshift\b/i.test(name) ||
    /(?:^|[\s])TS-?E/.test(name) ||
    /(?:^|[\s])PC-?E/.test(name) ||
    /\bPC[-\s]?Nikkor\b/i.test(name);
// Soft-focus specialty lenses (Leica Thambar, Sony 100mm STF's smooth-transfocus
// notwithstanding — STF is not "soft focus"). Kept conservative on purpose.
const isSoftFocus = (name) => /soft[-\s]?focus/i.test(name) || /\bthambar\b/i.test(name);
// Sensor diagonals in millimetres, used to compute the diagonal angle of view
// when the source file doesn't publish an explicit value.
const SENSOR_DIAGONAL_MM = {
    Large: 55, // GFX / 44×33 medium format
    "Full-Frame": 43.27, // 36×24
    "APS-C": 28.4, // 23.6×15.7 average (Canon = 26.82, Sony/Fuji = 28.4)
    FourThirds: 21.63, // 17.3×13
};
const RAD_TO_DEG = 180 / Math.PI;
const computeAngleOfView = (focalMm, format) => {
    const diag = SENSOR_DIAGONAL_MM[format];
    if (!diag || !focalMm)
        return undefined;
    // Rectilinear thin-lens approximation. Fisheye lenses don't obey this and
    // must supply an explicit angleOfView on the source record.
    const rad = 2 * Math.atan(diag / (2 * focalMm));
    return Math.round(rad * RAD_TO_DEG * 10) / 10;
};
const deriveAngleOfView = (data) => {
    var _a;
    if (data.angleOfView)
        return data.angleOfView;
    // Skip fisheye — the geometric formula is wrong for it.
    if (data.hasFisheye || isFisheye(data.name))
        return undefined;
    if (!((_a = data.focalLength) === null || _a === void 0 ? void 0 : _a.length))
        return undefined;
    const values = data.focalLength.map((f) => computeAngleOfView(f, data.format));
    if (values.some((v) => v === undefined))
        return undefined;
    return values;
};
export const deriveLensData = (data) => {
    const patch = {};
    if (data.hasMacro === undefined && isMacro(data.name))
        patch.hasMacro = true;
    if (data.hasFisheye === undefined && isFisheye(data.name))
        patch.hasFisheye = true;
    if (data.hasTiltShift === undefined && isTiltShift(data.name))
        patch.hasTiltShift = true;
    if (data.hasSoftFocus === undefined && isSoftFocus(data.name))
        patch.hasSoftFocus = true;
    const aov = deriveAngleOfView(Object.assign(Object.assign({}, data), patch));
    if (aov !== undefined)
        patch.angleOfView = aov;
    return Object.keys(patch).length ? Object.assign(Object.assign({}, data), patch) : data;
};
// Exposed for unit-testing.
export const _testables = {
    isFisheye,
    isMacro,
    isTiltShift,
    isSoftFocus,
    computeAngleOfView,
};
