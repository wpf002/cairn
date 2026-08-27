import type { ModelAdapter, ModelRequest } from '@cairn/ai';
import { supabase } from './supabase';

/**
 * The app's model adapter: calls Cairn's own Edge Function, never Anthropic
 * directly. The API key stays server-side (supabase/functions/ask), so the
 * shipped bundle contains no credential.
 *
 * Returns null when the proxy URL is unset or nobody is signed in — ASK then
 * renders its unconfigured state rather than failing mid-question.
 */
export function proxyAdapter(): ModelAdapter | null {
  const url = process.env.EXPO_PUBLIC_AI_PROXY_URL;
  const client = supabase;
  if (!url || !client) return null;

  return {
    async complete(request: ModelRequest): Promise<string> {
      const { data } = await client.auth.getSession();
      const token = data.session?.access_token;
      if (!token) throw new Error('Sign in to use the parenting assistant.');

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json', authorization: `Bearer ${token}` },
        body: JSON.stringify({
          system: request.system,
          user: request.user,
          maxTokens: request.maxTokens,
        }),
      });
      if (!response.ok) throw new Error(`Assistant unavailable (${response.status}).`);

      const payload: { text?: string } = await response.json();
      return payload.text ?? '';
    },
  };
}
