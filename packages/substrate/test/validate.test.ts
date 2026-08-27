import { describe, expect, it } from 'vitest';
import { allUnits, checkDoctrine, coverage, FULL_SCOPE, MVP_SCOPE, validateCorpus, validateUnit, type Unit } from '@cairn/substrate';
import { validDescriptive, validNormative, validPrudential } from './fixtures.js';

function errors(unit: Unit): string[] {
  return validateUnit(unit)
    .filter((v) => v.severity === 'error')
    .map((v) => v.rule);
}

describe('the Phase 0 gate (section 36)', () => {
  it('passes a fully valid unit of each claim type', () => {
    expect(errors(validNormative())).toEqual([]);
    expect(errors(validDescriptive())).toEqual([]);
    expect(errors(validPrudential())).toEqual([]);
  });

  it('fails an unprovenanced fixture — invariant 1', () => {
    const unit = validNormative({
      provenance: { sourceOrg: '', sourceDate: '', reviewer: '', reviewDate: '' },
    });
    const rules = errors(unit);
    expect(rules).toContain('provenance.sourceOrg');
    expect(rules).toContain('provenance.reviewer');
  });

  it('fails a normative unit missing a warrant — invariant 8', () => {
    const { warrant: _drop, ...rest } = validNormative();
    expect(errors(rest as Unit)).toContain('warrant.missing');
  });

  it('fails a warrant missing its misuse field — section 16a', () => {
    const base = validNormative();
    const unit = { ...base, warrant: { ...base.warrant!, misuse: '' } };
    expect(errors(unit)).toContain('warrant.misuse');
  });

  it('fails a descriptive unit carrying a scripture ref — invariant 8', () => {
    const base = validDescriptive();
    const withWarrant = { ...base, warrant: validNormative().warrant };
    expect(errors(withWarrant as Unit)).toContain('descriptive.carries-warrant');
  });

  it('fails a descriptive unit with a verse hidden in prose', () => {
    const unit = validDescriptive({
      body: 'At 22 weeks the auditory system responds to sound, just as Psalm 139:13 says.',
    });
    expect(errors(unit)).toContain('descriptive.scripture-in-prose');
  });

  it('fails a warrant whose reference does not resolve against the canon', () => {
    const base = validNormative();
    const unit = { ...base, warrant: { ...base.warrant!, passages: ['Ephesians 9:4'] } };
    expect(errors(unit)).toContain('warrant.passages.unresolvable');
  });

  it('fails a descriptive unit with no evidence — section 18', () => {
    const unit = validDescriptive({ evidence: [] });
    expect(errors(unit)).toContain('evidence.missing');
  });

  it('requires a medical reviewer when a clinical guideline is cited', () => {
    const base = validDescriptive({
      evidence: [
        { org: 'AAP', title: 'Safe sleep', sourceDate: '2022-06-21', evidenceLevel: 'clinical-guideline' },
      ],
    });
    const { medicalReviewer: _x, medicalReviewDate: _y, ...bareProvenance } = base.provenance;
    const unit = { ...base, provenance: bareProvenance };
    expect(errors(unit as Unit)).toContain('provenance.medicalReviewer');
  });

  it('fails out-of-range pregnancy weeks and unknown stages', () => {
    expect(errors(validDescriptive({ scope: { kind: 'pregnancy', weeks: [2] } }))).toContain('scope.week-range');
    expect(
      errors(validNormative({ scope: { kind: 'stage', stages: ['not-a-stage' as never] } })),
    ).toContain('scope.unknown-stage');
  });

  it('enforces versioning — invariant 6', () => {
    expect(errors(validNormative({ version: 2 }))).toContain('version.supersedes');
    const report = validateCorpus([validNormative(), validNormative()]);
    expect(report.violations.map((v) => v.rule)).toContain('corpus.duplicate');
  });

  it('flags an actionless normative unit as a warning — section 2', () => {
    const unit = validNormative({ actions: [] });
    const warnings = validateUnit(unit).filter((v) => v.severity === 'warning');
    expect(warnings.map((w) => w.rule)).toContain('actions.missing');
  });

  it('resolves cross-references corpus-wide', () => {
    const report = validateCorpus([validNormative({ pairedWith: 'does.not.exist' })]);
    expect(report.violations.map((v) => v.rule)).toContain('corpus.paired-missing');
    expect(report.ok).toBe(false);
  });
});

