import type { Unit } from '../types.js';
import { ALL_0_5, EDITORIAL, INFANCY, REVIEWED, TOBIAS, TODDLERHOOD } from './helpers.js';

/**
 * SEE, birth to five — the heavy voice split (section 16b).
 *
 * A child watching a father model manhood and a child watching a mother model
 * womanhood are different formative events, so these ship as voiced pairs
 * with explicit cross-references, and the two constants (each parent loving
 * the other) carry solo variants written as their own units.
 */
export const CHILDHOOD_SEE_UNITS: readonly Unit[] = [
  // ---- The constant: loving your spouse, both voices, plus solo variants ---
  {
    id: 'child.see.father-loving-mother',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: [...ALL_0_5] },
    voice: 'father',
    pairedWith: 'child.see.mother-loving-father',
    title: 'The most important thing your child will watch you do',
    body:
      'On the worksheet this whole framework grew from, only two rows run the entire span from one to twenty-one, and this is one of them: Dad loving Mom. Your child cannot yet parse a sermon, but they are already recording a marriage. How you speak to her when the baby has been crying for an hour, whether you reach for her hand in ordinary moments, how you apologise — this is the curriculum that is always in session.',
    actions: [
      'Let your child routinely see affection between you: the greeting kiss, the thank-you, the hand on the shoulder.',
      'When you are wrong with her in front of the kids, apologise in front of the kids.',
    ],
    warrant: {
      passages: ['Ephesians 5:25-33'],
      exegesis:
        'Husbands are commanded to love their wives as Christ loved the church — sacrificially, nourishing and cherishing. The love described is visible and practical: Christ\'s love for the church was enacted, not felt privately.',
      application:
        'A father\'s enacted love for his wife is a child\'s first moving picture of Christ and the church. It is formation by observation, running every day of childhood, which is exactly how the source worksheet marks it: the full span, no gaps.',
      misuse:
        'Misused when "love your wives" is skipped to arrive at "wives submit" — the passage\'s longest and heaviest charge is to the husband. Also misused as a private standard; the text\'s love is public and demonstrable.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['marriage', 'constant'],
  },
  {
    id: 'child.see.mother-loving-father',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: [...ALL_0_5] },
    voice: 'mother',
    pairedWith: 'child.see.father-loving-mother',
    title: 'What your child learns from how you love their dad',
    body:
      'The second full-span constant, mirrored: Mom loving Dad. Your child is learning what respect sounds like, what partnership looks like, and what a woman\'s strength is for — from you, daily, whether or not you are teaching. The tone you use about him when he is not in the room may be the most closely studied speech your child ever hears.',
    actions: [
      'Speak well of their father to your children, especially in his absence.',
      'Let them see you receive his care without scorekeeping, and offer yours without martyrdom.',
    ],
    warrant: {
      passages: ['Ephesians 5:33', 'Titus 2:4'],
      exegesis:
        'Ephesians 5:33 summarises the mutual charge — the husband to love, the wife to respect. Titus 2:4 has the older women training the younger "to love their husbands and children": married love is treated as a practice that is learned and taught, not merely felt.',
      application:
        'A mother\'s visible, spoken love and respect for her husband is part of the household\'s formation curriculum — Titus assumes it is teachable precisely because children (and younger women) learn it by watching.',
      misuse:
        'Misused to demand a wife\'s deference toward genuinely harmful behaviour — respect in Ephesians sits inside mutual submission (5:21) and never obliges enabling sin or abuse. A home where safety is at risk needs help, not better optics.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['marriage', 'constant'],
  },
  {
    id: 'child.see.love-modeled-solo',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: [...ALL_0_5] },
    voice: 'shared',
    soloVariantOf: 'child.see.father-loving-mother',
    title: 'Your child still gets to watch love — yours',
    body:
      'The worksheet\'s longest row assumes two parents; your household writes it differently, not worse. What the constant actually teaches is that love is enacted, daily, reliably — and a single parent models that every time a child watches them keep showing up, honour the other parent where that is possible, speak without bitterness where it is not, and receive help from friends, family, and church without shame. Your child is not missing the lesson. They are watching you teach it under harder conditions, which is the more memorable class.',
    actions: [
      'Let your child see your friendships and your church carry you sometimes — being loved is also modeled.',
      'Where the other parent is part of your child\'s life, guard your speech about them; where they are not, guard your child from carrying your grief for you.',
    ],
    warrant: {
      passages: ['Psalm 68:5-6'],
      exegesis:
        '"Father of the fatherless and protector of widows is God in his holy habitation. God settles the solitary in a home." The psalm names God\'s particular commitment to households missing a parent, and his provision through placement in community.',
      application:
        'A single-parent household is a household under God\'s stated special care, and the community God "settles the solitary" into — extended family, church — is part of the modeling a child sees. Naming the gap honestly while filling it deliberately is the faithful version of this row.',
      misuse:
        'Misused when quoted as consolation while the church supplies no actual help — the psalm describes God acting through provision, which implicates the community that reads it. Never use this text to imply single parenting is a deficiency to be pitied.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['single-parent', 'constant', 'solo-variant'],
  },

  // ---- Character and spiritual life, banded, voiced pairs ------------------
  {
    id: 'child.see.father-character.infancy',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: [...INFANCY] },
    voice: 'father',
    pairedWith: 'child.see.mother-character.infancy',
    title: 'The father a baby is recording',
    body:
      'Nobody preaches to an infant, and yet the recording is running: your tone at 3am, whether you are a parent or a babysitter in your own house, whether mom gets relieved or managed. The habits of fatherhood set in the first year are the ones that will still be running at year twelve. The baby will not remember this year. You will, and so will your wife, and the father you are practising becoming is the one your child will eventually see.',
    actions: [
      'Own real territory, alone, from the start — bath time, a night shift, the morning hour — not as help but as yours.',
      'Start one private habit of prayer for this child now, before they can watch; it will be visible soon enough.',
    ],
    warrant: {
      passages: ['Titus 2:7'],
      exegesis:
        '"Show yourself in all respects to be a model of good works, and in your teaching show integrity." Paul\'s instruction to Titus makes the teacher\'s life the first lesson: modeling precedes and authenticates instruction.',
      application:
        'A father\'s character formation during infancy is the pre-production of every lesson he will later teach. The year nobody is watching is when the model gets built.',
      misuse:
        'Misused as image management — Titus calls for integrity, not performance. A father curating an impression of engagement while opting out of the work is the inversion of the verse.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['father', 'infancy', 'character'],
  },
  {
    id: 'child.see.mother-character.infancy',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: [...INFANCY] },
    voice: 'mother',
    pairedWith: 'child.see.father-character.infancy',
    title: 'The mother a baby is recording',
    body:
      'The first year of motherhood forms you faster than any year will form your child — and the woman being formed is the model your child will grow up watching. Two things are being recorded even now: how you treat yourself when you fail (the harsh self-talk toddlers later mimic word-for-word), and where you go when you are empty. A mother who visibly refuels — rest, friendship, prayer, help accepted — is teaching sustainability. A mother who only ever pours out is teaching martyrdom, and children learn both lessons equally well.',
    actions: [
      'Take the break that is offered. Accepting care in front of your child is curriculum, not weakness.',
      'When you lose your patience, narrate the repair out loud — "Mama was frustrated; I\'m sorry; let\'s try again" — years before they can say it back.',
    ],
    warrant: {
      passages: ['Proverbs 31:25-26', 'Mark 6:31'],
      exegesis:
        'The Proverbs 31 woman is clothed in strength and dignity, laughing at the time to come, with wisdom and kindness on her tongue — a portrait of durable, sustained strength, not depletion. In Mark 6:31 Jesus orders his disciples away from urgent, legitimate ministry demands: "Come away by yourselves to a desolate place and rest a while."',
      application:
        'Sustained maternal strength — the Proverbs portrait — is built the way Jesus built his disciples\' capacity: with commanded rest amid real demands. A mother modeling replenishment is modeling how strength actually works.',
      misuse:
        'Proverbs 31 is the most weaponised chapter in Christian womanhood — misused as an impossible productivity standard. It is a poem of praise for strength and wisdom, not a performance review, and it says nothing about doing it all without help.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['mother', 'infancy', 'character'],
  },
  {
    id: 'child.see.father-character.toddlerhood',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: [...TODDLERHOOD] },
    voice: 'father',
    pairedWith: 'child.see.mother-character.toddlerhood',
    title: 'Your toddler is now quoting you — in behaviour',
    body:
      'From here on, everything is imitated: how you drive, how you talk about the referee, what your face does when dinner plans change, whether your faith exists on weekdays. A toddler cannot be taught emotional regulation; they can only catch it. The single most valuable thing a father models in these years is the repaired failure: losing your temper, and then — visibly, out loud — apologising. A child who watches a strong man apologise learns that strength and repentance live in the same person.',
    actions: [
      'Apologise to your child directly when you blow it: kneel, eye level, plain words. No "but."',
      'Let them see your faith in ordinary time: praying, reading, serving — witnessed, not performed.',
    ],
    warrant: {
      passages: ['1 Corinthians 11:1', 'James 5:16'],
      exegesis:
        '"Be imitators of me, as I am of Christ" — Paul assumes discipleship travels by imitation and dares to put himself in the chain. James 5:16 commands mutual confession — "confess your sins to one another" — placing acknowledged failure inside the community\'s ordinary life.',
      application:
        'A father is in the imitation chain whether he volunteers or not; the only choice is what gets imitated. Confessed, repaired failure is the most transferable spiritual skill a small child can witness.',
      misuse:
        'Paul\'s "imitate me" is misused as a demand for parental infallibility — his letters openly document his weaknesses. The model commended is Christward direction, failures included, not flawlessness.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['father', 'toddlerhood', 'apology'],
  },
  {
    id: 'child.see.mother-character.toddlerhood',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: [...TODDLERHOOD] },
    voice: 'mother',
    pairedWith: 'child.see.father-character.toddlerhood',
    title: 'The regulation your toddler borrows is yours',
    body:
      'A toddler mid-meltdown has no working brakes — they borrow yours. Which means the most-watched model in these years is your nervous system: the breath you take before responding, the voice that stays low when theirs goes high, the calm that is decided rather than felt. Nobody performs this perfectly. The target is not serenity; it is showing them, hundreds of times, what coming back down looks like — including the times you have to come back down yourself, out loud.',
    actions: [
      'In the meltdown, lower your voice as theirs rises. You are demonstrating the skill they are missing.',
      'When you snap, model the comeback: name it, apologise, reconnect. The repair teaches more than the rupture cost.',
    ],
    warrant: {
      passages: ['Proverbs 15:1', 'Galatians 5:22-23'],
      exegesis:
        '"A soft answer turns away wrath, but a harsh word stirs up anger" — the proverb describes the mechanics of de-escalation: the answer\'s register shapes the exchange\'s trajectory. Galatians lists self-control among the Spirit\'s fruit — grown, not summoned.',
      application:
        'The soft answer is a learnable practice with a toddler-sized proving ground, and its repeated exercise is precisely how the fruit of self-control grows in the parent while being modeled for the child. One practice, two formations.',
      misuse:
        'Proverbs 15:1 is misused to blame whoever stayed calm for whoever exploded ("if you\'d been softer…"). It commends soft answers; it does not make one person responsible for another\'s wrath — a distinction that matters doubly for mothers prone to absorbing blame.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['mother', 'toddlerhood', 'regulation'],
  },
];
