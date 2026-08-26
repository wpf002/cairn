import type { EscalationRule } from './types.js';

const ACOG_UMWS = {
  org: 'ACOG / CDC Hear Her',
  title: 'Urgent Maternal Warning Signs',
  sourceDate: '2023-05-01',
} as const;

/**
 * The urgent maternal warning signs.
 *
 * Section 18 requires pregnancy escalation triggers, and this is the published
 * list every obstetric body agrees on. It is transcribed rather than
 * paraphrased: these are the fifteen signs that mean a pregnant or recently
 * pregnant person should be seen, and editing them down to sound calmer would
 * be the single most dangerous thing this codebase could do.
 */
export const MATERNAL_RULES: readonly EscalationRule[] = [
  {
    id: 'maternal.thoughts-of-self-harm',
    domain: 'pregnancy',
    urgency: 'emergency',
    referral: 'mental-health-crisis-line',
    message:
      'Thoughts of harming yourself or your baby need help right now. Call or text 988 (Suicide & Crisis Lifeline) or go to your nearest emergency department. You are not a bad mother for having these thoughts, and they are treatable.',
    detail:
      'Perinatal mood and anxiety disorders are the most common complication of pregnancy and childbirth, and they respond to treatment. This is a medical situation, not a moral one.',
    source: ACOG_UMWS,
    patterns: [
      /\b(?:thoughts? of |want(?:ing)? to |thinking about )?(?:harm(?:ing)?|hurt(?:ing)?|kill(?:ing)?) (?:myself|my ?self|my baby|the baby)\b/i,
      /\b(?:suicidal|suicide|end (?:my|it all)|don'?t want to (?:live|be here))\b/i,
      /\bbetter off without me\b/i,
    ],
  },
  {
    id: 'maternal.chest-pain-breathing',
    domain: 'pregnancy',
    urgency: 'emergency',
    referral: 'emergency-services',
    message:
      'Chest pain, a fast-beating heart, or trouble breathing during or after pregnancy is an emergency. Call 911 or go to the nearest emergency department now.',
    source: ACOG_UMWS,
    patterns: [
      /\b(?:chest pain|pain in my chest|heart (?:racing|pounding)|fast[- ]beating heart|palpitations)\b/i,
      /\b(?:trouble|difficulty|hard time) breathing\b/i,
      /\b(?:can'?t|cannot) (?:breathe|catch my breath)\b/i,
      /\bshort(?:ness)? of breath\b/i,
    ],
  },
  {
    id: 'maternal.severe-headache-vision',
    domain: 'pregnancy',
    urgency: 'urgent',
    referral: 'obstetric-provider',
    message:
      'A headache that will not go away or is getting worse, changes in your vision, or extreme swelling of your hands or face can be signs of preeclampsia. Contact your obstetric provider now, or go to labour and delivery if you cannot reach them.',
    detail:
      'Preeclampsia can develop during pregnancy and in the weeks after birth. It is diagnosed by a clinician, not by an app, and it is time-sensitive.',
    source: ACOG_UMWS,
    patterns: [
      /\bheadache\b[^.]{0,60}\b(?:won'?t go away|will not go away|getting worse|worst|severe|constant)\b/i,
      /\b(?:blurred|blurry|double) vision\b/i,
      /\b(?:seeing|see) (?:spots|flashing lights|stars)\b/i,
      /\bvision (?:changes?|problems?)\b/i,
      /\b(?:extreme|severe|sudden) swelling\b[^.]{0,40}\b(?:hands?|face)\b/i,
    ],
  },
  {
    id: 'maternal.bleeding-or-fluid',
    domain: 'pregnancy',
    urgency: 'urgent',
    referral: 'obstetric-provider',
    message:
      'Vaginal bleeding or fluid leaking during or after pregnancy needs to be assessed. Contact your obstetric provider now, or go to labour and delivery.',
    source: ACOG_UMWS,
    patterns: [
      /\b(?:vaginal )?bleeding\b/i,
      /\b(?:fluid|water) (?:leaking|leak|broke)\b/i,
      /\bpassing (?:clots|tissue)\b/i,
      /\bspotting\b[^.]{0,40}\b(?:heavy|soaking|increasing)\b/i,
    ],
  },
  {
    id: 'maternal.reduced-fetal-movement',
    domain: 'pregnancy',
    urgency: 'urgent',
    referral: 'obstetric-provider',
    message:
      "Your baby's movements stopping or slowing needs to be checked the same day. Contact your obstetric provider now, or go to labour and delivery. Do not wait to see if it improves overnight.",
    detail:
      'From around 28 weeks, a change in your baby\'s usual pattern of movement is the sign obstetric teams most want to hear about, and they would rather see you for nothing than not see you at all.',
    source: ACOG_UMWS,
    patterns: [
      /\b(?:baby|he|she|they) (?:has |have |hasn'?t |haven'?t )?(?:not |n't )?(?:been )?mov(?:ing|ed)\b/i,
      /\b(?:less|reduced|fewer|no|decreased) (?:movement|kicks?|kicking)\b/i,
      /\bhaven'?t felt (?:the baby|him|her|them|any movement)\b/i,
      /\bbaby (?:is )?(?:quiet|still)(?:er)?\b/i,
    ],
    predicate: (ctx) => ctx.gestationalWeek === undefined || ctx.gestationalWeek >= 24,
  },
  {
    id: 'maternal.severe-abdominal-pain',
    domain: 'pregnancy',
    urgency: 'urgent',
    referral: 'obstetric-provider',
    message:
      'Severe belly pain that does not go away needs to be assessed now. Contact your obstetric provider, or go to labour and delivery.',
    source: ACOG_UMWS,
    patterns: [
      /\b(?:severe|intense|unbearable|constant) (?:belly|abdominal|stomach|tummy) pain\b/i,
      /\b(?:belly|abdominal|stomach) pain\b[^.]{0,50}\b(?:won'?t go away|will not go away|constant)\b/i,
    ],
  },
  {
    id: 'maternal.fever',
    domain: 'pregnancy',
    urgency: 'urgent',
    referral: 'obstetric-provider',
    message:
      'A fever of 100.4°F (38°C) or higher during or after pregnancy needs to be reported to your obstetric provider today.',
    source: ACOG_UMWS,
    patterns: [/\bfever\b/i, /\btemperature\b[^.]{0,30}\b(?:10[0-9]|3[89])\b/i],
    predicate: (ctx) => ctx.temperatureCelsius === undefined || ctx.temperatureCelsius >= 38,
  },
  {
    id: 'maternal.leg-swelling-pain',
    domain: 'pregnancy',
    urgency: 'urgent',
    referral: 'obstetric-provider',
    message:
      'Swelling, redness, or pain in one leg can be a blood clot. Contact your obstetric provider now, or go to the emergency department.',
    source: ACOG_UMWS,
    patterns: [
      /\b(?:one|1|left|right) (?:leg|calf)\b[^.]{0,50}\b(?:swollen|swelling|red|painful|pain|hot|warm)\b/i,
      /\b(?:swelling|redness|pain)\b[^.]{0,30}\b(?:in|of) (?:my |one |the )?(?:leg|calf)\b/i,
    ],
  },
  {
    id: 'maternal.dizziness-fainting',
    domain: 'pregnancy',
    urgency: 'same-day',
    referral: 'obstetric-provider',
    message: 'Dizziness or fainting during or after pregnancy should be reported to your obstetric provider today.',
    source: ACOG_UMWS,
    patterns: [/\b(?:faint(?:ed|ing)?|passed out|black(?:ed)? out)\b/i, /\b(?:dizzy|dizziness|light[- ]?headed)\b/i],
  },
  {
    id: 'maternal.severe-vomiting',
    domain: 'pregnancy',
    urgency: 'same-day',
    referral: 'obstetric-provider',
    message:
      'Severe nausea and vomiting — worse than usual morning sickness, or leaving you unable to keep fluids down — should be reported to your obstetric provider today.',
    detail:
      'Hyperemesis gravidarum is treatable, and being unable to keep fluids down is the threshold that matters, not how many times you have been sick.',
    source: ACOG_UMWS,
    patterns: [
      /\b(?:can'?t|cannot|unable to) keep (?:anything|food|fluids?|water) down\b/i,
      /\b(?:severe|constant|non[- ]?stop|violent) (?:nausea|vomiting|throwing up)\b/i,
      /\bthrowing up\b[^.]{0,40}\b(?:all day|everything|constantly)\b/i,
    ],
  },
  {
    id: 'maternal.overwhelming-tiredness',
    domain: 'postpartum',
    urgency: 'same-day',
    referral: 'obstetric-provider',
    message:
      'Overwhelming tiredness after birth — beyond the ordinary exhaustion of a newborn — is on the list of maternal warning signs. Tell your obstetric provider today.',
    source: ACOG_UMWS,
    patterns: [/\b(?:overwhelming|extreme|crushing) (?:tiredness|fatigue|exhaustion)\b/i],
  },
  {
    id: 'postpartum.depression-screen',
    domain: 'postpartum',
    urgency: 'urgent',
    referral: 'obstetric-provider',
    message:
      'What you are describing may be a perinatal mood or anxiety disorder. Contact your obstetric provider or your doctor — this is the most common complication of childbirth and it responds well to treatment.',
    detail:
      'Cairn does not diagnose. What it can do is tell you that this is common, that it is not a character failure, and that the people who treat it want to hear from you early.',
    source: {
      org: 'ACOG',
      title: 'Committee Opinion 757: Screening for Perinatal Depression',
      sourceDate: '2018-11-01',
    },
    patterns: [
      /\b(?:can'?t stop crying|crying all the time|cry(?:ing)? every day)\b/i,
      /\b(?:don'?t|do not) feel (?:any )?(?:connect(?:ed|ion)|bond(?:ed)?|love) (?:to|with|for) (?:my|the) baby\b/i,
      /\b(?:feel(?:ing)? )?(?:numb|empty|hopeless|worthless)\b/i,
      /\bnot (?:myself|my ?self) since (?:the birth|having|giving birth)\b/i,
      /\bintrusive thoughts?\b/i,
    ],
    predicate: (ctx) =>
      ctx.postpartumDays === undefined || (ctx.postpartumDays >= 0 && ctx.postpartumDays <= 400),
  },
];
