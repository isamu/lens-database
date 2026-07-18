import type { LensData } from "../types";

// Praktica B (electronic) bayonet lens catalog — Prakticar lenses made by
// VEB Pentacon Dresden with optical designs from Carl Zeiss Jena,
// Meyer-Optik Görlitz (later merged into Pentacon), and Pentacon itself.
//
// The B-mount was introduced with the Praktica B 200 in 1979 and used across
// the B-series (B100 / BC1 / BC-A / BCA / BX20 / BX20S) until VEB Pentacon
// was wound up after German reunification. Practical production of Prakticar
// B lenses ended by 1990; every record here is `discontinued: true` with
// `discontinuedDate: "1990"`.
//
// Optical designers (credited in each `note`):
//   * Zeiss Jena — Prakticar 50/1.8 (Pancolar-derived), 50/1.4 electric,
//     80/1.8 (Pancolar), 135/2.8 (Sonnar).
//   * Meyer-Optik / Pentacon — Prakticar 50/2.4 (Domiplan/Trioplan lineage),
//     28/2.8 (Lydith-derived), 200/4, 300/4 (Orestegor lineage).
//   * Pentacon in-house — the electronic zooms 28-80 and 70-210.
//
// Pentacon did not assign JAN/EAN codes to Prakticar B lenses, so IDs use
// descriptive slugs. No fabricated 13-digit codes. Neither Pentacon (defunct)
// nor any successor maintains product pages for these lenses; `officialUrl`
// and `urls` are omitted.
//
// Notable cult entry:
//   * Prakticar 80mm f/1.8 MC — the "Pancolar 80" B-mount, a fast short
//     telephoto with the Zeiss Jena Pancolar optical formula adapted to
//     the electronic B bayonet. Cult-classic portrait lens on modern
//     mirrorless via B-to-E / B-to-Z / B-to-FX adapters.
export const prakticaLensDataSet: LensData[] = [
  // =========================================================================
  // Wide primes
  // =========================================================================
  {
    id: "praktica-prakticar-28mm-f2.8-mc",
    maker: "Praktica",
    name: "Prakticar 28mm f/2.8 MC",
    mount: "B",
    focalLength: [28],
    fStop: [2.8],
    format: "Full-Frame",
    focus: ["MF"],
    hasStabilizer: false,
    hasDustMoistureResistance: false,
    filterDiameter: 49,
    minFocusDistance: 0.33,
    weight: 200,
    bladesCount: 6,
    elements: 7,
    groups: 7,
    releaseDate: "1980",
    discontinued: true,
    discontinuedDate: "1990",
    note: "Retrofocus wide with a Meyer-Optik / Pentacon Lydith-derived optical formula, adapted to the electronic B bayonet. Multi-coated (MC). Common kit-companion wide for the Praktica B-series.",
  },
  {
    id: "praktica-prakticar-35mm-f2.4-mc",
    maker: "Praktica",
    name: "Prakticar 35mm f/2.4 MC",
    mount: "B",
    focalLength: [35],
    fStop: [2.4],
    format: "Full-Frame",
    focus: ["MF"],
    hasStabilizer: false,
    hasDustMoistureResistance: false,
    filterDiameter: 49,
    minFocusDistance: 0.35,
    weight: 210,
    bladesCount: 6,
    elements: 6,
    groups: 6,
    releaseDate: "1981",
    discontinued: true,
    discontinuedDate: "1990",
    note: "Fast wide reporter's prime with a Carl Zeiss Jena-derived Flektogon-lineage formula, adapted to the B bayonet. Multi-coated (MC). Unusual f/2.4 specification for the era.",
  },

  // =========================================================================
  // Normal primes
  // =========================================================================
  {
    id: "praktica-prakticar-50mm-f1.8-mc",
    maker: "Praktica",
    name: "Prakticar 50mm f/1.8 MC",
    mount: "B",
    focalLength: [50],
    fStop: [1.8],
    format: "Full-Frame",
    focus: ["MF"],
    hasStabilizer: false,
    hasDustMoistureResistance: false,
    filterDiameter: 49,
    minFocusDistance: 0.35,
    weight: 175,
    bladesCount: 6,
    elements: 6,
    groups: 5,
    releaseDate: "1979",
    discontinued: true,
    discontinuedDate: "1990",
    note: "The standard kit lens for the Praktica B-series (B100 / BC1 / BX20). Optical design by Carl Zeiss Jena — a Pancolar-lineage double-Gauss formula adapted to the electronic B bayonet. Multi-coated (MC). Excellent value-for-money reference lens.",
  },
  {
    id: "praktica-prakticar-50mm-f2.4-mc",
    maker: "Praktica",
    name: "Prakticar 50mm f/2.4 MC",
    mount: "B",
    focalLength: [50],
    fStop: [2.4],
    format: "Full-Frame",
    focus: ["MF"],
    hasStabilizer: false,
    hasDustMoistureResistance: false,
    filterDiameter: 49,
    minFocusDistance: 0.6,
    weight: 130,
    bladesCount: 6,
    elements: 4,
    groups: 3,
    releaseDate: "1983",
    discontinued: true,
    discontinuedDate: "1990",
    note: "Budget-tier standard — a Meyer-Optik-derived triplet/Tessar-lineage design (Domiplan / Trioplan heritage) adapted to the B bayonet. Multi-coated (MC). The affordable kit alternative to the f/1.8; very compact and light.",
  },

  // =========================================================================
  // Portrait / Tele primes
  // =========================================================================
  {
    id: "praktica-prakticar-80mm-f1.8-mc",
    maker: "Praktica",
    name: "Prakticar 80mm f/1.8 MC",
    mount: "B",
    focalLength: [80],
    fStop: [1.8],
    format: "Full-Frame",
    focus: ["MF"],
    hasStabilizer: false,
    hasDustMoistureResistance: false,
    filterDiameter: 58,
    minFocusDistance: 0.8,
    weight: 430,
    bladesCount: 6,
    elements: 6,
    groups: 5,
    releaseDate: "1980",
    discontinued: true,
    discontinuedDate: "1990",
    note: 'Cult-classic short-tele portrait lens — the "Pancolar 80" in B-mount trim. Optical design by Carl Zeiss Jena, adapting the Pancolar 80/1.8 formula to the electronic B bayonet. Multi-coated (MC). Highly sought after on modern mirrorless via B-mount adapters for its creamy rendering and shallow depth of field.',
  },
  {
    id: "praktica-prakticar-135mm-f2.8-mc",
    maker: "Praktica",
    name: "Prakticar 135mm f/2.8 MC",
    mount: "B",
    focalLength: [135],
    fStop: [2.8],
    format: "Full-Frame",
    focus: ["MF"],
    hasStabilizer: false,
    hasDustMoistureResistance: false,
    filterDiameter: 55,
    minFocusDistance: 1.5,
    weight: 480,
    bladesCount: 6,
    elements: 5,
    groups: 4,
    releaseDate: "1980",
    discontinued: true,
    discontinuedDate: "1990",
    note: "Fast telephoto with a Carl Zeiss Jena Sonnar-lineage design adapted to the B bayonet. Multi-coated (MC). A staple portrait / short-tele lens for the Praktica B system.",
  },
  {
    id: "praktica-prakticar-200mm-f4-mc",
    maker: "Praktica",
    name: "Prakticar 200mm f/4 MC",
    mount: "B",
    focalLength: [200],
    fStop: [4],
    format: "Full-Frame",
    focus: ["MF"],
    hasStabilizer: false,
    hasDustMoistureResistance: false,
    filterDiameter: 55,
    minFocusDistance: 2.5,
    weight: 620,
    bladesCount: 6,
    elements: 5,
    groups: 5,
    releaseDate: "1981",
    discontinued: true,
    discontinuedDate: "1990",
    note: "Telephoto prime derived from a Meyer-Optik / Pentacon Orestegor-lineage design, adapted to the B bayonet. Multi-coated (MC). Built-in retractable hood.",
  },
  {
    id: "praktica-prakticar-300mm-f4-mc",
    maker: "Praktica",
    name: "Prakticar 300mm f/4 MC",
    mount: "B",
    focalLength: [300],
    fStop: [4],
    format: "Full-Frame",
    focus: ["MF"],
    hasStabilizer: false,
    hasDustMoistureResistance: false,
    filterDiameter: 77,
    minFocusDistance: 4.0,
    weight: 1650,
    bladesCount: 6,
    elements: 6,
    groups: 5,
    releaseDate: "1982",
    discontinued: true,
    discontinuedDate: "1990",
    note: "Fast super-telephoto — the top prime tele of the Praktica B system. Meyer-Optik / Pentacon Orestegor-lineage optical design in a B-mount barrel. Multi-coated (MC). Tripod collar and integrated hood. Rare on the used market.",
  },

  // =========================================================================
  // Zooms
  // =========================================================================
  {
    id: "praktica-prakticar-zoom-28-80mm-f3.5-4.5",
    maker: "Praktica",
    name: "Prakticar Zoom 28-80mm f/3.5-4.5",
    mount: "B",
    focalLength: [28, 80],
    fStop: [3.5, 4.5],
    format: "Full-Frame",
    focus: ["MF"],
    hasStabilizer: false,
    hasDustMoistureResistance: false,
    filterDiameter: 55,
    minFocusDistance: 0.6,
    weight: 480,
    bladesCount: 6,
    elements: 12,
    groups: 10,
    releaseDate: "1985",
    discontinued: true,
    discontinuedDate: "1990",
    note: "Wide-to-normal standard zoom — a Pentacon in-house design for the B-series. Multi-coated (MC). Push-pull one-touch zoom/focus. Later-era Praktica B kit lens.",
  },
  {
    id: "praktica-prakticar-zoom-70-210mm-f4-5.6",
    maker: "Praktica",
    name: "Prakticar Zoom 70-210mm f/4-5.6",
    mount: "B",
    focalLength: [70, 210],
    fStop: [4, 5.6],
    format: "Full-Frame",
    focus: ["MF"],
    hasStabilizer: false,
    hasDustMoistureResistance: false,
    filterDiameter: 55,
    minFocusDistance: 1.5,
    weight: 640,
    bladesCount: 6,
    elements: 13,
    groups: 9,
    releaseDate: "1985",
    discontinued: true,
    discontinuedDate: "1990",
    note: "Telephoto zoom — a Pentacon in-house design for the B-series, covering short tele to portrait tele. Multi-coated (MC). Push-pull one-touch zoom/focus. Common consumer tele-zoom of the late Praktica B era.",
  },
];
