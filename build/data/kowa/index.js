// ================================================================
// Kowa PROMINAR — Japanese apochromatic MF primes for Micro Four
// Thirds, designed and manufactured by Kowa Optical (Nagoya). The
// PROMINAR line grew out of Kowa's TSN spotting-scope objectives
// and is highly regarded for chromatic-aberration correction. All
// three photo primes are manual-focus, manual-aperture, all-metal,
// no electronic contacts and no image stabilization. Specs sourced
// from kowa-usa.com/prominar-lens and kowa-lenses.jp. EAN codes
// are not fabricated — slug ids are used.
// ================================================================
export const kowaLensDataSet = [
    // ============================================================
    // PROMINAR 8.5mm f/2.8 — ultra-wide MFT apo prime
    // ============================================================
    {
        id: "kowa-prominar-8.5mm-f2.8-mft",
        maker: "Kowa",
        name: "PROMINAR 8.5mm f/2.8 MFT",
        mount: "MicroFourThirds",
        focalLength: [8.5],
        fStop: [2.8],
        format: "FourThirds",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        filterDiameter: 86,
        minFocusDistance: 0.2,
        bladesCount: 9,
        elements: 12,
        groups: 9,
        weight: 550,
        diameter: 90,
        length: 82,
        officialUrl: "https://www.kowa-usa.com/prominar-lens/",
        urls: {
            official: "https://www.kowa-usa.com/prominar-lens/",
            officialjp: "https://www.kowa-lenses.jp/",
        },
        note: "Apochromatic-corrected ultra-wide MFT prime, made-in-Japan. Originally designed leveraging Kowa's spotting-scope objective know-how. All-metal barrel, MF and manual aperture, no electronic contacts.",
    },
    // ============================================================
    // PROMINAR 12mm f/1.8 — fast wide MFT apo prime
    // ============================================================
    {
        id: "kowa-prominar-12mm-f1.8-mft",
        maker: "Kowa",
        name: "PROMINAR 12mm f/1.8 MFT",
        mount: "MicroFourThirds",
        focalLength: [12],
        fStop: [1.8],
        format: "FourThirds",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        filterDiameter: 55,
        minFocusDistance: 0.2,
        bladesCount: 9,
        elements: 10,
        groups: 7,
        weight: 435,
        diameter: 66,
        length: 76,
        officialUrl: "https://www.kowa-usa.com/prominar-lens/",
        urls: {
            official: "https://www.kowa-usa.com/prominar-lens/",
            officialjp: "https://www.kowa-lenses.jp/",
        },
        note: "Apochromatic-corrected fast wide MFT prime, made-in-Japan. Highly regarded but niche. All-metal barrel, MF, manual aperture, no electronic contacts.",
    },
    // ============================================================
    // PROMINAR 25mm f/1.8 — fast normal MFT apo prime
    // ============================================================
    {
        id: "kowa-prominar-25mm-f1.8-mft",
        maker: "Kowa",
        name: "PROMINAR 25mm f/1.8 MFT",
        mount: "MicroFourThirds",
        focalLength: [25],
        fStop: [1.8],
        format: "FourThirds",
        focus: ["MF"],
        hasStabilizer: false,
        hasDustMoistureResistance: false,
        filterDiameter: 55,
        minFocusDistance: 0.25,
        bladesCount: 9,
        elements: 8,
        groups: 6,
        weight: 425,
        diameter: 66,
        length: 76,
        officialUrl: "https://www.kowa-usa.com/prominar-lens/",
        urls: {
            official: "https://www.kowa-usa.com/prominar-lens/",
            officialjp: "https://www.kowa-lenses.jp/",
        },
        note: "Apochromatic-corrected fast normal MFT prime, made-in-Japan. Originally designed leveraging Kowa's spotting-scope adapter heritage. All-metal barrel, MF, manual aperture, no electronic contacts.",
    },
];
