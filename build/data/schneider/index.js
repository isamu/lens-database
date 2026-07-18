// ================================================================
// Schneider-Kreuznach (Bad Kreuznach, Germany) — Digitar /
// Apo-Digitar / Apo-Symmar-Digital / Super-Symmar-XL /
// Super-Angulon-XL view-camera lenses for medium-format digital
// backs on technical / view cameras (Alpa 12 series, Cambo WRS /
// Actus, Silvestri, Arca-Swiss, Linhof Techno).
//
// Naming shorthand:
//   Digitar             — digital-optimised repackaging of the
//                         Symmar / Super-Angulon 4x5 line, cells
//                         designed for smaller image circles that
//                         match medium-format digital sensors.
//   Apo-Digitar         — apochromatic-corrected Digitar cells.
//   XL                  — Extra Large image circle, for greater
//                         movements (shift / rise-fall / stitching).
//   Super-Angulon-XL    — retrofocus super-wide for 4x5, still used
//                         on medium-format digital for extreme wide
//                         perspective control.
//   Apo-Symmar-Digital  — digital-optimised near-symmetric normal
//                         designs (successor of the Apo-Symmar-L).
//   Super-Symmar-XL     — high-resolution asymmetric wide-angle
//                         with extreme image circle.
//
// Mounting: all Schneider view-camera lenses are supplied as bare
// cells that thread into a Copal #0 or Copal #1 leaf shutter and
// then mount to a lens board on the host technical camera. The
// "Copal" mount tag captures this segment. Image circle is the
// critical spec.
//
// Cult status: the Apo-Digitar 35mm f/5.6 XL is the widest
// Schneider designed for the technical-camera segment. The
// Super-Symmar-XL 210mm f/5.6 is legendary in the 4x5 world and
// still cult for stitched digital-back panoramas.
// EAN codes are not fabricated — slug ids only.
// ================================================================
export const schneiderLensDataSet = [
    {
        id: "schneider-apo-digitar-35mm-f5.6-xl",
        maker: "Schneider",
        name: "Schneider-Kreuznach Apo-Digitar 35mm f/5.6 XL",
        mount: "Copal",
        focalLength: [35],
        fStop: [5.6],
        format: "Large",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 0.35,
        weight: 380,
        bladesCount: 5,
        elements: 10,
        groups: 8,
        imageCircle: 80,
        releaseDate: "2005",
        discontinued: false,
        officialUrl: "https://schneiderkreuznach.com/",
        urls: {
            official: "https://schneiderkreuznach.com/",
        },
        note: "CULT — the widest Schneider designed for the technical-camera / medium-format digital segment. Retrofocus super-wide with 80mm image circle at f/11 for the 44x33 CMOS. Threads into a Copal #0 shutter.",
    },
    {
        id: "schneider-apo-digitar-47mm-f5.6-xl",
        maker: "Schneider",
        name: "Schneider-Kreuznach Apo-Digitar 47mm f/5.6 XL",
        mount: "Copal",
        focalLength: [47],
        fStop: [5.6],
        format: "Large",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 0.5,
        weight: 380,
        bladesCount: 5,
        elements: 8,
        groups: 4,
        imageCircle: 120,
        releaseDate: "2003",
        discontinued: false,
        officialUrl: "https://schneiderkreuznach.com/",
        urls: {
            official: "https://schneiderkreuznach.com/",
        },
        note: "Wide-angle with 120mm image circle at f/11 — the panoramic-stitching workhorse of the Schneider digital line. Threads into a Copal #0 shutter.",
    },
    {
        id: "schneider-super-angulon-47mm-f5.6-xl",
        maker: "Schneider",
        name: "Schneider-Kreuznach Super-Angulon 47mm f/5.6 XL",
        mount: "Copal",
        focalLength: [47],
        fStop: [5.6],
        format: "Large",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 0.5,
        weight: 480,
        bladesCount: 5,
        elements: 8,
        groups: 4,
        imageCircle: 166,
        releaseDate: "1990",
        discontinued: true,
        officialUrl: "https://schneiderkreuznach.com/",
        urls: {
            official: "https://schneiderkreuznach.com/",
        },
        note: "Legendary 4x5 super-wide adapted to medium-format digital for extreme perspective control. 166mm image circle at f/22 gives massive shift / stitching room. Threads into a Copal #0 shutter.",
    },
    {
        id: "schneider-apo-digitar-60mm-f4",
        maker: "Schneider",
        name: "Schneider-Kreuznach Apo-Digitar 60mm f/4",
        mount: "Copal",
        focalLength: [60],
        fStop: [4],
        format: "Large",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 0.55,
        weight: 260,
        bladesCount: 5,
        elements: 6,
        groups: 4,
        imageCircle: 80,
        releaseDate: "2004",
        discontinued: false,
        officialUrl: "https://schneiderkreuznach.com/",
        urls: {
            official: "https://schneiderkreuznach.com/",
        },
        note: "Standard for the 44x33 CMOS. 80mm image circle at f/11. Threads into a Copal #0 shutter.",
    },
    {
        id: "schneider-apo-digitar-72mm-f5.6-xl",
        maker: "Schneider",
        name: "Schneider-Kreuznach Apo-Digitar 72mm f/5.6 XL",
        mount: "Copal",
        focalLength: [72],
        fStop: [5.6],
        format: "Large",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 0.7,
        weight: 380,
        bladesCount: 5,
        elements: 8,
        groups: 4,
        imageCircle: 226,
        releaseDate: "2003",
        discontinued: false,
        officialUrl: "https://schneiderkreuznach.com/",
        urls: {
            official: "https://schneiderkreuznach.com/",
        },
        note: "Wide-normal with a huge 226mm image circle at f/22 — the go-to Schneider for stitched panoramas and architectural / interiors work. Threads into a Copal #0 shutter.",
    },
    {
        id: "schneider-apo-digitar-90mm-f4.5",
        maker: "Schneider",
        name: "Schneider-Kreuznach Apo-Digitar 90mm f/4.5",
        mount: "Copal",
        focalLength: [90],
        fStop: [4.5],
        format: "Large",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 0.9,
        weight: 340,
        bladesCount: 5,
        elements: 6,
        groups: 4,
        imageCircle: 100,
        releaseDate: "2004",
        discontinued: false,
        officialUrl: "https://schneiderkreuznach.com/",
        urls: {
            official: "https://schneiderkreuznach.com/",
        },
        note: "Short tele APO for medium-format digital. 100mm image circle at f/11. Threads into a Copal #0 shutter.",
    },
    {
        id: "schneider-apo-digitar-120mm-f5.6-macro",
        maker: "Schneider",
        name: "Schneider-Kreuznach Apo-Digitar 120mm f/5.6 Macro",
        mount: "Copal",
        focalLength: [120],
        fStop: [5.6],
        format: "Large",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        hasMacro: true,
        maxMagnification: 1.0,
        minFocusDistance: 0.6,
        weight: 420,
        bladesCount: 5,
        elements: 6,
        groups: 4,
        imageCircle: 110,
        releaseDate: "2006",
        discontinued: false,
        officialUrl: "https://schneiderkreuznach.com/",
        urls: {
            official: "https://schneiderkreuznach.com/",
        },
        note: "1:1 life-size macro for technical-camera product / reproduction work. 110mm image circle at f/11 at infinity, expanding with extension. Threads into a Copal #1 shutter.",
    },
    {
        id: "schneider-apo-symmar-digital-100mm-f5.6",
        maker: "Schneider",
        name: "Schneider-Kreuznach Apo-Symmar-Digital 100mm f/5.6",
        mount: "Copal",
        focalLength: [100],
        fStop: [5.6],
        format: "Large",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 1.0,
        weight: 280,
        bladesCount: 5,
        elements: 6,
        groups: 4,
        imageCircle: 120,
        releaseDate: "2007",
        discontinued: false,
        officialUrl: "https://schneiderkreuznach.com/",
        urls: {
            official: "https://schneiderkreuznach.com/",
        },
        note: "Near-symmetric APO normal for medium-format digital. 120mm image circle at f/11. Threads into a Copal #0 shutter.",
    },
    {
        id: "schneider-apo-symmar-digital-150mm-f5.6",
        maker: "Schneider",
        name: "Schneider-Kreuznach Apo-Symmar-Digital 150mm f/5.6",
        mount: "Copal",
        focalLength: [150],
        fStop: [5.6],
        format: "Large",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 1.5,
        weight: 420,
        bladesCount: 5,
        elements: 6,
        groups: 4,
        imageCircle: 140,
        releaseDate: "2007",
        discontinued: false,
        officialUrl: "https://schneiderkreuznach.com/",
        urls: {
            official: "https://schneiderkreuznach.com/",
        },
        note: "APO tele for medium-format digital. 140mm image circle at f/11. Threads into a Copal #1 shutter.",
    },
    {
        id: "schneider-super-symmar-xl-210mm-f5.6",
        maker: "Schneider",
        name: "Schneider-Kreuznach Super-Symmar-XL 210mm f/5.6",
        mount: "Copal",
        focalLength: [210],
        fStop: [5.6],
        format: "Large",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 2.1,
        weight: 950,
        bladesCount: 5,
        elements: 8,
        groups: 6,
        imageCircle: 500,
        releaseDate: "2001",
        discontinued: true,
        officialUrl: "https://schneiderkreuznach.com/",
        urls: {
            official: "https://schneiderkreuznach.com/",
        },
        note: "LEGENDARY — the 4x5 asymmetric wide-angle tele with a 500mm image circle at f/22, the largest in the Schneider line. Cult for stitched digital-back panoramas and 8x10 field work. Threads into a Copal #1 shutter.",
    },
];
