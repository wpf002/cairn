import type { WrappedKey } from './envelope.js';

/**
 * Recovery arming. Roadmap section 33a.
 *
 * A forgotten passphrase must not destroy twenty-one years of a family's
 * memories. Three independent paths exist — recovery phrase, spouse/co-parent
 * escrow, device keychain — and at least two must be armed before any journal
 * entry is accepted. There is deliberately no operator-held escrow and no
 * "email us to reset": if support-side recovery existed, invariant 5 would be
 * meaningless.
 */
export type RecoveryPath = 'recovery-phrase' | 'escrow' | 'device-keychain';

export const REQUIRED_ARMED_PATHS = 2;

export interface RecoveryStatus {
  readonly armed: readonly RecoveryPath[];
  readonly missing: readonly RecoveryPath[];
  /** True once journaling may be enabled. */
  readonly journalingAllowed: boolean;
}

/** Paths that are considered armed given the wrapped keys the account holds. */
export function recoveryStatus(wrappedKeys: readonly WrappedKey[]): RecoveryStatus {
  const armed = new Set<RecoveryPath>();
  for (const key of wrappedKeys) {
    if (key.wrappedBy === 'recovery-phrase') armed.add('recovery-phrase');
    if (key.wrappedBy === 'escrow') armed.add('escrow');
    if (key.wrappedBy === 'device-keychain') armed.add('device-keychain');
  }
  const all: readonly RecoveryPath[] = ['recovery-phrase', 'escrow', 'device-keychain'];
  const armedList = all.filter((p) => armed.has(p));
  return {
    armed: armedList,
    missing: all.filter((p) => !armed.has(p)),
    journalingAllowed: armedList.length >= REQUIRED_ARMED_PATHS,
  };
}

export class RecoveryNotArmedError extends Error {
  constructor(status: RecoveryStatus) {
    super(
      `Journaling is blocked until at least ${REQUIRED_ARMED_PATHS} recovery paths are armed. ` +
        `Armed: [${status.armed.join(', ') || 'none'}]. Missing: [${status.missing.join(', ')}]. ` +
        'Cairn cannot reset a passphrase for you — that is the design, not a limitation.',
    );
    this.name = 'RecoveryNotArmedError';
  }
}

/** The gate the journaling write path calls. Section 33a Phase 1 gate, condition 4. */
export function assertJournalingAllowed(wrappedKeys: readonly WrappedKey[]): void {
  const status = recoveryStatus(wrappedKeys);
  if (!status.journalingAllowed) throw new RecoveryNotArmedError(status);
}

/**
 * Onboarding copy for the recovery moment, written once, plainly, for a tired
 * parent — as section 33a requires.
 */
export const RECOVERY_EXPLANATION =
  'Your family\'s journal is encrypted on your phone before it ever leaves it. ' +
  'We cannot read it, and we cannot reset your passphrase — nobody at Cairn can. ' +
  'That is what keeps twenty-one years of your child\'s life private. ' +
  'It also means you need a backup way in. Set up at least two: ' +
  'your 24-word recovery phrase (write it down, keep it somewhere safe), ' +
  'your spouse or co-parent (either of you can let the other back in), ' +
  'or this device\'s secure storage (works until the phone is lost). ' +
  'We will not let you start journaling until two of these are ready.';
