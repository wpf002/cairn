import { describe, expect, it } from 'vitest';
import {
  activeEdges,
  assertScope,
  canGrant,
  canRevoke,
  edgeActiveOn,
  householdOptions,
  nextStep,
  PermissionDeniedError,
  scopeFor,
  validateAnswers,
  type RelationshipEdge,
} from '@cairn/db';

const edge = (over: Partial<RelationshipEdge>): RelationshipEdge => ({
  id: 'e1',
  adultId: 'mom',
  childId: 'kid',
  role: 'mother',
  scope: 'full',
  from: '2020-01-01',
  until: null,
  grantedBy: 'mom',
  ...over,
});

describe('time-bounded edges (invariant 7)', () => {
  it('bounds validity by from/until', () => {
    const e = edge({ from: '2020-01-01', until: '2024-01-01' });
    expect(edgeActiveOn(e, '2022-06-01')).toBe(true);
    expect(edgeActiveOn(e, '2024-06-01')).toBe(false);
    expect(edgeActiveOn(e, '2019-12-31')).toBe(false);
  });

  it('an open edge stays active', () => {
    expect(edgeActiveOn(edge({}), '2040-01-01')).toBe(true);
  });

  it('resolves the strongest active scope', () => {
    const edges = [
      edge({ id: 'e1', adultId: 'grandma', role: 'grandparent', scope: 'view' }),
      edge({ id: 'e2', adultId: 'grandma', role: 'grandparent', scope: 'contribute', from: '2023-01-01' }),
    ];
    expect(scopeFor(edges, 'grandma', 'kid', '2024-01-01')).toBe('contribute');
  });
});

describe('permission gating (section 29 point 4)', () => {
  const edges = [
    edge({ id: 'e1', adultId: 'mom', scope: 'full' }),
    edge({ id: 'e2', adultId: 'dad', role: 'father', scope: 'full' }),
    edge({ id: 'e3', adultId: 'grandma', role: 'grandparent', scope: 'contribute' }),
    edge({ id: 'e4', adultId: 'mentor', role: 'mentor', scope: 'view' }),
  ];

  it('orders active edges strongest first', () => {
    expect(activeEdges(edges, 'kid', '2024-01-01')[0]?.scope).toBe('full');
  });

  it('lets a grandparent contribute but not administer', () => {
    expect(() => assertScope(edges, 'grandma', 'kid', 'contribute', '2024-01-01')).not.toThrow();
    expect(() => assertScope(edges, 'grandma', 'kid', 'full', '2024-01-01')).toThrow(PermissionDeniedError);
  });

  it('denies an adult with no edge', () => {
    expect(() => assertScope(edges, 'stranger', 'kid', 'view', '2024-01-01')).toThrow(PermissionDeniedError);
  });

  it('only full edges grant', () => {
    expect(canGrant(edges, 'mom', 'kid', '2024-01-01')).toBe(true);
    expect(canGrant(edges, 'grandma', 'kid', '2024-01-01')).toBe(false);
  });

  it('never strands a child without a full-access adult', () => {
    const oneParent = [edge({ id: 'e1', adultId: 'mom', scope: 'full' })];
    const verdict = canRevoke(oneParent, 'mom', 'e1', '2024-01-01');
    expect(verdict.allowed).toBe(false);
    expect(verdict.reason).toMatch(/at least one adult/);
    // With two full edges, revoking one is fine.
    expect(canRevoke(edges, 'mom', 'e2', '2024-01-01').allowed).toBe(true);
    // A contributor cannot revoke anyone.
    expect(canRevoke(edges, 'grandma', 'e4', '2024-01-01').allowed).toBe(false);
  });
});

describe('role-branching onboarding (section 29 point 1, section 16b)', () => {
  it('asks entry path first, before anything', () => {
    expect(nextStep({})).toBe('entry-path');
  });

  it('walks the pregnant path to recovery setup', () => {
    expect(nextStep({ entryPath: 'pregnant' })).toBe('voice');
    expect(nextStep({ entryPath: 'pregnant', voice: 'mother' })).toBe('household-shape');
    expect(nextStep({ entryPath: 'pregnant', voice: 'mother', householdShape: 'two-parent' })).toBe('due-date');
    expect(
      nextStep({ entryPath: 'pregnant', voice: 'mother', householdShape: 'two-parent', dueDate: '2027-03-01' }),
    ).toBe('recovery-setup');
  });

  it('a joining partner answers voice but not household shape', () => {
    expect(nextStep({ entryPath: 'joining-partner' })).toBe('invite-code');
    expect(nextStep({ entryPath: 'joining-partner', inviteCode: 'ABC' })).toBe('voice');
    expect(nextStep({ entryPath: 'joining-partner', inviteCode: 'ABC', voice: 'father' })).toBe('done');
  });

  it('has-children path skips due date', () => {
    expect(
      nextStep({ entryPath: 'has-children', voice: 'father', householdShape: 'single-father' }),
    ).toBe('recovery-setup');
  });

  it('household options never contradict the chosen voice', () => {
    expect(householdOptions('mother')).not.toContain('single-father');
    expect(householdOptions('father')).not.toContain('single-mother');
  });

  it('rejects contradictory voice/household combinations', () => {
    expect(validateAnswers({ voice: 'father', householdShape: 'single-mother' })).toHaveLength(1);
    expect(validateAnswers({ voice: 'mother', householdShape: 'single-mother' })).toHaveLength(0);
  });
});
