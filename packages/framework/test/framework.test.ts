import { describe, expect, it } from 'vitest';
import {
  affirmationsAt,
  AFFIRMATION_LADDER,
  assertNoAbsentParentLeak,
  CATEGORIES,
  CATEGORY_DEFINITIONS,
  closingWindows,
  DOMAIN_TO_AXIS,
  DOMAINS,
  domainAppliesAtMonths,
  rankItems,
  resolveVoice,
  rolesPresent,
  signalAt,
  WORKSHEET_ITEMS,
} from '@cairn/framework';

describe('the seven categories (section 13)', () => {
  it('has exactly seven, in the printed order', () => {
    expect(CATEGORIES).toEqual(['SEE', 'RECEIVE', 'EXPERIENCE', 'HEAR', 'LEARN', 'BELIEVE', 'BECOME']);
  });

  it('every category has a question and anchor passages', () => {
    for (const c of CATEGORIES) {
      const def = CATEGORY_DEFINITIONS[c];
      expect(def.question.length).toBeGreaterThan(10);
      expect(def.anchorPassages.length).toBeGreaterThan(0);
    }
  });

  it('maps all ten domains onto the Luke 2:52 axes', () => {
    expect(DOMAINS).toHaveLength(10);
    for (const d of DOMAINS) expect(DOMAIN_TO_AXIS[d]).toBeDefined();
  });

  it('age-gates the sexual development domain', () => {
    expect(domainAppliesAtMonths('sexual', 36)).toBe(false);
    expect(domainAppliesAtMonths('sexual', 96)).toBe(true);
    expect(domainAppliesAtMonths('faith', 0)).toBe(true);
  });
});

describe('worksheet transcription (section 11)', () => {
  const byId = new Map(WORKSHEET_ITEMS.map((i) => [i.id, i]));

  it('keeps the two full-span constants', () => {
    expect(byId.get('see.dad-loving-mom')?.constant).toBe(true);
    expect(byId.get('hear.i-love-you')?.constant).toBe(true);
    const constants = WORKSHEET_ITEMS.filter((i) => i.constant && i.source === 'worksheet');
    expect(constants).toHaveLength(2);
  });

  it('back-loads the affirmation rows as printed (finding 4)', () => {
    const proud = byId.get('hear.im-proud-of-you');
    expect(signalAt(proud!, 8).emphasis).toBe(false);
    expect(signalAt(proud!, 13).emphasis).toBe(true);
  });

  it('gives one-on-one time both markers in the teen years (finding 5)', () => {
    const oneOnOne = byId.get('experience.one-on-one')!;
    const at15 = signalAt(oneOnOne, 15);
    expect(at15.emphasis).toBe(true);
    expect(at15.opportunity).toBe(true);
    const at10 = signalAt(oneOnOne, 10);
    expect(at10.emphasis).toBe(false);
    expect(at10.opportunity).toBe(true);
  });

  it('places the four ceremonies at 13, 16, 17 and 21', () => {
    const ceremonies = byId.get('experience.ceremonies')!;
    expect(ceremonies.discreteYears).toEqual([13, 16, 17, 21]);
    expect(signalAt(ceremonies, 16).emphasis).toBe(true);
    expect(signalAt(ceremonies, 15).emphasis).toBe(false);
  });

  it('ranks the dual-marker row above single-marker rows', () => {
    const ranked = rankItems(WORKSHEET_ITEMS, 15);
    expect(ranked[0]?.id).toBe('experience.one-on-one');
  });

  it('every derived mother item pairs back to its father item', () => {
    for (const item of WORKSHEET_ITEMS.filter((i) => i.source === 'derived')) {
      expect(item.pairedWith, item.id).toBeDefined();
      expect(byId.get(item.pairedWith!)).toBeDefined();
    }
  });

  it('accumulates the affirmation ladder without replacement (section 13)', () => {
    expect(AFFIRMATION_LADDER).toHaveLength(5);
    const at21 = affirmationsAt(21);
    expect(at21.map((i) => i.id)).toContain('hear.i-love-you');
    expect(at21.map((i) => i.id)).toContain('hear.i-trust-you');
    const at8 = affirmationsAt(8);
    expect(at8.map((i) => i.id)).toEqual(['hear.i-love-you']);
  });

  it('finds closing opportunity windows', () => {
    // Manhood/womanhood instruction opportunity runs 6–19; at 17 the window has 2 years left.
    const windows = closingWindows(WORKSHEET_ITEMS, 17, 3);
    expect(windows.map((w) => w.item.id)).toContain('receive.manhood-womanhood-instruction');
    const w = windows.find((x) => x.item.id === 'receive.manhood-womanhood-instruction')!;
    expect(w.closesAtAge).toBe(19);
    expect(w.yearsRemaining).toBe(2);
  });
});

describe('voice resolution (section 16b, invariant 9)', () => {
  it('serves shared units to everyone', () => {
    expect(
      resolveVoice('shared', { voice: 'mother', householdShape: 'single-mother' }).decision,
    ).toBe('serve');
  });

  it('serves matching voice', () => {
    expect(resolveVoice('father', { voice: 'father', householdShape: 'two-parent' }).decision).toBe('serve');
  });

  it('never leaks father content to a single mother — the hard requirement', () => {
    const r = resolveVoice('father', { voice: 'mother', householdShape: 'single-mother' });
    expect(r.decision).toBe('withhold');
    const withSolo = resolveVoice(
      'father',
      { voice: 'mother', householdShape: 'single-mother' },
      { hasSoloVariant: true },
    );
    expect(withSolo.decision).toBe('solo');
  });

  it('cross-voices to a present spouse only', () => {
    const present = resolveVoice(
      'mother',
      { voice: 'father', householdShape: 'two-parent' },
      { crossVoice: true },
    );
    expect(present.decision).toBe('paired');
    const absent = resolveVoice(
      'mother',
      { voice: 'father', householdShape: 'single-father' },
      { crossVoice: true },
    );
    expect(absent.decision).toBe('withhold');
  });

  it('assumes nothing about a guardian household', () => {
    expect(rolesPresent('guardian')).toEqual({ mother: false, father: false });
  });

  it('assertNoAbsentParentLeak throws on a leak and names the unit', () => {
    expect(() =>
      assertNoAbsentParentLeak(
        [{ id: 'see.father-character', voice: 'father', resolved: 'serve' }],
        { voice: 'mother', householdShape: 'single-mother' },
      ),
    ).toThrow(/see\.father-character/);
    expect(() =>
      assertNoAbsentParentLeak(
        [{ id: 'see.mother-character', voice: 'mother', resolved: 'serve' }],
        { voice: 'mother', householdShape: 'single-mother' },
      ),
    ).not.toThrow();
  });
});
