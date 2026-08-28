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
    title: 'Something theirs to fail at',
    lede: 'A job nobody rescues. A plant that dies if forgotten.',
    body:
      'A job nobody rescues. A small animal. A plant that dies if forgotten. Give a child something they own outright. The chore is not the formative part. The formative part is a consequence that arrives without an adult arranging it, at an age where the stakes are survivable. A parent who quietly waters the plant has removed the lesson and taught a different one.',
    actions: [
      'Assign one job that is fully theirs. Let it visibly go undone once.',
      'Let them lose a game without engineering a draw. Teach losing in the moment.',
      'Let them buy something with money they earned, even a bad purchase.',
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
    title: 'Serve, and make it right',
    lede: 'Both are experiences, not conversations. Neither transfers by being explained.',
    body:
      'Seven is when a child can hold someone else\'s situation in mind well enough for service to mean anything. Two experiences belong here. Serving a person who cannot usefully thank them, with the child doing real work rather than watching adults do it. And making right something they broke, in person, including the uncomfortable part where they say it themselves. Neither transfers by being explained.',
    actions: [
      'Do one service commitment as a family where your child does real work, not decoration.',
      'When they break something of someone else\'s, walk them through repaying it.',
      'Let them apologise directly. Do not narrate it for them.',
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
    title: 'The one-on-one window opens',
    lede: 'A routine begun now survives adolescence. One begun at fourteen reads as surveillance.',
    body:
      'Nine to eleven is when this has to start. A routine begun now survives adolescence. One begun at fourteen reads as surveillance. What makes it work is that it is regular, protected and has no agenda. No performance review. No scheduled Serious Conversation. The value is in accumulated hours, so starting early beats doing it impressively.',
    actions: [
      'Set a fixed one-on-one slot with each child. Same day, same rhythm, protected.',
      'Do not raise difficult topics in the first year. Build the container first.',
      'Take each child somewhere alone, overnight if you can, once in this stage.',
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
    title: 'The first rite of passage',
    lede: 'Most families skip this one, and adolescence arrives as unmarked concessions instead.',
    body:
      'Most families skip this, and adolescence arrives as a series of unmarked concessions instead of a recognised transition. The form matters less than the fact of it. Other adults present. Something said out loud about what is changing. Something given that lasts. A thirteen-year-old told in front of witnesses that they have entered a new standing behaves differently from one who simply got a later curfew.',
    actions: [
      'Plan a marked event at thirteen. Invite three or four adults who are not you.',
      'Ask each adult to name one thing they see forming in this young person.',
      'Name what changes. Which decisions are theirs now, and what is expected.',
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
    title: 'Let the consequence land',
    lede: 'A missed deadline costs a grade, not a job. This is the cheapest it gets.',
    body:
      'This is the last stage where a bad decision is cheap. A missed deadline costs a grade, not a job. A friendship handled badly costs a term, not a marriage. The Consultant lets real consequences arrive when it is safe, and safe is widest right now. The emailed teacher, the covered shift, the paid-off debt. None of those prevent the lesson. They defer it to an age where it costs far more.',
    actions: [
      'Pick one consequence this term to let land. Decide in advance not to intervene.',
      'Debrief without saying you were right. Ask what they would do differently.',
      'Let them hold real money. An account they can genuinely mismanage.',
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
    title: 'Rehearse the leaving',
    lede: 'The failures that happen while they still live with you are the cheapest they will get.',
    body:
      'A young person who has never booked an appointment, sorted a billing error, or run a household week unsupervised is not ready to do all of it at once in a new city. Hand over whole domains, not tasks. Not "call the dentist this once" but "your health admin is yours now." The failures that happen while they still live with you are the cheapest they will ever be.',
    actions: [
      'Transfer one whole domain. Health admin, transport, or a week of their own food.',
      'Have them run the household a week. Budget, shopping, cooking. Do not step in.',
      'Mark seventeen with a releasing ceremony. Say which decisions have moved for good.',
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
    title: 'Invited, not summoned',
    lede: 'Shared time stops being a household default and becomes a decision they make.',
    body:
      'Once a child lives elsewhere, shared time stops being a default and becomes a decision they make. Invitations work. Summonses do not. "You come every Sunday" converts a relationship into compliance, and compliance is what erodes first. What holds is a few things they actually want to attend, plus an open door with no ledger about who visited whom last. The parent who stops counting is the parent who gets visited.',
    actions: [
      'Build one annual thing worth travelling for. Make it enjoyable, not obligatory.',
      'Stop keeping score of contact frequency. Say so out loud, once.',
      'Visit them in their place, on their terms. Treat their household as theirs.',
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
    title: 'Recognize, at twenty-one',
    lede: 'Not confer. Not celebrate. Recognition acknowledges something already true.',
    body:
      'Not confer. Not celebrate. Recognition acknowledges what is already true, and it is the milestone most Christian families never mark. Make it public and specific. Adults who have known them for two decades saying what they see. A parent stating plainly that the formation work is finished and the relationship has changed. Something given that will still exist in forty years.',
    actions: [
      'Plan it months ahead. Invite the people who were actually present.',
      'Ask each to write rather than only speak, so the words survive the evening.',
      'Say in front of witnesses that the parenting work is finished.',
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
