import type { Provenance } from '../types.js';

/** Consecutive pregnancy weeks, inclusive. */
export function weeks(from: number, to: number): number[] {
  const out: number[] = [];
  for (let w = from; w <= to; w += 1) out.push(w);
  return out;
}

/** The trimester bands the formation units are scoped to. */
export const T1 = weeks(4, 13);
export const T2 = weeks(14, 27);
export const T3 = weeks(28, 40);

/** Stage groups for the 0–5 substrate. */
export const INFANCY = ['newborn', 'early-infancy', 'later-infancy'] as const;
export const TODDLERHOOD = ['early-toddler', 'toddler', 'preschool'] as const;
export const ALL_0_5 = [...INFANCY, ...TODDLERHOOD] as const;

/**
 * Editorial provenance for units authored in-house.
 *
 * The reviewer strings are role gates, not yet named humans. Recruiting a
 * public-facing clinician (DOC) and theologian (TOBIAS) is an open launch task
 * — the competitive analysis is blunt that in this category named humans are
 * the trust — but the schema and gates do not wait for the hires.
 */
export const EDITORIAL: Provenance = {
  sourceOrg: 'Cairn editorial',
  sourceDate: '2026-08-26',
  reviewer: 'editorial-gate',
  reviewDate: '2026-08-26',
};

export const TOBIAS = 'tobias-gate';
export const REVIEWED = '2026-08-26';
