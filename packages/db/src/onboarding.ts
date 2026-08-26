import type { HouseholdShape, Voice } from '@cairn/framework';

/**
 * Role-branching onboarding. Roadmap section 29, point 1, and section 16b.
 *
 * The first interaction asks who is standing there, before anything else,
 * because every downstream screen depends on it and asking later means
 * re-onboarding. Modelled as a small state machine so the mobile flow and its
 * tests share one definition of what is asked and in what order.
 */
export type EntryPath = 'pregnant' | 'has-children' | 'both' | 'joining-partner';

export interface OnboardingAnswers {
  readonly entryPath?: EntryPath;
  readonly voice?: Voice;
  readonly householdShape?: HouseholdShape;
  /** Due date, when the entry path includes a pregnancy. */
  readonly dueDate?: string;
  /** Invite code, when joining a partner's existing account. */
  readonly inviteCode?: string;
}

export type OnboardingStep =
  | 'entry-path'
  | 'voice'
  | 'household-shape'
  | 'due-date'
  | 'invite-code'
  | 'recovery-setup'
  | 'done';

/**
 * The next question to ask, given what has been answered.
 *
 * A partner joining an existing account still answers voice — that is the
 * whole point of the spouse tier: two genuinely different readings of the same
 * child — but not household shape, which the account already has.
 */
export function nextStep(a: OnboardingAnswers): OnboardingStep {
  if (!a.entryPath) return 'entry-path';
  if (a.entryPath === 'joining-partner') {
    if (!a.inviteCode) return 'invite-code';
    if (!a.voice) return 'voice';
    return 'done';
  }
  if (!a.voice) return 'voice';
  if (!a.householdShape) return 'household-shape';
  if ((a.entryPath === 'pregnant' || a.entryPath === 'both') && !a.dueDate) return 'due-date';
  return 'recovery-setup';
}

/** Household shapes offered, filtered by the voice already chosen so the list never contradicts it. */
export function householdOptions(voice: Voice): readonly HouseholdShape[] {
  switch (voice) {
    case 'mother':
      return ['two-parent', 'single-mother', 'blended', 'guardian'];
    case 'father':
      return ['two-parent', 'single-father', 'blended', 'guardian'];
    case 'shared':
      return ['two-parent', 'blended', 'guardian'];
  }
}

export function validateAnswers(a: OnboardingAnswers): string[] {
  const problems: string[] = [];
  if (a.voice && a.householdShape) {
    if (a.householdShape === 'single-mother' && a.voice === 'father') {
      problems.push('A single-mother household cannot be onboarded with a father voice.');
    }
    if (a.householdShape === 'single-father' && a.voice === 'mother') {
      problems.push('A single-father household cannot be onboarded with a mother voice.');
    }
  }
  if (a.dueDate && !/^\d{4}-\d{2}-\d{2}$/.test(a.dueDate)) {
    problems.push('Due date must be a calendar date.');
  }
  return problems;
}
