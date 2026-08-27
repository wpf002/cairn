/**
 * ASK proxy — the only place Cairn's Anthropic API key exists.
 *
 * The key lives in this function's environment on Supabase's servers. The app
 * never sees it, so extracting the .ipa yields nothing. The client assembles
 * the retrieval-bound prompt (invariant 3) and this function does one thing:
 * forwards it to Anthropic and returns the text. All of Cairn's enforcement —
 * citation checking, escalation merging, doctrinal rules — runs client-side in
 * @cairn/ai either side of this call, exactly as the red-team suite tests it.
 *
 * Deploy:  supabase functions deploy ask
 * Set key: supabase secrets set ANTHROPIC_API_KEY=sk-ant-...
 */
import Anthropic from 'npm:@anthropic-ai/sdk@0.71.0';
import { createClient } from 'npm:@supabase/supabase-js@2';

const anthropic = new Anthropic({ apiKey: Deno.env.get('ANTHROPIC_API_KEY') });

/**
 * Free-tier ASK cap, mirroring FREE_HELP_QUERIES_PER_MONTH in
 * @cairn/monetization. The client enforces it for UX; this is the enforcement
 * that actually holds, because a modified client would otherwise spend the
 * operator's model budget without limit.
 */
const FREE_MONTHLY_LIMIT = 3;

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, content-type',
};

interface AskBody {
  system?: unknown;
  user?: unknown;
  maxTokens?: unknown;
}

Deno.serve(async (req: Request): Promise<Response> => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });

  // Supabase verifies the JWT before the function runs (verify_jwt is on by
  // default), so reaching this line means a signed-in Cairn account. Without
  // that, the key would be a public endpoint anyone could bill to.
  if (!Deno.env.get('ANTHROPIC_API_KEY')) {
    return Response.json({ error: 'ANTHROPIC_API_KEY is not set on this function.' }, {
      status: 503,
      headers: CORS,
    });
  }

  // Metering runs before the model call, as the caller, so RLS and auth.uid()
  // apply. consume_ask_quota is atomic: two concurrent requests cannot both
  // pass a limit of one.
  const authHeader = req.headers.get('Authorization') ?? '';
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_ANON_KEY')!,
    { global: { headers: { Authorization: authHeader } } },
  );
  const { data: quota, error: quotaError } = await supabase
    .rpc('consume_ask_quota', { monthly_limit: FREE_MONTHLY_LIMIT })
    .single<{ allowed: boolean; used: number; remaining: number }>();

  if (quotaError) {
    console.error('quota check failed', quotaError);
    return Response.json({ error: 'Could not verify your usage allowance.' }, {
      status: 503,
      headers: CORS,
    });
  }
  if (!quota?.allowed) {
    return Response.json(
      { error: 'monthly_limit_reached', remaining: 0 },
      { status: 429, headers: CORS },
    );
  }

  let body: AskBody;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'Body must be JSON.' }, { status: 400, headers: CORS });
  }

  const { system, user, maxTokens } = body;
  if (typeof system !== 'string' || typeof user !== 'string') {
    return Response.json({ error: 'system and user must both be strings.' }, {
      status: 400,
      headers: CORS,
    });
  }

  try {
    const stream = anthropic.messages.stream({
      model: 'claude-opus-5',
      max_tokens: typeof maxTokens === 'number' ? maxTokens : 16000,
      system: [{ type: 'text', text: system, cache_control: { type: 'ephemeral' } }],
      messages: [{ role: 'user', content: user }],
    });
    const message = await stream.finalMessage();

    // A refusal returns empty text, which @cairn/ai treats as a failed parse
    // and fails closed with UngroundedResponseError — the right outcome here.
    const text =
      message.stop_reason === 'refusal'
        ? ''
        : message.content
            .filter((b): b is Anthropic.TextBlock => b.type === 'text')
            .map((b) => b.text)
            .join('');

    return Response.json({ text, remaining: quota.remaining }, { headers: CORS });
  } catch (error) {
    console.error('anthropic call failed', error);
    return Response.json({ error: 'Upstream model call failed.' }, { status: 502, headers: CORS });
  }
});
