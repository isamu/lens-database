import type { LensData } from "../../types";

// ================================================================
// Meyer-Optik Görlitz (VEB Feinoptisches Werk Görlitz, East Germany)
// medium-format lenses for the Pentacon Six / Kiev 60 6×6 SLR
// bayonet (P6). Meyer's medium-format contribution was small — most
// P6 glass came from Carl Zeiss Jena — but the Domiplan 80/2.8 and
// Orestegor telephotos were briefly offered. After Meyer was
// absorbed into VEB Pentacon in 1968 these designs were rebranded.
// ================================================================
export const meyerP6LensDataSet: LensData[] = [
  {
    id: "meyer-domiplan-80mm-f2.8-p6",
    maker: "Meyer",
    name: "Meyer-Optik Görlitz Domiplan 80mm f/2.8 (P6)",
    mount: "P6",
    focalLength: [80],
    fStop: [2.8],
    format: "Large",
    focus: ["MF"],
    hasStabilizer: false,
    hasDustMoistureResistance: false,
    filterDiameter: 58,
    minFocusDistance: 0.9,
    weight: 480,
    bladesCount: 5,
    elements: 3,
    groups: 3,
    releaseDate: "1965",
    discontinued: true,
    discontinuedDate: "1990",
    note: "希少なMeyer中判標準。3枚玉クックトリプレット構成の廉価版80/2.8で、Pentacon Six初期の入門キットに同梱された。1968年のPentacon統合後はPentaconブランドへ移行。Meyer-Optik Görlitz東独。",
  },
];
