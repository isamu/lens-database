// ================================================================
// Kodak Retina Reflex DKL lenses (1957-1966, West Germany)
// ----------------------------------------------------------------
// The Kodak Retina Reflex family (Retina Reflex, Retina Reflex S,
// III, IV) were leaf-shutter SLRs built at Kodak AG Stuttgart, using
// the shared Deckel bayonet (DKL) mount also found on Voigtländer
// Bessamatic / Ultramatic and Zeiss Ikon Contaflex Super BC. Optical
// designs were sourced from Schneider-Kreuznach (Curtagon, Xenon,
// Xenar, Tele-Xenar, Longar-Xenon, Tele-Arton, Rotelar) and — for a
// small Retina IIIS / Reflex IV run — from Rodenstock (Heligon,
// Ysarex). All lenses are manual-focus, single-coated (later dual-
// coated on some late Xenon and Tele-Xenar samples), with the DKL
// bayonet's characteristic exposure-index coupling for the body's
// selenium / CdS meter. Line ceased with the Retina IV in 1966 when
// Kodak AG Stuttgart discontinued the Retina Reflex system.
//
// Cult classics on modern mirrorless via DKL-to-E / DKL-to-M / DKL-
// to-Z helicoid adapters. Prized for the Schneider Xenon / Curtagon
// rendering and the pre-COSINA Rodenstock Heligon glow. EAN codes
// are not fabricated — slug ids are used throughout.
// ================================================================
export const kodakLensDataSet = [
    // ============================================================
    // Retina-Curtagon 28mm f/4 — Schneider-designed cult wide
    // ============================================================
    {
        id: "kodak-retina-curtagon-28mm-f4-dkl",
        maker: "Kodak",
        name: "Retina-Curtagon 28mm F4 DKL",
        mount: "DKL",
        focalLength: [28],
        fStop: [4],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 0.4,
        weight: 190,
        bladesCount: 5,
        elements: 7,
        groups: 7,
        releaseDate: "1963",
        discontinued: true,
        discontinuedDate: "1966",
        note: "Schneider-Kreuznach Curtagon 28/4 retrofocus wide for the Kodak Retina Reflex system on the Deckel (DKL) mount. Widest native Retina Reflex lens and a genuine cult classic — the same optical design was also badged for Voigtländer Bessamatic. Seven-element / seven-group retrofocus with single-layer coating; pronounced sharpness fall-off and glow wide open, tightens up nicely by f/5.6.",
    },
    // ============================================================
    // Retina-Curtar-Xenon 35mm f/2.8 — Schneider standard wide
    // ============================================================
    {
        id: "kodak-retina-curtar-xenon-35mm-f2.8-dkl",
        maker: "Kodak",
        name: "Retina-Curtar-Xenon 35mm F2.8 DKL",
        mount: "DKL",
        focalLength: [35],
        fStop: [2.8],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 0.6,
        weight: 175,
        bladesCount: 5,
        elements: 6,
        groups: 6,
        releaseDate: "1958",
        discontinued: true,
        discontinuedDate: "1966",
        note: "Schneider-Kreuznach Curtar-Xenon retrofocus moderate wide for Retina Reflex on the DKL mount. The 'Curtar' prefix denotes the Retina-fitting variant of the Curtagon design; six-element / six-group with single-layer coating. Standard wide option in the Retina Reflex kit alongside the 28/4.",
    },
    // ============================================================
    // Retina-Xenon 50mm f/1.9 — Schneider kit cult classic
    // ============================================================
    {
        id: "kodak-retina-xenon-50mm-f1.9-dkl",
        maker: "Kodak",
        name: "Retina-Xenon 50mm F1.9 DKL",
        mount: "DKL",
        focalLength: [50],
        fStop: [1.9],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 0.6,
        weight: 195,
        bladesCount: 5,
        elements: 6,
        groups: 4,
        releaseDate: "1957",
        discontinued: true,
        discontinuedDate: "1966",
        note: "Schneider-Kreuznach Xenon 50/1.9 double-Gauss on the Deckel (DKL) mount — the kit normal shipped with most Kodak Retina Reflex bodies. Six-element / four-group Xenon, direct descendant of the Retina IIIC folding-camera Xenon. Cult classic for its creamy tonal transitions and swirly wide-open rendering; heavily adapted to modern mirrorless.",
    },
    // ============================================================
    // Retina-Xenon 50mm f/1.9 II — later multi-coated revision
    // ============================================================
    {
        id: "kodak-retina-xenon-50mm-f1.9-ii-dkl",
        maker: "Kodak",
        name: "Retina-Xenon 50mm F1.9 II DKL",
        mount: "DKL",
        focalLength: [50],
        fStop: [1.9],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 0.6,
        weight: 195,
        bladesCount: 5,
        elements: 6,
        groups: 4,
        releaseDate: "1964",
        discontinued: true,
        discontinuedDate: "1966",
        note: "Later Schneider-Kreuznach Xenon 50/1.9 revision for Retina Reflex IV — improved dual-layer coating and modernised barrel. Same 6/4 optical formula as the original Retina-Xenon 50/1.9. Higher contrast and better flare control than the earlier single-coated version.",
        predecessorId: "kodak-retina-xenon-50mm-f1.9-dkl",
    },
    // ============================================================
    // Retina-Xenar 50mm f/2.8 — Schneider budget standard
    // ============================================================
    {
        id: "kodak-retina-xenar-50mm-f2.8-dkl",
        maker: "Kodak",
        name: "Retina-Xenar 50mm F2.8 DKL",
        mount: "DKL",
        focalLength: [50],
        fStop: [2.8],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 0.6,
        weight: 130,
        bladesCount: 5,
        elements: 4,
        groups: 3,
        releaseDate: "1957",
        discontinued: true,
        discontinuedDate: "1966",
        note: "Schneider-Kreuznach Xenar 50/2.8 Tessar-type kit standard for entry-level Retina Reflex bodies on the DKL mount. Four-element / three-group Xenar, single-coated. The economy alternative to the faster Xenon 50/1.9 — very sharp stopped down, characteristic Tessar rendering.",
    },
    // ============================================================
    // Retina-Heligon 50mm f/1.9 — Rodenstock cult variant
    // ============================================================
    {
        id: "kodak-retina-heligon-50mm-f1.9-dkl",
        maker: "Kodak",
        name: "Retina-Heligon 50mm F1.9 DKL",
        mount: "DKL",
        focalLength: [50],
        fStop: [1.9],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 0.6,
        weight: 200,
        bladesCount: 5,
        elements: 6,
        groups: 4,
        releaseDate: "1961",
        discontinued: true,
        discontinuedDate: "1966",
        note: "Rare Rodenstock Heligon 50/1.9 double-Gauss variant of the Retina Reflex kit normal — Kodak dual-sourced its 50mm fast normals from Schneider (Xenon) and Rodenstock (Heligon) on select Retina Reflex production. Slightly warmer, glowier rendering than the Xenon; cult favourite. Six-element / four-group with single-layer coating.",
    },
    // ============================================================
    // Retina-Heligon 50mm f/2 — Rodenstock slower standard
    // ============================================================
    {
        id: "kodak-retina-heligon-50mm-f2-dkl",
        maker: "Kodak",
        name: "Retina-Heligon 50mm F2 DKL",
        mount: "DKL",
        focalLength: [50],
        fStop: [2],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 0.6,
        weight: 175,
        bladesCount: 5,
        elements: 6,
        groups: 4,
        releaseDate: "1961",
        discontinued: true,
        discontinuedDate: "1966",
        note: "Rodenstock Heligon 50/2 double-Gauss variant for entry Retina Reflex bodies on the DKL mount — a compact mid-speed alternative to the Heligon 50/1.9 and Xenon 50/1.9. Warmer rendering than the equivalent Xenar, six-element / four-group double-Gauss with single-layer coating.",
    },
    // ============================================================
    // Retina-Longar-Xenon 80mm f/4 — Schneider short tele
    // ============================================================
    {
        id: "kodak-retina-longar-xenon-80mm-f4-dkl",
        maker: "Kodak",
        name: "Retina-Longar-Xenon 80mm F4 DKL",
        mount: "DKL",
        focalLength: [80],
        fStop: [4],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 1.2,
        weight: 180,
        bladesCount: 5,
        elements: 5,
        groups: 4,
        releaseDate: "1957",
        discontinued: true,
        discontinuedDate: "1966",
        note: "Schneider-Kreuznach Longar-Xenon 80/4 short portrait tele on the Deckel (DKL) mount. Compact five-element / four-group tele; 'Longar' denoted the Retina line's longer-focus Xenon derivatives. Single-coated, gentle rendering — the standard Retina Reflex portrait choice below the 135mm Tele-Xenar.",
    },
    // ============================================================
    // Retina-Xenon 85mm f/4 — Schneider alternative portrait
    // ============================================================
    {
        id: "kodak-retina-xenon-85mm-f4-dkl",
        maker: "Kodak",
        name: "Retina-Xenon 85mm F4 DKL",
        mount: "DKL",
        focalLength: [85],
        fStop: [4],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 1.2,
        weight: 190,
        bladesCount: 5,
        elements: 5,
        groups: 4,
        releaseDate: "1958",
        discontinued: true,
        discontinuedDate: "1966",
        note: "Schneider-Kreuznach Xenon 85/4 short portrait tele on the Deckel (DKL) mount — an alternative to the Longar-Xenon 80/4 sold on the Retina Reflex S / III catalogue. Five-element / four-group with single-layer coating; softer wide open than the modern equivalents.",
    },
    // ============================================================
    // Retina-Tele-Xenar 135mm f/4 — Schneider classic tele
    // ============================================================
    {
        id: "kodak-retina-tele-xenar-135mm-f4-dkl",
        maker: "Kodak",
        name: "Retina-Tele-Xenar 135mm F4 DKL",
        mount: "DKL",
        focalLength: [135],
        fStop: [4],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 2.5,
        weight: 460,
        bladesCount: 5,
        elements: 5,
        groups: 4,
        releaseDate: "1957",
        discontinued: true,
        discontinuedDate: "1966",
        note: "Schneider-Kreuznach Tele-Xenar 135/4 classic Retina Reflex telephoto on the Deckel (DKL) mount. Five-element / four-group Ernostar-derived design; single-coated on early samples, dual-coated on late. Compact and light for the era; the workhorse tele of the Retina Reflex system.",
    },
    // ============================================================
    // Retina-Tele-Arton 85mm f/4 — Schneider alternative
    // ============================================================
    {
        id: "kodak-retina-tele-arton-85mm-f4-dkl",
        maker: "Kodak",
        name: "Retina-Tele-Arton 85mm F4 DKL",
        mount: "DKL",
        focalLength: [85],
        fStop: [4],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 1.2,
        weight: 210,
        bladesCount: 5,
        elements: 4,
        groups: 4,
        releaseDate: "1959",
        discontinued: true,
        discontinuedDate: "1966",
        note: "Schneider-Kreuznach Tele-Arton 85/4 short tele variant on the Deckel (DKL) mount — the 'Arton' family is Schneider's proper telephoto design (physical length shorter than focal length). Four-element / four-group. Slightly higher-contrast rendering than the Longar-Xenon 80/4 sibling.",
    },
    // ============================================================
    // Retina-Rotelar 200mm f/4.8 — Rodenstock long tele
    // ============================================================
    {
        id: "kodak-retina-rotelar-200mm-f4.8-dkl",
        maker: "Kodak",
        name: "Retina-Rotelar 200mm F4.8 DKL",
        mount: "DKL",
        focalLength: [200],
        fStop: [4.8],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 4,
        weight: 780,
        bladesCount: 5,
        elements: 5,
        groups: 4,
        releaseDate: "1961",
        discontinued: true,
        discontinuedDate: "1966",
        note: "Rodenstock Rotelar 200/4.8 telephoto — the longest native Retina Reflex lens on the Deckel (DKL) mount. Rodenstock-designed Ernostar-heritage 5/4 formula, single-coated. Rare in the wild; the DKL system's limited exit pupil geometry makes long teles unusual.",
    },
    // ============================================================
    // Retina Zoom 28-80mm f/4 — very rare DKL zoom
    // ============================================================
    {
        id: "kodak-retina-zoom-28-80mm-f4-dkl",
        maker: "Kodak",
        name: "Retina Zoom 28-80mm F4 DKL",
        mount: "DKL",
        focalLength: [28, 80],
        fStop: [4],
        format: "Full-Frame",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        minFocusDistance: 1.5,
        weight: 850,
        bladesCount: 5,
        elements: 13,
        groups: 10,
        releaseDate: "1964",
        discontinued: true,
        discontinuedDate: "1966",
        note: "Very rare Schneider-Kreuznach-designed wide-standard zoom for late Retina Reflex IV on the Deckel (DKL) mount. One of the earliest wide-to-short-tele SLR zooms — thirteen elements in ten groups, constant f/4. Cult grail item; extremely limited production before the Retina Reflex line was discontinued in 1966.",
    },
];
