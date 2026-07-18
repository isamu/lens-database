// ================================================================
// Hasselblad XCD — X-system mirrorless medium-format lenses
// (2016-current).
//
// The X-system launched with the X1D-50c (2016), the first
// mirrorless MF camera. It uses a 44x33 CMOS sensor (50MP on
// X1D / X1D II 50C, 100MP on X2D 100C). XCD lenses are AF, all
// weather-sealed, and every prime has a built-in leaf shutter
// (flash sync to 1/2000s on X2D).
//
// Sub-generations:
//   XCD (original, 2016-)   — first-generation primes and the
//                             35-75 zoom. Larger bodies.
//   XCD P (2020-)           — "P" for compact / portable, smaller
//                             barrel (45P, 28P).
//   XCD V (2022-)           — new compact V-series with faster
//                             focus and modern optical design
//                             (25V, 38V, 55V, 65V, 90V).
//
// Cult status:
//   - XCD 80mm F1.9 (2019) — the FASTEST autofocus medium-format
//     lens ever made. Signature bokeh at f/1.9 on 44x33.
//   - XCD 45mm F4 P — cult travel pancake.
//   - XCD 55V — cult compact normal.
//
// All records: format "Large", focus ["AF","MF"], weather-sealed.
// No fabricated EAN codes — slug ids only.
// ================================================================
export const hasselbladXcdLensDataSet = [
    // ============================================================
    // XCD 21mm F4 — the widest X-system prime (2018).
    // ============================================================
    {
        id: "hasselblad-xcd-21mm-f4-xcd",
        maker: "Hasselblad",
        name: "XCD 21mm F4",
        mount: "XCD",
        focalLength: [21],
        fStop: [4],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: true,
        filterDiameter: 77,
        minFocusDistance: 0.32,
        weight: 600,
        bladesCount: 10,
        elements: 13,
        groups: 9,
        releaseDate: "2018",
        officialUrl: "https://www.hasselblad.com/xcd-lenses/",
        note: "Widest X-system prime — ~17mm equivalent on FF. Built-in leaf shutter, weather-sealed.",
    },
    // ============================================================
    // XCD 25mm F2.5 V — compact V-series ultra-wide (2023).
    // ============================================================
    {
        id: "hasselblad-xcd-25mm-f2.5-v-xcd",
        maker: "Hasselblad",
        name: "XCD 25mm F2.5 V",
        mount: "XCD",
        focalLength: [25],
        fStop: [2.5],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: true,
        filterDiameter: 72,
        minFocusDistance: 0.25,
        weight: 375,
        bladesCount: 10,
        elements: 13,
        groups: 10,
        releaseDate: "2023",
        officialUrl: "https://www.hasselblad.com/xcd-lenses/",
        note: "V-series compact ultra-wide. Fast f/2.5 aperture, half the weight of the original XCD wides.",
    },
    // ============================================================
    // XCD 28mm F4 P — compact P-series wide (2022).
    // ============================================================
    {
        id: "hasselblad-xcd-28mm-f4-p-xcd",
        maker: "Hasselblad",
        name: "XCD 28mm F4 P",
        mount: "XCD",
        focalLength: [28],
        fStop: [4],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: true,
        filterDiameter: 62,
        minFocusDistance: 0.22,
        weight: 350,
        bladesCount: 10,
        elements: 10,
        groups: 8,
        releaseDate: "2022",
        officialUrl: "https://www.hasselblad.com/xcd-lenses/",
        note: "P-series compact wide. Pairs with 45P for a two-lens travel kit. Weather-sealed.",
    },
    // ============================================================
    // XCD 30mm F3.5 — original wide prime (2017).
    // ============================================================
    {
        id: "hasselblad-xcd-30mm-f3.5-xcd",
        maker: "Hasselblad",
        name: "XCD 30mm F3.5",
        mount: "XCD",
        focalLength: [30],
        fStop: [3.5],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: true,
        filterDiameter: 77,
        minFocusDistance: 0.32,
        weight: 645,
        bladesCount: 10,
        elements: 11,
        groups: 9,
        releaseDate: "2017",
        officialUrl: "https://www.hasselblad.com/xcd-lenses/",
        note: "Original-generation XCD wide prime. ~24mm-equivalent field of view on 44x33.",
    },
    // ============================================================
    // XCD 35-75mm F3.5-4.5 — the standard zoom (2019).
    // ============================================================
    {
        id: "hasselblad-xcd-35-75mm-f3.5-4.5-xcd",
        maker: "Hasselblad",
        name: "XCD 35-75mm F3.5-4.5",
        mount: "XCD",
        focalLength: [35, 75],
        fStop: [3.5, 4.5],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: true,
        filterDiameter: 77,
        minFocusDistance: 0.42,
        weight: 1100,
        bladesCount: 10,
        elements: 15,
        groups: 12,
        releaseDate: "2019",
        officialUrl: "https://www.hasselblad.com/xcd-lenses/",
        note: "The X-system's first and only zoom — wide-to-short-tele kit lens spanning 28-60mm equivalent.",
    },
    // ============================================================
    // XCD 38mm F2.5 V — compact V-series wide-normal (2022).
    // ============================================================
    {
        id: "hasselblad-xcd-38mm-f2.5-v-xcd",
        maker: "Hasselblad",
        name: "XCD 38mm F2.5 V",
        mount: "XCD",
        focalLength: [38],
        fStop: [2.5],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: true,
        filterDiameter: 62,
        minFocusDistance: 0.3,
        weight: 335,
        bladesCount: 10,
        elements: 10,
        groups: 8,
        releaseDate: "2022",
        officialUrl: "https://www.hasselblad.com/xcd-lenses/",
        note: "V-series compact wide-normal — 30mm-equivalent. Launched with the X2D 100C.",
    },
    // ============================================================
    // XCD 45mm F3.5 — original kit prime (2016).
    // ============================================================
    {
        id: "hasselblad-xcd-45mm-f3.5-xcd",
        maker: "Hasselblad",
        name: "XCD 45mm F3.5",
        mount: "XCD",
        focalLength: [45],
        fStop: [3.5],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: true,
        filterDiameter: 67,
        minFocusDistance: 0.35,
        weight: 465,
        bladesCount: 10,
        elements: 9,
        groups: 8,
        releaseDate: "2016",
        officialUrl: "https://www.hasselblad.com/xcd-lenses/",
        note: "Launch-day kit prime for the X1D-50c — ~35mm-equivalent 'reporter' normal.",
    },
    // ============================================================
    // XCD 45mm F4 P — cult travel pancake (2020).
    // ============================================================
    {
        id: "hasselblad-xcd-45mm-f4-p-xcd",
        maker: "Hasselblad",
        name: "XCD 45mm F4 P",
        mount: "XCD",
        focalLength: [45],
        fStop: [4],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: true,
        filterDiameter: 62,
        minFocusDistance: 0.35,
        weight: 320,
        bladesCount: 10,
        elements: 9,
        groups: 7,
        releaseDate: "2020",
        officialUrl: "https://www.hasselblad.com/xcd-lenses/",
        note: "Cult travel pancake — the smallest, lightest XCD lens. Turned the X1D II into a genuinely pocketable MF kit.",
    },
    // ============================================================
    // XCD 55mm F2.5 V — cult compact normal (2022).
    // ============================================================
    {
        id: "hasselblad-xcd-55mm-f2.5-v-xcd",
        maker: "Hasselblad",
        name: "XCD 55mm F2.5 V",
        mount: "XCD",
        focalLength: [55],
        fStop: [2.5],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: true,
        filterDiameter: 62,
        minFocusDistance: 0.45,
        weight: 345,
        bladesCount: 10,
        elements: 9,
        groups: 7,
        releaseDate: "2022",
        officialUrl: "https://www.hasselblad.com/xcd-lenses/",
        note: "Cult V-series compact normal — 43mm-equivalent, the 'standard' for the X2D era. Signature rendering at f/2.5.",
    },
    // ============================================================
    // XCD 65mm F2.8 V — compact short-tele normal (2023).
    // ============================================================
    {
        id: "hasselblad-xcd-65mm-f2.8-v-xcd",
        maker: "Hasselblad",
        name: "XCD 65mm F2.8 V",
        mount: "XCD",
        focalLength: [65],
        fStop: [2.8],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: true,
        filterDiameter: 67,
        minFocusDistance: 0.5,
        weight: 395,
        bladesCount: 10,
        elements: 10,
        groups: 8,
        releaseDate: "2023",
        officialUrl: "https://www.hasselblad.com/xcd-lenses/",
        note: "V-series short-tele normal — ~52mm-equivalent. Compact companion to the 55V.",
    },
    // ============================================================
    // XCD 80mm F1.9 — the fastest AF medium-format lens ever (2019).
    // Cult status: signature X-system portrait lens.
    // ============================================================
    {
        id: "hasselblad-xcd-80mm-f1.9-xcd",
        maker: "Hasselblad",
        name: "XCD 80mm F1.9",
        mount: "XCD",
        focalLength: [80],
        fStop: [1.9],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: true,
        filterDiameter: 77,
        minFocusDistance: 0.7,
        weight: 1100,
        bladesCount: 10,
        elements: 13,
        groups: 8,
        releaseDate: "2019",
        officialUrl: "https://www.hasselblad.com/xcd-lenses/",
        note: "Cult status: the fastest autofocus medium-format lens ever made. ~63mm-equivalent portrait normal with unmistakable f/1.9 bokeh on 44x33.",
    },
    // ============================================================
    // XCD 90mm F2.5 V — compact short-tele portrait (2022).
    // ============================================================
    {
        id: "hasselblad-xcd-90mm-f2.5-v-xcd",
        maker: "Hasselblad",
        name: "XCD 90mm F2.5 V",
        mount: "XCD",
        focalLength: [90],
        fStop: [2.5],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: true,
        filterDiameter: 67,
        minFocusDistance: 0.6,
        weight: 470,
        bladesCount: 10,
        elements: 11,
        groups: 8,
        releaseDate: "2022",
        officialUrl: "https://www.hasselblad.com/xcd-lenses/",
        note: "V-series compact portrait tele — 71mm-equivalent, fast f/2.5, half the weight of the 80/1.9.",
    },
    // ============================================================
    // XCD 90mm F3.2 — original short tele (2017).
    // ============================================================
    {
        id: "hasselblad-xcd-90mm-f3.2-xcd",
        maker: "Hasselblad",
        name: "XCD 90mm F3.2",
        mount: "XCD",
        focalLength: [90],
        fStop: [3.2],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: true,
        filterDiameter: 67,
        minFocusDistance: 0.5,
        weight: 650,
        bladesCount: 10,
        elements: 8,
        groups: 6,
        releaseDate: "2017",
        officialUrl: "https://www.hasselblad.com/xcd-lenses/",
        note: "Original-generation short tele — the go-to portrait lens before the 80/1.9 and 90V.",
    },
    // ============================================================
    // XCD 120mm F3.5 Macro — the X-system macro (2018).
    // ============================================================
    {
        id: "hasselblad-xcd-120mm-f3.5-macro-xcd",
        maker: "Hasselblad",
        name: "XCD 120mm F3.5 Macro",
        mount: "XCD",
        focalLength: [120],
        fStop: [3.5],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: true,
        filterDiameter: 77,
        minFocusDistance: 0.42,
        weight: 970,
        bladesCount: 10,
        elements: 10,
        groups: 8,
        hasMacro: true,
        maxMagnification: 0.5,
        releaseDate: "2018",
        officialUrl: "https://www.hasselblad.com/xcd-lenses/",
        note: "1:2 macro — the only X-system macro. Doubles as a ~95mm-equivalent short tele portrait lens.",
    },
    // ============================================================
    // XCD 135mm F2.8 — the longest X-system prime with a 1.7x TC
    // option that turns it into a 230mm f/4.8 (2020).
    // ============================================================
    {
        id: "hasselblad-xcd-135mm-f2.8-xcd",
        maker: "Hasselblad",
        name: "XCD 135mm F2.8",
        mount: "XCD",
        focalLength: [135],
        fStop: [2.8],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: true,
        filterDiameter: 77,
        minFocusDistance: 1.0,
        weight: 1350,
        bladesCount: 10,
        elements: 14,
        groups: 9,
        releaseDate: "2020",
        officialUrl: "https://www.hasselblad.com/xcd-lenses/",
        note: "Longest X-system prime. Pairs with the XH Converter 1.7 for a 230mm f/4.8 reach — the effective tele solution on X-system.",
    },
];
