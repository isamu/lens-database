// Konica LTM (L39 / M39 x1 screw mount) rangefinder lens catalog.
//
// Konishiroku / Konica made only a handful of LTM lenses, spanning two eras:
//
//   * 1948 — the original Konishiroku Hexar 50mm f/3.5, a Tessar-type collapsible
//     shipped on the Konica I / II rangefinders. Cult-status vintage glass.
//
//   * 2001 — a small "Hexar RF" era limited-reissue program of Hexanon-branded
//     LTM lenses, produced to coincide with the M-bayonet Konica Hexar RF
//     rangefinder (1999). These reissues were curtailed by the 2003
//     Konica-Minolta merger, so `discontinuedDate: "2003"` reflects the end
//     of production for that batch.
//
// Konica did not assign JAN/EAN codes to LTM lenses, so IDs use descriptive
// slugs. No fabricated 13-digit codes. Neither Konica Minolta nor Sony
// (successor) maintain product pages for these lenses; `officialUrl` and
// `urls` are omitted.
//
// Notable cult entries:
//   * Konica Hexanon 60mm f/1.2 LTM — the LTM "grail". A very limited-run
//     ultra-fast standard, one of the fastest LTM lenses ever produced.
//   * Konica Hexanon 50mm f/2.4 LTM — pancake-style compact from the
//     Hexar RF era.
//   * Konica M-Hexanon 90mm f/2.8 LTM — rare LTM reissue of the M-mount
//     M-Hexanon 90/2.8.
//   * Konica UC-Hexanon 35mm f/2 LTM — "Ultimate Coated" designation,
//     high-end wide.
export const konicaLtmLensDataSet = [
    {
        id: "konishiroku-hexar-50mm-f3.5-ltm",
        maker: "Konica",
        name: "Konishiroku Hexar 50mm f/3.5",
        mount: "LTM",
        focalLength: [50],
        fStop: [3.5],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 1.0,
        weight: 130,
        bladesCount: 10,
        elements: 4,
        groups: 3,
        releaseDate: "1948",
        discontinued: true,
        discontinuedDate: "1955",
        note: "Konishiroku's first LTM standard lens — a collapsible Tessar-type shipped on the early Konica rangefinders. Cult-status vintage glass, prized for its classic rendering when adapted to modern digital rangefinders and mirrorless.",
    },
    {
        id: "konica-hexanon-60mm-f1.2-ltm",
        maker: "Konica",
        name: "Hexanon 60mm f/1.2 LTM",
        mount: "LTM",
        focalLength: [60],
        fStop: [1.2],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        filterDiameter: 58,
        minFocusDistance: 0.8,
        weight: 420,
        bladesCount: 10,
        elements: 7,
        groups: 6,
        releaseDate: "2001",
        discontinued: true,
        discontinuedDate: "2003",
        note: 'The LTM "grail" — a 2001 limited-run ultra-fast standard released to celebrate the Hexar RF program. One of the fastest LTM lenses ever produced; extremely small production numbers make this a top-tier collector piece. Multi-coated. Production ended around the 2003 Konica-Minolta merger.',
    },
    {
        id: "konica-hexanon-50mm-f2.4-ltm",
        maker: "Konica",
        name: "Hexanon 50mm f/2.4 LTM",
        mount: "LTM",
        focalLength: [50],
        fStop: [2.4],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        filterDiameter: 40.5,
        minFocusDistance: 0.9,
        weight: 100,
        bladesCount: 10,
        elements: 5,
        groups: 4,
        releaseDate: "2001",
        discontinued: true,
        discontinuedDate: "2003",
        note: "Hexar RF-era pancake-style standard. A modernized reinterpretation of the original Konishiroku Hexar 50/3.5 concept, with a slightly faster aperture and multi-coating. Limited reissue; production ended around the 2003 Konica-Minolta merger.",
    },
    {
        id: "konica-m-hexanon-90mm-f2.8-ltm",
        maker: "Konica",
        name: "M-Hexanon 90mm f/2.8 LTM",
        mount: "LTM",
        focalLength: [90],
        fStop: [2.8],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        filterDiameter: 46,
        minFocusDistance: 1.0,
        weight: 300,
        bladesCount: 10,
        elements: 5,
        groups: 4,
        releaseDate: "2001",
        discontinued: true,
        discontinuedDate: "2003",
        note: "Rare LTM version of the M-mount M-Hexanon 90/2.8 short telephoto for the Hexar RF. Multi-coated. Very small production run; largely eclipsed by the M-bayonet original. Production ended around the 2003 Konica-Minolta merger.",
    },
    {
        id: "konica-uc-hexanon-35mm-f2-ltm",
        maker: "Konica",
        name: "UC-Hexanon 35mm f/2 LTM",
        mount: "LTM",
        focalLength: [35],
        fStop: [2],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        filterDiameter: 46,
        minFocusDistance: 0.8,
        weight: 220,
        bladesCount: 10,
        elements: 7,
        groups: 5,
        releaseDate: "2001",
        discontinued: true,
        discontinuedDate: "2003",
        note: '"UC" = Ultimate Coating — Konica\'s premium multi-coating designation. A high-end fast 35mm wide from the Hexar RF era, released in limited quantities. Production ended around the 2003 Konica-Minolta merger.',
    },
];
