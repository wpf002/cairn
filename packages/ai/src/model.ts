/**
 * The model seam.
 *
 * Cairn's AI goes through the official Anthropic SDK (roadmap section 31,
 * amended: Anthropic directly, not the Flint layer). The pipeline programs
 * against `ModelAdapter` so tests can inject deterministic — including
 * adversarial — fakes; production injects `anthropicAdapter()`.
 */
export interface ModelRequest {
  /** System prompt assembled by the pipeline. */
  readonly system: string;
  /** The user's situation, verbatim. */
  readonly user: string;
  /** Response schema notes for providers that support structured output. */
  readonly responseFormat: 'json';
  readonly maxTokens?: number;
}

export interface ModelAdapter {
  complete(request: ModelRequest): Promise<string>;
}

/** Schema enforcement is validate-then-repair: one retry with the validator's complaints. */
export const MAX_REPAIR_ATTEMPTS = 1;
