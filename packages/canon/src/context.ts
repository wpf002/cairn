import type { ScriptureRef } from './reference.js';

/**
 * The three-layer biblical content model. Roadmap section 16.
 *
 * Layer 1 is the passage. Layer 2 is what the passage actually says — setting,
 * intended meaning, theological concepts, the Greek or Hebrew where it earns
 * its place. Layer 3 is the parenting application, and critically, how not to
 * misuse the passage.
 *
 * Section 16's worked example is Ephesians 6:4, which is not "raise Christian
 * kids": it is parental authority, the warning against provoking children,
 * nurture, and instruction. Ephesians 6:4 and Proverbs 22:6 are the two most
 * abused verses in Christian parenting, and an app that reinforces the abuse is
 * worse than an app with no scripture in it.
 */
export interface ContextBlock {
  readonly id: string;
  readonly passages: readonly ScriptureRef[];
  /** Original setting, audience, occasion. */
  readonly setting: string;
  /** What the passage actually claims, in context. */
  readonly meaning: string;
  /** Theological concepts the passage carries. */
  readonly theology: readonly string[];
  /** Greek or Hebrew, only where it changes the reading. */
  readonly originalLanguage?: {
    readonly language: 'Greek' | 'Hebrew' | 'Aramaic';
    readonly term: string;
    readonly transliteration: string;
    readonly gloss: string;
  }[];
  /** How this passage is commonly misapplied in parenting. */
  readonly commonMisuse: string;
}
