import { describe, expect, it } from 'vitest';
import {
  ALL_RULES,
  evaluate,
  mergeModelEscalations,
  peakUrgency,
  type Escalation,
} from '@cairn/escalation';

describe('rule hygiene (invariant 2, section 18)', () => {
  it('every rule carries a source', () => {
    for (const rule of ALL_RULES) {
      expect(rule.source.org.length, rule.id).toBeGreaterThan(0);
      expect(rule.source.title.length, rule.id).toBeGreaterThan(0);
      expect(rule.source.sourceDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it('rule ids are unique', () => {
    const ids = ALL_RULES.map((r) => r.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('messages tell the parent who to contact, not what they have', () => {
    for (const rule of ALL_RULES) {
      // No rule message may diagnose; it routes.
      expect(rule.message).not.toMatch(/\byou (?:have|are suffering from) (?:a |an )?(?:diagnos|condition|disorder|disease|depression|preeclampsia)/i);
    }
  });
});

describe('maternal warning signs', () => {
  it('escalates self-harm thoughts to crisis referral', () => {
    const result = evaluate({ text: 'I keep having thoughts of harming myself' });
    expect(result[0]?.ruleId).toBe('maternal.thoughts-of-self-harm');
    expect(result[0]?.urgency).toBe('emergency');
  });

  it('escalates reduced fetal movement at viable gestation', () => {
    const result = evaluate({
      text: "I haven't felt the baby move since yesterday",
      gestationalWeek: 30,
    });
    expect(result.map((r) => r.ruleId)).toContain('maternal.reduced-fetal-movement');
  });

  it('does not fire the movement rule at 12 weeks', () => {
    const result = evaluate({
      text: "I haven't felt the baby move",
      gestationalWeek: 12,
    });
    expect(result.map((r) => r.ruleId)).not.toContain('maternal.reduced-fetal-movement');
  });

  it('recognises preeclampsia warning language', () => {
    const result = evaluate({ text: 'I have a headache that won\'t go away and blurry vision' });
    expect(result.map((r) => r.ruleId)).toContain('maternal.severe-headache-vision');
  });

  it('screens postpartum depression language without diagnosing', () => {
    const result = evaluate({
      text: "I don't feel connected to my baby and I can't stop crying",
      postpartumDays: 40,
    });
    const hit = result.find((r) => r.ruleId === 'postpartum.depression-screen');
    expect(hit).toBeDefined();
    expect(hit?.message).not.toMatch(/you have postpartum depression/i);
  });
});

describe('pediatric rules', () => {
  it('treats fever under 3 months as an emergency', () => {
    const result = evaluate({ text: 'my baby has a fever', childAgeMonths: 2 });
    expect(result[0]?.ruleId).toBe('infant.fever-under-3-months');
    expect(result[0]?.urgency).toBe('emergency');
  });

  it('does not fire the under-3-months rule for a toddler', () => {
    const result = evaluate({ text: 'my toddler has a fever', childAgeMonths: 20 });
    expect(result.map((r) => r.ruleId)).not.toContain('infant.fever-under-3-months');
  });

  it('routes ingestion to poison control', () => {
    const result = evaluate({ text: 'I think she swallowed a button battery', childAgeMonths: 30 });
    expect(result[0]?.ruleId).toBe('child.ingestion');
    expect(result[0]?.referral).toBe('poison-control');
  });

  it('escalates adolescent self-harm to crisis line', () => {
    const result = evaluate({
      text: 'My daughter said she wants to die and I found cut marks',
      childAgeMonths: 170,
    });
    expect(result[0]?.ruleId).toBe('adolescent.self-harm');
  });

  it('flags skill regression as never wait-and-see', () => {
    const result = evaluate({ text: 'He used to say ten words but he stopped using them', childAgeMonths: 22 });
    expect(result.map((r) => r.ruleId)).toContain('development.regression');
  });

  it('fires from structured flags without any text', () => {
    const result = evaluate({ flags: ['infant.fever-under-3-months'], childAgeMonths: 1 });
    expect(result[0]?.ruleId).toBe('infant.fever-under-3-months');
    expect(result[0]?.matched).toBe('flag:infant.fever-under-3-months');
  });
});

describe('determinism and the additive-only contract', () => {
  it('is deterministic', () => {
    const ctx = { text: 'fever and a stiff neck', childAgeMonths: 48 };
    expect(evaluate(ctx)).toEqual(evaluate(ctx));
  });

  it('returns nothing on benign text', () => {
    expect(
      evaluate({ text: 'My six-year-old lost a board game and cried. How do I coach losing well?' }),
    ).toEqual([]);
  });

  it('sorts most urgent first', () => {
    const result = evaluate({
      text: 'she has a fever and I also think she swallowed some pills',
      childAgeMonths: 48,
    });
    expect(peakUrgency(result)).toBe('emergency');
  });

  it('model escalations append and never replace', () => {
    const deterministic = evaluate({ text: 'my baby has a fever', childAgeMonths: 1 });
    const modelAddition: Escalation = {
      ruleId: 'possible-uti',
      urgency: 'routine',
      referral: 'pediatrician',
      message: 'Consider discussing urinary symptoms with your pediatrician.',
      source: { org: 'model', title: 'model suggestion', sourceDate: '2026-01-01' },
      matched: 'model',
    };
    const merged = mergeModelEscalations(deterministic, [modelAddition]);
    expect(merged.map((m) => m.ruleId)).toContain('infant.fever-under-3-months');
    expect(merged.map((m) => m.ruleId)).toContain('model.possible-uti');
    expect(merged.length).toBe(deterministic.length + 1);
    // A model addition colliding with a deterministic id is dropped, not replacing it.
    const collision = mergeModelEscalations(deterministic, [
      { ...modelAddition, ruleId: 'infant.fever-under-3-months' },
    ]);
    expect(collision).toEqual(deterministic);
  });
});
