import type { LensData } from "../types";

// ================================================================
// Rodenstock (Munich, Germany) — Digaron high-resolution and
// legacy Apo-Sironar-Digital / Grandagon-N view-camera lenses
// for medium-format digital backs on technical / view cameras
// (Alpa 12 series, Cambo WRS / Actus, Silvestri Bicam / Flexicam,
// Arca-Swiss Rm3d / Rm3di, Linhof Techno).
//
// Naming shorthand:
//   Digaron-W (Wide)     — retrofocus wide-angle designs; used
//                          for architectural / landscape work
//                          with stitching / rise-fall movement.
//   Digaron-S (Standard) — non-retrofocus / near-symmetric normal
//                          and short-tele designs; the highest
//                          resolving optics in the Rodenstock line.
//   HR                   — "High Resolution", the current-generation
//                          line optimised for 100MP+ CMOS backs
//                          (Phase One IQ4 150MP, Hasselblad H6D-100c).
//   Apo-Sironar-Digital  — legacy digital-optimised APO design
//                          derived from the 4x5 field-camera Sironar.
//   Grandagon-N          — legacy super-wide from the 4x5 line,
//                          still used for scanning-back stitching.
//
// Mounting: all Rodenstock view-camera lenses are supplied as
// bare cells that thread into a Copal #0 or Copal #1 leaf
// shutter, then mount to a lens board on the host technical
// camera. The "Copal" mount tag captures this technical-camera
// segment. Image circle is the critical spec — indicates how
// much rise-fall / shift is available before mechanical vignetting.
//
// Cult status: the Digaron-W 32mm f/4 HR is the widest lens ever
// designed for medium-format digital and a grail among technical-
// camera photographers. The Digaron-S 100mm f/4 HR is the reference
// resolving optic of the Rodenstock line.
// EAN codes are not fabricated — slug ids only.
// ================================================================

