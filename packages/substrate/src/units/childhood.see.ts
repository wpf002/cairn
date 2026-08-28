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
    title: 'Dad loving Mom',
    lede: 'Your child cannot follow a sermon yet. They are already recording a marriage.',
    body:
      'Your child cannot follow a sermon yet. They are already recording a marriage. How you speak to her when the baby has been crying for an hour. Whether you reach for her hand while the kettle boils. What you do after you were wrong. Two rows on the worksheet run the whole span, one to twenty-one. This is one of them. Class is always in session.',
    actions: [
      'Let them see the greeting kiss, the thank-you, the hand on the shoulder.',
      'Wrong with her in front of the kids? Apologise in front of the kids.',
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
    title: 'Mom loving Dad',
    lede: 'The tone you use about him when he is out of the room is studied closely.',
    body:
      'Your child is learning what respect sounds like. What partnership looks like. What a woman\'s strength is for. They learn it from you, daily, whether or not you meant to teach. The tone you use about him when he is not in the room may be the most closely studied speech your child ever hears.',
    actions: [
      'Speak well of their father to them, especially when he is not there.',
      'Receive his care without scorekeeping. Give yours without martyrdom.',
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
    title: 'They still get to watch love',
    lede: 'Your household writes this row differently. Not worse.',
    body:
      'The lesson was never two parents. The lesson is that love gets done, daily, on days nobody feels it. Your child watches you keep showing up. Watches you speak without bitterness about someone who earned it. Watches you take help from a friend or a church without shame. They are not missing the class. They are watching it taught under harder conditions, which they will remember longer.',
    actions: [
      'Let them see your friends and your church carry you. Being loved is also modelled.',
      'Guard your speech about their other parent. Guard your child from carrying your grief.',
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
    title: 'The father a baby records',
    lede: 'Your tone at 3am. Whether you are a parent or a babysitter in your own house.',
    body:
      'Nobody preaches to an infant. The recording still runs. Your tone at 3am. Whether you are a parent in this house or a babysitter in it. Whether your wife gets relieved or managed. Habits set in year one are still running at year twelve. The baby will not remember. Your wife will, and so will the man you are practising becoming.',
    actions: [
      'Own real territory alone. Bath time, a night shift, the morning hour. Yours, not help.',
      'Start praying for this child now, privately. It becomes visible soon enough.',
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
    title: 'The mother a baby records',
    lede: 'This year forms you faster than any year will form your child.',
    body:
      'Two things are already being recorded. How you talk to yourself when you fail, which toddlers repeat back word for word. And where you go when you are empty. A mother who rests, calls a friend, prays, takes the help, is teaching that this is sustainable. A mother who only pours out is teaching martyrdom. Children learn both equally well.',
    actions: [
      'Take the break that is offered. Being cared for in front of them is the lesson.',
      'Say the repair out loud. "Mama was frustrated. I am sorry. Let us try again."',
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
    title: 'Your toddler is quoting you',
    lede: 'Everything is imitated now. How you drive. Your face when plans change.',
    body:
      'How you drive. What you say about the referee. Your face when dinner plans change. Whether your faith turns up on a Tuesday. A toddler cannot be taught to regulate. They catch it. The most valuable thing you model in these years is the repaired failure. You lose your temper, and then you apologise, out loud, where they can see. A child who watches a strong man apologise learns that strength and repentance live in the same body.',
    actions: [
      'When you blow it, kneel to eye level and say it plainly. No "but."',
      'Let them catch your faith on an ordinary Tuesday. Witnessed, not performed.',
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
    title: 'They borrow your brakes',
    lede: 'A toddler mid-meltdown has none of their own.',
    body:
      'A toddler mid-meltdown has no brakes. They borrow yours. So the most-watched thing in these years is your nervous system. The breath before you answer. The voice that goes down when theirs goes up. Calm you decided on rather than felt. Nobody does this well every time. The target is showing them, several hundred times, what coming back down looks like. Including your own.',
    actions: [
      'Lower your voice as theirs rises. You are demonstrating the skill they lack.',
      'When you snap, come back. Name it, apologise, reconnect. The repair outweighs the rupture.',
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
