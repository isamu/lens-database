// ================================================================
// Soviet Contax-RF-mount lenses (1947-1985+, USSR). After WWII the
// Contax II tooling and a train of Zeiss Ikon Dresden engineers were
// taken from Jena to the Arsenal factory in Kiev (Ukrainian SSR) as
// war reparations. Arsenal launched the Kiev / Kiev-2 / Kiev-3 /
// Kiev-4 rangefinder cameras — near-perfect Contax II clones — and
// KMZ (Krasnogorsk Mechanical Works, near Moscow) and Arsenal (Kiev)
// produced a large family of Sonnar / Biogon / Biotar / Topogon
// derivatives for the mount under the brand names Jupiter, Helios,
// Orion, Russar, Zorki, and Rubin. For simplicity every Soviet
// Contax-RF-mount lens is filed here under `maker: "Kiev"` with the
// actual factory of origin noted in each record.
//
// Sonnar → Jupiter chronology, in one glance:
//   Zeiss Sonnar 50/2   (1932, Dresden)  → Jupiter-8    50/2
//   Zeiss Sonnar 50/1.5 (1932, Dresden)  → Jupiter-3    50/1.5
//   Zeiss Sonnar 85/2   (1936, Dresden)  → Jupiter-9    85/2
//   Zeiss Sonnar 135/4  (1934, Dresden)  → Jupiter-11   135/4
//   Zeiss Biogon 35/2.8 (1937, Dresden)  → Jupiter-12   35/2.8
//   Zeiss Topogon 25/4  (1930s Dresden)  → Orion-15     28/6
//
// Early samples (late 1940s / early 1950s) are un- or single-coated;
// later "M" / "МЦ" (multi-coating) samples arrived from the late
// 1970s. All mounts are the Contax RF bayonet, so these lenses also
// mount on pre-war Zeiss Contax I/II/III bodies (see the `zeiss/contaxrf`
// dataset). Enormous cult following on Sony E, Fujifilm X, Leica M
// (via specialty adapters). EAN codes are not fabricated — slug ids
// throughout.
// ================================================================
export const kievLensDataSet = [
    // ============================================================
    // Russar MR-2 20mm f/5.6 — Roosinov ultra-wide, cult
    // ============================================================
    {
        id: "kiev-russar-mr-2-20mm-f5.6",
        maker: "Kiev",
        name: "Russar MR-2 20mm F5.6 (Kiev RF)",
        mount: "ContaxRF",
        focalLength: [20],
        fStop: [5.6],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 0.5,
        weight: 100,
        bladesCount: 8,
        elements: 6,
        groups: 5,
        releaseDate: "1958",
        discontinued: true,
        discontinuedDate: "1985",
        note: "Cult Soviet super-wide by Mikhail Roosinov, the world's first mass-produced 20mm rangefinder lens and the pioneering design that solved corner illumination on ultra-wides (the 'Roosinov formula'). Uses external finder. KMZ Krasnogorsk. Legendary among adapted-lens shooters on modern mirrorless.",
    },
    // ============================================================
    // Orion-15 28mm f/6 — Topogon-copy, rare
    // ============================================================
    {
        id: "kiev-orion-15-28mm-f6",
        maker: "Kiev",
        name: "Orion-15 28mm F6 (Kiev RF)",
        mount: "ContaxRF",
        focalLength: [28],
        fStop: [6],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 1,
        weight: 130,
        bladesCount: 8,
        elements: 4,
        groups: 4,
        releaseDate: "1955",
        discontinued: true,
        discontinuedDate: "1975",
        note: "Symmetrical four-element Topogon-derived wide, direct descendant of the pre-war Zeiss Topogon 25/4 (Dresden). Requires external viewfinder; unusual F6 max aperture. Rare and cult. KMZ Krasnogorsk.",
    },
    // ============================================================
    // Jupiter-12 35mm f/2.8 — Biogon copy, cult wide
    // ============================================================
    {
        id: "kiev-jupiter-12-35mm-f2.8",
        maker: "Kiev",
        name: "Jupiter-12 35mm F2.8 (Kiev RF)",
        mount: "ContaxRF",
        focalLength: [35],
        fStop: [2.8],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 1,
        weight: 140,
        bladesCount: 9,
        elements: 6,
        groups: 4,
        releaseDate: "1953",
        discontinued: true,
        discontinuedDate: "1985",
        note: "Cult Soviet reissue of the pre-war Zeiss Biogon 35/2.8 (Bertele, 1937). Enormous rear element protrudes deep into the body — physically incompatible with many later cameras (SLRs, some Leica M helicoids). On Contax/Kiev RF it is a stellar performer with classic Biogon signature. KMZ Krasnogorsk, later Arsenal Kiev.",
    },
    // ============================================================
    // Rubin-1 37-80mm f/2.8 — first Soviet zoom
    // ============================================================
    {
        id: "kiev-rubin-1-37-80mm-f2.8",
        maker: "Kiev",
        name: "Rubin-1 37-80mm F2.8 (Kiev RF)",
        mount: "ContaxRF",
        focalLength: [37, 80],
        fStop: [2.8],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 1,
        weight: 800,
        bladesCount: 8,
        elements: 14,
        groups: 11,
        releaseDate: "1960",
        discontinued: true,
        discontinuedDate: "1970",
        note: "The first Soviet zoom lens, shown at the 1958 Brussels World Fair and produced for the short-lived Zenit-6 / Start SLRs. Extremely rare in Contax RF mount — collector cult item. KMZ Krasnogorsk.",
    },
    // ============================================================
    // Jupiter-8 50mm f/2 — Sonnar copy standard
    // ============================================================
    {
        id: "kiev-jupiter-8-50mm-f2",
        maker: "Kiev",
        name: "Jupiter-8 50mm F2 (Kiev RF)",
        mount: "ContaxRF",
        focalLength: [50],
        fStop: [2],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 1,
        weight: 130,
        bladesCount: 9,
        elements: 6,
        groups: 3,
        releaseDate: "1948",
        discontinued: true,
        discontinuedDate: "1985",
        note: "Direct Soviet reissue of the pre-war Zeiss Sonnar 50/2 (Bertele, 1932). The 'kit' standard for the Kiev rangefinders. Single-coated early production, multi-coated late samples. Classic Sonnar rendering at a fraction of the Zeiss price. KMZ Krasnogorsk, later Arsenal Kiev.",
    },
    // ============================================================
    // Jupiter-8M 50mm f/2 — late multi-coated
    // ============================================================
    {
        id: "kiev-jupiter-8m-50mm-f2",
        maker: "Kiev",
        name: "Jupiter-8M 50mm F2 (Kiev RF)",
        mount: "ContaxRF",
        focalLength: [50],
        fStop: [2],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 0.9,
        weight: 140,
        bladesCount: 9,
        elements: 6,
        groups: 3,
        releaseDate: "1970",
        discontinued: true,
        discontinuedDate: "1985",
        note: "Later click-stopped multi-coated variant of the Jupiter-8. Improved contrast and flare resistance over the un-clicked original. Arsenal Kiev.",
    },
    // ============================================================
    // Jupiter-3 50mm f/1.5 — CULT Sonnar-copy fast normal
    // ============================================================
    {
        id: "kiev-jupiter-3-50mm-f1.5",
        maker: "Kiev",
        name: "Jupiter-3 50mm F1.5 (Kiev RF)",
        mount: "ContaxRF",
        focalLength: [50],
        fStop: [1.5],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 1,
        weight: 145,
        bladesCount: 11,
        elements: 7,
        groups: 3,
        releaseDate: "1948",
        discontinued: true,
        discontinuedDate: "1985",
        note: "The 'poor man's Sonnar 50/1.5' — direct Soviet reissue of the pre-war Zeiss Sonnar 50/1.5 (Bertele, 1932), built at first from captured Zeiss glass. Cult status among adapted-lens shooters for its Sonnar swirly bokeh and low-contrast pre-war rendering. Early KMZ samples are the most sought-after; late Arsenal samples are common.",
    },
    // ============================================================
    // Zorki-10 50mm f/1.5 — rare late Sonnar-clone
    // ============================================================
    {
        id: "kiev-zorki-10-50mm-f1.5",
        maker: "Kiev",
        name: "Zorki-10 50mm F1.5 (Kiev RF)",
        mount: "ContaxRF",
        focalLength: [50],
        fStop: [1.5],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 1,
        weight: 160,
        bladesCount: 8,
        elements: 7,
        groups: 3,
        releaseDate: "1972",
        discontinued: true,
        discontinuedDate: "1985",
        note: "Very rare late Soviet fast fifty — a small production run of a re-computed Sonnar 50/1.5 derivative. Almost never seen outside the former USSR; a collector curio. Factory attribution disputed (likely KMZ prototype).",
    },
    // ============================================================
    // Helios-103 53mm f/1.8 — cult later fast normal
    // ============================================================
    {
        id: "kiev-helios-103-53mm-f1.8",
        maker: "Kiev",
        name: "Helios-103 53mm F1.8 (Kiev RF)",
        mount: "ContaxRF",
        focalLength: [53],
        fStop: [1.8],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 0.9,
        weight: 135,
        bladesCount: 8,
        elements: 6,
        groups: 4,
        releaseDate: "1978",
        discontinued: true,
        discontinuedDate: "1985",
        note: "Later cult Soviet fast normal, standard on the Kiev-4AM. Double-Gauss (not Sonnar) formula, multi-coated, higher contrast than the Jupiter-8. Cult favorite for its 'modern' rendering with pre-war build quality. Arsenal Kiev.",
    },
    // ============================================================
    // Jupiter-9 85mm f/2 — CULT Sonnar-copy portrait king
    // ============================================================
    {
        id: "kiev-jupiter-9-85mm-f2",
        maker: "Kiev",
        name: "Jupiter-9 85mm F2 (Kiev RF)",
        mount: "ContaxRF",
        focalLength: [85],
        fStop: [2],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 1.15,
        weight: 385,
        bladesCount: 15,
        elements: 7,
        groups: 3,
        releaseDate: "1950",
        discontinued: true,
        discontinuedDate: "1985",
        note: "Soviet portrait king — reissue of the pre-war Zeiss Sonnar 85/2 (Bertele, 1936). 15-blade aperture gives near-circular out-of-focus highlights, prized for silky skin rendering and painterly bokeh. Enormous cult status on modern mirrorless (Sony E, Fujifilm X). Early black-barrel KMZ samples are the most sought-after; later Arsenal Kiev silver-barrel samples common.",
    },
    // ============================================================
    // Jupiter-11 135mm f/4 — Sonnar-copy tele
    // ============================================================
    {
        id: "kiev-jupiter-11-135mm-f4",
        maker: "Kiev",
        name: "Jupiter-11 135mm F4 (Kiev RF)",
        mount: "ContaxRF",
        focalLength: [135],
        fStop: [4],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 1.5,
        weight: 490,
        bladesCount: 11,
        elements: 4,
        groups: 3,
        releaseDate: "1948",
        discontinued: true,
        discontinuedDate: "1985",
        note: "Soviet reissue of the pre-war Zeiss Sonnar 135/4 (1934). Common but competent classic short tele — cheap entry point into the Sonnar sound. Mounts on the outer bayonet, requires the correct RF cam for coupled focus. KMZ Krasnogorsk, later Arsenal Kiev.",
    },
    // ============================================================
    // Jupiter-11A 135mm f/4 — later automatic-diaphragm variant
    // ============================================================
    {
        id: "kiev-jupiter-11a-135mm-f4",
        maker: "Kiev",
        name: "Jupiter-11A 135mm F4 (Kiev RF)",
        mount: "ContaxRF",
        focalLength: [135],
        fStop: [4],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 1.5,
        weight: 480,
        bladesCount: 11,
        elements: 4,
        groups: 3,
        releaseDate: "1975",
        discontinued: true,
        discontinuedDate: "1985",
        note: "Later multi-coated variant of the Jupiter-11 with black barrel and preset diaphragm. Improved contrast and coatings over the original silver-barrel version. Arsenal Kiev.",
    },
    // ============================================================
    // Tele-Helios 40 100mm f/4.5 — obscure short tele
    // ============================================================
    {
        id: "kiev-tele-helios-40-100mm-f4.5",
        maker: "Kiev",
        name: "Tele-Helios 40 100mm F4.5 (Kiev RF)",
        mount: "ContaxRF",
        focalLength: [100],
        fStop: [4.5],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 1.5,
        weight: 320,
        bladesCount: 8,
        elements: 5,
        groups: 4,
        releaseDate: "1965",
        discontinued: true,
        discontinuedDate: "1975",
        note: "Obscure Soviet short-tele prototype series in Contax RF mount — rare production, exact spec varies by sample. Collector curio rather than a working lens. KMZ Krasnogorsk.",
    },
    // ============================================================
    // Jupiter-6 180mm f/2.8 — Olympia-Sonnar copy, rare
    // ============================================================
    {
        id: "kiev-jupiter-6-180mm-f2.8",
        maker: "Kiev",
        name: "Jupiter-6 180mm F2.8 (Kiev RF)",
        mount: "ContaxRF",
        focalLength: [180],
        fStop: [2.8],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 2.5,
        weight: 1900,
        bladesCount: 14,
        elements: 5,
        groups: 4,
        releaseDate: "1958",
        discontinued: true,
        discontinuedDate: "1970",
        note: "Direct Soviet reissue of the legendary 'Olympia-Sonnar' 180/2.8 (Zeiss Dresden, 1936 Berlin Olympics). Big, heavy, brass-and-glass; requires the Kiev-4 reflex housing 'NFK-3' for framing. Cult grail item. KMZ Krasnogorsk.",
    },
    // ============================================================
    // Jupiter-13 105mm f/4 — later short tele
    // ============================================================
    {
        id: "kiev-jupiter-13-105mm-f4",
        maker: "Kiev",
        name: "Jupiter-13 105mm F4 (Kiev RF)",
        mount: "ContaxRF",
        focalLength: [105],
        fStop: [4],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 1.2,
        weight: 350,
        bladesCount: 10,
        elements: 4,
        groups: 3,
        releaseDate: "1955",
        discontinued: true,
        discontinuedDate: "1975",
        note: "Compact Sonnar-formula short tele of the Jupiter family — an interesting focal length between the Jupiter-9 (85) and Jupiter-11 (135). Rare in Contax RF mount. KMZ Krasnogorsk.",
    },
];