export const rodenstockLensDataSet: LensData[] = [
  {
    id: "rodenstock-digaron-w-32mm-f4-hr",
    maker: "Rodenstock",
    name: "Rodenstock HR Digaron-W 32mm f/4",
    mount: "Copal",
    focalLength: [32],
    fStop: [4],
    format: "Large",
    focus: ["MF"],
    hasStabilizer: false,
    hasDustMoistureResistance: false,
    minFocusDistance: 0.3,
    weight: 620,
    bladesCount: 5,
    elements: 13,
    groups: 9,
    imageCircle: 70,
    releaseDate: "2010",
    discontinued: false,
    officialUrl: "https://www.rodenstock-photo.com/",
    urls: {
      official: "https://www.rodenstock-photo.com/",
    },
    note: "CULT — the widest lens ever designed for medium-format digital. Retrofocus super-wide for technical cameras (Alpa 12, Cambo WRS, Arca-Swiss Rm3di). 70mm image circle at f/11 covers the 44x33 CMOS with modest shift. Grail among architectural / landscape technical-camera shooters. Threads into a Copal #0 shutter.",
  },
  {
    id: "rodenstock-digaron-w-40mm-f4-hr",
    maker: "Rodenstock",
    name: "Rodenstock HR Digaron-W 40mm f/4",
    mount: "Copal",
    focalLength: [40],
    fStop: [4],
    format: "Large",
    focus: ["MF"],
    hasStabilizer: false,
    hasDustMoistureResistance: false,
    minFocusDistance: 0.4,
    weight: 480,
    bladesCount: 5,
    elements: 12,
    groups: 8,
    imageCircle: 90,
    releaseDate: "2008",
    discontinued: false,
    officialUrl: "https://www.rodenstock-photo.com/",
    urls: {
      official: "https://www.rodenstock-photo.com/",
    },
    note: "Retrofocus wide-angle for medium-format digital backs. 90mm image circle at f/11 gives generous shift for architecture. Threads into a Copal #0 shutter.",
  },
  {
    id: "rodenstock-digaron-w-50mm-f4-hr",
    maker: "Rodenstock",
    name: "Rodenstock HR Digaron-W 50mm f/4",
    mount: "Copal",
    focalLength: [50],
    fStop: [4],
    format: "Large",
    focus: ["MF"],
    hasStabilizer: false,
    hasDustMoistureResistance: false,
    minFocusDistance: 0.5,
    weight: 480,
    bladesCount: 5,
    elements: 12,
    groups: 8,
    imageCircle: 90,
    releaseDate: "2008",
    discontinued: false,
    officialUrl: "https://www.rodenstock-photo.com/",
    urls: {
      official: "https://www.rodenstock-photo.com/",
    },
    note: "Wide-angle for medium-format digital. 90mm image circle at f/11 covers the 44x33 CMOS with substantial rise-fall / shift. Threads into a Copal #0 shutter.",
  },
  {
    id: "rodenstock-digaron-s-60mm-f4-hr",
    maker: "Rodenstock",
    name: "Rodenstock HR Digaron-S 60mm f/4",
    mount: "Copal",
    focalLength: [60],
    fStop: [4],
    format: "Large",
    focus: ["MF"],
    hasStabilizer: false,
    hasDustMoistureResistance: false,
    minFocusDistance: 0.6,
    weight: 380,
    bladesCount: 5,
    elements: 10,
    groups: 8,
    imageCircle: 90,
    releaseDate: "2009",
    discontinued: false,
    officialUrl: "https://www.rodenstock-photo.com/",
    urls: {
      official: "https://www.rodenstock-photo.com/",
    },
    note: "Standard focal length for the 44x33 CMOS on technical cameras. 90mm image circle at f/11. Threads into a Copal #0 shutter.",
  },
  {
    id: "rodenstock-digaron-s-90mm-f5.6-hr",
    maker: "Rodenstock",
    name: "Rodenstock HR Digaron-S 90mm f/5.6",
    mount: "Copal",
    focalLength: [90],
    fStop: [5.6],
    format: "Large",
    focus: ["MF"],
    hasStabilizer: false,
    hasDustMoistureResistance: false,
    minFocusDistance: 0.9,
    weight: 340,
    bladesCount: 5,
    elements: 6,
    groups: 4,
    imageCircle: 110,
    releaseDate: "2009",
    discontinued: false,
    officialUrl: "https://www.rodenstock-photo.com/",
    urls: {
      official: "https://www.rodenstock-photo.com/",
    },
    note: "Short tele for technical cameras. 110mm image circle at f/11 gives generous movements. Threads into a Copal #0 shutter.",
  },
  {
    id: "rodenstock-digaron-s-100mm-f4-hr",
    maker: "Rodenstock",
    name: "Rodenstock HR Digaron-S 100mm f/4",
    mount: "Copal",
    focalLength: [100],
    fStop: [4],
    format: "Large",
    focus: ["MF"],
    hasStabilizer: false,
    hasDustMoistureResistance: false,
    minFocusDistance: 1.0,
    weight: 620,
    bladesCount: 5,
    elements: 7,
    groups: 6,
    imageCircle: 120,
    releaseDate: "2010",
    discontinued: false,
    officialUrl: "https://www.rodenstock-photo.com/",
    urls: {
      official: "https://www.rodenstock-photo.com/",
    },
    note: "The reference resolving optic of the Rodenstock line — often used as the acceptance-test lens for IQ4 150MP / H6D-100c backs. 120mm image circle at f/11. Threads into a Copal #1 shutter.",
  },
  {
    id: "rodenstock-digaron-s-138mm-f6.5-hr",
    maker: "Rodenstock",
    name: "Rodenstock HR Digaron-S 138mm f/6.5",
    mount: "Copal",
    focalLength: [138],
    fStop: [6.5],
    format: "Large",
    focus: ["MF"],
    hasStabilizer: false,
    hasDustMoistureResistance: false,
    minFocusDistance: 1.4,
    weight: 450,
    bladesCount: 5,
    elements: 6,
    groups: 4,
    imageCircle: 140,
    releaseDate: "2011",
    discontinued: false,
    officialUrl: "https://www.rodenstock-photo.com/",
    urls: {
      official: "https://www.rodenstock-photo.com/",
    },
    note: "Long tele for technical cameras. 140mm image circle at f/11 supports large shift for landscape stitching. Threads into a Copal #1 shutter.",
  },
  {
    id: "rodenstock-apo-sironar-digital-55mm-f4.5",
    maker: "Rodenstock",
    name: "Rodenstock Apo-Sironar-Digital 55mm f/4.5",
    mount: "Copal",
    focalLength: [55],
    fStop: [4.5],
    format: "Large",
    focus: ["MF"],
    hasStabilizer: false,
    hasDustMoistureResistance: false,
    minFocusDistance: 0.55,
    weight: 280,
    bladesCount: 5,
    elements: 6,
    groups: 4,
    imageCircle: 80,
    releaseDate: "2002",
    discontinued: true,
    officialUrl: "https://www.rodenstock-photo.com/",
    urls: {
      official: "https://www.rodenstock-photo.com/",
    },
    note: "Legacy near-symmetric APO design predating the HR Digaron line. 80mm image circle at f/11 for 44x33 CMOS coverage with modest shift. Threads into a Copal #0 shutter.",
  },
  {
    id: "rodenstock-apo-sironar-digital-100mm-f5.6",
    maker: "Rodenstock",
    name: "Rodenstock Apo-Sironar-Digital 100mm f/5.6",
    mount: "Copal",
    focalLength: [100],
    fStop: [5.6],
    format: "Large",
    focus: ["MF"],
    hasStabilizer: false,
    hasDustMoistureResistance: false,
    minFocusDistance: 1.0,
    weight: 300,
    bladesCount: 5,
    elements: 6,
    groups: 4,
    imageCircle: 120,
    releaseDate: "2002",
    discontinued: true,
    officialUrl: "https://www.rodenstock-photo.com/",
    urls: {
      official: "https://www.rodenstock-photo.com/",
    },
    note: "Legacy APO normal from the pre-HR era. 120mm image circle at f/11. Threads into a Copal #0 shutter.",
  },
  {
    id: "rodenstock-grandagon-n-45mm-f4.5",
    maker: "Rodenstock",
    name: "Rodenstock Grandagon-N 45mm f/4.5",
    mount: "Copal",
    focalLength: [45],
    fStop: [4.5],
    format: "Large",
    focus: ["MF"],
    hasStabilizer: false,
    hasDustMoistureResistance: false,
    minFocusDistance: 0.45,
    weight: 600,
    bladesCount: 5,
    elements: 8,
    groups: 4,
    imageCircle: 125,
    releaseDate: "1990",
    discontinued: true,
    officialUrl: "https://www.rodenstock-photo.com/",
    urls: {
      official: "https://www.rodenstock-photo.com/",
    },
    note: "Legacy super-wide originally designed for 4x5 field cameras. 125mm image circle at f/22 allows large stitching / shift on medium-format digital backs. Threads into a Copal #0 shutter.",
  },
];
