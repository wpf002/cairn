import type { Unit } from '../types.js';
import { EDITORIAL, REVIEWED, TOBIAS } from './helpers.js';

/**
 * BELIEVE, per stage, ages 5–21.
 *
 * Section 16b: BELIEVE is *mostly shared* — "doctrine doesn't split. Delivery
 * and modelling do." So these are per-stage rather than per-voice, which is the
 * principled shape rather than a shortcut.
 *
 * The progression is section 13's: TEACH -> EXPLAIN -> DISCUSS -> CHALLENGE ->
 * RELEASE, moving the parent from "I'm teaching my child what we believe" to
 * "I'm helping my child take ownership of his or her faith." The destination is
 * not "my parents are Christians" but "I understand Christianity, I know what I
 * believe, and I am capable of choosing whether I will follow Christ."
 */
export const DEPTH_BELIEVE_UNITS: readonly Unit[] = [
  {
    id: 'believe.early-childhood.sin-and-grace-without-terror',
    version: 1,
    claimType: 'normative',
    category: 'BELIEVE',
    scope: { kind: 'stage', stages: ['early-childhood'] },
    voice: 'shared',
    title: 'Sin and grace, without terror',
    lede: 'Around five a child develops a working conscience. The gospel becomes intelligible.',
    body:
      'Around five a child gets a working conscience. They know when they have done wrong and they feel it. The gospel becomes intelligible, and so does real damage. Skip sin and grace solves nothing. Teach sin heavily and a five-year-old decides God is mostly angry. Keep it short, concrete and always finished. Here is what we did wrong. Here is what Jesus did. Here is why we are not afraid.',
    actions: [
      'Name the wrong and the forgiveness in one conversation. Never sleep on half.',
      'Answer "is God angry with me?" directly and warmly, every time it comes up.',
    ],
    warrant: {
      passages: ['Romans 5:8', '1 John 1:9'],
      exegesis:
        '"God shows his love for us in that while we were still sinners, Christ died for us" — the timing is the argument: the love precedes the repentance rather than rewarding it. 1 John 1:9 pairs confession with a promise stated as certain — "he is faithful and just to forgive us our sins" — making the outcome dependable rather than hoped for.',
      application:
        'Both texts put the resolution inside reach at the moment the wrong is named, which is exactly what a five-year-old\'s conscience needs. Sin is real and the answer is already given.',
      misuse:
        '1 John 1:9 is misused to install a scrupulous confession loop in sensitive children, who begin fearing they have missed a sin. The verse promises cleansing, and treating it as a checklist to be completed perfectly turns a promise into an anxiety engine.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['gospel', 'conscience', 'teach'],
  },
  {
    id: 'believe.middle-childhood.bible-as-one-story',
    version: 1,
    claimType: 'normative',
    category: 'BELIEVE',
    scope: { kind: 'stage', stages: ['middle-childhood'] },
    voice: 'shared',
    title: 'From stories to one story',
    lede: 'A flood, a giant, a fish, a manger. Filed alongside every other tale they were told.',
    body:
      'A flood. A giant. A fish. A manger. By eight your child has a warehouse of disconnected episodes filed beside every other tale. Assemble them. Show that these are chapters of one account that goes somewhere and makes claims about real events. A child who reaches eleven with Bible stories shelved next to fables discards them off the same shelf.',
    actions: [
      'Read one whole book together instead of more isolated stories.',
      'When a passage troubles you, say so. "That is hard" is a real answer.',
    ],
    warrant: {
      passages: ['Luke 24:27', 'Psalm 78:1-8'],
      exegesis:
        'On the Emmaus road Jesus, "beginning with Moses and all the Prophets, interpreted to them in all the Scriptures the things concerning himself" — the whole canon read as a single account with a centre. Psalm 78 commits to telling the next generation the story, and includes Israel\'s failures in the telling rather than curating them out.',
      application:
        'Scripture reads itself as one narrative and models an unsanitised handover. Both support assembling the episodes into a single account and being candid about the hard parts.',
      misuse:
        'Luke 24:27 is used to justify finding Christ in every verse by ingenuity, producing readings the text will not bear. That the Scriptures point to Christ does not license allegorising every detail, and children taught that way lose confidence when they later read the passages plainly.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['scripture', 'narrative', 'explain'],
  },
  {
    id: 'believe.pre-adolescence.why-we-believe-it',
    version: 1,
    claimType: 'normative',
    category: 'BELIEVE',
    scope: { kind: 'stage', stages: ['pre-adolescence'] },
    voice: 'shared',
    title: 'The first real why',
    lede: 'Not what Christians believe. Why anyone should.',
    body:
      'The first question about grounds rather than content arrives around nine. Not what Christians believe. Why anyone should. It comes casually and it is real. Two responses do lasting damage. Treating it as rebellion, and improvising an argument the child later discovers was bad. Give a ten-year-old a weak apologetic in a confident tone and they learn to distrust the tone at nineteen. "Good question. I do not know. Let us find out."',
    actions: [
      'Answer one why this month by researching it together, not from memory.',
      'Say "I do not know" at least once, and then come back with something.',
      'Tell them other people believe differently. Describe that view fairly.',
    ],
    warrant: {
      passages: ['1 Peter 3:15', 'Acts 17:11'],
      exegesis:
        '"Always being prepared to make a defence to anyone who asks you for a reason for the hope that is in you" assumes Christian faith has reasons that can be articulated, and the same verse requires it be done "with gentleness and respect." The Bereans are commended for examining the Scriptures daily to check whether Paul\'s claims were so — verification is praised, not tolerated.',
      application:
        'Scripture expects faith to withstand questioning and commends the person who checks. A pre-adolescent asking why is doing something the New Testament praises.',
      misuse:
        '1 Peter 3:15 is used to license aggressive argument, dropping the "gentleness and respect" clause in the same sentence. It is also misused to require that every believer be able to win debates, when the verse asks for a reason for one\'s own hope, not a philosophy degree.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['apologetics', 'questions', 'explain'],
  },
  {
    id: 'believe.early-adolescence.faith-that-is-not-inherited',
    version: 1,
    claimType: 'normative',
    category: 'BELIEVE',
    scope: { kind: 'stage', stages: ['early-adolescence'] },
    voice: 'shared',
    title: 'They did not choose this',
    lede: 'Born elsewhere, they would believe something else. That is a correct observation.',
    body:
      'Around twelve a young person works out that their religion was assigned. Born elsewhere, they would believe something else. That is not a crisis. It is a correct observation, and how you handle it decides a lot about nineteen. Do not treat it as disloyalty. Agree with it, then name the real question. Everyone inherits a starting position, so is this one true? Now you are on the same side of the table.',
    actions: [
      'Agree out loud that they did not choose it. Say that choosing it is the point.',
      'Give them a real question to investigate, not an answer to accept.',
      'Let them visit something outside your tradition. Discuss it without anxiety.',
    ],
    warrant: {
      passages: ['Joshua 24:15', 'Deuteronomy 6:20-21'],
      exegesis:
        '"Choose this day whom you will serve" is addressed to a covenant people already in the land — a generation inside the inheritance is nonetheless required to choose it. Deuteronomy 6:20-21 anticipates the child asking what the testimonies mean, and prescribes an answer that is a historical account rather than an assertion of authority.',
      application:
        'Scripture assumes inherited faith must become chosen faith and builds the child\'s question into the instruction. The observation a thirteen-year-old makes is one Deuteronomy expects.',
      misuse:
        'Joshua 24:15 is reduced to a decorative household slogan, stripped of its context as a covenant renewal in which Joshua warns the people they are not able to serve the LORD lightly. As a plaque it becomes an assertion; in context it is a demand for deliberate commitment.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['ownership', 'inherited-faith', 'discuss'],
  },
  {
    id: 'believe.middle-adolescence.doubt-handled-in-house',
    version: 1,
    claimType: 'normative',
    category: 'BELIEVE',
    scope: { kind: 'stage', stages: ['middle-adolescence'] },
    voice: 'shared',
    title: 'Doubt belongs in this house',
    lede: 'Every objection gets raised somewhere. The only question is whether it happens near someone who loves them.',
    body:
      'The objections get specific now. Suffering. Hell. Science. How Christians behave. The parts of Scripture that are genuinely hard. Every one gets raised somewhere. The only question is whether it happens near someone who loves them. Treat doubt as a threat and you export the conversation to a comment section, and comment sections are not gentle. Your job is not to defend. It is to help them interrogate properly, including the objection.',
    actions: [
      'Ask what the strongest argument against Christianity is. Take it seriously.',
      'Bring in an adult who handles that question better than you. That is not defeat.',
      'Never punish a stated doubt. The first time sets the policy.',
    ],
    warrant: {
      passages: ['John 20:27', 'Jude 22'],
      exegesis:
        'Jesus meets Thomas\' demand for physical evidence by supplying exactly what was asked — "put your finger here, and see my hands" — rather than rebuking the demand. Jude 22 instructs the community to "have mercy on those who doubt," making the posture toward doubters a matter of obedience.',
      application:
        'The risen Christ accommodates a doubter\'s evidential demand. A household that does the same for a fifteen-year-old is following a pattern rather than being permissive.',
      misuse:
        '"Blessed are those who have not seen and yet have believed" is used to shame people who want evidence, ignoring that Jesus had just provided it to the person in front of him. The blessing is on later believers, not a rebuke to Thomas for needing what he was given.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['doubt', 'apologetics', 'challenge'],
  },
  {
    id: 'believe.late-adolescence.practice-without-you',
    version: 1,
    claimType: 'normative',
    category: 'BELIEVE',
    scope: { kind: 'stage', stages: ['late-adolescence'] },
    voice: 'shared',
    title: 'Practised without you',
    lede: 'The strongest predictor of faith surviving is whether any of it was ever practised alone.',
    body:
      'Faith survives the move out if any of it was ever practised alone. A seventeen-year-old whose whole Christian life was family-scheduled has no practice of their own to continue. Only a routine to stop. Your church. Your service. Your devotions. Transfer ownership while they are still close enough to support. Their gathering. Their giving, from their money. A commitment they made and you did not.',
    actions: [
      'Let them choose where they serve, even if it is not where you would.',
      'Have them give from their own earnings, at an amount they set.',
      'Stop scheduling their spiritual life. Ask about it. Do not run it.',
    ],
    warrant: {
      passages: ['Philippians 2:12', 'Hebrews 10:24-25'],
      exegesis:
        '"As you have always obeyed, so now, not only as in my presence but much more in my absence, work out your own salvation with fear and trembling" — Paul explicitly addresses what happens when the formative authority is not in the room. Hebrews 10:24-25 grounds perseverance in a community habit of meeting together, which is a practice a person must join rather than inherit.',
      application:
        'Paul frames absence as the test and expects the practice to continue through it. Transferring ownership before the departure is how a young person arrives with something of their own.',
      misuse:
        'Philippians 2:12 is quoted without verse 13 — "for it is God who works in you" — turning a passage about God\'s enabling work into an anxious command to self-generate salvation. The fear and trembling sits inside grace, not instead of it.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['ownership', 'independence', 'release'],
  },
  {
    id: 'believe.emerging-adult.when-they-stop-going',
    version: 1,
    claimType: 'normative',
    category: 'BELIEVE',
    scope: { kind: 'stage', stages: ['emerging-adult'] },
    voice: 'shared',
    title: 'If they walk away',
    lede: 'The instinct is to argue, plead, pressure. All of it accelerates the leaving.',
    body:
      'Many young adults raised in Christian homes disengage between eighteen and twenty-two. The instinct is to argue, plead, apply pressure, involve other people. All of it speeds the leaving. What holds a door open is unglamorous. Warmth with no conditions. No scorekeeping about attendance. No relitigating at every visit. You have moved from managing outcomes to staying reachable, and reachable is the whole of what is left.',
    actions: [
      'Say once that nothing about your love or their welcome depends on this. Then stop.',
      'Keep inviting without requiring. An invitation with a cost attached is a summons.',
      'Take your grief to God and to other adults. Not to your child.',
    ],
    warrant: {
      passages: ['Luke 15:20', 'Romans 2:4'],
      exegesis:
        'The father in Luke 15 waits, watches, and runs — he does not pursue into the far country, and he does not extract terms on return. Romans 2:4 asks whether the reader presumes on God\'s kindness, "not knowing that God\'s kindness is meant to lead you to repentance": kindness, not pressure, is named as the instrument.',
      application:
        'Scripture\'s picture of a waiting father is neither pursuit nor abandonment, and it names kindness as what actually turns a person. Both argue against the pressure campaign the instinct demands.',
      misuse:
        'The prodigal parable is used to promise that every wandering child returns, which the text does not say and many families do not experience — turning a parable about the father\'s posture into a prediction sets parents up for a second grief. It is also misused to justify enabling genuine harm; the father lets his son go and does not fund the far country.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['deconstruction', 'prodigal', 'counselor', 'release'],
  },
  {
    id: 'believe.young-adult.faith-that-is-theirs',
    version: 1,
    claimType: 'normative',
    category: 'BELIEVE',
    scope: { kind: 'stage', stages: ['young-adult'] },
    voice: 'shared',
    title: 'Faith that is theirs',
    lede: 'The strongest signal is that they have started discipling somebody else.',
    body:
      'It is theirs or it is nothing. "I know what I believe, and I can choose whether to follow Christ." At twenty-one that is testable. A church they chose. Giving from their own income. A faith crisis handled with no parent in the room. And the strongest signal, discipling someone else. When they teach this to someone junior, the transfer is complete.',
    actions: [
      'Ask what they are learning. Receive it as information, not as something to assess.',
      'Answer a theological question as a peer would, including where you are unsure.',
      'Say it out loud when you notice them discipling someone else.',
    ],
    warrant: {
      passages: ['2 Timothy 2:2', '3 John 4'],
      exegesis:
        '"What you have heard from me... entrust to faithful men, who will be able to teach others also" describes transmission running four generations deep in a single sentence — the measure of the work is whether it keeps travelling. 3 John 4 places the writer\'s greatest joy in hearing his children walk in truth, at a distance, independently.',
      application:
        'Scripture measures formation by whether it transmits onward without the original teacher. A twenty-one-year-old teaching someone else is the completion condition the whole framework was aiming at.',
      misuse:
        '2 Timothy 2:2 is used to press young adults into leadership before they are ready, treating the verse as a recruitment quota. Paul specifies "faithful" and "able," which are qualifications, and the passage is about entrusting a deposit rather than filling a rota.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['ownership', 'discipleship', 'release', 'capstone'],
  },
];
