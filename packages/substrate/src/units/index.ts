import type { Unit } from '../types.js';

/**
 * The corpus. Populated in Phase 2.
 *
 * Phase 0 ships the schema, the validators and the gates with an empty corpus
 * on purpose: the gate has to be provably able to fail before there is any
 * content whose failure would be expensive.
 */
export const UNITS: readonly Unit[] = [];
