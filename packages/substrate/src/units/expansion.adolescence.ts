import type { Unit } from '../types.js';
import { EDITORIAL, REVIEWED, TOBIAS } from './helpers.js';

const TEEN = ['early-adolescence', 'middle-adolescence', 'late-adolescence'] as const;

/**
 * Ages 11–18 formation: the Consultant years. Phase 8, second expansion band.
 * Guide Them (section 10) lives here: the hard topics, addressed rather than
 * gestured at, with the cross-voice pairs the roadmap calls the highest-value
 * units — each parent needs to know what the other is carrying.
 */
export const EXPANSION_ADOLESCENCE_UNITS: readonly Unit[] = [
  // SEE
  {
    id: 'see.teen.consistency-under-scrutiny',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: [...TEEN] },
    voice: 'shared',
    title: 'They are auditing you now',
    lede: 'The hypocrisy detector is installed now, and calibrated harsh.',
    body:
      'The hypocrisy detector is installed now and calibrated harsh. They are not looking for polish. They are looking for consistency. A faith that costs you something they can see. Apologies that still happen when you are wrong. A marriage still tended in front of them. Integrity when the corner was cheaper. The most faith-protective thing a teenager watches is a parent whose private and public selves match.',
    actions: [
      'Let them see the cost. The tithe line in the budget. The honest call when lying was easier.',
      'When they catch an inconsistency, thank them before you explain anything.',
    ],
    warrant: {
      passages: ['1 Timothy 4:12-16', 'Titus 2:7-8'],
      exegesis:
        'Paul tells Timothy to watch his life and doctrine closely and persist, "for by so doing you will save both yourself and your hearers" — watched consistency of life is presented as ministry\'s load-bearing wall. Titus adds that sound modeling leaves the opponent "having nothing evil to say."',
      application:
        'The teenager is the closest hearer with the closest watch. Life-doctrine consistency, sustained under their audit, is the parent\'s chief apologetic in these years.',
      misuse:
        'Misused toward image management — curating the appearance of consistency is precisely the hypocrisy the detector exists to find, and being caught curating costs double.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['integrity', 'teen'],
  },

  // RECEIVE — consultant posture
  {
    id: 'receive.teen.consultant-posture',
    version: 1,
    claimType: 'normative',
    category: 'RECEIVE',
    scope: { kind: 'stage', stages: [...TEEN] },
    voice: 'shared',
    title: 'Questions before answers',
    lede: 'The consultant asks before advising. Then waits.',
    body:
      '"What do you think you should do?" Then wait. A teenager needs widening agency inside firm anchors. Real choices with real consequences. Confidences kept. Advice offered rather than issued. Underneath all of it, respect, safety and truth stay non-negotiable. Keep commanding what should now be consulted and they learn to route around you. Drop the anchors and they learn nothing here is solid.',
    actions: [
      'Replace one directive per week with a question, asked honestly: "walk me through your thinking."',
      'Name the anchors once, calmly. Then hold them without theatrics.',
      'When they choose badly inside a safe range, let the consequence arrive whole.',
    ],
    warrant: {
      passages: ['Proverbs 20:5', 'Colossians 3:21'],
      exegesis:
        '"The purpose in a man\'s heart is like deep water, but a man of understanding will draw it out" — wisdom\'s method with another\'s inner life is drawing out, not pronouncing over. Colossians warns fathers against provoking children "lest they become discouraged" — heavy-handedness has a stated cost.',
      application:
        'Question-first consulting is Proverbs 20:5\'s method applied to adolescence, and Colossians names what over-control produces. Agency inside anchors is the biblical shape of releasing responsibility.',
      misuse:
        'Proverbs 20:5 misused as interrogation technique — drawing out serves the teen\'s own clarity, not the parent\'s surveillance. Colossians 3:21 misused to forbid all firmness; discouragement comes from provocation, not from boundaries.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['consultant', 'agency'],
  },

  // RECEIVE — the pornography conversation, cross-voiced (section 16b's example)
  {
    id: 'receive.teen.pornography.father',
    version: 1,
    claimType: 'normative',
    category: 'RECEIVE',
    scope: { kind: 'stage', stages: [...TEEN] },
    voice: 'father',
    pairedWith: 'receive.teen.pornography.mother',
    title: 'Pornography: a father\'s brief',
    lede: 'Assume exposure has already happened. First exposure now lands before the teen years.',
    body:
      'Assume it has already happened. Average first exposure now lands before the teen years. This is not one talk. It is a standing channel. What pornography is. Why it lies about bodies and about love. What it trains a brain toward. And that stumbling brings them to you rather than into hiding. With sons, honesty about your own generation earns you a hearing. With daughters, do not assume this is not her fight.',
    actions: [
      'Say it once: "If you see something you cannot unsee, tell me. I will not explode."',
      'Set the guardrails together. Team defence, not surveillance.',
      'Keep your own accountability visible. This is a household rule, not a teen rule.',
    ],
    warrant: {
      passages: ['Job 31:1', 'Ephesians 5:3', '1 Corinthians 6:18-20'],
      exegesis:
        'Job\'s covenant with his eyes is a deliberate, stated discipline of vision. Ephesians places sexual immorality outside what may even be named as fitting among saints; 1 Corinthians grounds sexual integrity in the body as temple, bought with a price.',
      application:
        'A father teaching guarded eyes and embodied honour is transmitting Job\'s covenant and Paul\'s body-theology at the age the battle begins. The shame-free channel is what distinguishes discipleship from mere prohibition.',
      misuse:
        'These texts misused as shame artillery produce hiding, and hiding is where compulsion grows. The passages aim at holiness and freedom; a teen crushed by them was taught the rule without the redemption.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['pornography', 'guide-them', 'father'],
  },
  {
    id: 'receive.teen.pornography.mother',
    version: 1,
    claimType: 'normative',
    category: 'RECEIVE',
    scope: { kind: 'stage', stages: [...TEEN] },
    voice: 'mother',
    pairedWith: 'receive.teen.pornography.father',
    title: 'Pornography: a mother\'s brief',
    lede: 'Your calm, unshocked availability decides whether she asks or hides.',
    body:
      'Know what your husband is carrying with your son. Then carry your own pieces. A son needs to hear the dignity of women from a woman he loves. A daughter needs to know this is her fight too, along with the images she gets pressured to send and the romance-shaped content teaching her what to expect. Your calm, unshocked availability decides whether she asks you or concludes she is uniquely broken.',
    actions: [
      'Say it plainly. "Nothing you see or get sent would make me love you less."',
      'With a daughter, cover the sending as well as the seeing. Name what to do.',
      'Give a son one sentence to keep. "Every woman on a screen is somebody\'s daughter."',
    ],
    warrant: {
      passages: ['Titus 2:3-5', 'Ephesians 5:3'],
      exegesis:
        'Titus assigns older women the teaching of the younger in self-control and purity — woman-to-woman formation in sexual character is an apostolic structure, not an improvisation. Ephesians\' purity standard addresses the whole community.',
      application:
        'A mother\'s voice in sexual formation is biblically commissioned, not auxiliary. The Titus channel — modelled dignity, unshocked teaching — is exactly what a daughter in this decade needs and what a son needs to overhear.',
      misuse:
        'Titus 2 misused to make purity a female burden while sons go untaught — the standard in Ephesians is universal. Also misused toward shame; the older-woman teaching in Titus is restorative, aimed at flourishing.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['pornography', 'guide-them', 'mother'],
  },

  // EXPERIENCE — one-on-one at double weight + age-14 list
  {
    id: 'experience.teen.one-on-one-double-marked',
    version: 1,
    claimType: 'normative',
    category: 'EXPERIENCE',
    scope: { kind: 'stage', stages: [...TEEN] },
    voice: 'shared',
    title: 'The highest-leverage hour you have',
    lede: 'One row on the worksheet carries both markers at once. This one. And it closes.',
    body:
      'The teen who will not talk at the table talks in the car. The one who shrugs at a question opens up over a shared task, while both of you look at something else. The highest-leverage hour of the decade, and the window closes. Give them growing control of their schedule. Let them inside one adult decision. Ask what kind of person they mean to become.',
    actions: [
      'Fix the recurring one-on-one and defend it. Their venue, your phone in the glovebox.',
      'Bring them inside one real adult decision as a contributor, not an observer.',
      'Ask it straight once this year. "What kind of person are you trying to become?"',
    ],
    warrant: {
      passages: ['Proverbs 27:17', 'Deuteronomy 6:7'],
      exegesis:
        'Iron sharpens iron, "and one man sharpens another" — formation in Proverbs is person-to-person, friction included. Deuteronomy\'s walking-by-the-way formation presumes shared time in ordinary motion — the car is the modern road.',
      application:
        'Deliberate one-on-one time is the delivery vehicle for everything else this decade requires; the worksheet\'s double marking is an editorial claim this app treats as load-bearing.',
      misuse:
        'Misused when one-on-one time becomes ambush time — every drive an interrogation. The sharpening in Proverbs is mutual; a teen who learns the car is a trap stops getting in.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['one-on-one', 'double-marked'],
  },

  // HEAR — the back-loaded rows arrive
  {
    id: 'hear.teen.proud-and-admire',
    version: 1,
    claimType: 'normative',
    category: 'HEAR',
    scope: { kind: 'stage', stages: [...TEEN] },
    voice: 'shared',
    title: 'Proud of you, and I admire you',
    lede: 'A thirteen-year-old knows their own effort now, and can tell what was earned.',
    body:
      'These two start at thirteen for a reason. A teenager knows their own effort now and can tell what was earned, which an eight-year-old cannot. "I am proud of you" lands on work and growth. "I admire this about you" goes further, and tells them their character has become visible to someone. Both run to twenty-one. And a fifteen-year-old still needs "I love you," most on the days they look least interested.',
    actions: [
      'Say "I am proud of you" about something they worked at this week. Name it.',
      'Once a season: "I admire how you did that. It is not common." Then watch.',
      'Keep the childhood anchors running through every eye-roll, unembarrassed.',
    ],
    warrant: {
      passages: ['Matthew 3:17', 'Proverbs 25:11'],
      exegesis:
        'The Father\'s affirmation names identity and pleasure before performance; Proverbs prizes the word fitted to its moment. Affirmation in Scripture is timed, specific, and identity-conferring.',
      application:
        'The ladder\'s accumulation — love, then pride, then admiration — mirrors the Father\'s pattern: identity first, then delight in the person emerging. The teen years are when the upper rungs become speakable and needed.',
      misuse:
        'Misused when pride-language attaches only to achievement, converting affirmation back into wages — the thing the ladder\'s first rung exists to prevent. Admire character; celebrate effort; love unconditionally.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['affirmation-ladder', 'teen'],
  },

  // LEARN — the age-15 curriculum
  {
    id: 'learn.age-15.curriculum',
    version: 1,
    claimType: 'normative',
    category: 'LEARN',
    scope: { kind: 'stage', stages: ['middle-adolescence', 'late-adolescence'] },
    voice: 'shared',
    title: 'The age-fifteen curriculum',
    lede: 'Cook a real meal. Run an account. Sit a real interview. State what respect means.',
    body:
      'Taught and practised by fifteen. Cook several real meals. Run a bank account and know what credit costs. Sit a real job interview. State what respect means in a relationship. Understand consent clearly, in both directions. Spot an unhealthy relationship from a list they helped build. Disagree with an adult without folding. Understand digital permanence before it teaches them personally.',
    actions: [
      'Hand over the kitchen one night a week. Planning, cooking, and the budget.',
      'Run the mock interview before the real one; then require the real one.',
      'Build the list together. Control, isolation, contempt, secrecy. Before it is needed.',
    ],
    warrant: {
      passages: ['Luke 16:10', '2 Thessalonians 3:10', 'Proverbs 22:7'],
      exegesis:
        'Faithful in little, faithful in much; "if anyone is not willing to work, let him not eat" — work as Christian obligation; "the borrower is the slave of the lender" — debt named plainly as servitude. The wisdom corpus treats practical competence as moral formation.',
      application:
        'The fifteen-year-old\'s curriculum is Luke 16:10 at its next scale: money, work, food, and relationships as the "little" that trains the much of adult life now three years out.',
      misuse:
        '2 Thessalonians misused against teens in seasons of genuine struggle — Paul targets unwillingness, not inability. Proverbs 22:7 misused as a total debt prohibition rather than a clear-eyed warning to be understood before signing.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['life-skills', 'money', 'work'],
  },

  // BELIEVE — 13–15 and 16–18 layers
  {
    id: 'believe.13-15.owning-faith',
    version: 1,
    claimType: 'normative',
    category: 'BELIEVE',
    scope: { kind: 'stage', stages: ['early-adolescence', 'middle-adolescence'] },
    voice: 'shared',
    title: 'Doubt is not the emergency',
    lede: 'Unspoken doubt is. Every question has to be speakable at home.',
    body:
      'Unspoken doubt is the emergency. In these years the inherited faith gets stress-tested. Suffering. Hypocrisy. Sexuality. Science. The friend whose family believes something else. Your one essential policy is that every question is speakable here. Move from teaching to discussing, and engage their arguments rather than managing them. Their Bible, their prayer life, invited rather than enforced. Aim at a faith they are handling with their own hands, roughly, in front of you.',
    actions: [
      'Say it. "No question about God is off the table here." Then prove it on the first hard one.',
      'Do not resolve a doubt same-day. "That is a real question. Let us chase it properly."',
      'Shift devotions from led to shared. They pick, they ask, they push back.',
    ],
    warrant: {
      passages: ['Jude 1:22', 'Mark 9:24'],
      exegesis:
        '"Have mercy on those who doubt" — doubt receives mercy, categorically, in the New Testament\'s own pastoral instruction. The father in Mark cries "I believe; help my unbelief!" and is answered, not rebuked — mixed faith is met with help.',
      application:
        'A household policy of mercy toward doubt is directly commanded. The teen whose unbelief can say itself out loud at home is standing where the Mark 9 father stood — in front of help.',
      misuse:
        'These texts misused in reverse — doubt celebrated as destination rather than met with mercy on the way to faith. Mercy walks with the doubter; it does not enshrine the doubt.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['believe-curriculum', 'doubt'],
  },
  {
    id: 'believe.16-18.living-independently',
    version: 1,
    claimType: 'normative',
    category: 'BELIEVE',
    scope: { kind: 'stage', stages: ['late-adolescence'] },
    voice: 'shared',
    title: 'Faith that runs without you',
    lede: 'Does it still run when nobody at home is watching?',
    body:
      'Does it run when nobody at home is watching? Ownership looks specific. Church chosen over sleep. An ethical call made away from you. Money given from their own earnings. A worldview they can state without borrowing your vocabulary. Start preparing the launch out loud. How to find a church in a new town. How to hold faith in a hostile room. What they do the first Sunday nobody wakes them.',
    actions: [
      'Have them visit one church entirely without you this year. Their evaluation, your questions after.',
      'Ask at seventeen: "What of this do you take because it is yours?" Take the gaps seriously.',
      'Move giving to their income, their decision, their record.',
    ],
    warrant: {
      passages: ['2 Timothy 1:5', 'Joshua 24:15'],
      exegesis:
        'Paul names a faith that "dwelt first" in Lois and Eunice and now dwells in Timothy — transmitted faith becoming personally possessed across generations. Joshua sets the choice before the assembly — "choose this day whom you will serve" — while declaring his own house\'s decision: the choice is real, and the household\'s witness stands beside it, not instead of it.',
      application:
        'The 16–18 layer works the handoff both texts describe: the parents\' faith as inheritance offered, the young person\'s choice as genuinely theirs. Preparing them to choose well away from home is the assignment.',
      misuse:
        'Joshua 24:15 misused as a plaque that means "this house has decided for you." The verse\'s force is the reality of the choice; a faith never chosen is the thing this whole band exists to prevent.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['believe-curriculum', 'launch'],
  },

  // BECOME
  {
    id: 'become.teen.self-government',
    version: 1,
    claimType: 'normative',
    category: 'BECOME',
    scope: { kind: 'stage', stages: [...TEEN] },
    voice: 'shared',
    title: 'Can they govern themselves?',
    lede: 'Every decision of these years serves that one question.',
    body:
      'At eighteen, can this young adult run their own life? Money, work, food, time, relationships, faith, failure. That reframes your job. Every year, something you currently run has to become something they run, on schedule, whether or not the first handover goes well. A teen who has governed pieces of their life for years walks out the door. One who arrives fully managed gets governed by whoever shouts next.',
    actions: [
      'Keep a transfer list with dates. What moved to them this year, what moves next.',
      'When a transferred domain wobbles, consult. Do not repossess it.',
    ],
    warrant: {
      passages: ['1 Corinthians 13:11', 'Galatians 6:5'],
      exegesis:
        '"When I became a man, I gave up childish ways" — putting away childhood is expected, not mourned, in Paul\'s own self-description. Galatians 6:5: "each will have to bear his own load" — personal responsibility as the adult baseline (distinct from the shared burdens of 6:2).',
      application:
        'The staged transfer of self-government is how childish ways get put away in practice — by acquiring their replacements one domain at a time, inside the safety of home, before the load must be carried alone.',
      misuse:
        'Galatians 6:5 misused to withdraw support from a struggling teen — verse 2 commands burden-sharing in the same breath. The load is theirs; the family remains theirs too.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['self-government', 'transfer'],
  },
  // LEARN — the 11–13 bridge
  {
    id: 'learn.11-13.bridge',
    version: 1,
    claimType: 'normative',
    category: 'LEARN',
    scope: { kind: 'stage', stages: ['early-adolescence'] },
    voice: 'shared',
    title: 'The eleven-to-thirteen bridge',
    lede: 'Real domains, really theirs. The pattern for the whole decade sets here.',
    body:
      'Run their own morning. Alarm, breakfast, out the door, with no parent as engine. Manage a phone under an agreement they helped write. Track their own deadlines and feel the miss. Handle the first real social cruelty, theirs or aimed at them, with you in the loop. Cook two meals. Run a small seasonal budget. The pattern for the whole decade sets here. Real domains, really theirs.',
    actions: [
      'Retire as the morning engine this term. They wake, prep and leave. You debrief.',
      'Write the device agreement together before the first phone. Revisit it each birthday.',
      'Hand over one seasonal budget. Planned with you once, then run by them.',
    ],
    warrant: {
      passages: ['Luke 16:10', 'Lamentations 3:27'],
      exegesis:
        'Faithfulness in the very little as the training sequence for the much; "It is good for a man that he bear the yoke in his youth" — Lamentations commends load-bearing begun early, as formative good rather than hardship to be spared.',
      application:
        'The early-adolescent bridge assigns the first genuinely self-managed yokes — mornings, devices, deadlines, small money — at the age Scripture calls it good to begin carrying them.',
      misuse:
        'Lamentations 3:27 misused to justify overloading children or dismissing real distress — the verse commends formative responsibility, not hardship for its own sake, and it sits inside a poem about God\'s mercies being new every morning.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['life-skills', 'bridge'],
  },
];
