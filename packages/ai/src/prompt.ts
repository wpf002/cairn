import type { ResolvedUnit } from '@cairn/substrate';

/**
 * Prompt assembly. Invariant 3 in prose form: the model is told, explicitly,
 * that its knowledge base is the retrieved units and nothing else, and the
 * enforcement happens downstream regardless of whether it listens.
 */
export function buildSystemPrompt(units: readonly ResolvedUnit[], context: {
  readonly childAgeMonths?: number;
  readonly stageLabel?: string;
  readonly gestationalWeek?: number;
}): string {
  const unitBlocks = units
    .map(({ unit }) => {
      const lines = [
        `[UNIT ${unit.id}@${unit.version}] (${unit.claimType}, ${unit.category}, voice: ${unit.voice})`,
        `TITLE: ${unit.title}`,
        `BODY: ${unit.body}`,
      ];
      if (unit.actions?.length) lines.push(`ACTIONS: ${unit.actions.join(' | ')}`);
      if (unit.warrant) {
        lines.push(
          `SCRIPTURE: ${unit.warrant.passages.join('; ')}`,
          `EXEGESIS: ${unit.warrant.exegesis}`,
          `APPLICATION: ${unit.warrant.application}`,
          `COMMON MISUSE (never repeat this error): ${unit.warrant.misuse}`,
        );
      }
      if (unit.evidence?.length) {
        lines.push(`EVIDENCE: ${unit.evidence.map((e) => `${e.org} — ${e.title}`).join('; ')}`);
      }
      return lines.join('\n');
    })
    .join('\n\n');

  const situation = [
    context.stageLabel ? `The child is in the ${context.stageLabel} stage (${context.childAgeMonths} months old).` : '',
    context.gestationalWeek ? `The mother is ${context.gestationalWeek} weeks pregnant.` : '',
  ]
    .filter(Boolean)
    .join(' ');

  return `You are the parenting guidance engine inside Cairn, a Christian family formation app.

${situation}

Your knowledge base for this answer is the retrieved units below — nothing else. Rules, all enforced downstream:
1. Ground every claim in the units. Cite the units you used by their [UNIT id@version] tags in "citations".
2. Scripture may ONLY come from the SCRIPTURE lines of cited units, applied per their EXEGESIS and APPLICATION, never per their COMMON MISUSE.
3. Never diagnose any condition — medical, developmental, or psychiatric. Describing what is developmentally common is allowed; naming a disorder is not.
4. You may add cautions in "additionalCautions" suggesting professional help. You have no ability to remove the app's own safety guidance, so do not mention or restate it.
5. Tone: a wise, warm friend who knows the research and the Scriptures. No guilt levers. No "a good parent would".

Respond with ONLY a JSON object:
{
  "whatsProbablyHappening": string,
  "howToRespond": string[],
  "whatNotToDo": string[],
  "conversationToHave": string,
  "biblicalPerspective": { "text": string, "passages": string[] },
  "prayer": string,
  "additionalCautions": string[] (optional),
  "citations": string[]  // e.g. ["child.receive.toddler.emotional-vocabulary@1"]
}

RETRIEVED UNITS:

${unitBlocks}`;
}

export function buildRepairPrompt(problems: readonly { field: string; problem: string }[]): string {
  return `Your previous response failed validation:\n${problems
    .map((p) => `- ${p.field}: ${p.problem}`)
    .join('\n')}\nReturn the corrected JSON object only.`;
}
