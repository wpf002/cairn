import { describe, expect, it } from 'vitest';
import {
  albumProgress,
  bagProgress,
  bmiCategory,
  contractionStats,
  emptyBirthPlan,
  endContraction,
  EMPTY_CONTRACTION_LOG,
  escalationContextFor,
  expectedGainAt,
  exportBirthPlan,
  fiveOneOne,
  fullAlbum,
  kickBaseline,
  movementConcern,
  newHospitalBag,
  nextAppointment,
  placePhoto,
  planAppointmentReminders,
  planCounterMilestones,
  planWeeklyCards,
  prevalenceLine,
  recordKick,
  REDUCED_MOVEMENT_FLAG,
  sessionMinutes,
  startContraction,
  startKickSession,
  suggestedSchedule,
  symptomById,
  toggleItem,
  toIcs,
  weightPosition,
} from '@cairn/trackers';
import { evaluate } from '@cairn/escalation';

const MIN = 60_000;

describe('kick counter', () => {
  it('completes at the target count and reports minutes', () => {
    let s = startKickSession('s1', 0);
    for (let i = 1; i <= 10; i += 1) s = recordKick(s, i * MIN);
    expect(s.endedAt).toBe(10 * MIN);
    expect(sessionMinutes(s)).toBe(10);
  });

  it('builds a median baseline after three sessions', () => {
    const done = (id: string, minutes: number) => {
      let s = startKickSession(id, 0);
      for (let i = 1; i <= 10; i += 1) s = recordKick(s, (i * minutes * MIN) / 10);
      return s;
    };
    expect(kickBaseline([done('a', 10)])).toBeNull();
    const baseline = kickBaseline([done('a', 10), done('b', 20), done('c', 30)]);
    expect(baseline?.medianMinutes).toBe(20);
  });

  it('raises the reduced-movement flag after 2 idle hours', () => {
    const s = startKickSession('s1', 0);
    expect(movementConcern(s, null, 121 * MIN)?.flag).toBe(REDUCED_MOVEMENT_FLAG);
    expect(movementConcern(s, null, 60 * MIN)).toBeNull();
  });

  it('raises the flag when 3x slower than the mother\'s own median', () => {
    let s = startKickSession('s1', 0);
    for (let i = 1; i <= 10; i += 1) s = recordKick(s, i * 7 * MIN); // 70 minutes
    const baseline = { medianMinutes: 20, sessions: 5 };
    expect(movementConcern(s, baseline, 70 * MIN)?.flag).toBe(REDUCED_MOVEMENT_FLAG);
  });

  it('the flag drives the deterministic escalation engine', () => {
    const result = evaluate({ flags: [REDUCED_MOVEMENT_FLAG], gestationalWeek: 32 });
    expect(result[0]?.ruleId).toBe(REDUCED_MOVEMENT_FLAG);
    expect(result[0]?.urgency).toBe('urgent');
  });
});

describe('contraction timer', () => {
  it('records and reports stats', () => {
    let log = EMPTY_CONTRACTION_LOG;
    log = startContraction(log, 0);
    log = endContraction(log, 70_000);
    log = startContraction(log, 5 * MIN);
    log = endContraction(log, 5 * MIN + 60_000);
    const stats = contractionStats(log, 60 * MIN, 6 * MIN);
    expect(stats.countInWindow).toBe(2);
    expect(stats.averageDurationSec).toBeCloseTo(65, 0);
    expect(stats.averageIntervalMin).toBe(5);
  });

  it('ignores a double start', () => {
    let log = startContraction(EMPTY_CONTRACTION_LOG, 0);
    log = startContraction(log, 1000);
    expect(log.contractions).toHaveLength(1);
  });

  it('detects 5-1-1 only when the pattern holds for an hour', () => {
    let log = EMPTY_CONTRACTION_LOG;
    // 13 contractions, 5 min apart, 60s each → spans 60 minutes.
    for (let i = 0; i < 13; i += 1) {
      log = startContraction(log, i * 5 * MIN);
      log = endContraction(log, i * 5 * MIN + 60_000);
    }
    expect(fiveOneOne(log, 12 * 5 * MIN + 60_000)).toBe(true);
    // Same pattern but only 30 minutes of it: no.
    let short = EMPTY_CONTRACTION_LOG;
    for (let i = 0; i < 6; i += 1) {
      short = startContraction(short, i * 5 * MIN);
      short = endContraction(short, i * 5 * MIN + 60_000);
    }
    expect(fiveOneOne(short, 5 * 5 * MIN + 60_000)).toBe(false);
  });
});