describe('doctrinal ruleset (section 16a)', () => {
  it('flags Proverbs 22:6 read as a guarantee', () => {
    const findings = checkDoctrine(
      'Train up a child in the way he should go and God guarantees they will never depart from the faith.',
    );
    expect(findings.map((f) => f.ruleId)).toContain('doctrine.proverbs-22-6-as-guarantee');
  });

  it('does not flag a unit that names the misuse to refute it', () => {
    const findings = checkDoctrine(
      'A common misapplication treats this as a promise that a child will never depart; it is not a guarantee but a wisdom saying.',
    );
    expect(findings.map((f) => f.ruleId)).not.toContain('doctrine.proverbs-22-6-as-guarantee');
  });

  it('flags single-parent deficiency framing', () => {
    const findings = checkDoctrine('A child from a broken home will always struggle to understand God as Father.');
    expect(findings.map((f) => f.ruleId)).toContain('doctrine.single-parent-deficiency');
  });

  it('flags corporal-punishment prescriptions and passes refusals', () => {
    expect(
      checkDoctrine('When your toddler defies you, spank the child promptly.').map((f) => f.ruleId),
    ).toContain('doctrine.rod-as-corporal-punishment-prescription');
    expect(
      checkDoctrine('Do not hit your child; the rod imagery describes shepherding guidance, and its misuse as a hitting mandate is addressed below.'),
    ).toEqual([]);
  });

  it('flags guilt-lever motivation', () => {
    const findings = checkDoctrine('If you really loved your children, you would do family devotions daily.');
    expect(findings.map((f) => f.ruleId)).toContain('doctrine.guilt-lever');
  });

  it('flags transactional prosperity framing', () => {
    const findings = checkDoctrine('If you just pray consistently, God will bless you with an obedient child.');
    expect(findings.map((f) => f.ruleId)).toContain('doctrine.prosperity-outcome');
  });
});

describe('coverage (section 16a countable gate)', () => {
  it('counts only warranted normative units that pass validation', () => {
    const report = coverage([validNormative()], {
      stages: ['preschool'],
      categories: ['RECEIVE'],
      voices: ['mother', 'father'],
    });
    // A shared unit covers both voices.
    expect(report.covered).toBe(2);
    expect(report.complete).toBe(true);
  });

  it('a broken unit does not count toward coverage', () => {
    const broken = validNormative({ warrant: undefined });
    const report = coverage([broken as Unit], {
      stages: ['preschool'],
      categories: ['RECEIVE'],
      voices: ['mother'],
    });
    expect(report.covered).toBe(0);
    expect(report.missing).toHaveLength(1);
  });

  it('a mother-voiced unit does not satisfy the father slot', () => {
    const motherOnly = validNormative({ voice: 'mother' });
    const report = coverage([motherOnly], {
      stages: ['preschool'],
      categories: ['RECEIVE'],
      voices: ['mother', 'father'],
    });
    expect(report.covered).toBe(1);
    expect(report.missing[0]?.voice).toBe('father');
  });
});


describe('the shipped corpus', () => {
  it('passes the full validator with zero errors', () => {
    const report = validateCorpus(allUnits());
    expect(report.errors).toBe(0);
    expect(report.unitCount).toBeGreaterThanOrEqual(130);
  });

  it('covers the MVP scope completely (Phase 2 gate)', () => {
    expect(coverage(allUnits(), MVP_SCOPE).complete).toBe(true);
  });

  it('covers conception through 21, both voices (Phase 8 gate)', () => {
    const report = coverage(allUnits(), FULL_SCOPE);
    expect(report.complete).toBe(true);
    expect(report.required).toBe(714);
  });
});
