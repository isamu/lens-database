// ================================================================
// Hasselblad H-system — AF 645 medium-format lenses (2002-2020).
//
// The H-system was Hasselblad's autofocus 645 platform, developed
// jointly with Fujifilm. Bodies: H1 (2002), H2 / H2F, then the
// digital H3D / H4D / H5D / H6D backs (through 2020). Two lens
// sub-families share the H bayonet:
//
//   HC  = full-frame 645 film image circle (56x41.5). Fujinon glass,
//         designed for both film H1/H2 and the later digital backs.
//   HCD = digital-optimized. Smaller image circle sized to the
//         48x36 CCD/CMOS sensor, so cannot cover full 645 film.
//         Enabled shorter/lighter/wider designs (24/4.8, 28/4).
//
// All HC/HCD lenses use a leaf shutter (Prontor-based), giving flash
// sync up to 1/800s — a signature H-system advantage. Focus is AF
// with instant manual override.
//
// The line was quietly discontinued in 2020 as Hasselblad refocused
// engineering on the mirrorless X-system. No fabricated EAN codes —
// slug ids only.
// ================================================================
export const hasselbladHLensDataSet = [
    // ============================================================
    // HCD 24mm F4.8 — ultra-wide, digital image circle (2011).
    // The widest H-system lens; only covers 48x36 digital backs.
    // ============================================================
    {
        id: "hasselblad-hcd-24mm-f4.8-h",
        maker: "Hasselblad",
        name: "HCD 24mm F4.8",
        mount: "H",
        focalLength: [24],
        fStop: [4.8],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        filterDiameter: 95,
        minFocusDistance: 0.38,
        weight: 1150,
        bladesCount: 9,
        elements: 12,
        groups: 10,
        releaseDate: "2011",
        discontinued: true,
        discontinuedDate: "2020",
        officialUrl: "https://www.hasselblad.com/h-system/h-system-lenses/",
        note: "HCD = digital-only image circle (48x36). Widest H-system lens. Leaf shutter to 1/800s.",
    },
    // ============================================================
    // HCD 28mm F4 — compact digital-only wide (2007).
    // ============================================================
    {
        id: "hasselblad-hcd-28mm-f4-h",
        maker: "Hasselblad",
        name: "HCD 28mm F4",
        mount: "H",
        focalLength: [28],
        fStop: [4],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        filterDiameter: 95,
        minFocusDistance: 0.35,
        weight: 830,
        bladesCount: 9,
        elements: 12,
        groups: 10,
        releaseDate: "2007",
        discontinued: true,
        discontinuedDate: "2020",
        officialUrl: "https://www.hasselblad.com/h-system/h-system-lenses/",
        note: "HCD wide — digital-only image circle. Aspherical / floating element design.",
    },
    // ============================================================
    // HC 28mm F4 — full 645 image circle super-wide (2006).
    // ============================================================
    {
        id: "hasselblad-hc-28mm-f4-h",
        maker: "Hasselblad",
        name: "HC 28mm F4",
        mount: "H",
        focalLength: [28],
        fStop: [4],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        filterDiameter: 95,
        minFocusDistance: 0.5,
        weight: 950,
        bladesCount: 9,
        elements: 13,
        groups: 10,
        releaseDate: "2006",
        discontinued: true,
        discontinuedDate: "2020",
        officialUrl: "https://www.hasselblad.com/h-system/h-system-lenses/",
        note: "Full 645 image circle super-wide. Fujinon-designed. Leaf shutter to 1/800s.",
    },
    // ============================================================
    // HC 35mm F3.5 — full-frame 645 wide (2003).
    // ============================================================
    {
        id: "hasselblad-hc-35mm-f3.5-h",
        maker: "Hasselblad",
        name: "HC 35mm F3.5",
        mount: "H",
        focalLength: [35],
        fStop: [3.5],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        filterDiameter: 95,
        minFocusDistance: 0.5,
        weight: 970,
        bladesCount: 9,
        elements: 11,
        groups: 8,
        releaseDate: "2003",
        discontinued: true,
        discontinuedDate: "2020",
        officialUrl: "https://www.hasselblad.com/h-system/h-system-lenses/",
        note: "Full 645 image-circle wide. Fujinon glass, Prontor leaf shutter.",
    },
    // ============================================================
    // HC 50mm F3.5 II — updated moderate wide (2011).
    // ============================================================
    {
        id: "hasselblad-hc-50mm-f3.5-ii-h",
        maker: "Hasselblad",
        name: "HC 50mm F3.5 II",
        mount: "H",
        focalLength: [50],
        fStop: [3.5],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        filterDiameter: 77,
        minFocusDistance: 0.6,
        weight: 780,
        bladesCount: 9,
        elements: 11,
        groups: 9,
        releaseDate: "2011",
        discontinued: true,
        discontinuedDate: "2020",
        officialUrl: "https://www.hasselblad.com/h-system/h-system-lenses/",
        note: "Version II with updated coatings for high-resolution digital backs. Full 645 image circle.",
    },
    // ============================================================
    // HC 80mm F2.8 — the standard "kit" prime, cult-normal (2002).
    // ============================================================
    {
        id: "hasselblad-hc-80mm-f2.8-h",
        maker: "Hasselblad",
        name: "HC 80mm F2.8",
        mount: "H",
        focalLength: [80],
        fStop: [2.8],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        filterDiameter: 67,
        minFocusDistance: 0.7,
        weight: 640,
        bladesCount: 9,
        elements: 7,
        groups: 6,
        releaseDate: "2002",
        discontinued: true,
        discontinuedDate: "2020",
        officialUrl: "https://www.hasselblad.com/h-system/h-system-lenses/",
        note: "Cult standard prime — the H-system 'normal' inherited from the V-system Planar tradition. Kit lens on H1/H2.",
    },
    // ============================================================
    // HC 100mm F2.2 — fastest H-system lens, cult portrait (2005).
    // ============================================================
    {
        id: "hasselblad-hc-100mm-f2.2-h",
        maker: "Hasselblad",
        name: "HC 100mm F2.2",
        mount: "H",
        focalLength: [100],
        fStop: [2.2],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        filterDiameter: 77,
        minFocusDistance: 0.9,
        weight: 970,
        bladesCount: 9,
        elements: 7,
        groups: 6,
        releaseDate: "2005",
        discontinued: true,
        discontinuedDate: "2020",
        officialUrl: "https://www.hasselblad.com/h-system/h-system-lenses/",
        note: "Fastest H-system prime and cult favorite for portraiture. Signature rendering on H4D/H5D/H6D backs.",
    },
    // ============================================================
    // HC 120mm F4 Macro — the H-system macro (2003).
    // ============================================================
    {
        id: "hasselblad-hc-120mm-f4-macro-h",
        maker: "Hasselblad",
        name: "HC Macro 120mm F4",
        mount: "H",
        focalLength: [120],
        fStop: [4],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        filterDiameter: 67,
        minFocusDistance: 0.39,
        weight: 970,
        bladesCount: 9,
        elements: 9,
        groups: 8,
        hasMacro: true,
        maxMagnification: 0.5,
        releaseDate: "2003",
        discontinued: true,
        discontinuedDate: "2020",
        officialUrl: "https://www.hasselblad.com/h-system/h-system-lenses/",
        note: "1:2 macro tele. Doubles as a portrait length; long-time studio workhorse. A Macro II variant (2012) refined coatings.",
    },
    // ============================================================
    // HC 120mm F4 Macro II — updated macro (2012).
    // ============================================================
    {
        id: "hasselblad-hc-120mm-f4-macro-ii-h",
        maker: "Hasselblad",
        name: "HC Macro 120mm F4 II",
        mount: "H",
        focalLength: [120],
        fStop: [4],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        filterDiameter: 67,
        minFocusDistance: 0.39,
        weight: 970,
        bladesCount: 9,
        elements: 9,
        groups: 8,
        hasMacro: true,
        maxMagnification: 0.5,
        releaseDate: "2012",
        discontinued: true,
        discontinuedDate: "2020",
        officialUrl: "https://www.hasselblad.com/h-system/h-system-lenses/",
        predecessorId: "hasselblad-hc-120mm-f4-macro-h",
        note: "Version II with anti-reflective coating refresh for high-res digital backs. 1:2 macro.",
    },
    // ============================================================
    // HC 150mm F3.2 — the classic portrait tele (2002).
    // ============================================================
    {
        id: "hasselblad-hc-150mm-f3.2-h",
        maker: "Hasselblad",
        name: "HC 150mm F3.2",
        mount: "H",
        focalLength: [150],
        fStop: [3.2],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        filterDiameter: 77,
        minFocusDistance: 1.3,
        weight: 1180,
        bladesCount: 9,
        elements: 8,
        groups: 6,
        releaseDate: "2002",
        discontinued: true,
        discontinuedDate: "2020",
        officialUrl: "https://www.hasselblad.com/h-system/h-system-lenses/",
        note: "Cult portrait tele — H-system's answer to the V-system 150 Sonnar. Signature compression on 645.",
    },
    // ============================================================
    // HC 210mm F4 — mid-tele (2002).
    // ============================================================
    {
        id: "hasselblad-hc-210mm-f4-h",
        maker: "Hasselblad",
        name: "HC 210mm F4",
        mount: "H",
        focalLength: [210],
        fStop: [4],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        filterDiameter: 77,
        minFocusDistance: 1.8,
        weight: 1370,
        bladesCount: 9,
        elements: 7,
        groups: 6,
        releaseDate: "2002",
        discontinued: true,
        discontinuedDate: "2020",
        officialUrl: "https://www.hasselblad.com/h-system/h-system-lenses/",
        note: "Studio tele — often paired with the 1.7x H-TC for a 357mm f/6.8 reach. Full 645 image circle.",
    },
    // ============================================================
    // HC 300mm F4.5 — the long tele (2004).
    // ============================================================
    {
        id: "hasselblad-hc-300mm-f4.5-h",
        maker: "Hasselblad",
        name: "HC 300mm F4.5",
        mount: "H",
        focalLength: [300],
        fStop: [4.5],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        filterDiameter: 95,
        minFocusDistance: 2.5,
        weight: 2160,
        bladesCount: 9,
        elements: 9,
        groups: 8,
        releaseDate: "2004",
        discontinued: true,
        discontinuedDate: "2020",
        officialUrl: "https://www.hasselblad.com/h-system/h-system-lenses/",
        note: "Longest H-system prime. Rare in the field — typically studio / landscape use with a tripod collar.",
    },
    // ============================================================
    // HCD 35-90mm F4-5.6 — wide-to-normal zoom, digital only (2009).
    // ============================================================
    {
        id: "hasselblad-hcd-35-90mm-f4-5.6-h",
        maker: "Hasselblad",
        name: "HCD 35-90mm F4-5.6",
        mount: "H",
        focalLength: [35, 90],
        fStop: [4, 5.6],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        filterDiameter: 95,
        minFocusDistance: 0.7,
        weight: 1500,
        bladesCount: 9,
        elements: 14,
        groups: 11,
        releaseDate: "2009",
        discontinued: true,
        discontinuedDate: "2020",
        officialUrl: "https://www.hasselblad.com/h-system/h-system-lenses/",
        note: "The only wide zoom in the H-system. HCD = digital-only image circle (48x36).",
    },
    // ============================================================
    // HC 50-110mm F3.5-4.5 — standard zoom (2007).
    // ============================================================
    {
        id: "hasselblad-hc-50-110mm-f3.5-4.5-h",
        maker: "Hasselblad",
        name: "HC 50-110mm F3.5-4.5",
        mount: "H",
        focalLength: [50, 110],
        fStop: [3.5, 4.5],
        format: "Large",
        focus: ["AF", "MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        filterDiameter: 95,
        minFocusDistance: 0.8,
        weight: 1650,
        bladesCount: 9,
        elements: 13,
        groups: 10,
        releaseDate: "2007",
        discontinued: true,
        discontinuedDate: "2020",
        officialUrl: "https://www.hasselblad.com/h-system/h-system-lenses/",
        note: "Full 645 image circle standard zoom. Popular studio / commercial workhorse.",
    },
    // ============================================================
    // HTS 1.5 — tilt/shift adapter for HC lenses (2008).
    // Registered as a "lens" record for DB completeness with
    // hasTiltShift = true; note documents the adapter status.
    // ============================================================
    {
        id: "hasselblad-hts-1.5-tilt-shift-adapter-h",
        maker: "Hasselblad",
        name: "HTS 1.5 Tilt/Shift Adapter",
        mount: "H",
        focalLength: [0],
        fStop: [0],
        format: "Large",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        hasTiltShift: true,
        weight: 950,
        releaseDate: "2008",
        discontinued: true,
        discontinuedDate: "2020",
        officialUrl: "https://www.hasselblad.com/h-system/h-system-lenses/",
        note: "Not a lens — a tilt/shift adapter for HC 28/35/50/80/100/120 lenses. 1.5x focal-length multiplier. ±10mm shift, ±10° tilt. Registered for system completeness.",
    },
];
