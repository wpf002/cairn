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
    title: 'Aiming at: a child who tells the truth and can recover from being wrong',
    body:
      'Five to seven is when lying becomes competent — a child can now construct a plausible falsehood and read whether it worked. What you are forming is not a child who never lies but one for whom telling the truth is survivable. Those are different targets and they respond to opposite tactics. Punishing the confession more heavily than the offence teaches concealment with perfect efficiency. Making the truth cheaper than the cover-up, consistently, is what produces a fifteen-year-old who tells you something difficult. That is the actual objective, and it is being decided now.',
    actions: [
      'Reduce the consequence when they tell you unprompted, and say that is why.',
      'Never interrogate when you already know. Ask them to tell you, and let them.',
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
    title: 'Aiming at: someone who is good at something, and kind while being it',
    body:
      'Seven to nine is where competence and social standing start reinforcing each other, and where the two can come apart badly. A child who is good at something learns quickly that skill buys status, and status can be spent on cruelty. What you are forming is the pairing: real competence, developed seriously, held by someone who does not use it as a weapon or a measure of other people\'s worth. The pairing does not happen by default. It has to be named, because the surrounding culture will reliably teach only the first half.',
    actions: [
      'Let them go deep on one thing rather than sampling six. Competence needs duration.',
      'Name it directly when skill is used to diminish someone — including when they win.',
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
    title: 'Aiming at: someone who does right when the room disagrees',
    body:
      'Nine to eleven is when peer opinion overtakes adult opinion as the dominant social force, and it happens fast. The target is a child whose behaviour is governed by something internal rather than by whoever is watching. This is not built by rules, which only relocate the external authority. It is built by giving them practice at holding a position under mild social cost while the cost is still mild — disagreeing with a friend, declining to join something, being the one who says it was them. Every rehearsal at ten is a rehearsal for fifteen, when the same skill is required against much heavier pressure.',
    actions: [
      'Praise unpopular right action specifically, and more loudly than you praise achievement.',
      'Rehearse the exit line out loud: exactly what they say and do when they want to leave a situation.',
      'Tell them plainly they can blame you to get out of anything, any time, no questions.',
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
    title: 'Aiming at: a distinct person, not a compliant one',
    body:
      'Eleven to thirteen is when a young person begins constructing a self that is not simply an extension of the household, and it is uncomfortable by design. The mistake available here is to read differentiation as rebellion and to suppress it, which produces one of two outcomes: a compliant adolescent who defers the individuation to twenty-five and does it destructively, or a young person who concludes that being themselves and being loved are incompatible. What you are aiming at is someone who is genuinely distinct from you and still connected to you. Both halves are the target.',
    actions: [
      'Let them differ from you visibly in something that does not matter — music, clothes, opinions — without commentary.',
      'Distinguish out loud between what is a moral boundary and what is merely your preference. Enforce the first; concede the second.',
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
    title: 'Aiming at: someone who keeps commitments nobody is checking',
    body:
      'Thirteen to fifteen is the stage where external structure should begin visibly receding, and the question becomes what remains when it does. Not obedience — obedience is a response to a present authority and it disappears with the authority. What you are forming is self-government: doing the thing at the time they said they would, when no one will know if they do not. This is the trait that most reliably predicts whether independence goes well, and it can only be built by removing supervision incrementally and letting the gaps show.',
    actions: [
      'Stop checking one thing you currently check. Tell them you have stopped, and mean it.',
      'Let a missed commitment produce its natural cost rather than a reminder.',
      'Ask them to set their own deadline, then hold them to the one they set rather than one you would have chosen.',
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
    title: 'Aiming at: can this young adult responsibly govern their own life?',
    body:
      'Section 13 names this as the central question at eighteen, and it is answerable rather than rhetorical. Money, work, food, housing, transport, relationships, conflict, sex, faith, health, time, commitments, decisions, failure, success, safety, technology, morality. The useful exercise is to score it honestly domain by domain in the year before they leave, because a gap identified at seventeen is a teachable problem and the same gap at nineteen is a crisis occurring in another city. Most families discover the list is shorter than they feared and more specific than they expected.',
    actions: [
      'Score each domain honestly this year: can they do it alone, with help, or not at all?',
      'Pick the three weakest and build them deliberately, with real practice rather than conversation.',
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
    title: 'Aiming at: someone another person could depend on',
    body:
      'Section 13 shifts the question at nineteen from "can they govern their own life?" to "can they build a life someone else could depend on?" — a materially higher bar. Self-sufficiency is about surviving; dependability is about being load-bearing for someone else. The markers are unromantic: keeping commitments when nobody is checking, asking for help without shame, recovering from a real failure without a parent absorbing the cost, and giving consistently rather than when convenient. Most of this is now outside your control, which is itself the point.',
    actions: [
      'Stop absorbing costs. A failure they carry themselves is the only version that teaches.',
      'When they ask for help, give it cleanly, without terms and without a lecture attached.',
      'Notice out loud when someone else relies on them and it holds.',
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
    title: 'The whole aim, stated plainly at twenty-one',
    body:
      'Section 13 states the destination without hedging: helping a completely dependent newborn become someone capable, wise, loving, responsible, spiritually grounded, emotionally mature, competent, independent, compassionate, honest, courageous, disciplined, humble, and able to govern their own life. At twenty-one you can look at that list and see, honestly, which of it happened. Some did not, and that is the ordinary experience of every parent who has ever finished. The framework does not require a perfect result; it requires that the work was aimed somewhere and that the aim is now handed over, out loud, to the person who will finish it themselves.',
    actions: [
      'Say out loud what you were aiming at for twenty-one years, and where you fell short.',
      'Hand the remaining work to them explicitly. It is theirs now, and saying so is the release.',
      'Mark it with the Recognize ceremony rather than letting it pass by drift.',
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
