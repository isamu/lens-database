import { focalMax, focalMin } from "./lens";
import type { Lens } from "../types";

// Find lenses similar to `target` — same format, focal range overlaps within
// tolerance, F-number within ~1 stop. Sorted by a composite proximity score
// so the closest match comes first. Excludes the target itself and its
// predecessor/successor generation records (those get their own section on
// the detail page in the future).
const focalRange = (lens: Lens): [number, number] => [focalMin(lens), focalMax(lens)];

const centerLog = (lens: Lens): number => {
  const [lo, hi] = focalRange(lens);
  return Math.exp((Math.log(lo) + Math.log(hi)) / 2);
};

const fstopOf = (lens: Lens): number | undefined =>
  lens.fStop.length > 0 && lens.fStop[0] > 0 ? lens.fStop[0] : undefined;

// One f-stop = a factor of √2 on the aperture value. So "within 1 stop" =
// |log(a) - log(b)| / log(√2) <= 1.
const stopsBetween = (a: number, b: number): number =>
  Math.abs(Math.log(a) - Math.log(b)) / Math.log(Math.SQRT2);

const focalOverlap = (a: Lens, b: Lens): boolean => {
  const [al, ah] = focalRange(a);
  const [bl, bh] = focalRange(b);
  // 20% padding on each side so a 50mm prime still matches a 24-70 zoom.
  const pad = 0.2;
  return ah * (1 + pad) >= bl && bh * (1 + pad) >= al;
};

export const similarLenses = (target: Lens, pool: Lens[], limit = 6): Lens[] => {
  const tCenter = centerLog(target);
  const tFStop = fstopOf(target);
  const candidates: { lens: Lens; score: number }[] = [];
  for (const lens of pool) {
    if (lens.id === target.id) continue;
    if (lens.format !== target.format) continue;
    if (!focalOverlap(target, lens)) continue;
    const lFStop = fstopOf(lens);
    if (tFStop && lFStop && stopsBetween(tFStop, lFStop) > 1) continue;
    const focalScore = Math.abs(Math.log(centerLog(lens)) - Math.log(tCenter));
    const fStopScore =
      tFStop && lFStop ? stopsBetween(tFStop, lFStop) * 0.5 : tFStop && !lFStop ? 0.75 : 0;
    // Prefer same maker slightly to surface a same-line successor before a
    // third-party lookalike.
    const makerBonus = lens.maker === target.maker ? -0.05 : 0;
    candidates.push({ lens, score: focalScore + fStopScore + makerBonus });
  }
  candidates.sort((a, b) => a.score - b.score);
  return candidates.slice(0, limit).map((c) => c.lens);
};
