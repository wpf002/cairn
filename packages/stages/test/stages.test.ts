import { describe, expect, it } from 'vitest';
import {
  addDays,
  countdown,
  daysBetween,
  dueDateFromLmp,
  formatGestationalAge,
  InvalidDateError,
  isTransitioning,
  monthsBetween,
  nextStage,
  pregnancyStatus,
  rolePosition,
  roleMixForYears,
  stageForBirthdate,
  stageForMonths,
  stageProgress,
  STAGES,
  toUtcAnchor,
  controlAndResponsibility,
  coveredWeeks,
} from '@cairn/stages';

describe('calendar dates', () => {
  it('rejects malformed and impossible dates', () => {
    expect(() => toUtcAnchor('2025-2-3')).toThrow(InvalidDateError);
    expect(() => toUtcAnchor('2025-02-30')).toThrow(InvalidDateError);
    expect(() => toUtcAnchor('not-a-date')).toThrow(InvalidDateError);
  });

  it('does date arithmetic without timezone drift', () => {
    expect(daysBetween('2025-01-01', '2025-01-08')).toBe(7);
    expect(addDays('2025-12-31', 1)).toBe('2026-01-01');
    expect(daysBetween('2025-03-01', '2025-03-15')).toBe(14); // across US DST
  });

  it('computes calendar months the way a parent means them', () => {
    expect(monthsBetween('2025-03-03', '2025-04-03')).toBe(1);
    expect(monthsBetween('2025-03-03', '2025-04-02')).toBe(0);
    expect(monthsBetween('2025-01-31', '2025-02-28')).toBe(0);
    expect(monthsBetween('2024-06-15', '2026-06-15')).toBe(24);
  });
});

describe('stage resolution (section 6)', () => {
  it('covers every month from 0 to 264 with no gaps and no overlaps', () => {
    for (let m = 0; m < 264; m += 1) {
      const matches = STAGES.filter((s) => m >= s.minMonths && m < s.maxMonths);
      expect(matches, `month ${m}`).toHaveLength(1);
    }
  });

  it('has all fourteen stages in order', () => {
    expect(STAGES).toHaveLength(14);
    expect(STAGES[0]?.id).toBe('newborn');
    expect(STAGES[13]?.id).toBe('young-adult');
    for (let i = 1; i < STAGES.length; i += 1) {
      expect(STAGES[i]?.minMonths).toBe(STAGES[i - 1]?.maxMonths);
    }
  });

  it('places boundary ages on the right side', () => {
    expect(stageForMonths(0)?.id).toBe('newborn');
    expect(stageForMonths(3)?.id).toBe('early-infancy');
    expect(stageForMonths(36)?.id).toBe('preschool'); // exactly 3 years
    expect(stageForMonths(216)?.id).toBe('emerging-adult'); // 18th birthday
    expect(stageForMonths(252)?.id).toBe('young-adult'); // 21st birthday — ceremony reachable
    expect(stageForMonths(263)?.id).toBe('young-adult');
    expect(stageForMonths(264)).toBeNull(); // graduated
  });

  it('rejects unborn children and non-finite input', () => {
    expect(() => stageForMonths(-1)).toThrow(RangeError);
    expect(() => stageForMonths(Number.NaN)).toThrow(TypeError);
  });

  it('resolves from a birthdate', () => {
    expect(stageForBirthdate('2020-01-15', '2026-01-14')?.id).toBe('early-childhood');
    expect(stageForBirthdate('2020-01-15', '2027-01-15')?.id).toBe('middle-childhood');
  });

  it('reports transition into the next stage', () => {
    // Pre-adolescence runs 108–132 months; at 128 months the child is 83% through.
    expect(stageProgress(128)).toBeGreaterThan(0.8);
    expect(isTransitioning(128)).toBe(true);
    expect(isTransitioning(110)).toBe(false);
    expect(nextStage('pre-adolescence')?.id).toBe('early-adolescence');
  });
});

describe('role curves (section 12)', () => {
  it('always sums to 1 and keeps every role above zero', () => {
    for (const years of [0, 2, 5, 8, 12, 15, 18, 21]) {
      const mix = roleMixForYears(years);
      const sum = mix.caretaker + mix.coach + mix.consultant + mix.counselor;
      expect(sum).toBeCloseTo(1, 10);
      expect(mix.caretaker).toBeGreaterThan(0);
      expect(mix.counselor).toBeGreaterThan(0);
    }
  });

  it('peaks each role in its printed band', () => {
    expect(rolePosition(2).primary).toBe('caretaker');
    expect(rolePosition(8).primary).toBe('coach');
    expect(rolePosition(15).primary).toBe('consultant');
    expect(rolePosition(20).primary).toBe('counselor');
  });

  it('marks the dashboard transition label (section 21)', () => {
    const eleven = rolePosition(11);
    expect(eleven.primary).toBe('coach');
    expect(eleven.emerging).toBe('consultant');
    expect(eleven.label).toBe('COACH → EARLY CONSULTANT');
  });

  it('declines control while responsibility rises', () => {
    const at3 = controlAndResponsibility(3);
    const at17 = controlAndResponsibility(17);
    expect(at3.parentalControl).toBeGreaterThan(at17.parentalControl);
    expect(at3.childResponsibility).toBeLessThan(at17.childResponsibility);
  });
});

describe('pregnancy (section 5)', () => {
  it('computes a due date 280 days from LMP', () => {
    expect(dueDateFromLmp('2026-01-01')).toBe('2026-10-08');
  });

  it('reports gestational age clinically', () => {
    const due = dueDateFromLmp('2026-01-01');
    const status = pregnancyStatus(due, '2026-06-04'); // 154 days from LMP
    expect(status.week).toBe(22);
    expect(formatGestationalAge(status)).toBe('22w0d');
    expect(status.trimester).toBe(2);
    expect(status.hasContent).toBe(true);
  });

  it('marks weeks outside the covered span', () => {
    const due = dueDateFromLmp('2026-01-01');
    expect(pregnancyStatus(due, '2026-01-15').hasContent).toBe(false); // week 2
    expect(coveredWeeks()).toHaveLength(37);
    expect(coveredWeeks()[0]).toBe(4);
    expect(coveredWeeks().at(-1)).toBe(40);
  });

  it('flags post-term', () => {
    const due = dueDateFromLmp('2026-01-01');
    expect(pregnancyStatus(due, '2026-10-23').postTerm).toBe(true);
  });
});

describe('the counter (competitive gap #2)', () => {
  it('counts real weeks to 21, not a marketing constant', () => {
    const c = countdown('2020-06-15', 21, '2026-06-15');
    expect(c.targetDate).toBe('2041-06-15');
    expect(c.weeksElapsed).toBe(Math.floor(daysBetween('2020-06-15', '2026-06-15') / 7));
    expect(c.weeksTotal).toBeGreaterThanOrEqual(1095);
    expect(c.weeksTotal).toBeLessThanOrEqual(1096);
    expect(c.complete).toBe(false);
  });

  it('handles the 29 February birthday', () => {
    const c = countdown('2024-02-29', 21, '2026-03-01');
    expect(c.targetDate).toBe('2045-02-28');
  });

  it('clamps once the birthday has passed', () => {
    const c = countdown('2000-01-01', 21, '2026-01-01');
    expect(c.weeksRemaining).toBe(0);
    expect(c.complete).toBe(true);
    expect(c.fractionElapsed).toBe(1);
  });
});
