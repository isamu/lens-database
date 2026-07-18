export type Maker =
  | "Canon"
  | "Fujifilm"
  | "SONY"
  | "Nikon"
  | "Leica"
  | "ZEISS"
  | "SIGMA"
  | "TAMRON"
  | "Panasonic"
  | "OLYMPUS"
  | "OM SYSTEM"
  | "PENTAX"
  | "Tokina"
  | "COSINA"
  | "Voigtländer"
  | "TTArtisan"
  | "7Artisans"
  | "SG-image"
  | "Thypoch"
  | "Viltrox"
  | "Laowa"
  | "Samyang"
  | "Meike"
  | "Zhongyi"
  | "AstrHori"
  | "Sirui"
  | "Yashica"
  | "Konica"
  | "Minolta"
  | "Pergear"
  | "Brightin"
  | "Kamlan"
  | "Kowa"
  | "Meyer"
  | "Zenit"
  | "Chinon"
  | "Ricoh"
  | "Rollei"
  | "Miranda"
  | "Petri"
  | "Fujica"
  | "Hasselblad"
  | "Mamiya"
  | "Bronica"
  | "Angenieux"
  | "Steinheil"
  | "Kern"
  | "Meopta"
  | "Enna"
  | "Isco"
  | "Kiev"
  | "Alpa"
  | "Pentacon"
  | "Kodak"
  | "Praktica"
  | "Yongnuo"
  | "Vivitar"
  | "Kiron"
  | "Osawa"
  | "Panagor"
  | "Soligor"
  | "PhaseOne"
  | "Rodenstock"
  | "Schneider";

