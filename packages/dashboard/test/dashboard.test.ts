import { describe, expect, it } from 'vitest';
import { buildChildDashboard, buildRoadmap, buildToday, activeRowsAt } from '@cairn/dashboard';
import { allUnits } from '@cairn/substrate';
import type { Audience } from '@cairn/framework';

const units = allUnits();
const ON = '2026-08-26';

const mother: Audience = { voice: 'mother', householdShape: 'two-parent' };
const father: Audience = { voice: 'father', householdShape: 'two-parent' };
const singleMother: Audience = { voice: 'mother', householdShape: 'single-mother' };

const THREE_CHILDREN = [
  { id: 'noah', name: 'Noah', birthdate: '2026-05-01' },   // newborn
  { id: 'jack', name: 'Jack', birthdate: '2024-02-10' },   // toddler
  { id: 'emma', name: 'Emma', birthdate: '2022-01-20' },   // preschool
];

describe('the Phase 4 gate (section 36)', () => {
  it('TODAY renders for a mother and a father on the same account viewing the same three children', () => {
    const base = {
      greetingName: 'Emma',
      dueDate: '2027-03-01',
      motherName: 'Emma',
      children: THREE_CHILDREN,
    };
    const momToday = buildToday({ ...base, audience: mother }, units, ON);
    const dadToday = buildToday({ ...base, audience: father, greetingName: 'Will' }, units, ON);

    // Both render all four blocks: pregnancy + three children.
    expect(momToday.blocks).toHaveLength(4);
    expect(dadToday.blocks).toHaveLength(4);

    // Both get a voiced parent-formation focus — and not the same one.
    expect(momToday.parentFocus?.unit.voice).not.toBe('father');
    expect(dadToday.parentFocus?.unit.voice).not.toBe('mother');
  });

  it('the same child reads differently through each parent\'s voice', () => {
    const jack = THREE_CHILDREN[1]!;
    const momView = buildChildDashboard(jack, mother, units, ON);
    const dadView = buildChildDashboard(jack, father, units, ON);

    const momSee = momView.categories.find((c) => c.category === 'SEE')!.units.map((u) => u.unit.id);
    const dadSee = dadView.categories.find((c) => c.category === 'SEE')!.units.map((u) => u.unit.id);

    // The mother's own-voice units serve; the father's serve his.
    expect(momSee).toContain('child.see.mother-loving-father');
    expect(dadSee).toContain('child.see.father-loving-mother');
    // Cross-voice pairing: each also sees what the other is carrying.
    expect(momSee).toContain('child.see.father-loving-mother');
    const paired = momView.categories
      .find((c) => c.category === 'SEE')!
      .units.find((u) => u.unit.id === 'child.see.father-loving-mother');
    expect(paired?.decision).toBe('paired');
  });

  it('a single mother gets no father-voiced content — the hard gate', () => {
    for (const child of THREE_CHILDREN) {
      const view = buildChildDashboard(child, singleMother, units, ON);
      for (const section of view.categories) {
        for (const { unit, decision } of section.units) {
          if (decision === 'solo') continue; // solo variants are the designed substitution
          expect(unit.voice, `${unit.id} leaked to a single mother`).not.toBe('father');
        }
      }
      // The solo variant substitutes for the father-voiced constant.
      const seeIds = view.categories.find((c) => c.category === 'SEE')!.units.map((u) => u.unit.id);
      expect(seeIds).toContain('child.see.love-modeled-solo');
      expect(seeIds).not.toContain('child.see.father-loving-mother');
    }
  });

  it('a single mother\'s TODAY never carries a father-voiced parent focus', () => {
    for (let day = 0; day < 10; day += 1) {
      const on = `2026-08-${String(10 + day).padStart(2, '0')}`;
      const today = buildToday(
        { audience: singleMother, greetingName: 'Ann', dueDate: null, motherName: 'Ann', children: THREE_CHILDREN },
        units,
        on,
      );
      expect(today.parentFocus?.unit.voice).not.toBe('father');
    }
  });
});

describe('child dashboard structure (section 21)', () => {
  const emma = THREE_CHILDREN[2]!;

  it('carries all ten sections', () => {
    const view = buildChildDashboard(emma, mother, units, ON);
    expect(view.stage?.id).toBe('preschool');
    expect(view.roleLabel).toContain('CARETAKER');
    expect(view.development.length).toBeGreaterThan(0); // Understand Your Child
    expect(view.categories).toHaveLength(7);
    expect(view.watchFor.length).toBeGreaterThan(0);
    expect(view.thisMonth.length).toBeGreaterThanOrEqual(3);
    expect(view.thisMonth.length).toBeLessThanOrEqual(5);
  });

  it('shows the transition banner near a stage boundary', () => {
    // 4.9 years old: preschool runs 36-60 months; 58 months is 92% through.
    const view = buildChildDashboard({ id: 'x', name: 'X', birthdate: '2021-11-01' }, mother, units, ON);
    expect(view.transitionBanner).toBe('TRANSITIONING INTO EARLY CHILDHOOD');
  });

  it('this-month actions favour opportunity-signalled units', () => {
    /*
     * Asserts the property, not the prose.
     *
     * This previously matched literal phrases from three units' action text
     * ("coaching focus", "tradition", "first"), so it failed the moment those
     * units were rewritten — a test that breaks on an editorial change it was
     * never meant to police. What it actually claims is that THIS MONTH is
     * drawn from units carrying section 21's opportunity signal, so that is
     * what it now checks.
     */
    const view = buildChildDashboard(emma, mother, units, ON);
    expect(view.thisMonth.length).toBeGreaterThan(0);

    const opportunityActions = new Set(
      units
        .filter((u) => u.signal?.opportunity)
        .flatMap((u) => u.actions ?? []),
    );
    const fromOpportunity = view.thisMonth.filter((a) => opportunityActions.has(a));
    expect(fromOpportunity.length).toBeGreaterThan(0);
  });
});

describe('the 21-year roadmap (section 22)', () => {
  it('samples 22 years with mixes summing to 1', () => {
    const rm = buildRoadmap('2020-06-15', ON);
    expect(rm.samples).toHaveLength(22);
    for (const s of rm.samples) {
      const sum = s.mix.caretaker + s.mix.coach + s.mix.consultant + s.mix.counselor;
      expect(sum).toBeCloseTo(1, 8);
    }
  });

  it('control declines as responsibility rises across the span', () => {
    const rm = buildRoadmap(null, ON);
    const first = rm.samples[0]!;
    const last = rm.samples[21]!;
    expect(first.parentalControl).toBeGreaterThan(0.9);
    expect(last.parentalControl).toBeLessThan(0.1);
    expect(last.childResponsibility).toBeGreaterThan(0.9);
  });

  it('marks all four ceremonies including Recognize at 21', () => {
    const rm = buildRoadmap('2020-06-15', ON);
    const ceremonies = rm.markers.filter((m) => m.kind === 'ceremony');
    expect(ceremonies.map((c) => c.year)).toEqual([13, 16, 17, 21]);
    expect(rm.currentYear).toBe(6);
  });

  it('reports which rows are lit at an age', () => {
    const at15 = activeRowsAt(15);
    expect(at15.find((r) => r.id === 'experience.one-on-one')?.emphasis).toBe(true);
    expect(at15.find((r) => r.id === 'experience.one-on-one')?.opportunity).toBe(true);
    const at3 = activeRowsAt(3);
    expect(at3.map((r) => r.id)).toContain('hear.i-love-you');
    expect(at3.map((r) => r.id)).not.toContain('hear.im-proud-of-you');
  });
});
