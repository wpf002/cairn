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
    body:
      'An adolescent watches with a new instrument: the hypocrisy detector, fully installed and calibrated harsh. What they need to see in these years is not polish but consistency — a faith that costs you something visible, apologies that still happen when you are wrong, a marriage still tended in front of them, integrity when cutting the corner would be cheaper. The single most faith-protective thing a teenager can observe is a parent whose private and public selves match.',
    actions: [
      'Let them see the cost: the tithe line in the budget conversation, the hard honest call made when lying was easier.',
      'When they catch an inconsistency — and they will — thank them, honestly, before explaining anything.',
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
    title: 'What they need now: questions before answers, agency with anchors',
    body:
      'The consultant asks before advising: "What do you think you should do?" — and waits. What a teenager needs to receive is expanding agency inside firm anchors: real choices with real consequences, honoured confidences, advice offered rather than imposed — and, held steady beneath all of it, the non-negotiables of household respect, safety, and truthfulness. The parent who keeps commanding what should now be consulted teaches the teen to route around them; the parent who abandons the anchors teaches them nothing is solid.',
    actions: [
      'Replace one directive per week with a question, asked honestly: "walk me through your thinking."',
      'Name the anchors explicitly, once, calmly: what stays non-negotiable in this house and why — and hold them without theatrics.',
      'When they choose badly inside a safe range, let the consequence arrive whole and skip the told-you-so entirely.',
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
    title: 'The pornography conversation — a father\'s brief',
    body:
      'Assume exposure has happened or will; average first exposure now lands before the teen years. The conversation is not one talk but a standing channel: what pornography is, why it lies about bodies and about love, what it trains the brain toward, and — critically — that stumbling brings them to you for help, not to hiding for shame. With sons, honesty about your own generation\'s battle earns the right to be heard. With daughters, do not assume this is not her fight; it increasingly is.',
    actions: [
      'Open the channel this season with the shame-killer sentence: "If you ever see something you can\'t unsee, you can tell me, and I will not explode."',
      'Put the practical guardrails in place together, framed as team defence, not surveillance.',
      'Keep your own accountability visible enough that "we all guard our eyes" is a household fact, not a teen-only rule.',
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
    title: 'The pornography conversation — a mother\'s brief',
    body:
      'You need to know what your husband is carrying with your son — and you carry your own pieces: with a son, the dignity of women as a claim he hears from a woman he loves; with a daughter, the growing reality that pornography is her fight too, plus the adjacent battles — the images she is pressured to send, the way romance-shaped content disciples her expectations. A mother\'s calm, unshocked availability is the difference between a daughter who asks and one who concludes she is uniquely broken.',
    actions: [
      'Be explicitly askable: "Nothing you could see or be sent would make me love you less — and none of it should be handled alone."',
      'With a daughter, cover the sending as well as the seeing: what a pressured request looks like and exactly what to do when it comes.',
      'With a son, one sentence he will keep: "Every woman on a screen is somebody\'s daughter. Treat her like it."',
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
    title: 'One-on-one time: the only row marked both ways',
    body:
      'On the worksheet, special one-on-one times in the teen years is the only row carrying both markers at once — especially important AND a special opportunity window. Translation: this is the single highest-leverage practice of the decade, and it closes. The teen who will not talk at the table talks in the car; the one who shrugs at questions opens up over a shared task. From the roadmap\'s age-14 list: give them growing control of their schedule, let them into an adult decision, build real service, ask what kind of man or woman they intend to become — all of it lands best one-on-one.',
    actions: [
      'Fix the recurring one-on-one and defend it like employment: same rhythm, their choice of venue, phone in the glovebox.',
      'Bring them inside one real adult decision this season — the car purchase, the budget trade-off — as a contributor, not an observer.',
      'Once this year, ask it straight: "What kind of man — what kind of woman — are you trying to become?" Then listen longer than is comfortable.',
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
    title: 'The age-fifteen life curriculum',
    body:
      'By around fifteen, taught and practised: cook several real meals. Run a bank account and understand what credit is and costs. Interview for an actual job. Navigate dating with a definition of respect they can state. Understand consent — clearly, in both directions. Recognise an unhealthy relationship from a list they helped build. Handle disagreement with an adult respectfully and without folding. Understand digital permanence before it teaches them personally. Manage their own schedule and feel the grade when they do not.',
    actions: [
      'Hand over the kitchen one night a week — planning, cooking, and the budget for it.',
      'Run the mock interview before the real one; then require the real one.',
      'Build the unhealthy-relationship list together — control, isolation, contempt, secrecy — so the reference exists before it is needed.',
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
    title: 'The 13–15 layer: owning faith — and the doubt that comes with it',
    body:
      'Doubt is not the emergency; unspoken doubt is. In these years the inherited faith gets stress-tested — suffering, hypocrisy, sexuality, science, the friend whose family believes otherwise — and the family\'s single most important policy is that every question is speakable at home. Move from teaching to discussing: their arguments get engaged, not managed. Personal disciplines shift to their ownership — their Bible, their prayer life, invited rather than enforced. The goal of the band: a faith they are handling with their own hands, roughly, honestly, in your presence.',
    actions: [
      'Declare the policy in words: "No question about God is off the table in this house, and none of them scares me." Then prove it on the first hard one.',
      'When a doubt lands, resist resolving it same-day. "That\'s a real question — let\'s chase it properly" beats a tidy answer they can smell the fear on.',
      'Shift devotions from led to shared: they pick, they ask, they push back.',
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
    title: 'The 16–18 layer: faith that runs without you',
    body:
      'The test of this band is transfer: does the faith run when nobody at home is watching? Ownership looks like their own church involvement chosen over sleep, ethical calls made away from you, money given from their own earnings, a worldview they can state and defend without your vocabulary. Begin explicitly preparing the launch: how to find a church in a college town, how to keep faith alive in a hostile room, what they will do the first Sunday nobody wakes them. The parent\'s role by eighteen: consultant on a faith that is now theirs.',
    actions: [
      'Have them research and visit one church entirely without you this year — their evaluation, their write-up, your questions after.',
      'Ask the transfer question directly at seventeen: "When you leave, what of this do you take because it is yours?" Take the answer seriously, including the gaps.',
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
    title: 'The question of the decade: can they govern themselves?',
    body:
      'Every decision of the consultant years serves one question — at eighteen, can this young adult responsibly govern their own life? Money, work, food, time, relationships, faith, failure. Which reframes the parent\'s job: each year, something you currently run must become something they run, on schedule, whether or not the first handoff goes well. The teen who reaches eighteen having governed pieces of their life for years walks out the door; the one who reaches it fully managed gets governed by whoever shouts next — a roommate, a boss, an algorithm.',
    actions: [
      'Keep a literal transfer list with dates: alarm, laundry, schedule, money, deadlines — what moved to them this year, what moves next.',
      'When a transferred domain wobbles, consult; do not repossess. Repossession teaches that failure returns them to childhood.',
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
    title: 'The eleven-to-thirteen bridge curriculum',
    body:
      'Between the age-ten foundations and the age-fifteen syllabus sits the bridge: run their own morning — alarm, breakfast, out the door — without a parent as engine. Manage a phone if they have one, under a family agreement they helped write. Keep track of school deadlines with their own system and feel the miss. Handle the first real social cruelty — theirs or aimed at them — with words and with you in the loop. Cook two meals. Manage a small clothing or activity budget across a season. The pattern of the whole decade sets here: real domains, really theirs.',
    actions: [
      'Retire from the morning-engine role this semester: they wake, they prep, they leave — you observe and debrief only.',
      'Write the phone/device agreement together before or with the first phone; revisit it each birthday.',
      'Hand over one seasonal budget — school clothes, an activity — planned with you once, then run by them.',
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