export type CanonMount = "RF" | "RF-S" | "EF" | "EF-S" | "EF-M" | "FD" | "FL" | "LTM";
export type FujifilmMount = "X" | "G" | "R";
export type SonyMount = "A" | "E";
export type NikonMount = "Z" | "F" | "S";
// Olympus mounts:
// - FourThirds:      DSLR 4/3 System bayonet (2003-2010, with Olympus E-1..E-5).
// - MicroFourThirds: mirrorless Micro Four Thirds (2008-, PEN / OM-D / OM SYSTEM).
// - OM:              35mm SLR OM System bayonet (1972-2003, Zuiko MF).
// - PenF:            Olympus Pen F half-frame SLR bayonet (1963-1970).
//                    18x24mm "half-frame" 35mm SLR — half the height of a
//                    standard 35mm frame. F.Zuiko / G.Zuiko / E.Zuiko Auto
//                    lenses in this mount are cult classics on Sony E,
//                    Fujifilm X, and MFT via specialty adapters (the
//                    half-frame image circle roughly matches APS-C).
export type OlympusMount = "FourThirds" | "MicroFourThirds" | "OM" | "PenF";
export type PanasonicMount = "L" | "FourThirds" | "MicroFourThirds";
export type PentaxMount = "K" | "645" | "M42";
export type SigmaMount = "SA";
// Leica lens mounts:
// - M: M-mount rangefinder bayonet (1954-, current)
// - L: L-mount mirrorless bayonet (2014-, current; TL/CL/SL/S1)
// - R: R-mount SLR bayonet (1964-2009)
// - LTM: Leica Thread Mount / L39 / M39 x1 screw mount rangefinder
//   (1930-1960s). The original Leica rangefinder mount used on Leica
//   I / II / III / IIIa / IIIf / IIIg. Cult classic on Leica M via
//   LTM-to-M adapter and hugely popular on Sony E / Fujifilm X via
//   specialty adapters.
export type LeicaMount = "M" | "L" | "R" | "LTM";
export type YashicaMount = "CY" | "M42";
// Contax autofocus / medium-format ecosystems (Kyocera-Contax, 1994-2005).
// All lenses were designed and built by Zeiss (maker: "ZEISS").
// - G: Contax G rangefinder AF (G1 / G2 bodies, 1994-2005).
// - N: Contax N AF SLR (N1 / NX bodies, 2000-2005).
// - 645: Contax 645 medium-format AF (Contax 645 body, 1999-2005).
//   Note the "645" tag collides with PentaxMount "645"; each record's
//   `maker` disambiguates.
export type ContaxGMount = "G";
export type ContaxNMount = "N";
export type Contax645Mount = "645";
// Zeiss Ikon Contarex bayonet (1958-1974, West Germany).
// Used on the Contarex "Bullseye", Super, Professional, Electronic, and SE.
// All lenses were made by Carl Zeiss Oberkochen (maker: "ZEISS").
// Legendary cult-classic glass adaptable to modern mirrorless via specialty adapters.
export type ContarexMount = "Contarex";
// Konica lens mounts:
// - AR: Konica AR SLR bayonet (1965-1988)
// - LTM: L39 screw. Konishiroku Hexar 50/3.5 (1948) and Konica Hexanon
//   reissues for the 2001 Hexar RF era (Konica Hexanon 60/1.2 LTM cult).
export type KonicaMount = "AR" | "LTM";
// Praktica B (electronic) SLR bayonet, VEB Pentacon Dresden (1979-1990).
// Used on Praktica B-series bodies (B100 / BC1 / BC-A / BCA / BX20 etc.).
// Native Prakticar lenses were designed by Carl Zeiss Jena, Meyer-Optik,
// Schneider Kreuznach with a B-mount adaptation of their existing designs.
export type PrakticaBMount = "B";
export type MinoltaMount = "MD" | "A";
// Rollei QBM (Quick Bayonet Mount) used on Rolleiflex SL35 series (1970-1982).
// SL is the earlier breech-lock mount on Rolleiflex SL26/SL66 systems.
export type RolleiMount = "QBM" | "SL";
// Miranda bayonet used on Miranda SLR bodies (1955-1978).
export type MirandaMount = "Miranda";
// Petri breech-lock bayonet used on Petri SLR bodies (1959-1977).
export type PetriMount = "Petri";
// Fujica FX bayonet used on Fujica AX SLR bodies (1979-1984).
// Distinct from Fujifilm X mirrorless mount — FX = Fujica bayonet.
export type FujicaMount = "FX";
// Hasselblad medium-format mounts:
// - V:   V-system bayonet used on the 500 series / 501 / 503 / 555 SLR
//        bodies and the SWC (Superwide Camera) family (1957-2013).
//        All V-system lenses were designed by Carl Zeiss (T* coating).
//        Generations: C, CF, CB, CFi, CFE. Cult-classic medium-format
//        mount, heavily adapted to modern mirrorless (GFX, digital-back
//        on 500-series, etc.).
// - H:   H-system AF 645 bayonet (2002-2020). AF lenses for the H1 /
//        H2 / H2F / H3D / H4D / H5D / H6D bodies, developed with Fujifilm
//        (Fujinon glass for early HC, Hasselblad-designed HCD later).
//        HC = full-frame 645 film image circle; HCD = digital-optimized
//        smaller image circle. Discontinued 2020 as Hasselblad shifted
//        to the X-system.
// - XCD: X-system mirrorless bayonet (2016-current). AF lenses for the
//        44x33 CMOS X1D / X1D II 50C / X2D 100C bodies. Weather-sealed;
//        the 2022+ V-series (P) subline emphasizes compact size.
export type HasselbladMount = "V" | "H" | "XCD";
// Mamiya 645 bayonet used on the M645 (1975), 645 Super/Pro/Pro TL, and
// the 645 AF / AFD autofocus series (through 2013). Sekor "C" / "N"
// lenses are MF; "AF" lenses are electronic. The mount name "645"
// collides with PentaxMount "645" and Contax645Mount "645"; each
// record's `maker` disambiguates.
export type MamiyaMount = "645";
// Zenza Bronica bayonet systems (Tokyo, 1959-2005). Three medium-format
// families, all with dedicated Zenzanon-branded lenses:
// - ETR: 6x4.5 SLR (ETR / ETRS / ETRSi / ETRC), 1976-2004.
// - SQ:  6x6  SLR (SQ / SQ-A / SQ-Ai / SQ-B),     1980-2005.
// - GS:  6x7  SLR (GS-1),                           1983-2002.
// Zenzanon-PE = ETR; Zenzanon-PS = SQ; Zenzanon-PG = GS.
export type BronicaMount = "ETR" | "SQ" | "GS";
// Universal M42 x1 screw mount used across many makers (1949-1970s).
// Kept as a stand-alone mount so brand-independent M42 lenses can be
// registered under any maker without extending each maker's own union.
export type M42Mount = "M42";
// Exakta bayonet (Ihagee, Germany, 1936-1980).
// Used by Angénieux, Steinheil, Schneider, Meyer, Zeiss Jena, and others
// for photo primes on Exakta / Exa SLR bodies.
export type ExaktaMount = "Exakta";
// Voigtländer Prominent interchangeable-lens 35mm rangefinder mount
// (Braunschweig, Germany, 1952-1958). A helical screw-in mount used on
// the post-war Prominent I / II bodies. Native lenses (Ultron 50/2,
// Nokton 50/1.5, Color-Skopar 50/3.5, Skoparon 35/3.5, Dynaron 100/4.5,
// Super-Dynaron 150/4.5) are cult classics on modern mirrorless via
// specialty adapters. Distinct from the pre-war Prominent 6x9 folder.
export type ProminentMount = "Prominent";
// Deckel bayonet (DKL) leaf-shutter SLR mount, developed by Friedrich
// Deckel in Munich and shared across Voigtländer Bessamatic / Ultramatic
// (1959-1969), Kodak Retina Reflex, and Zeiss Ikon Contaflex Super BC.
// All Voigtländer DKL lenses (Color-Skopar X, Septon 50/2, Skoparex,
// Super-Dynarex, Zoomar 36-82) use it. Distinct from AR / M42 / Exakta.
export type BessamaticMount = "DKL";
// Zeiss Ikon Contax rangefinder bayonet (Dresden / Jena / Stuttgart,
// 1932-1945 pre-war, and revived post-war on Contax IIa/IIIa 1950-1962).
// Zeiss Ikon's answer to the Leica screw mount, with an interchangeable
// inner/outer bayonet for standard and wide/tele lenses. The same physical
// mount was cloned by the Soviet Union after WWII on the Kiev rangefinders
// (Kiev / Kiev-2 / Kiev-4, Arsenal factory), and Soviet Jupiter / Helios /
// Orion / Russar lenses in the Kiev RF mount are physically and (nearly)
// mechanically interchangeable with pre-war Zeiss Contax bodies.
// Distinct from Contax C/Y (SLR), Contax G (AF rangefinder), Contax N (AF SLR).
export type ContaxRFMount = "ContaxRF";
// Alpa proprietary bayonet (Pignons SA, Ballaigues, Switzerland, 1944-1990).
// Used across the Alpa Reflex I-III / 4-7 / 9 / 10 / 11 series of Swiss
// 35mm SLR cameras. Native lenses were manufactured by Kern-Paillard
// (Switzerland), Kinoptik (Paris), P. Angénieux (France), Schneider
// Kreuznach and others — all in the same Alpa bayonet. Cult-grail glass,
// heavily collected. The maker "Alpa" here refers to the CAMERA maker
// Pignons SA; the optical designer is credited in each record's `note`.
// Distinct from the modern ALPA of Switzerland (medium format, 1996-).
export type AlpaMount = "Alpa";
// Pentacon Six / Kiev 60 bayonet (P6), a medium-format 6×6 SLR mount.
// Introduced by VEB Pentacon (Dresden, East Germany) on the Praktisix
// (1957) and Pentacon Six (1966-1990), and cloned by Arsenal (Kiev, USSR)
// for the Kiev 6C / Kiev 60 / Kiev 88CM medium-format SLRs. Native lenses
// were made by Carl Zeiss Jena (Biometar, Flektogon, Sonnar), Meyer-Optik
// (Domiplan, Orestegor), Schneider Kreuznach, VEB Pentacon, and Arsenal
// KMZ / LOMO (Volna, Vega, Mir, Kaleinar, Jupiter). Cult classic on
// modern mirrorless and digital medium format via specialty adapters.
export type PentaconSixMount = "P6";
// Phase One / Mamiya 645AF bayonet (Phase One acquired Mamiya's camera
// business in 2015). The Blue Ring (BR) and Sk (Schneider-Kreuznach)
// AF lenses share the electronic Mamiya 645AF bayonet used on the
// 645DF / 645DF+ / XF bodies coupled to Phase One / Leaf digital backs.
// The mount name "645" collides with PentaxMount / MamiyaMount /
// Contax645Mount "645"; each record's `maker` disambiguates.
export type PhaseOneMount = "645";
// Technical / view-camera lenses (Rodenstock Digaron, Schneider-Kreuznach
// Digitar / Apo-Digitar / Super-Symmar / Apo-Symmar) do not use a fixed
// bayonet — they are supplied as bare cells that thread into a Copal
// leaf-shutter (Copal #0 or Copal #1) and mount onto a lens board of
// the host system (Alpa, Cambo WRS, Silvestri, Arca-Swiss, Linhof).
// "Copal" is used as a shared mount tag for this technical-camera segment.
export type TechnicalCameraMount = "Copal";

