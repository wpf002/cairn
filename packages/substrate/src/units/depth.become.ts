import type { Unit } from '../types.js';
import { EDITORIAL, REVIEWED, TOBIAS } from './helpers.js';

/**
 * BECOME, per stage, ages 5–21.
 *
 * Section 16b: BECOME is *shared* — "the destination is one destination."
 * Per-stage, never per-voice, and that is the principled shape rather than a
 * shortcut.
 *
 * Luke 2:52 is the spine (section 16a): wisdom, stature, favour with God and
 * favour with man — the four axes the ten developmental domains map onto. Each
 * unit below names what is actually forming in this stage and what the parent
 * is aiming it at, because section 13's test is that the objective is not a
 * happy seven-year-old or an obedient sixteen-year-old but an adult who can
 * govern their own life.
 */
export const DEPTH_BECOME_UNITS: readonly Unit[] = [
  {
    id: 'become.early-childhood.honest-and-recoverable',
    version: 1,
    claimType: 'normative',
    category: 'BECOME',
    scope: { kind: 'stage', stages: ['early-childhood'] },
    voice: 'shared',
    title: 'Truth that is survivable',
    lede: 'Not a child who never lies. One for whom telling the truth is survivable.',
    body:
      'Around five, lying becomes competent. Your child can build a plausible falsehood and read whether it worked. You are not forming someone who never lies. You are forming someone for whom telling the truth is survivable. Punish the confession harder than the offence and you teach concealment with perfect efficiency. Make truth cheaper than the cover-up, every time, and you get a fifteen-year-old who tells you something difficult.',
    actions: [
      'Cut the consequence when they tell you unprompted. Say that is why.',
      'Never interrogate when you already know. Ask them to tell you.',
    ],
    warrant: {
      passages: ['Ephesians 4:25', 'Proverbs 28:13'],
      exegesis:
        '"Having put away falsehood, let each one of you speak the truth with his neighbour, for we are members one another" — truthfulness is grounded in relationship rather than rule, and lying is framed as damaging a shared body. Proverbs 28:13: "whoever conceals his transgressions will not prosper, but he who confesses and forsakes them will obtain mercy" — concealment and mercy are placed in direct opposition.',
      application:
        'Both texts make truth-telling relational and attach mercy to confession. A household where confession reliably meets mercy is building the mechanism Proverbs describes.',
      misuse:
        'Proverbs 28:13 is used to extract confessions under pressure, which inverts it — the verse promises mercy to the one who comes forward, and a household that promises mercy and then delivers punishment teaches the child that Scripture is unreliable.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['honesty', 'destination', 'luke-2-52'],
  },
  {
    id: 'become.middle-childhood.competent-and-kind',
    version: 1,
    claimType: 'normative',
    category: 'BECOME',
    scope: { kind: 'stage', stages: ['middle-childhood'] },
    voice: 'shared',
    title: 'Good at something, and kind',
    lede: 'Skill buys status, and status can be spent on cruelty.',
    body:
      'A child good at something learns fast that skill buys status. Status can be spent on cruelty. You are forming the pairing. Real competence, developed seriously, held by someone who does not use it as a weapon or a ruler for other people. The pairing does not happen by default. Name it, because the culture around them will reliably teach only the first half.',
    actions: [
      'Let them go deep on one thing rather than sampling six.',
      'Name it when skill gets used to diminish someone, including when they win.',
      'Ask about the child in their class nobody sits with. Keep asking.',
    ],
    warrant: {
      passages: ['Luke 2:52', 'Micah 6:8'],
      exegesis:
        '"Jesus increased in wisdom and in stature and in favour with God and man" — four axes advancing together in a single sentence, with no suggestion that growth on one is traded against another. Micah 6:8 compresses the requirement to justice, mercy, and walking humbly with God: capability exercised under humility.',
      application:
        'Luke 2:52 is the framework\'s spine precisely because it refuses to separate capability from character. Micah supplies the humility that keeps competence from becoming a weapon.',
      misuse:
        'Micah 6:8 is quoted as a summary of all religion in a way that discards the covenant context and the sacrificial system the verse is arguing about. It is also used to imply that ethics replaces worship, when the passage is insisting the two cannot be separated.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['competence', 'character', 'destination', 'luke-2-52'],
  },
  {
    id: 'become.pre-adolescence.internal-compass',
    version: 1,
    claimType: 'normative',
    category: 'BECOME',
    scope: { kind: 'stage', stages: ['pre-adolescence'] },
    voice: 'shared',
    title: 'When the room disagrees',
    lede: 'Peer opinion overtakes adult opinion here, and it happens fast.',
    body:
      'Peer opinion overtakes adult opinion here, and it happens fast. Aim at a child governed by something internal rather than by whoever is watching. Rules do not build that. Rules relocate the authority. Practice builds it. Disagreeing with a friend. Declining to join something. Being the one who says it was them. Every rehearsal at ten is a rehearsal for fifteen, when the pressure is much heavier.',
    actions: [
      'Praise unpopular right action, and louder than you praise achievement.',
      'Rehearse the exit line out loud. What they say and do to leave a situation.',
      'Tell them they can blame you to get out of anything, any time.',
    ],
    warrant: {
      passages: ['Romans 12:2', 'Daniel 1:8'],
      exegesis:
        '"Do not be conformed to this world, but be transformed by the renewal of your mind" locates resistance to conformity in a renewed interior rather than in external separation. Daniel, a young man newly deported into a foreign court, "resolved that he would not defile himself" — a private determination made before the pressure arrived, then held courteously.',
      application:
        'Daniel is the clearest scriptural picture of an adolescent under peer and institutional pressure holding a line decided in advance. Romans 12:2 names the mechanism: an interior that has been reshaped, not merely rules imposed from outside.',
      misuse:
        'Romans 12:2 is used to justify cultural withdrawal or suspicion of anything outside the church, when Paul is describing a transformed mind capable of discernment — Daniel served in the Babylonian court with distinction rather than refusing to enter it.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['integrity', 'peer-pressure', 'destination'],
  },
  {
    id: 'become.early-adolescence.a-distinct-person',
    version: 1,
    claimType: 'normative',
    category: 'BECOME',
    scope: { kind: 'stage', stages: ['early-adolescence'] },
    voice: 'shared',
    title: 'Distinct, not compliant',
    lede: 'They are building a self that is not an extension of this household.',
    body:
      'They are building a self that is not an extension of you. It is uncomfortable by design. Read it as rebellion and suppress it, and you get one of two outcomes. A compliant adolescent who defers all this to twenty-five and does it destructively. Or a young person who concludes that being themselves and being loved cannot both happen. Aim at someone genuinely distinct from you and still connected to you.',
    actions: [
      'Let them differ from you visibly on something that does not matter. No commentary.',
      'Separate a moral boundary from your preference out loud. Enforce one, concede the other.',
    ],
    warrant: {
      passages: ['Psalm 139:13-16', 'Colossians 3:21'],
      exegesis:
        'Psalm 139 has God forming this specific person deliberately — "you formed my inward parts" — and knowing their days before one of them came to be. Distinctness is authored rather than tolerated. Colossians 3:21: "Fathers, do not provoke your children, lest they become discouraged" — the named risk of over-pressing is a child who gives up.',
      application:
        'If God authored a distinct person, a parent pressing a child into a copy of themselves is working against the design. Colossians names the specific damage: discouragement, the collapse of a young person\'s willingness to try.',
      misuse:
        'Colossians 3:21 is often skipped in favour of the "children, obey" verse immediately before it — the passage is deliberately two-directional, and quoting only the child\'s half is the most common misuse of household codes in Christian parenting.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['identity', 'differentiation', 'destination'],
  },
  {
    id: 'become.middle-adolescence.self-governing',
    version: 1,
    claimType: 'normative',
    category: 'BECOME',
    scope: { kind: 'stage', stages: ['middle-adolescence'] },
    voice: 'shared',
    title: 'Commitments nobody checks',
    lede: 'Obedience answers a present authority and disappears with it.',
    body:
      'External structure should be visibly receding now. The question is what remains. Not obedience. Obedience answers a present authority and disappears with it. You are building self-government. Doing the thing at the time they said, when nobody will know if they do not. It predicts whether independence goes well better than anything else, and it only grows by removing supervision and letting the gaps show.',
    actions: [
      'Stop checking one thing you currently check. Tell them, and mean it.',
      'Let a missed commitment produce its natural cost rather than a reminder.',
      'Let them set the deadline. Hold them to theirs, not to yours.',
    ],
    warrant: {
      passages: ['Psalm 15:4', 'Matthew 5:37'],
      exegesis:
        'Psalm 15 describes who may dwell on God\'s holy hill, and includes the person "who swears to his own hurt and does not change" — keeping a commitment specifically when it turns out to be costly. Matthew 5:37: "let what you say be simply Yes or No" — reliability so consistent that oaths become unnecessary.',
      application:
        'Both texts make a person\'s word reliable independent of enforcement or witness. That is precisely the trait a fourteen-year-old needs to build before supervision is withdrawn entirely.',
      misuse:
        'Psalm 15:4 has been used to bind people to genuinely harmful commitments — vows made under pressure or deception. The psalm commends integrity, not the honouring of promises that require sin or serious harm to keep.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['self-government', 'reliability', 'destination'],
  },
  {
    id: 'become.late-adolescence.governs-their-own-life',
    version: 1,
    claimType: 'normative',
    category: 'BECOME',
    scope: { kind: 'stage', stages: ['late-adolescence'] },
    voice: 'shared',
    title: 'Can they govern their life?',
    lede: 'Answerable, not rhetorical. Score it honestly, domain by domain.',
    body:
      'This is answerable, not rhetorical. Money, work, food, housing, transport, relationships, conflict, sex, faith, health, time, commitments, failure, safety, technology. Score it honestly, domain by domain, in the year before they leave. A gap found at seventeen is a teachable problem. The same gap at nineteen is a crisis in another city. Most families find the list shorter than they feared and more specific than they expected.',
    actions: [
      'Score each domain this year. Alone, with help, or not at all.',
      'Pick the three weakest. Build them with real practice, not conversation.',
      'Tell them the list. It is theirs to close, not yours to close for them.',
    ],
    warrant: {
      passages: ['1 Corinthians 13:11', '2 Thessalonians 3:10'],
      exegesis:
        '"When I became a man, I gave up childish ways" treats the transition as expected and complete rather than gradual or mourned. 2 Thessalonians 3:10 — "if anyone is not willing to work, let him not eat" — addresses idleness in the Thessalonian church and makes work a Christian obligation rather than a preference, with the emphasis on willingness.',
      application:
        'Scripture expects a definite transition into adult responsibility and treats work as part of it. Naming the competencies is how that expectation becomes actionable rather than atmospheric.',
      misuse:
        '2 Thessalonians 3:10 is regularly aimed at people unable to work, which the verse specifically does not address — Paul writes about the unwilling, in a congregation where some had stopped working on a mistaken eschatology. Using it against the disabled, ill, or unemployed inverts it.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['independence', 'life-curriculum', 'destination'],
  },
  {
    id: 'become.emerging-adult.dependable',
    version: 1,
    claimType: 'normative',
    category: 'BECOME',
    scope: { kind: 'stage', stages: ['emerging-adult'] },
    voice: 'shared',
    title: 'Someone others can depend on',
    lede: 'Self-sufficiency is surviving. Dependability is being load-bearing for someone else.',
    body:
      'The question changes at nineteen. Not can they run their own life, but could someone else depend on the life they run. Self-sufficiency is surviving. Dependability is load-bearing. The markers are unromantic. Commitments kept when nobody checks. Help asked for without shame. A real failure survived without a parent absorbing the cost. Giving that happens when it is inconvenient. Most of this is outside your control now.',
    actions: [
      'Stop absorbing costs. Only a failure they carry themselves teaches anything.',
      'When they ask for help, give it cleanly. No terms, no lecture.',
      'Say it out loud when someone relies on them and it holds.',
    ],
    warrant: {
      passages: ['Luke 16:10', 'Galatians 6:2'],
      exegesis:
        '"One who is faithful in a very little is also faithful in much" scales faithfulness upward from small trusts to large. Galatians 6:2 — "bear one another\'s burdens, and so fulfil the law of Christ" — describes mutual load-bearing as the mark of a mature Christian community, which requires people capable of bearing.',
      application:
        'Galatians 6:2 assumes people who can carry something for someone else. Becoming one of them, rather than remaining someone who is carried, is the developmental target of this stage.',
      misuse:
        'Galatians 6:2 is used to press young adults into obligations they cannot yet sustain, or to guilt someone recovering from their own crisis. Held with verse 5 — each bearing his own load — it describes a community where both are true, not a demand that the depleted keep giving.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['dependability', 'destination'],
  },
  {
    id: 'become.young-adult.the-whole-aim',
    version: 1,
    claimType: 'normative',
    category: 'BECOME',
    scope: { kind: 'stage', stages: ['young-adult'] },
    voice: 'shared',
    title: 'The whole aim',
    lede: 'Some of it did not happen. Every parent who has finished says the same.',
    body:
      'You aimed at someone capable, wise and able to run their own life. At twenty-one you can see which of it happened. Some did not. Every parent who has finished says the same. Nobody needs a perfect result. The work was aimed somewhere, and the aim now passes to the person who will finish it.',
    actions: [
      'Say what you were aiming at for twenty-one years, and where you fell short.',
      'Hand the remaining work over explicitly. Saying so is the release.',
      'Mark it with the Recognize ceremony rather than letting it drift past.',
    ],
    warrant: {
      passages: ['Luke 2:52', '3 John 4'],
      exegesis:
        'Luke 2:52 gives the four-axis picture of maturity — wisdom, stature, favour with God and with man — as a summary of an entire childhood in one verse, and it is the last thing said about Jesus before his public ministry. 3 John 4: "I have no greater joy than to hear that my children are walking in the truth" — joy relocated from the parent\'s supervision to the child\'s independent walk.',
      application:
        'Luke 2:52 is the spine of the whole framework and the correct measure at the end: not achievement on one axis but growth across four. 3 John 4 names where a parent\'s joy is supposed to have moved by now.',
      misuse:
        'Luke 2:52 gets used as a developmental checklist against which a real child is graded and found lacking. It is a summary of Christ\'s growth, offered as a picture of the shape of maturity, not a scorecard for a twenty-one-year-old.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['destination', 'luke-2-52', 'recognize', 'capstone'],
  },
];
