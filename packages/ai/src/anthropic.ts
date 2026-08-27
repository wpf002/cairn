import Anthropic from '@anthropic-ai/sdk';
import type { ModelAdapter, ModelRequest } from './model.js';

/**
 * Production adapter: the official Anthropic SDK.
 *
 * - Model: claude-opus-5. Guidance quality is the product; this is not a
 *   place to economise, and the per-question cost is cents against a
 *   subscription priced in dollars.
 * - Adaptive thinking (the default on Opus 5) stays on: Help Me Parent This
 *   questions are exactly the "remotely complicated" case it exists for.
 * - Streaming with finalMessage(): answers can run long, and streaming
 *   avoids request timeouts without changing the pipeline's contract.
 *
 * The pipeline's own enforcement (citations, scripture grounding, doctrine,
 * escalation) runs downstream of this adapter either way — the adapter's only
 * job is to return the draft text.
 */
export function anthropicAdapter(
  client: Anthropic = new Anthropic(),
  model = 'claude-opus-5',
): ModelAdapter {
  return {
    async complete(request: ModelRequest): Promise<string> {
      const stream = client.messages.stream({
        model,
        max_tokens: request.maxTokens ?? 16000,
        system: [
          {
            type: 'text',
            text: request.system,
            // The system prompt embeds the retrieved units and is identical
            // across the validate-then-repair retry — cache it.
            cache_control: { type: 'ephemeral' },
          },
        ],
        messages: [{ role: 'user', content: request.user }],
      });
      const response = await stream.finalMessage();

      if (response.stop_reason === 'refusal') {
        // The pipeline treats an empty draft as a failed parse and fails
        // closed with UngroundedResponseError — which is the right outcome
        // for a refused parenting query too.
        return '';
      }

      return response.content
        .filter((block): block is Anthropic.TextBlock => block.type === 'text')
        .map((block) => block.text)
        .join('');
    },
  };
}
