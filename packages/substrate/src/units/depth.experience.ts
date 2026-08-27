import type { Unit } from '../types.js';
import { EDITORIAL, REVIEWED, TOBIAS } from './helpers.js';

/**
 * EXPERIENCE, per stage, ages 5–21.
 *
 * Section 16b rates EXPERIENCE a *moderate* split: one-on-one time, rites of
 * passage and ceremonies are voiced; family traditions and service are shared.
 * The per-stage units below are therefore mostly shared, with the one-on-one
 * and ceremony material voiced where the worksheet itself voices it.
 *
 * Section 13 ships this category as a feature — EXPERIENCES TO CREATE AT THIS
 * AGE — so every unit here carries concrete, schedulable actions rather than
 * a principle. The point of the category is that parents can *engineer*
 * formative experiences instead of waiting to consume information about them.
 */
export const DEPTH_EXPERIENCE_UNITS: readonly Unit[] = [
  {
    id: 'experience.early-childhood.first-ownership',
    version: 1,
    claimType: 'normative',
    category: 'EXPERIENCE',
    scope: { kind: 'stage', stages: ['early-childhood'] },
    voice: 'shared',
    title: 'The first thing that is genuinely theirs to fail at',
    body:
      'Five to seven is the right window for a child to own something outright — a job nobody rescues, a small animal, a plant that dies if forgotten. Section 13 lists exactly this at age seven: a household responsibility they completely own. The formative element is not the chore. It is the first experience of a consequence that arrives without an adult arranging it, at an age where the stakes are survivable. A parent who quietly waters the plant has removed the entire lesson and taught a different one.',
    actions: [
      'Assign one job that is fully theirs, and let it visibly go undone once.',
      'Let them lose a game without engineering a draw. Then teach losing well, in the moment they need it.',
      'Let them buy something with money they earned, including if it is a bad purchase.',
    ],
    warrant: {
      passages: ['Luke 16:10', 'Galatians 6:5'],
      exegesis:
        '"One who is faithful in a very little is also faithful in much" treats small responsibility as genuinely formative rather than merely preparatory. Galatians 6:5 — "each will have to bear his own load" — sits three verses after the instruction to bear one another\'s burdens, distinguishing the load that is properly a person\'s own from the burden that warrants help.',
      application:
        'Scripture distinguishes the load a person carries themselves from the burden others help with, and treats small faithfulness as the training ground for large. Both argue for real, unrescued responsibility at a small scale.',
      misuse:
        'Galatians 6:5 is used to justify refusing help to someone genuinely overwhelmed, ignoring verse 2 two lines earlier. The pair has to be held together; using one against the other is the standard abuse.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: false, opportunity: true },
    tags: ['responsibility', 'consequences', 'engineered-experience'],
  },
  {
    id: 'experience.middle-childhood.service-and-repair',
    version: 1,
    claimType: 'normative',
    category: 'EXPERIENCE',
    scope: { kind: 'stage', stages: ['middle-childhood'] },
    voice: 'shared',
    title: 'Serving someone who cannot reciprocate, and fixing something you broke',
    body:
      'Seven to nine is when a child can hold another person\'s situation in mind well enough for service to mean something, and when restitution becomes teachable. Two distinct experiences belong here. The first: serving someone who cannot thank you usefully — an elderly neighbour, a family in difficulty — with the child doing actual work rather than watching adults do it. The second: making something right that they broke, in person, including the uncomfortable part where they say it themselves. Both are experiences, not conversations, and neither transfers by being explained.',
    actions: [
      'Do one service commitment as a family where your child does real work, not decoration.',
      'Next time they break or lose something of someone else\'s, walk them through repaying or repairing it themselves.',
      'Let them apologise directly to the person, without you narrating it for them.',
    ],
    warrant: {
      passages: ['Luke 19:8', 'Matthew 25:40'],
      exegesis:
        'Zacchaeus responds to encountering Christ with concrete restitution — half his goods to the poor, fourfold restoration to anyone defrauded — and Jesus declares salvation has come to the house. Repentance takes material form. Matthew 25:40 identifies service to the least of these with service to Christ himself.',
      application:
        'Scripture ties genuine change to concrete restitution and locates Christ in the person who cannot repay. Both are experiences a child can be walked through at this age rather than merely taught.',
      misuse:
        'The Zacchaeus account is misused to make restitution a condition of forgiveness, reversing the order — Jesus invites himself to the house first, and the restitution follows the encounter. Presented backwards to a child, it teaches that acceptance is earned.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: false, opportunity: true },
    tags: ['service', 'restitution', 'engineered-experience'],
  },
  {
    id: 'experience.pre-adolescence.one-on-one-opens',
    version: 1,
    claimType: 'normative',
    category: 'EXPERIENCE',
    scope: { kind: 'stage', stages: ['pre-adolescence'] },
    voice: 'shared',
    title: 'The one-on-one window opens here',
    body:
      'The worksheet marks Special One-on-One Times with an opportunity marker beginning around nine — and it is the only row that later carries both markers at once. Nine to eleven is when the practice has to be established, because a routine begun now survives adolescence and a routine begun at fourteen reads as surveillance. What makes it work is that it is regular, protected, and has no agenda: no performance review, no scheduled Serious Conversation. The value is entirely in the accumulated hours, which is why starting early matters more than doing it impressively.',
    actions: [
      'Establish a fixed recurring one-on-one slot with each child separately. Same day, same rhythm, protected.',
      'Do not use the first year of it to raise difficult topics. Build the container before you put anything in it.',
      'Take each child somewhere individually, overnight if you can, once in this stage.',
    ],
    warrant: {
      passages: ['Mark 6:31', 'Deuteronomy 6:7'],
      exegesis:
        'Jesus withdraws the twelve from the crowd — "come away by yourselves to a desolate place and rest a while" — deliberately protecting undistracted time with the people he was forming. Deuteronomy 6:7 locates instruction in walking, sitting, lying down and rising: the ordinary shared hours, not the scheduled event.',
      application:
        'Formation in Scripture happens in protected, unhurried, ordinary proximity. The one-on-one rhythm is that principle given a calendar entry.',
      misuse:
        'Deuteronomy 6:7 is misapplied as pressure to make every moment explicitly instructional, producing children who experience their parents as relentless. The passage assumes an ordinary shared life in which faith comes up, not a curriculum layered over one.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: false, opportunity: true },
    tags: ['one-on-one', 'closing-window', 'engineered-experience'],
  },
  {
    id: 'experience.early-adolescence.intro-ceremony',
    version: 1,
    claimType: 'normative',
    category: 'EXPERIENCE',
    scope: { kind: 'stage', stages: ['early-adolescence'] },
    voice: 'shared',
    title: 'The first rite of passage, around thirteen',
    body:
      'The worksheet marks its first ceremony at roughly thirteen — printed as Intro into Manhood, generalised in section 14 to sons and daughters both. This is the one most families skip, and skipping it is why adolescence often arrives as a series of unmarked concessions rather than a recognised transition. The form matters less than the fact of it: other adults present, something said aloud about what is changing, something given that lasts. A thirteen-year-old told in front of witnesses that they are entering a new standing behaves differently from one who simply gets a later curfew.',
    actions: [
      'Plan a marked event at thirteen. Invite three or four adults who are not you.',
      'Ask each adult to say or write one specific thing they see forming in this young person.',
      'Name plainly what changes: which decisions are now theirs, and what is now expected.',
    ],
    warrant: {
      passages: ['Luke 2:41-52', 'Joshua 4:4-7'],
      exegesis:
        'At twelve Jesus is taken to Jerusalem for the feast and remains behind in the temple; the episode marks a recognised transition point in a Jewish boy\'s life and closes with him increasing in wisdom and stature. Joshua 4 has stones set up specifically so that "when your children ask their fathers in times to come, What do those stones mean?" there is a physical prompt for the telling.',
      application:
        'Scripture uses marked moments and physical memorials to make transitions askable-about later. A ceremony creates the stone the child asks about at twenty.',
      misuse:
        'The Luke passage is sometimes read as licence for a thirteen-year-old to disregard parents, since Jesus stays behind — but the account closes with him going down to Nazareth and being submissive to them. The transition is real and it is not emancipation.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['ceremony', 'rite-of-passage', 'milestone'],
  },
  {
    id: 'experience.middle-adolescence.real-stakes',
    version: 1,
    claimType: 'normative',
    category: 'EXPERIENCE',
    scope: { kind: 'stage', stages: ['middle-adolescence'] },
    voice: 'shared',
    title: 'Consequences you did not soften, while the stakes are still small',
    body:
      'Thirteen to fifteen is the last stage where the natural consequences of a bad decision are cheap. A missed deadline costs a grade, not a job. A friendship handled badly costs a term, not a marriage. Section 12 is explicit that the Consultant allows real-world consequences when safe, and this is the window where "safe" is widest. Parents who intervene here — the emailed teacher, the covered shift, the paid-off debt — are not preventing the lesson so much as deferring it to an age where it costs their child considerably more.',
    actions: [
      'Pick one consequence this term that you will let land, and decide in advance not to intervene.',
      'Debrief afterwards without saying you were right: ask what they would do differently.',
      'Let them hold real money — an account they manage and can genuinely mismanage.',
    ],
    warrant: {
      passages: ['Galatians 6:7', 'Proverbs 19:19'],
      exegesis:
        '"Whatever one sows, that will he also reap" states a moral order Paul treats as reliable rather than punitive. Proverbs 19:19 is more pointed: "a man of great wrath will pay the penalty, for if you deliver him, you will only have to do it again" — a direct warning that rescuing someone from a consequence guarantees repetition.',
      application:
        'Proverbs 19:19 is close to a parenting instruction as printed: repeated rescue does not resolve the pattern, it renews it. Letting a survivable consequence land is the application.',
      misuse:
        'Galatians 6:7 gets used to explain a person\'s suffering as deserved — a retributive reading the book of Job exists to refute. It is a statement about moral order, not a licence to interpret anyone\'s hardship as a verdict.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['consequences', 'consultant', 'engineered-experience'],
  },
  {
    id: 'experience.late-adolescence.rehearsal-for-leaving',
    version: 1,
    claimType: 'normative',
    category: 'EXPERIENCE',
    scope: { kind: 'stage', stages: ['late-adolescence'] },
    voice: 'shared',
    title: 'Rehearse the leaving before the leaving',
    body:
      'The worksheet places two ceremonies in this band — Growing in Manhood around sixteen and Releasing to Manhood around seventeen — and the practical content between them is rehearsal. A young person who has never booked their own appointment, resolved their own billing error, or run a household week unsupervised is not ready to do all of it at once in a new city. Hand over whole domains rather than tasks: not "call the dentist this once" but "your health admin is yours now." The failures that happen while they still live with you are the cheapest they will ever be.',
    actions: [
      'Transfer one complete domain — health admin, their own transport, their own laundry and food for a week.',
      'Have them run the household for a week: budget, shopping, cooking, while you deliberately do not step in.',
      'Mark seventeen with the releasing ceremony. Say out loud which decisions have moved to them permanently.',
    ],
    warrant: {
      passages: ['1 Corinthians 13:11', 'Luke 15:12'],
      exegesis:
        '"When I became a man, I gave up childish ways" treats the putting away of childhood as expected and unmourned. In Luke 15 the father grants the younger son his share of the property knowing what is likely to follow — the release is real, and the son\'s ruin does not retroactively make it wrong.',
      application:
        'Scripture treats the handover as necessary and does not condition it on a guarantee of good outcomes. The father in Luke 15 releases, waits, and receives — a sequence that requires the release to have been genuine.',
      misuse:
        'The prodigal son parable is regularly moralised into a warning against giving young people freedom, which reverses its point — the father is the figure being commended, and his running to meet the returning son is the climax. It is a parable about the father, not a cautionary tale about inheritance.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['release', 'ceremony', 'independence', 'engineered-experience'],
  },
  {
    id: 'experience.emerging-adult.invited-not-summoned',
    version: 1,
    claimType: 'normative',
    category: 'EXPERIENCE',
    scope: { kind: 'stage', stages: ['emerging-adult'] },
    voice: 'shared',
    title: 'Time together that they chose',
    body:
      'Once a child lives elsewhere, shared experience stops being a household default and becomes a decision they make. That is the change worth planning around. Invitations work; summonses do not. Standing obligations ("you come every Sunday") convert relationship into compliance, and the compliance is what erodes first. What holds is a small number of things they actually want to be at, plus a genuinely open door with no ledger kept about who visited whom last. The parent who stops counting is the parent who gets visited.',
    actions: [
      'Establish one annual thing worth travelling for, and make it enjoyable rather than obligatory.',
      'Stop keeping score of contact frequency. Say so out loud, once.',
      'Visit them, in their place, on their terms — and treat their household as theirs.',
    ],
    warrant: {
      passages: ['Philemon 14', '3 John 4'],
      exegesis:
        'Paul declines to command Philemon regarding Onesimus: "I preferred to do nothing without your consent in order that your goodness might not be by compulsion but of your own accord" — even holding apostolic authority, he refuses to compel, because compelled goodness is a different thing. 3 John 4 locates the writer\'s joy in his children walking in truth, at a distance, without his supervision.',
      application:
        'Paul\'s refusal to compel where he could have commanded is the exact posture required here. A relationship with an adult child runs on freely given time or it does not run.',
      misuse:
        'The honour-your-father-and-mother commandment is routinely deployed against adult children to extract visits and compliance. Honour is genuinely commanded lifelong; it is not defined as availability on the parent\'s schedule, and using it to compel produces the compulsion Paul specifically declined.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: false, opportunity: true },
    tags: ['adult-relationship', 'counselor', 'invitation'],
  },
  {
    id: 'experience.young-adult.recognize-at-twenty-one',
    version: 1,
    claimType: 'normative',
    category: 'EXPERIENCE',
    scope: { kind: 'stage', stages: ['young-adult'] },
    voice: 'shared',
    title: 'Recognize: the ceremony the whole framework points at',
    body:
      'The worksheet\'s final marker sits at twenty-one and is called Recognize — not confer, not celebrate. Recognition acknowledges something already true. Section 14 identifies this as the milestone most Christian families never mark, which is precisely why it belongs in the product. The content is public and specific: adults who have known them across the two decades saying what they see, a parent stating plainly that the formation work is complete and the relationship has changed, and something given that will still exist in forty years. Section 37\'s Story Of Your Childhood is generated to be handed over here.',
    actions: [
      'Plan it properly, months ahead. Invite the people who were actually present across the twenty-one years.',
      'Ask each to write rather than only speak, so the words survive the evening.',
      'Say out loud, in front of witnesses, that the parenting work is finished and the relationship is now peer-with-history.',
      'Hand over the Story Of Your Childhood.',
    ],
    warrant: {
      passages: ['Genesis 2:24', 'Joshua 4:6-7'],
      exegesis:
        'Genesis 2:24 makes leaving structural to the design — "therefore a man shall leave his father and his mother" — stated at creation, before any failure, as intended rather than regrettable. Joshua 4 sets up stones expressly so a later generation asks what they mean, making the memorial a device for transmitting the story forward.',
      application:
        'Scripture treats the departure as designed and memorials as the mechanism by which meaning survives the moment. A recognition ceremony is both at once: marking the intended end and creating the artefact that carries it.',
      misuse:
        'Genesis 2:24 is used both to demand a young adult leave before they are able and to justify severing contact. It describes a reordering of primary loyalty, not the end of the relationship — the same Scripture commands honour toward parents lifelong.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['ceremony', 'recognize', 'milestone', 'capstone'],
  },
];
