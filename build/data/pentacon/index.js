// ================================================================
// VEB Pentacon (Dresden, East Germany) medium-format lenses for the
// Pentacon Six / Kiev 60 6×6 SLR bayonet (P6). The Pentacon Six
// itself launched in 1966 as the successor to the Praktisix (1957)
// and the mount was cloned by Arsenal Kiev on the Kiev 6C / 60 /
// 88CM. Pentacon-branded lenses were largely rebrands or licensed
// derivatives of Carl Zeiss Jena (Biometar, Flektogon) and
// Meyer-Optik designs, after Pentacon absorbed Meyer-Optik Görlitz
// in 1968. All records here are `mount: "P6"` and `format: "Large"`.
// ================================================================
export const pentaconLensDataSet = [
    {
        id: "pentacon-80mm-f2.8-p6",
        maker: "Pentacon",
        name: "Pentacon 80mm f/2.8 MC (P6)",
        mount: "P6",
        focalLength: [80],
        fStop: [2.8],
        format: "Large",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        filterDiameter: 58,
        minFocusDistance: 0.9,
        weight: 520,
        bladesCount: 6,
        elements: 5,
        groups: 4,
        releaseDate: "1970",
        discontinued: true,
        discontinuedDate: "1990",
        note: "Pentacon Six / Praktisix標準キットレンズ。Meyer-Optik Görlitz Primotarの系譜を汲む標準。マルチコート化された後期型はカルト人気。VEB Pentacon Dresden製。",
    },
    {
        id: "pentacon-flektogon-50mm-f4-mc-p6",
        maker: "Pentacon",
        name: "Pentacon 50mm f/4 Flektogon MC (P6)",
        mount: "P6",
        focalLength: [50],
        fStop: [4],
        format: "Large",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        filterDiameter: 86,
        minFocusDistance: 0.5,
        weight: 900,
        bladesCount: 6,
        elements: 8,
        groups: 6,
        releaseDate: "1975",
        discontinued: true,
        discontinuedDate: "1990",
        note: "Carl Zeiss Jena Flektogon 50/4のPentacon銘リブランド。ゼブラ/ブラック後期MC型。中判用超広角銘玉。CZJ設計、VEB Pentacon Dresdenブランド。カルト。",
    },
];
