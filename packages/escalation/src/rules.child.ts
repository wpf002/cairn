import type { EscalationRule } from './types.js';

const AAP_FEVER = {
  org: 'AAP',
  title: 'Fever and Your Baby (healthychildren.org)',
  sourceDate: '2022-07-01',
} as const;

const AAP_SAFETY = {
  org: 'AAP',
  title: 'Bright Futures / periodicity guidance',
  sourceDate: '2024-01-01',
} as const;

/**
 * Pediatric and safeguarding escalation rules.
 *
 * The pediatric fever rule is the canonical example of why escalation is
 * deterministic: "fever" in a three-week-old and "fever" in a seven-year-old
 * are different sentences, and the difference is an age predicate, not a
 * judgment call.
 */
export const CHILD_RULES: readonly EscalationRule[] = [
  {
    id: 'infant.fever-under-3-months',
    domain: 'infant',
    urgency: 'emergency',
    referral: 'emergency-services',
    message:
      'A rectal temperature of 100.4°F (38°C) or higher in a baby under 3 months old needs immediate medical care. Call your pediatrician now; if you cannot reach them, go to the emergency department. Do not give fever medicine unless a clinician tells you to.',
    source: AAP_FEVER,
    patterns: [/\bfever\b/i, /\btemperature\b/i, /\b(?:feels? )?(?:hot|burning up)\b/i],
    predicate: (ctx) => ctx.childAgeMonths !== undefined && ctx.childAgeMonths < 3,
  },
  {
    id: 'child.fever-with-red-flags',
    domain: 'child',
    urgency: 'urgent',
    referral: 'pediatrician',
    message:
      'Fever with a stiff neck, a rash that does not fade under pressure, unusual drowsiness, trouble breathing, or a seizure needs urgent assessment. Call your pediatrician now or go to the emergency department.',
    source: AAP_FEVER,
    patterns: [
      /\bfever\b[^.]{0,80}\b(?:stiff neck|rash|seizure|convulsion|drowsy|lethargic|limp|won'?t wake|trouble breathing|blue lips)\b/i,
      /\b(?:stiff neck|non[- ]?blanching rash|febrile seizure)\b/i,
    ],
  },
  {
    id: 'infant.dehydration',
    domain: 'infant',
    urgency: 'urgent',
    referral: 'pediatrician',
    message:
      'Signs of dehydration in a baby — no wet diaper for 6 or more hours, a sunken soft spot, no tears when crying, or unusual sleepiness — need same-day medical attention. Call your pediatrician now.',
    source: AAP_SAFETY,
    patterns: [
      /\bno wet (?:diaper|nappy|nappies|diapers)\b/i,
      /\b(?:sunken (?:fontanelle?|soft spot)|no tears)\b/i,
      /\b(?:won'?t|will not|refusing to) (?:feed|eat|nurse|drink)\b[^.]{0,50}\b(?:all day|hours|since)\b/i,
    ],
  },
  {
    id: 'infant.breathing',
    domain: 'infant',
    urgency: 'emergency',
    referral: 'emergency-services',
    message:
      'Trouble breathing in a baby or child — working hard to breathe, grunting, ribs pulling in, blue or grey lips — is an emergency. Call 911 now.',
    source: AAP_SAFETY,
    patterns: [
      /\b(?:trouble|difficulty|hard time|labou?red) breathing\b/i,
      /\b(?:grunting|ribs? (?:pulling|sucking) in|retractions?)\b/i,
      /\b(?:blue|grey|gray) (?:lips|skin|around the mouth)\b/i,
      /\b(?:stopped|not) breathing\b/i,
    ],
  },
  {
    id: 'child.ingestion',
    domain: 'child',
    urgency: 'emergency',
    referral: 'poison-control',
    message:
      'If your child may have swallowed medicine, cleaning products, a button battery, or anything else that could be poisonous, call Poison Control now at 1-800-222-1222. If they are struggling to breathe or unresponsive, call 911.',
    detail:
      'Button batteries are a special case: they can cause serious internal burns within two hours and need an emergency department even if your child seems fine.',
    source: {
      org: 'AAP / America\'s Poison Centers',
      title: 'Poison prevention and treatment guidance',
      sourceDate: '2023-03-01',
    },
    patterns: [
      /\b(?:swallowed|ate|drank|ingested|got into)\b[^.]{0,60}\b(?:medicine|medication|pills?|vitamins?|cleaner|cleaning|bleach|detergent|battery|batteries|magnet|chemical)\b/i,
      /\bbutton battery\b/i,
    ],
  },
  {
    id: 'child.head-injury',
    domain: 'child',
    urgency: 'urgent',
    referral: 'pediatrician',
    message:
      'A head injury with loss of consciousness, vomiting, worsening headache, confusion, or unusual drowsiness needs urgent assessment. Call your pediatrician now or go to the emergency department. For a baby under 6 months, any significant head injury should be seen.',
    source: AAP_SAFETY,
    patterns: [
      /\b(?:hit|bumped|banged|fell on) (?:his|her|their) head\b[^.]{0,80}\b(?:vomit|threw up|unconscious|passed out|confused|drowsy|sleepy|won'?t wake)\b/i,
      /\bhead injury\b/i,
      /\b(?:knocked out|lost consciousness)\b/i,
    ],
  },
  {
    id: 'adolescent.self-harm',
    domain: 'adolescent',
    urgency: 'emergency',
    referral: 'mental-health-crisis-line',
    message:
      'If your child is talking about wanting to die, hurting themselves, or you have found evidence of self-harm, take it seriously every time. Call or text 988 (Suicide & Crisis Lifeline) together, or take them to the emergency department. Stay with them, and remove access to means.',
    detail:
      'Asking a young person directly about suicide does not put the idea in their head — the evidence is clear that it helps. Cairn will never treat this as a discipline problem.',
    source: {
      org: 'AAP',
      title: 'Suicide and Suicide Risk in Adolescents (clinical report)',
      sourceDate: '2024-01-01',
    },
    patterns: [
      /\b(?:my (?:son|daughter|child|teen(?:ager)?|kid)|he|she|they)\b[^.]{0,80}\b(?:want(?:s)? to die|kill (?:him|her|them)sel(?:f|ves)|suicid|self[- ]?harm|cutting|hurt(?:ing)? (?:him|her|them)sel(?:f|ves))\b/i,
      /\bfound\b[^.]{0,50}\b(?:cuts?|cut marks|scars|burn marks)\b/i,
    ],
  },
  {
    id: 'safeguarding.abuse-disclosure',
    domain: 'any',
    urgency: 'urgent',
    referral: 'child-protective-services',
    message:
      'What you are describing may involve abuse. If a child is in immediate danger, call 911. Otherwise call the Childhelp National Child Abuse Hotline at 1-800-422-4453 — they can talk through the situation and what to do next, including how to report.',
    source: {
      org: 'Childhelp / HHS',
      title: 'National Child Abuse Hotline',
      sourceDate: '2024-01-01',
    },
    patterns: [
      /\b(?:sexual(?:ly)? (?:abus|assault|touch)|molest)\w*\b/i,
      /\b(?:someone|he|she|a (?:coach|teacher|relative|family member))\b[^.]{0,60}\b(?:touched|touching)\b[^.]{0,60}\b(?:inappropriately|privates?|genitals?)\b/i,
      /\bdisclos\w+\b[^.]{0,50}\babus/i,
    ],
  },
  {
    id: 'infant.safe-sleep-deviation',
    domain: 'infant',
    urgency: 'informational',
    referral: 'pediatrician',
    message:
      'Safe sleep guidance: babies sleep alone, on their back, in a bare crib or bassinet, for every sleep. If your current arrangement differs, your pediatrician can help you move toward it — the guidance exists because it measurably reduces the risk of sleep-related death.',
    source: {
      org: 'AAP',
      title: 'Sleep-Related Infant Deaths: Updated 2022 Recommendations',
      sourceDate: '2022-06-21',
    },
    patterns: [
      /\b(?:sleep(?:s|ing)? on (?:his|her|their) (?:stomach|tummy|side|front))\b/i,
      /\b(?:co[- ]?sleep|bed[- ]?shar)\w*\b/i,
      /\b(?:blankets?|pillows?|bumpers?|stuffed animals?)\b[^.]{0,40}\b(?:crib|bassinet|cot)\b/i,
    ],
    predicate: (ctx) => ctx.childAgeMonths !== undefined && ctx.childAgeMonths < 12,
  },
  {
    id: 'development.regression',
    domain: 'child',
    urgency: 'routine',
    referral: 'pediatrician',
    message:
      'Losing skills a child previously had — words, social responses, motor skills — is always worth raising with your pediatrician, whatever the age. It has many possible explanations and the earlier it is looked at, the better.',
    detail:
      'Cairn does not diagnose developmental conditions. Regression is one of the few developmental observations that is never "wait and see", which is why it is a rule rather than an article.',
    source: {
      org: 'CDC',
      title: "Learn the Signs. Act Early. — developmental monitoring guidance",
      sourceDate: '2022-02-01',
    },
    patterns: [
      /\b(?:lost|losing|stopped using) (?:words?|speech|language|skills?)\b/i,
      /\b(?:used to|was able to)\b[^.]{0,60}\b(?:doesn'?t|does not|can'?t|cannot|stopped|no longer)\b/i,
      /\bregress(?:ion|ing|ed)?\b/i,
    ],
  },
];