export type Mount =
  | CanonMount
  | FujifilmMount
  | SonyMount
  | NikonMount
  | OlympusMount
  | PanasonicMount
  | PentaxMount
  | SigmaMount
  | LeicaMount
  | YashicaMount
  | KonicaMount
  | MinoltaMount
  | RolleiMount
  | MirandaMount
  | PetriMount
  | FujicaMount
  | M42Mount
  | ExaktaMount
  | ContaxGMount
  | ContaxNMount
  | Contax645Mount
  | ContarexMount
  | HasselbladMount
  | MamiyaMount
  | BronicaMount
  | ProminentMount
  | BessamaticMount
  | ContaxRFMount
  | AlpaMount
  | PentaconSixMount
  | PrakticaBMount
  | PhaseOneMount
  | TechnicalCameraMount;

export type Format = "Large" | "Full-Frame" | "APS-C" | "FourThirds";

export type Focus = "AF" | "MF";

export type LensUrls = {
  kakaku?: string; // 価格.com
  amazonjp?: string; // Amazon Japan
  official?: string; // 公式サイト
  bcn?: string; // BCN
  yodobashi?: string; // ヨドバシ
  [key: string]: string | undefined;
};

export type LensData = {
  id: string; // Primary key (EAN/JAN code or unique identifier)
  EANCode?: string; // EAN/JAN code if available
  maker: Maker;
  name: string;
  mount: Mount;
  focalLength: number[]; // [prime lens value] or [min, max] for zoom
  fStop: number[]; // [fixed aperture] or [wide end, tele end]
  format: Format;
  focus: Focus[];
  hasStabilizer: boolean;
  hasDustMoistureResistance: boolean; // Dust and moisture resistance
  filterDiameter?: number; // mm
  minFocusDistance?: number; // Minimum focusing distance in meters
  weight?: number; // grams

  // Optical specifications
  maxMagnification?: number; // Maximum magnification ratio
  bladesCount?: number; // Number of aperture blades
  elements?: number; // Number of lens elements
  groups?: number; // Number of lens groups

  // Physical dimensions
  diameter?: number; // Lens diameter in mm
  length?: number; // Lens length in mm

  // Features
  isInternalFocus?: boolean; // Internal focusing system
  hasMacro?: boolean; // Macro / close-up specialty (0.5:1 or better as marketed)
  hasFisheye?: boolean; // Fisheye projection (diagonal or circular)
  hasTiltShift?: boolean; // Tilt / shift / perspective-control movements
  hasSoftFocus?: boolean; // Soft-focus / defocus-control specialty

  // Optics — extended
  angleOfView?: number[]; // Diagonal angle of view in degrees. [prime] or [wide, tele] for zoom
  imageCircle?: number; // Image circle diameter in mm (mainly for tilt-shift and macro probe)

  // Availability & pricing
  msrp?: number; // Manufacturer suggested retail price, JPY (tax-inclusive when the source is JP)

  // Relationships
  predecessorId?: string; // id of the earlier generation this lens replaces
  successorId?: string; // id of the newer generation that replaces this lens
  compatibleBodies?: string[]; // Camera body model names this lens is officially supported on

  // URLs and references
  officialUrl?: string;
  images?: string[];
  urls?: LensUrls;

  // Availability
  releaseDate?: string; // YYYY or YYYY-MM-DD
  discontinued?: boolean; // Production discontinued
  discontinuedDate?: string; // YYYY or YYYY-MM-DD

  // Accessories
  hoodModel?: string; // Lens hood model number
  caseModel?: string; // Lens case model number

  note?: string; // Free-form remark (e.g. overseas-only model, kit-only)
};

export type MakerMountDataObject = {
  [key in Maker]: { [key in Mount]: LensData[] };
};
