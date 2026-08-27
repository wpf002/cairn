import type { Unit } from '../types.js';
import { EDITORIAL, REVIEWED, TOBIAS } from './helpers.js';

const BAND_5_11 = ['early-childhood', 'middle-childhood', 'pre-adolescence'] as const;

/**
 * Ages 5–11 formation: early childhood, middle childhood, pre-adolescence.
 * Phase 8, first expansion band — the Coach years.
 */
export const EXPANSION_CHILDHOOD_UNITS: readonly Unit[] = [
  // SEE — voiced pair for the coach years
  {
    id: 'see.father.coach-years',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: [...BAND_5_11] },
    voice: 'father',
    pairedWith: 'see.mother.coach-years',
    title: 'They are watching how a man handles losing, winning, and being wrong',
    body:
      'The worksheet marks a father\'s character and spiritual life as especially important from five to seventeen — this is the heart of that band. A school-age child is now scoring your reactions: what you do when the referee is wrong, when the promotion goes elsewhere, when you are beaten at checkers by an eight-year-old, when Mom proves you wrong at dinner. Competitive grace, honest defeat, and visible weekday faith are the syllabus. They will handle losing the way you handle losing.',
    actions: [
      'Lose to them sometimes for real — play hard, lose honestly, model the handshake.',
      'Narrate one of your own failures this month at the dinner table, including what you did next.',
      'Let them catch you praying or reading Scripture without an audience being the point.',
    ],
    warrant: {
      passages: ['Titus 2:7', '1 Corinthians 11:1'],
      exegesis:
        'Titus is told to present himself as a model of good works with integrity in teaching; Paul invites imitation of himself as he imitates Christ. New Testament formation assumes an observed life as the primary curriculum.',
      application:
        'The coach years are when the observed life gets scored consciously for the first time. A father\'s handling of defeat, error, and ordinary faith is the standing lesson plan.',
      misuse:
        'Misused as pressure toward performed perfection. The model that forms children includes visible failure handled well; the model that deforms them is failure denied.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['father', 'coach-years'],
  },
  {
    id: 'see.mother.coach-years',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: [...BAND_5_11] },
    voice: 'mother',
    pairedWith: 'see.father.coach-years',
    title: 'They are watching how a woman speaks — about herself, and about others',
    body:
      'In the comparison years, your child is learning the inner voice they will use on themselves — largely from yours. How you speak about your own body, your own mistakes, other women, and people who annoy you is being installed verbatim. A daughter learns what womanhood sounds like from the inside of your sentences; a son learns what women are owed by how you expect to be spoken to. Kindness of tongue and dignity of self-description are the coach-years curriculum in the mother\'s voice.',
    actions: [
      'Retire self-disparagement in front of them — about your body, your cooking, your competence. They are taking dictation.',
      'Let them hear you speak graciously about someone who wronged you — once, deliberately, this month.',
    ],
    warrant: {
      passages: ['Proverbs 31:26', 'Ephesians 4:29'],
      exegesis:
        '"She opens her mouth with wisdom, and the teaching of kindness is on her tongue" — the Proverbs portrait makes speech-character central to the woman\'s strength. Ephesians 4:29 commands speech that builds up and gives grace to those who hear.',
      application:
        'The mother\'s spoken register — toward herself included — is a primary formation channel in the years a child assembles their inner voice. Grace-giving speech is teachable mostly by being overheard.',
      misuse:
        'Proverbs 31 misused as a demand for ceaseless pleasantness; Ephesians 4:29 misused to silence honest speech about real wrongs. Kind speech includes truthful speech — the target is grace, not suppression.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['mother', 'coach-years', 'speech'],
  },

  // RECEIVE
  {
    id: 'receive.coach-years.competence-and-correction',
    version: 1,
    claimType: 'normative',
    category: 'RECEIVE',
    scope: { kind: 'stage', stages: [...BAND_5_11] },
    voice: 'shared',
    title: 'What they need now: real coaching — practice, correction, and manageable failure',
    body:
      'The parental role has shifted: less carrying, more coaching. A coach demonstrates, lets the player try, allows the miss, and debriefs it without shame. What a child this age needs to receive is competence built this way — chores fully owned, skills practised past frustration, failures allowed to land at survivable size and then talked through. Rescue at this age is a withdrawal from the account resilience is paid from.',
    actions: [
      'Let one age-sized failure happen this month without intercepting it — the forgotten homework, the spent allowance — and debrief it warmly afterward.',
      'Upgrade their responsibilities annually on their birthday: visible, named, real.',
      'Correct in private, praise specifics in public.',
    ],
    warrant: {
      passages: ['Proverbs 3:11-12', 'Hebrews 12:7-11'],
      exegesis:
        'Both passages frame discipline as sonship\'s evidence: God trains those he loves, and Hebrews adds the outcome clause — discipline "yields the peaceful fruit of righteousness to those who have been trained by it." Training implies repetition, correction, and endured difficulty within relationship.',
      application:
        'Coaching with allowed failure is the human form of formative discipline: difficulty at survivable scale inside secure love. The parent who removes all difficulty removes the training.',
      misuse:
        'Hebrews 12 misused to baptise harshness or to spiritualise a parent\'s temper as "training." The passage\'s discipline is purposeful, measured, and yields peace — rage yields none of it.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['coaching', 'resilience'],
  },

  // EXPERIENCE — the age-7 list from section 13, generalized for the band
  {
    id: 'experience.coach-years.engineered',
    version: 1,
    claimType: 'normative',
    category: 'EXPERIENCE',
    scope: { kind: 'stage', stages: [...BAND_5_11] },
    voice: 'shared',
    title: 'Experiences to create in the coach years',
    body:
      'From the roadmap\'s age-seven list, expanded across the band: take them somewhere one-on-one, regularly — the worksheet opens the special-one-on-one-times window at nine and it never closes again. Give them a household responsibility they completely own. Let them buy something with money they earned and feel the trade-off. Teach them to lose graciously by losing to people. Let them see you apologise when you are wrong. Put them in front of real service — not a photo-op, a shift.',
    actions: [
      'Establish the recurring one-on-one: same child, same parent, a rhythm they can count on. Guard it above sport schedules.',
      'Open the earned-money loop this year: work, wages, a purchase they choose, and the arithmetic of what it cost in hours.',
      'Serve somewhere as a family where your child does actual work a stranger benefits from.',
    ],
    warrant: {
      passages: ['Deuteronomy 6:20-25', 'Luke 2:41-52'],
      exegesis:
        'Deuteronomy engineers the question-provoking experience; Luke shows the boy Jesus inside his family\'s standing pilgrimage rhythm — formative experiences in Scripture are deliberate, repeated, and embodied.',
      application:
        'Engineering formative experiences — one-on-one rhythms, earned money, real service — is biblical pedagogy\'s method: the experience carries the lesson further than the lecture.',
      misuse:
        'Misused when experiences are staged for the parent\'s record rather than the child\'s formation. The Deuteronomy test is whether the child ends up asking the question, not whether the moment photographed well.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: false, opportunity: true },
    tags: ['one-on-one', 'money', 'service'],
  },

  // HEAR
  {
    id: 'hear.coach-years.specific-praise',
    version: 1,
    claimType: 'normative',
    category: 'HEAR',
    scope: { kind: 'stage', stages: [...BAND_5_11] },
    voice: 'shared',
    title: 'Words for the comparison years: specific, true, and aimed at character',
    body:
      'Your child now lives among rankings, and generic praise ("good job, buddy") has stopped landing — they can hear its emptiness. What they need is precision: "You kept your temper when the call went against you." "You told the truth when it cost you." The affirmation ladder\'s first rung — I love you — still holds daily; the worksheet\'s affirming-encouragement row runs hot through this whole band. Encouragement that names real character builds a child who pursues character; praise that names talent builds a child who protects a reputation.',
    actions: [
      'Once a day, name one specific, true thing — effort or character, not talent.',
      '"I love you" keeps its fixed anchors, and especially follows failure: after the lost game, the bad grade, the discipline.',
    ],
    warrant: {
      passages: ['Proverbs 16:24', '1 Thessalonians 5:11'],
      exegesis:
        'Gracious words as honeycomb — nourishment with physical effect. Paul commands mutual encouragement as a standing community practice: "encourage one another and build one another up, just as you are doing."',
      application:
        'Deliberate, specific encouragement is a commanded practice, and the comparison years are when its precision starts to matter. The child drowning in rankings needs words that anchor worth in character and belonging.',
      misuse:
        'Encouragement texts misused to justify flattery or trophy-culture affirmation. Empty praise is not encouragement; children detect the difference by about seven and discount the source accordingly.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['encouragement', 'praise'],
  },

  // LEARN — the age-10 curriculum from section 13
  {
    id: 'learn.age-10.curriculum',
    version: 1,
    claimType: 'normative',
    category: 'LEARN',
    scope: { kind: 'stage', stages: [...BAND_5_11] },
    voice: 'shared',
    title: 'The age-ten life curriculum',
    body:
      'By around ten, coached and practised: handle money — earn, save, give, spend, in that order of instruction. Complete household responsibilities without reminders. Recognise manipulation, in ads and in friends. Resolve a friendship conflict with words. Understand internet safety as concretely as street safety. Begin understanding puberty before it begins — from you, calmly, not from the bus. Take responsibility for mistakes without collapse or blame-shifting. Build study habits that survive without supervision.',
    actions: [
      'Open the four-jar money system (give, save, spend, goal) with real earned income.',
      'Have the first puberty conversation this year if you have not — short, calm, book in hand, door open for more.',
      'Teach one manipulation pattern per month, from real ads: scarcity, flattery, everyone-has-it.',
    ],
    warrant: {
      passages: ['Proverbs 22:6', 'Proverbs 1:10', 'Luke 16:10'],
      exegesis:
        'Training fitted to the child\'s way; the father\'s early warning against enticement ("my son, if sinners entice you, do not consent") — Proverbs assumes pre-teaching before the pressure arrives; faithfulness in little as the trust-building sequence.',
      application:
        'The age-ten curriculum is pre-teaching: money, manipulation, puberty, and responsibility taught before the years that will test them. Proverbs\' own method is the warning issued in advance.',
      misuse:
        'Proverbs 22:6 read as a guarantee — stated once more, because this is the age parents start keeping score: it is a wisdom saying about formation\'s power, not a contract with outcomes.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['money', 'puberty-prep', 'life-skills'],
  },

  // BELIEVE — the 7–9 and 10–12 layers from section 13's table
  {
    id: 'believe.7-9.understanding-faith',
    version: 1,
    claimType: 'normative',
    category: 'BELIEVE',
    scope: { kind: 'stage', stages: ['early-childhood', 'middle-childhood'] },
    voice: 'shared',
    title: 'The 7–9 layer: understanding faith',
    body:
      'The syllabus deepens: sin as a real category that includes them and you; grace as the answer sin actually gets; salvation as Jesus\'s doing, not their behaving; conscience as a gift to be trained, not a tyrant to obey raw. Children this age often ask to pray, to be baptised, to know if they are "in" — treat these stirrings with full seriousness and zero pressure. The catechism question of this band is not "are you good?" but "what has God done?"',
    actions: [
      'When you sin against them — temper, broken promise — confess it as sin and ask their forgiveness. It is the most vivid grace lesson available.',
      'Move from story reading to story questions: "why do you think Peter lied?" — comprehension is turning into theology.',
      'Take their faith questions and stirrings seriously enough to involve your church\'s children\'s ministry rather than deflecting.',
    ],
    warrant: {
      passages: ['Psalm 78:5-7', '2 Timothy 3:14-15'],
      exegesis:
        'Psalm 78 orders the telling of God\'s deeds so children set their hope in God and keep his commandments — hope first, obedience flowing from it. Timothy\'s childhood scriptures made him "wise for salvation through faith in Christ Jesus" — the writings aim at Christ, not at behaviour management.',
      application:
        'The 7–9 layer keeps the gospel order: what God has done, then who the child is, then how to live. Faith taught as behaviour management inverts the psalm and produces either rebels or Pharisees.',
      misuse:
        'Misused when sin-teaching becomes shame-training — the child taught they are bad rather than that sin is real and grace is bigger. The passage\'s stated aim is hope.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['believe-curriculum', 'gospel'],
  },
  {
    id: 'believe.10-12.understanding-why',
    version: 1,
    claimType: 'normative',
    category: 'BELIEVE',
    scope: { kind: 'stage', stages: ['pre-adolescence'] },
    voice: 'shared',
    title: 'The 10–12 layer: understanding why',
    body:
      'The question underneath everything shifts from "what do we believe?" to "why do we believe it?" — and it must be welcomed before adolescence makes it adversarial. Begin apologetics as conversation, not ammunition: why Christians trust the Gospels, what makes Christianity different, why suffering does not disprove God. Introduce biblical worldview as a lens they can test. A pre-teen whose "why" is honoured at ten brings their "I doubt" to you at fifteen; one whose why was shushed takes it elsewhere.',
    actions: [
      'Institute the question jar or its equivalent: any faith question, no penalty, answered honestly within the week — including with "I don\'t know, let\'s find out."',
      'Read one age-level apologetics resource together this year and let them argue with it.',
      'Ask their opinion on a real ethical question monthly and take the answer seriously before adding yours.',
    ],
    warrant: {
      passages: ['1 Peter 3:15', 'Proverbs 18:13'],
      exegesis:
        'Peter commands readiness to give a reason (apologia) for hope, "with gentleness and respect" — reasoned faith is a normal Christian possession, and its manner matters as much as its matter. Proverbs 18:13 makes answering before listening a folly and a shame.',
      application:
        'Training a pre-teen in reasons, gently, and listening before answering, is 1 Peter 3:15 practised at home. The parent is both modeling the readiness and building the child\'s own.',
      misuse:
        'Apologetics misused as combat training — the verse\'s gentleness clause deleted — produces arrogant kids with brittle faith. The reason is for the hope, and the hope is the point.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['believe-curriculum', 'apologetics', 'questions'],
  },

  // BECOME
  {
    id: 'become.coach-years.direction',
    version: 1,
    claimType: 'normative',
    category: 'BECOME',
    scope: { kind: 'stage', stages: [...BAND_5_11] },
    voice: 'shared',
    title: 'What the coach years are for',
    body:
      'The objective of five-to-eleven is not grades, trophies, or compliance. It is a person who: works and finishes; loses and recovers; tells the truth under pressure; owns money, mistakes, and responsibilities at growing scale; knows what their family believes and is starting to know why; and has felt, a thousand specific times, that they are loved for who they are and encouraged for who they are becoming. Wisdom, stature, favour with God, favour with people — the four axes, coached.',
    actions: [
      'At each birthday in this band, write the annual letter and privately answer: which of the four axes got the least from us this year?',
      'Choose next year\'s single formation focus per child — one, named, shared between parents.',
    ],
    warrant: {
      passages: ['Luke 2:52'],
      exegesis:
        'Jesus\'s hidden years summarised as fourfold increase — wisdom, stature, favour with God and man — ordinary household formation across every axis of a person.',
      application:
        'The coach years succeed when all four axes advance, not when one is maximised. The annual review against the axes is the practical discipline of holding the whole child in view.',
      misuse:
        'Misused to baptise achievement culture; two of the four axes have no scoreboard, and the child excelling on one axis only is not yet the increase Luke describes.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['direction', 'luke-2-52'],
  },
];
