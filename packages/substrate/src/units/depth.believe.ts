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
    title: 'Teaching sin and grace to a child who now knows they do wrong',
    body:
      'Around five, a child develops a working conscience — they know when they have done wrong and they feel it. That is the moment the gospel becomes intelligible, and also the moment it becomes possible to do real damage. Two failures are common. The first is skipping sin entirely, which leaves grace as a solution to nothing. The second is teaching sin so heavily that a five-year-old concludes God is primarily angry with them. The workable shape at this age is short, concrete, and always completed: this is what we did wrong, this is what Jesus did about it, this is why we are not afraid of God. Never leave the first part standing overnight on its own.',
    actions: [
      'When you correct, name the wrong and the forgiveness in the same conversation. Do not let a child sleep on the first half.',
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
    title: 'From Bible stories to one story',
    body:
      'By seven or eight a child has a warehouse of disconnected episodes — a flood, a giant, a fish, a manger — filed alongside other tales they have been told. The work of this stage is assembly: showing that these are chapters of one account that goes somewhere, and that it makes claims about actual events rather than furnishing morals. A child who reaches eleven with Bible stories still shelved next to fables will begin discarding them on the same shelf. This is also the age to be honest that some of it is difficult, because they are about to notice.',
    actions: [
      'Read through one whole book together rather than more isolated stories.',
      'When a passage is troubling, say so plainly instead of moving past it. "That is hard, and Christians have thought about it a lot" is a real answer.',
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
    title: 'The first "why" — and why answering it badly is expensive',
    body:
      'Nine to eleven brings the first genuine question about grounds rather than content: not what Christians believe but why anyone should. It usually arrives casually and it is a real question. Two responses do lasting damage — treating it as rebellion, and improvising a bad argument the child will later discover was bad. A ten-year-old given a weak apologetic and a confident tone learns to distrust the tone when the argument fails at nineteen. "That is a good question, I do not know, let us find out" costs nothing now and buys enormous credibility later.',
    actions: [
      'Answer one "why" this month by actually researching it together rather than from memory.',
      'Say "I do not know" at least once, and then come back with something.',
      'Introduce that other people believe differently, and describe their view fairly.',
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
    title: 'The year they realise they did not choose this',
    body:
      'Around twelve or thirteen a young person notices that their religion was assigned — that had they been born elsewhere they would believe something else. This is not a crisis; it is a correct observation, and how a household handles it largely determines what happens at nineteen. The failing response is to treat the observation as disloyalty. The useful one is to agree with it and then name the actual question: given that everyone inherits a starting position, is this one true? That reframes the work ahead as investigation rather than rebellion, and it puts you on the same side of the table.',
    actions: [
      'Agree out loud that they did not choose it, and say that choosing it is the point.',
      'Give them a genuine question to investigate rather than an answer to accept.',
      'Let them attend something outside your tradition and discuss it without anxiety.',
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
    title: 'Doubt belongs in this house or it will happen in another one',
    body:
      'Thirteen to fifteen is when the objections get specific: suffering, hell, science, the behaviour of Christians, the parts of Scripture that are genuinely hard. Every one of these will be raised somewhere. The only question is whether it happens where someone loves them. A household that treats doubt as a threat exports the conversation to a comment section, and comment sections are not gentle. Section 13 calls this stage CHALLENGE for a reason: the parent\'s job here is not to defend but to help the young person interrogate properly, including interrogating the objection itself.',
    actions: [
      'Ask them what the strongest argument against Christianity is, and take the answer seriously.',
      'Bring in an adult who handles the specific question better than you do. Delegation is not defeat.',
      'Never punish a stated doubt. Not once — the first time sets the policy.',
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
    title: 'Faith they practise when you are not in the building',
    body:
      'The single strongest predictor of whether faith survives leaving home is whether any of it was ever practised independently of the household. A seventeen-year-old whose entire Christian life has been family-scheduled — your church, your service, your devotions — has no practice of their own to continue, only a routine to discontinue. The work of this stage is transferring ownership while they are still nearby to be supported: their choice of gathering, their own giving out of their own money, a commitment they made and you did not.',
    actions: [
      'Let them choose where they serve, even if it is not where you would put them.',
      'Have them give from their own earnings, at an amount they set.',
      'Stop scheduling their spiritual life. Ask about it; do not run it.',
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
    title: 'If they walk away, what you do next matters more than what you say',
    body:
      'A substantial number of young adults raised in Christian homes disengage between eighteen and twenty-two, and the parental instinct — argue, plead, apply pressure, involve others — reliably accelerates it. What holds a door open is unglamorous: continued warmth with no conditions, no scorekeeping about attendance, no relitigating at every visit, and a refusal to make the relationship contingent on their position. This is where section 12\'s Counselor is hardest and most necessary. You have moved from managing outcomes to remaining reachable, and reachable is not nothing — it is the whole of what is still available to you.',
    actions: [
      'Say once, clearly, that nothing about your love or their welcome depends on this. Then stop raising it.',
      'Keep inviting without requiring. An invitation with a cost attached is a summons.',
      'Take your grief to God and to other adults rather than to your child.',
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
    title: 'Faith that is theirs, not yours',
    body:
      'The destination stated in section 13 is not "my parents are Christians" but "I understand Christianity, I know what I believe, and I am capable of choosing whether I will follow Christ." At twenty-one that is testable. The markers are unglamorous and specific: a church they chose and committed to, giving from their own income, a faith crisis handled without a parent in the room, and — the strongest signal — discipling someone else. When a young adult starts teaching this to a person junior to them, the transfer is complete. Your role from here is peer: you may be asked, and when asked you answer fully.',
    actions: [
      'Ask what they are learning, and receive it as information rather than assessing it.',
      'When they ask a theological question, answer as a peer would — including where you are unsure.',
      'Notice and name it out loud when they are discipling someone else.',
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
