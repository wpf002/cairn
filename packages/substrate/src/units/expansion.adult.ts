import type { Unit } from '../types.js';
import { EDITORIAL, REVIEWED, TOBIAS } from './helpers.js';

const ADULT = ['emerging-adult', 'young-adult'] as const;

/**
 * Ages 18–21: the Counselor years. Phase 8, final expansion band — the tier
 * past eighteen that no competitor covers at all, ending at the Recognize
 * ceremony the whole framework points at.
 */
export const EXPANSION_ADULT_UNITS: readonly Unit[] = [
  // SEE
  {
    id: 'see.adult.peer-with-history',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: [...ADULT] },
    voice: 'shared',
    title: 'What they need to see now: parents who actually changed',
    body:
      'The most persuasive thing a young adult can observe is parents who meant it — who genuinely moved from authority to counsel, who honour the adult child\'s household, money, calendar, and decisions without a shadow campaign of hints. They are also watching how you age into faith: whether the thing you taught them still holds you now that the enforcing is over. Your marriage, your church life, your generosity — all still on display, now evaluated by an adult who can compare it with everything else they have seen.',
    actions: [
      'Audit your own follow-through quarterly: where did counsel drift back into management this season? Repair it out loud.',
      'Let them see your faith continuing for its own sake — the serving and giving that outlived the parenting rationale.',
    ],
    warrant: {
      passages: ['Genesis 2:24', 'Psalm 92:14'],
      exegesis:
        'Leaving and cleaving is the created design — the text\'s force falls on the parents\' release as much as the couple\'s departure. Psalm 92 pictures the righteous still bearing fruit in old age — faith\'s continuation past every functional justification.',
      application:
        'Honouring the leaving is obedience to the design, not loss; and a faith visibly still growing in the parents is the last, longest lesson of the observed life.',
      misuse:
        'Genesis 2:24 misused only by evasion — acknowledged in weddings, resisted in practice. The design is not softened by good intentions to stay involved.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['counselor', 'release'],
  },

  // RECEIVE — the counselor's contract
  {
    id: 'receive.adult.counsel-when-invited',
    version: 1,
    claimType: 'normative',
    category: 'RECEIVE',
    scope: { kind: 'stage', stages: [...ADULT] },
    voice: 'shared',
    title: 'What they need from you now: counsel that waits to be asked',
    body:
      'The counselor\'s discipline is the wait. Speak when asked — and then speak fully, honestly, without softening the hard part. Between askings: presence without pressure, the door open, the leash gone. Stop managing consequences entirely; a rescue at twenty-two costs what a rescue at nine cost, compounded. The proverb says counsel is sweet — like perfume — when it comes from a friend\'s earnest heart; the operative word is friend. That is the new job title.',
    actions: [
      'Institute the ask-first rule and keep it: advice waits for the invitation. Measure yourself honestly for a month.',
      'When asked, give the whole answer — the counselor\'s privilege is candour, purchased by restraint.',
      'Replace the check-up call with the friendship call: no agenda, no audit, genuinely curious.',
    ],
    warrant: {
      passages: ['Proverbs 27:9', '3 John 1:4'],
      exegesis:
        '"Oil and perfume make the heart glad, and the sweetness of a friend comes from his earnest counsel" — counsel delights when it arrives inside friendship, sought and earnest. John\'s greatest joy: "to hear that my children are walking in the truth" — the elder\'s satisfaction relocated from directing to hearing.',
      application:
        'The parent\'s joy shifts from the child\'s obedience to the child\'s walk — news received, not behaviour produced. Counsel-when-invited is how the friendship that carries the next forty years gets built.',
      misuse:
        'Proverbs 27:9 misused to relabel unsolicited management as "counsel." The sweetness in the verse is conditional on the friendship; counsel forced through a closed door is just noise with a verse on it.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['counselor', 'friendship'],
  },

  // EXPERIENCE — the Recognize ceremony
  {
    id: 'experience.adult.recognize-ceremony',
    version: 1,
    claimType: 'normative',
    category: 'EXPERIENCE',
    scope: { kind: 'stage', stages: [...ADULT] },
    voice: 'shared',
    title: 'The Recognize ceremony: finish out loud',
    body:
      'The final marker on the worksheet grid sits at twenty-one: Recognize Manhood, Recognize Womanhood. It is the moment the parents say publicly that the formation work is finished and the relationship has changed — and it is the milestone almost no family marks, which is why this app walks you through it. Gather the circle who watched them grow. Letters, written to an adult. The words said plainly: "You are a man now. You are a woman now. We recognize it." A marker they keep. And the Story of Their Childhood — both parents\' threads, twenty-one years — placed in their hands.',
    actions: [
      'Set the date within the twenty-first year and treat it as immovable.',
      'Invite the thirteen-year-old ceremony\'s circle where possible — the same voices, now speaking to an adult.',
      'Write the recognition sentences beforehand and say them without hedging. This is the one speech in the whole roadmap that must not be improvised.',
    ],
    warrant: {
      passages: ['Genesis 48:15-16', 'Numbers 6:24-26'],
      exegesis:
        'Jacob\'s blessing of Joseph\'s sons is deliberate, spoken, hands-on generational transfer at a marked moment; the Aaronic blessing is the community\'s formal speech-act of God\'s favour. Scripture marks transitions with gathered, spoken blessing.',
      application:
        'A formal recognition of adulthood — gathered circle, spoken blessing, kept marker — is the biblical pattern applied to the transition every family undergoes and almost none marks. Saying it out loud is what keeps it from happening by drift.',
      misuse:
        'Misused if the ceremony becomes conditional — recognition withheld until the young adult meets outstanding parental hopes. The ceremony recognizes personhood and adulthood, not performance; a strained relationship is a reason to hold it carefully, not to cancel it.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['ceremony', 'recognize', 'capstone'],
  },

  // HEAR — the top rungs
  {
    id: 'hear.adult.respect-and-trust',
    version: 1,
    claimType: 'normative',
    category: 'HEAR',
    scope: { kind: 'stage', stages: [...ADULT] },
    voice: 'shared',
    title: '"I respect the person you\'re becoming." "I need your counsel on this."',
    body:
      'The ladder\'s last rungs. Around eighteen to twenty: "I respect the person you\'re becoming" — spoken to their agency, their judgment, their competence. At the summit, around twenty-one: "I trust you," and its more radical twin, "I need your counsel on this" — the first time the parent genuinely asks and genuinely takes the answer. Nothing announces the changed relationship like being consulted. And beneath the new rungs, the oldest one still bears weight: the worksheet runs "I love you" to the edge of the grid. A twenty-one-year-old still needs it. Say all of it.',
    actions: [
      'Say the respect sentence this season about something specific they handled as an adult.',
      'Ask their counsel on something real in your own life — and visibly weigh it.',
      '"I love you" — still at the partings, still at the ends of calls, unretired.',
    ],
    warrant: {
      passages: ['Proverbs 25:11', 'Romans 12:10'],
      exegesis:
        'The word fitly spoken as gold in silver; Romans commands honour flowing in both directions — "outdo one another in showing honor." Honour between believers is mutual, competitive even, and not indexed to hierarchy.',
      application:
        'Respect and trust language, spoken parent-to-adult-child, is Romans 12:10 crossing the generational line for the first time in the relationship. Asking their counsel is honour enacted rather than announced.',
      misuse:
        'Withholding the top rungs until the young adult\'s choices fully align with the parent\'s hopes — turning respect back into a wage at the exact moment it must become a gift.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['affirmation-ladder', 'trust'],
  },

  // LEARN — the 19–21 curriculum
  {
    id: 'learn.19-21.dependable-life',
    version: 1,
    claimType: 'normative',
    category: 'LEARN',
    scope: { kind: 'stage', stages: [...ADULT] },
    voice: 'shared',
    title: 'The 19–21 curriculum: a life someone else could depend on',
    body:
      'The question matures: not "can they run their own life" but "could someone depend on the life they run?" File taxes. Carry insurance and know what it is for. Negotiate a lease and a salary. Build and repair credit, understanding Proverbs\' blunt word on debt. Choose a church and commit — membership, not attendance. Give consistently from real income. Evaluate a romantic relationship for marriage rather than for feeling. Keep commitments no one is checking. Ask for help without shame. And recover from one real failure — job, relationship, money — without a parent absorbing the cost.',
    actions: [
      'Offer the knowledge, not the management: a tax walkthrough, a lease read-through before signing — invited, once, then hands off.',
      'When the real failure comes — it will — hold the counselor\'s line: full support, zero absorption. Be the safe place to process, not the insurance policy.',
    ],
    warrant: {
      passages: ['1 Corinthians 13:11', '2 Thessalonians 3:10', 'Proverbs 22:7'],
      exegesis:
        'Putting away childish things as the expected adult movement; work as obligation; debt as servitude named plainly. The Pauline and wisdom material together sketch adulthood as competent, working, unenslaved dependability.',
      application:
        'The 19–21 curriculum is the final syllabus of the putting-away: the specific competencies that make a person marriageable, employable, church-committable — dependable. The parent teaches on invitation and refuses the residual management that would falsify the whole lesson.',
      misuse:
        'The debt proverb misused as condemnation of every mortgage and student loan — it is a warning to be understood, priced, and entered eyes-open, not a purity rule. The work command misused against seasons of genuine unemployment.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['life-skills', 'dependability'],
  },

  // BELIEVE — the 19–21 layer
  {
    id: 'believe.19-21.theirs-not-yours',
    version: 1,
    claimType: 'normative',
    category: 'BELIEVE',
    scope: { kind: 'stage', stages: [...ADULT] },
    voice: 'shared',
    title: 'The 19–21 layer: faith that is theirs, not yours',
    body:
      'The final layer of the twenty-one-year curriculum: church membership by their own choice, in a congregation you did not pick. Stewardship from their own income. A faith crisis weathered without a parent in the room — and the discovery that it held. Discipling someone younger, because the faith that only receives is still adolescent. Sexual integrity as their own conviction. Suffering met without rescue. The goal stated at the start of the roadmap is due now: "I understand Christianity, I know what I believe, and I am capable of choosing whether I will follow Christ." Your part: pray more than you speak, and let the Spirit keep the timetable.',
    actions: [
      'Move to intercession as the primary instrument: pray daily, specifically, and mostly silently about it.',
      'When they choose a church, a tradition, or an emphasis different from yours within orthodoxy, bless it out loud.',
      'If a faith crisis comes, hold the Mark 9 posture — mercy on the doubt, confidence in the God who meets it — and resist managing the outcome.',
    ],
    warrant: {
      passages: ['2 Timothy 1:5', 'Philippians 1:6'],
      exegesis:
        'The faith of Lois and Eunice now dwelling in Timothy — the generational handoff completed, the faith fully his. Paul\'s confidence rests not on the Philippians\' grip but on God\'s: "he who began a good work in you will bring it to completion."',
      application:
        'At twenty-one the parent\'s confidence relocates from their own formation work to God\'s continuing one. Philippians 1:6 is the counselor-parent\'s working theology: the project has an author, and it was never finally you.',
      misuse:
        'Philippians 1:6 misused as fatalism (formation never mattered) or as anxiety-suppression (real prodigal seasons denied). The verse funds patient confidence, not indifference — and the praying continues precisely because God finishes his work through means.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['believe-curriculum', 'ownership'],
  },

  // BECOME — the destination
  {
    id: 'become.adult.the-destination',
    version: 1,
    claimType: 'normative',
    category: 'BECOME',
    scope: { kind: 'stage', stages: [...ADULT] },
    voice: 'shared',
    title: 'The destination, reached: launch is the success condition',
    body:
      'Twenty-one years ago the roadmap named the objective: a capable, wise, loving, responsible, spiritually grounded adult who can govern their own life. If that person now exists — imperfect, still growing, but standing — the work succeeded, including every part that felt like failure at the time. The relationship does not end; it graduates: peer-with-history, friend-with-portfolio, and one day, if God grants it, grandparent. The empty room is not evidence of loss. It is the diploma.',
    actions: [
      'At the Recognize ceremony, say the completion out loud — to them, and privately to each other as parents.',
      'Begin the new discipline the same week: relating to them as the adult they are, not the child you remember, one conversation at a time.',
    ],
    warrant: {
      passages: ['Genesis 2:24', 'Luke 2:52', '3 John 1:4'],
      exegesis:
        'The leaving as design; the fourfold increase as the completed pattern of formation; the elder\'s joy in hearing of children walking in truth — Scripture\'s account of successful formation ends in departure, maturity, and joy at a distance.',
      application:
        'Launch is the built-in success condition of the entire framework. Naming it, celebrating it, and re-founding the relationship on its far side is the last act of faithful parenting and the first act of its long, good sequel.',
      misuse:
        'The launch texts misused to sanctify abandonment — the leaving in Genesis creates a new household, not an orphaned one. Peer-with-history still calls, still gathers, still blesses. The door stays open; only the leash is gone.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['launch', 'destination'],
  },
];
