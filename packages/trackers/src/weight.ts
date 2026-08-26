/**
 * Weight tracker with IOM/NAM gestational weight-gain guidance.
 *
 * Guidance bands vary by pre-pregnancy BMI. The tracker reports where the
 * mother sits relative to the recommended band and says nothing else —
 * weight in pregnancy is a clinician's conversation (invariant 4), so the
 * UI copy points at the provider rather than editorialising.
 */
export type BmiCategory = 'underweight' | 'normal' | 'overweight' | 'obese';

export function bmiCategory(bmi: number): BmiCategory {
  if (bmi < 18.5) return 'underweight';
  if (bmi < 25) return 'normal';
  if (bmi < 30) return 'overweight';
  return 'obese';
}

export function bmi(weightKg: number, heightM: number): number {
  return weightKg / (heightM * heightM);
}

/** Total recommended gain for a singleton pregnancy, kg. IOM 2009, reaffirmed ACOG. */
export const TOTAL_GAIN_KG: Readonly<Record<BmiCategory, { min: number; max: number }>> = {
  underweight: { min: 12.7, max: 18.1 },
  normal: { min: 11.3, max: 15.9 },
  overweight: { min: 6.8, max: 11.3 },
  obese: { min: 5.0, max: 9.1 },
};

/** Weekly rate in trimesters 2–3, kg/week. */
export const WEEKLY_RATE_KG: Readonly<Record<BmiCategory, { min: number; max: number }>> = {
  underweight: { min: 0.44, max: 0.58 },
  normal: { min: 0.35, max: 0.5 },
  overweight: { min: 0.23, max: 0.33 },
  obese: { min: 0.17, max: 0.27 },
};

export interface WeightEntry {
  readonly week: number;
  readonly weightKg: number;
}

export interface WeightPosition {
  readonly gainedKg: number;
  readonly expectedMinKg: number;
  readonly expectedMaxKg: number;
  readonly within: boolean;
}

/**
 * Expected cumulative band at a gestational week: ~0.5–2 kg total across the
 * first trimester, then the weekly rate.
 */
export function expectedGainAt(week: number, category: BmiCategory): { min: number; max: number } {
  const t1Weeks = Math.min(week, 13);
  const t1 = { min: (0.5 * t1Weeks) / 13, max: (2.0 * t1Weeks) / 13 };
  const laterWeeks = Math.max(0, week - 13);
  const rate = WEEKLY_RATE_KG[category];
  return { min: t1.min + rate.min * laterWeeks, max: t1.max + rate.max * laterWeeks };
}

export function weightPosition(
  prePregnancyKg: number,
  entries: readonly WeightEntry[],
  category: BmiCategory,
): WeightPosition | null {
  const latest = [...entries].sort((a, b) => a.week - b.week).at(-1);
  if (!latest) return null;
  const gained = latest.weightKg - prePregnancyKg;
  const expected = expectedGainAt(latest.week, category);
  return {
    gainedKg: Math.round(gained * 10) / 10,
    expectedMinKg: Math.round(expected.min * 10) / 10,
    expectedMaxKg: Math.round(expected.max * 10) / 10,
    within: gained >= expected.min - 0.5 && gained <= expected.max + 0.5,
  };
}