describe('weight tracker (IOM bands)', () => {
  it('categorises BMI', () => {
    expect(bmiCategory(17)).toBe('underweight');
    expect(bmiCategory(22)).toBe('normal');
    expect(bmiCategory(27)).toBe('overweight');
    expect(bmiCategory(33)).toBe('obese');
  });

  it('expected gain grows with gestation', () => {
    const at13 = expectedGainAt(13, 'normal');
    const at30 = expectedGainAt(30, 'normal');
    expect(at30.min).toBeGreaterThan(at13.min);
    expect(at13.max).toBeCloseTo(2.0, 1);
  });

  it('positions the latest entry against the band', () => {
    const pos = weightPosition(60, [{ week: 30, weightKg: 68 }], 'normal');
    expect(pos?.gainedKg).toBe(8);
    expect(pos?.within).toBe(true);
    const outside = weightPosition(60, [{ week: 30, weightKg: 80 }], 'normal');
    expect(outside?.within).toBe(false);
  });
});

describe('symptom tracker', () => {
  it('serves prevalence lines', () => {
    const nausea = symptomById('nausea')!;
    expect(prevalenceLine(nausea)).toMatch(/About 70%/);
  });

  it('bleeding escalates at any severity and reaches the engine', () => {
    const ctx = escalationContextFor({ symptomId: 'bleeding', week: 30, severity: 'mild', at: 0 }, 30);
    expect(ctx).not.toBeNull();
    const result = evaluate(ctx!);
    expect(result.map((r) => r.ruleId)).toContain('maternal.bleeding-or-fluid');
  });

  it('a mild headache does not escalate; a severe one does', () => {
    expect(escalationContextFor({ symptomId: 'headache', week: 30, severity: 'mild', at: 0 }, 30)).toBeNull();
    const severe = escalationContextFor({ symptomId: 'headache', week: 30, severity: 'severe', at: 0 }, 30);
    expect(severe).not.toBeNull();
    expect(evaluate(severe!).map((r) => r.ruleId)).toContain('maternal.severe-headache-vision');
  });
});

describe('hospital bag and birth plan', () => {
  it('toggles and reports progress', () => {
    let bag = newHospitalBag();
    expect(bagProgress(bag).done).toBe(0);
    bag = toggleItem(bag, 'car-seat');
    expect(bagProgress(bag).done).toBe(1);
  });

  it('exports a plain-text birth plan with the flexibility note', () => {
    const plan = {
      ...emptyBirthPlan('Emma'),
      provider: 'Dr. Chen',
      supportPeople: ['Will'],
      newbornPreferences: ['immediate skin-to-skin'],
      religiousNotes: 'We would like to pray over the baby shortly after birth.',
    };
    const text = exportBirthPlan(plan);
    expect(text).toContain('BIRTH PLAN — Emma');
    expect(text).toContain('skin-to-skin');
    expect(text).toContain('medical judgment');
  });
});

describe('appointments', () => {
  const due = '2027-03-01';
  it('generates the standard rhythm with milestone notes', () => {
    const schedule = suggestedSchedule(due);
    const weeks = schedule.map((a) => a.week);
    expect(weeks).toContain(20);
    expect(weeks).toContain(36);
    expect(schedule.find((a) => a.week === 20)?.note).toMatch(/Anatomy/);
    expect(schedule.filter((a) => a.week >= 37)).toHaveLength(4);
  });

  it('exports valid-shaped ICS', () => {
    const ics = toIcs(suggestedSchedule(due).slice(0, 2));
    expect(ics).toContain('BEGIN:VCALENDAR');
    expect(ics.match(/BEGIN:VEVENT/g)).toHaveLength(2);
  });

  it('finds the next appointment', () => {
    const schedule = suggestedSchedule(due);
    const next = nextAppointment(schedule, '2026-08-26');
    expect(next).not.toBeNull();
    expect(next!.inDays).toBeGreaterThanOrEqual(0);
  });
});

describe('the album that survives birth', () => {
  it('spans pregnancy through age 21', () => {
    const album = fullAlbum();
    expect(album).toHaveLength(37 + 12 + 20);
  });

  it('places photos and tracks per-phase progress', () => {
    let album = fullAlbum();
    album = placePhoto(album, 'pregnancy', 22, 'asset-1', '2026-08-26');
    expect(albumProgress(album, 'pregnancy')).toEqual({ filled: 1, total: 37 });
    expect(albumProgress(album, 'childhood').total).toBe(20);
  });
});

describe('notifications a parent would thank you for', () => {
  it('plans one weekly card per covered week, dated off the due date', () => {
    const cards = planWeeklyCards('2027-03-01');
    expect(cards).toHaveLength(37);
    expect(cards.at(-1)).toMatchObject({ week: 40, date: '2027-03-01' });
    expect(cards[0]).toMatchObject({ week: 4, date: '2026-06-22' });
  });

  it('plans appointment reminders the day before', () => {
    const reminders = planAppointmentReminders([{ date: '2026-09-10', label: 'Anatomy scan' }]);
    expect(reminders[0]?.date).toBe('2026-09-09');
  });

  it('plans rare counter milestones', () => {
    const marks = planCounterMilestones('2026-09-01');
    expect(marks.length).toBeLessThanOrEqual(5);
    expect(marks.every((m) => m.kind === 'counter-milestone')).toBe(true);
  });
});
