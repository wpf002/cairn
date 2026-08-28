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
    title: 'Parents who actually changed',
    lede: 'They are watching whether you meant it about moving from authority to counsel.',
    body:
      'The most persuasive thing a young adult sees is parents who meant it. Who moved from authority to counsel and stayed there. Who honour their household, money and decisions with no shadow campaign of hints. They are watching how you age into faith, and whether what you taught still holds you now the enforcing is over. All of it still on display, now judged by an adult with something to compare it to.',
    actions: [
      'Audit yourself quarterly. Where did counsel drift back into management? Repair it out loud.',
      'Let them see your faith continuing for its own sake, after the parenting reason expired.',
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
    title: 'Counsel that waits to be asked',
    lede: 'The wait is the discipline.',
    body:
      'The discipline is the wait. Speak when asked, and then speak fully, without softening the hard part. Between askings, presence without pressure. Door open, leash gone. Stop managing consequences altogether. A rescue at twenty-two costs what a rescue at nine cost, compounded. Proverbs says counsel is sweet when it comes from a friend. Friend is the operative word, and it is your new job title.',
    actions: [
      'Keep the ask-first rule. Advice waits for the invitation. Measure yourself a month.',
      'When asked, give the whole answer. Candour is what the restraint bought you.',
      'Swap the check-up call for the friendship call. No agenda, no audit.',
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
    title: 'Finish out loud',
    lede: 'Almost no family marks this one. Cairn walks you through it.',
    body:
      'Here the parents say publicly that the work is finished. Almost no family marks it. Gather the circle who watched them grow up. Letters, written to an adult. The words said plainly. "You are a man now." "You are a woman now." "We recognise it." Something they keep. And the Story of Their Childhood, both parents\' threads across twenty-one years, put into their hands.',
    actions: [
      'Set the date within the twenty-first year and treat it as immovable.',
      'Invite the same circle from the ceremony at thirteen, now speaking to an adult.',
      'Write the recognition sentences beforehand. Do not improvise this one.',
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
    title: 'Respect, then trust',
    lede: 'Nothing announces a changed relationship like being asked for counsel and taken seriously.',
    body:
      'Say it around eighteen. "I respect the person you are becoming." Say it to their judgement and their competence, not their behaviour. Around twenty-one: "I trust you," and the harder one, "I need your counsel on this." Then actually take the answer. Nothing announces a changed relationship like being consulted. Underneath both, the oldest rung still carries weight. A twenty-one-year-old still needs to hear you love them.',
    actions: [
      'Say the respect sentence about something specific they handled as an adult.',
      'Ask their counsel on something real in your life. Let them see you weigh it.',
      'Still say it at the partings and the ends of calls.',
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
    title: 'A life someone can depend on',
    lede: 'Not can they run their own life. Could someone depend on the life they run.',
    body:
      'Not can they run their own life. Could someone depend on the life they run. File taxes. Carry insurance and know what it is for. Negotiate a lease and a salary. Build credit, knowing what Proverbs says about debt. Choose a church and commit to membership. Give from real income. Keep commitments nobody checks. Recover from one real failure with nobody absorbing the cost.',
    actions: [
      'Offer knowledge, not management. One tax walkthrough, one lease read. Then hands off.',
      'When the real failure comes, hold the line. Full support, zero absorption.',
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
    title: 'Faith that is theirs',
    lede: 'Church membership in a congregation you did not pick.',
    body:
      'Church membership by their own choice, in a congregation you did not pick. Giving from their own income. A faith crisis weathered with no parent in the room, and the discovery that it held. Discipling someone younger, because a faith that only receives is still adolescent. Sexual integrity as their own conviction. Suffering met without a rescue. Your part now is to pray more than you speak, and let the Spirit keep the timetable.',
    actions: [
      'Make intercession the main instrument. Daily, specific, and mostly silent.',
      'When they choose differently from you inside orthodoxy, bless it out loud.',
      'If a crisis comes, hold mercy on the doubt and confidence in God. Do not manage it.',
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
    title: 'The empty room is the diploma',
    lede: 'If that person now exists, imperfect and standing, the work succeeded.',
    body:
      'You set out to raise an adult who could govern their own life. If that person now exists, imperfect and still growing but standing, the work succeeded. That includes every part of it that felt like failure at the time. The relationship does not end. It graduates. Peer with history. Friend with a portfolio. One day, God willing, grandparent. The empty room is the diploma.',
    actions: [
      'Say the completion out loud at the ceremony. Then privately, to each other.',
      'Start the new discipline that week. Relate to the adult, not the child you remember.',
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
