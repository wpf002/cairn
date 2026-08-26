/**
 * The Flint seam. Roadmap section 31: AI goes through Flint, the existing
 * adapter layer, rather than direct provider SDKs.
 *
 * This module defines the seam Cairn programs against. The concrete Flint
 * client is injected at the app boundary; tests inject deterministic fakes,
 * which is also how the red-team suite drives adversarial model behaviour
 * through the pipeline.
 */
export interface FlintRequest {
  /** System prompt assembled by the pipeline. */
  readonly system: string;
  /** The user's situation, verbatim. */
  readonly user: string;
  /** Response schema notes for providers that support structured output. */
  readonly responseFormat: 'json';
  readonly maxTokens?: number;
}

export interface FlintAdapter {
  complete(request: FlintRequest): Promise<string>;
}

/** Schema enforcement is validate-then-repair (section 31): one retry with the validator's complaints. */
export const MAX_REPAIR_ATTEMPTS = 1;
