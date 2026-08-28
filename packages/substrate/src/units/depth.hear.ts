import type { Unit } from '../types.js';
import { EDITORIAL, REVIEWED, TOBIAS } from './helpers.js';

/**
 * HEAR, voiced and split by stage, ages 5–21.
 *
 * Section 16b rates HEAR a *heavy* split: "affirmation lands differently by
 * source… the father's 'I'm proud of you' and the mother's carry different
 * weight at different ages, and the research and pastoral literature both
 * treat them as non-interchangeable." Substrate v1 satisfied the coverage gate
 * with shared units spanning three stages at once, which passes the count and
 * fails the claim. This file is the correction: one mother-voiced and one
 * father-voiced unit per stage, each paired to its counterpart so premium
 * spouse-sharing can show both sides (section 16b, cross-voice pairing).
 *
 * Section 11's finding 4 governs the ladder's timing: "I'm proud of you" and
 * "I admire you" are back-loaded to roughly thirteen on the printed worksheet,
 * and that is a real editorial claim about when competence-based and
 * character-based affirmation land. The units below respect it rather than
 * flattening affirmation across all ages.
 */
export const DEPTH_HEAR_UNITS: readonly Unit[] = [
  // ============================================ EARLY CHILDHOOD (5–7) ===
  {
    id: 'hear.father.early-childhood',
    version: 1,
    claimType: 'normative',
    category: 'HEAR',
    scope: { kind: 'stage', stages: ['early-childhood'] },
    voice: 'father',
    pairedWith: 'hear.mother.early-childhood',
    title: 'The look after the jump',
    lede: 'He jumps off the step and turns to find your face. The looking is the event.',
    body:
      'He jumps off the step and turns to find your face. She carries the drawing across the room and stops. The looking is the event, not the jump. Fathers hand this out less often, so when it comes from you it costs more. Say what you actually saw. "You kept going after it fell over twice." Not "good job," which is the sound a parent makes while looking at a phone.',
    actions: [
      'Say one concrete thing you noticed before you say anything evaluative.',
      'Praise something they chose that you would never have chosen for them.',
    ],
    warrant: {
      passages: ['1 Thessalonians 2:11-12', 'Proverbs 25:11'],
      exegesis:
        'Paul describes his ministry "like a father with his children, exhorting each one of you and encouraging you and charging you" — three distinct verbs, and critically "each one," individually, not a crowd addressed in aggregate. Proverbs 25:11 makes fitness the measure of a word\'s worth: "a word fitly spoken is like apples of gold in a setting of silver" — the value is in the fit, not the sentiment.',
      application:
        'Fatherly encouragement in Scripture is particular and person-by-person. That is an argument for specific noticing over general praise, and for addressing this child about this effort rather than issuing household-wide approval.',
      misuse:
        'Misapplied when "exhorting and charging" is read as licence for a father to be primarily corrective — the passage brackets those verbs with "encouraging," and the same chapter opens with a nursing mother. Paul is describing tenderness that also has direction, not sternness with a warm preface.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['affirmation', 'specific-praise', 'father-voice'],
  },
  {
    id: 'hear.mother.early-childhood',
    version: 1,
    claimType: 'normative',
    category: 'HEAR',
    scope: { kind: 'stage', stages: ['early-childhood'] },
    voice: 'mother',
    pairedWith: 'hear.father.early-childhood',
    title: 'Your throwaway sentences',
    lede: 'Not the speeches. The sentences you say five hundred times without noticing.',
    body:
      'Not the speeches. The ambient ones. "You are so slow in the mornings." "You are my helper." Said five hundred times, those stop being descriptions and become equipment. Your child picks them up and uses them on themselves at seven, at seventeen, at forty. The work is not adding praise. It is listening to what you already say most.',
    actions: [
      'For two days, notice which sentence about your child you say most.',
      'Swap "you never listen" for "come the first time I call."',
    ],
    warrant: {
      passages: ['Ephesians 4:29', 'Proverbs 12:25'],
      exegesis:
        'Ephesians 4:29 sets a functional test for speech: no corrupting talk, "but only such as is good for building up, as fits the occasion, that it may give grace to those who hear." The measure is the effect on the hearer, not the accuracy of the speaker. Proverbs 12:25 pairs the weight of anxiety with the lightness a good word brings — speech is treated as something that materially alters another person\'s interior state.',
      application:
        'A mother\'s habitual phrasing is the highest-volume speech in a young child\'s life, so Ephesians\' building-up test applies most stringently to the sentences said most often — the throwaway ones, not the ceremonial ones.',
      misuse:
        'Misread as a ban on correction or hard truth. The verse rules out speech that tears down, not speech that costs something to hear; "as fits the occasion" assumes some occasions call for weight. It is also frequently turned into a rule for children\'s speech while the adults exempt themselves.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['affirmation', 'inner-voice', 'mother-voice'],
  },

  // =========================================== MIDDLE CHILDHOOD (7–9) ===
  {
    id: 'hear.father.middle-childhood',
    version: 1,
    claimType: 'normative',
    category: 'HEAR',
    scope: { kind: 'stage', stages: ['middle-childhood'] },
    voice: 'father',
    pairedWith: 'hear.mother.middle-childhood',
    title: 'Name the skill, not the child',
    lede: 'School has started issuing evidence about who your child is. Graded, weekly.',
    body:
      'Seven is when a child starts deciding who they are from what they can do, and school issues that evidence weekly. Get technical. "Your second attempt was slower and that is why it held." A child can tell the difference between a parent who is impressed and a parent who was watching. Only the second builds anything durable. "You are so smart" does the opposite, and makes every future failure a verdict.',
    actions: [
      'Praise what they adjusted, repeated, or chose. Not what they are.',
      'Let them overhear you describe a real skill of theirs to another adult.',
    ],
    warrant: {
      passages: ['Luke 16:10', 'Proverbs 22:29'],
      exegesis:
        '"One who is faithful in a very little is also faithful in much" locates character in the small and unglamorous rather than the visible and large. Proverbs 22:29 — "Do you see a man skilful in his work? He will stand before kings" — treats developed competence as something Scripture is willing to admire outright.',
      application:
        'Both texts license naming a child\'s actual skill and diligence as worth noticing. Formation and competence are not rival tracks; Scripture praises the person who does the small thing well.',
      misuse:
        'Proverbs 22:29 gets flattened into a career promise — work hard and you will be promoted. It is a wisdom observation about how skill generally travels, not a guarantee, and reading it as one turns a proverb into a debt God owes the diligent child.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['competence', 'process-praise', 'father-voice'],
  },
  {
    id: 'hear.mother.middle-childhood',
    version: 1,
    claimType: 'normative',
    category: 'HEAR',
    scope: { kind: 'stage', stages: ['middle-childhood'] },
    voice: 'mother',
    pairedWith: 'hear.father.middle-childhood',
    title: 'Say the character thing, in the season the world starts grading',
    body:
      'From about seven, an institution outside your home begins telling your child daily how they rank. School is not wrong to assess, but it assesses a narrow band and reports it constantly. Your counterweight is not to dispute the grades — it is to be the voice naming the things no report card measures and no teacher saw: that she went back for the child left behind, that she told the truth when a lie was free. Character praise from a mother at this age is remembered with unusual durability, partly because it is often the only assessment the child receives that is not comparative.',
    actions: [
      'Name one act of character each week, described concretely, with no mention of achievement.',
      'On a bad-grade day, lead with something true about who they are before you discuss the grade at all.',
    ],
    warrant: {
      passages: ['1 Samuel 16:7', 'Proverbs 31:28'],
      exegesis:
        'When Samuel is drawn to Eliab\'s bearing, God redirects: "man looks on the outward appearance, but the LORD looks on the heart." The rebuke is aimed at a prophet using a visible metric — height, presence — as a proxy for worth. Proverbs 31:28 shows the traffic running the other way too: children who "rise up and call her blessed," a household where the naming of worth is a practised habit.',
      application:
        'Scripture names the visible metric as the unreliable one. A mother echoing God\'s attention to the heart gives a child a second, truer scoreboard in the season the first one gets loud.',
      misuse:
        '1 Samuel 16:7 is regularly used to dismiss effort or appearance altogether, or to tell a struggling child that outcomes do not matter. God is correcting Samuel\'s selection criterion for a king, not abolishing the significance of work. Proverbs 31 is misused as a template a mother must match rather than a portrait of a household that speaks worth aloud.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['character-praise', 'school', 'mother-voice'],
  },

  // ============================================ PRE-ADOLESCENCE (9–11) ===
  {
    id: 'hear.father.pre-adolescence',
    version: 1,
    claimType: 'normative',
    category: 'HEAR',
    scope: { kind: 'stage', stages: ['pre-adolescence'] },
    voice: 'father',
    pairedWith: 'hear.mother.pre-adolescence',
    title: 'The last window where they take it face-on',
    body:
      'Nine to eleven is the closing edge of a real window: your child can still receive direct, eye-contact affirmation without deflecting it. In eighteen months the same sentence will get a shrug, a joke, or a phone raised between you — not because it stopped mattering, but because taking praise face-on becomes socially costly. Fathers frequently wait, assuming there is time and that it will be less awkward later. It will not be. Say the admiring thing now, plainly, while it can still be received in the open, and keep saying it afterwards into what looks like an unresponsive surface.',
    actions: [
      'Say one direct, unhedged admiring sentence, looking at them, with no joke attached to soften it.',
      'Write one down. In three years they will not remember hearing it and will still have the paper.',
    ],
    warrant: {
      passages: ['Proverbs 27:5', 'Matthew 3:17'],
      exegesis:
        '"Better is open rebuke than hidden love" — Proverbs treats unexpressed affection as a genuine failure, ranking it below even uncomfortable honesty. At the Jordan, the Father speaks: "This is my beloved Son, with whom I am well pleased," aloud, publicly, before Jesus has begun any public ministry. The affirmation precedes the record.',
      application:
        'Scripture puts the burden on love to be audible, and models a Father who says the affirming thing out loud and unprompted. Love a child cannot hear is, in the proverb\'s accounting, hidden.',
      misuse:
        'Matthew 3:17 gets used to argue that affirmation should be unconditional in the sense of untethered from anything real — but the Father names a relationship and a delight, not a performance review with the grades removed. Conversely it is misused to justify indiscriminate praise, when what it models is a specific person named specifically.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['closing-window', 'admiration', 'father-voice'],
  },
  {
    id: 'hear.mother.pre-adolescence',
    version: 1,
    claimType: 'normative',
    category: 'HEAR',
    scope: { kind: 'stage', stages: ['pre-adolescence'] },
    voice: 'mother',
    pairedWith: 'hear.father.pre-adolescence',
    title: 'What you say about bodies — theirs, and your own',
    body:
      'Puberty is beginning for many children in this band, and your child is now listening to how you talk about bodies with an attention they did not previously have. Two speech habits matter more than any conversation you plan. First: what you say about their changing body — neutral, warm, unstartled, never teasing, because a joke about a developing body is remembered verbatim for decades. Second, and larger: what you say about your own. A daughter watching her mother narrate self-disgust at a mirror learns the appraisal system she will apply to herself, and no amount of "you are beautiful" outweighs it. The most protective thing many mothers can do at this stage is stop saying something.',
    actions: [
      'Stop the audible self-criticism about your own body in their hearing. This is the intervention with the largest effect.',
      'Answer body questions in the same tone you would answer a question about weather — informative, unembarrassed, brief.',
    ],
    warrant: {
      passages: ['Psalm 139:13-14', 'Genesis 1:27'],
      exegesis:
        'Psalm 139 makes God the agent of a body\'s formation — "you knitted me together in my mother\'s womb" — and the psalmist\'s response is praise, not evaluation. Genesis 1:27 locates the image of God in humanity as created, male and female, before any account of what those bodies achieve or how they appear.',
      application:
        'Both texts ground bodily worth in origin rather than appraisal. A mother speaking about bodies — her child\'s and her own — as made rather than as scored is teaching the doctrine, not merely quoting it.',
      misuse:
        'Psalm 139 is regularly deployed to shut down a young person\'s genuine distress about their body ("God made you, so stop complaining"), which uses a psalm of comfort as a rebuke. It is a declaration of God\'s intimate involvement, not an instruction to feel a particular way about a mirror.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['body-image', 'puberty', 'mother-voice'],
  },

  // ========================================== EARLY ADOLESCENCE (11–13) ===
  {
    id: 'hear.father.early-adolescence',
    version: 1,
    claimType: 'normative',
    category: 'HEAR',
    scope: { kind: 'stage', stages: ['early-adolescence'] },
    voice: 'father',
    pairedWith: 'hear.mother.early-adolescence',
    title: '"I\'m proud of you" opens here — and the face will not show it landing',
    body:
      'The worksheet starts "I\'m proud of you" at thirteen and does not run it earlier, which is a deliberate claim: competence-based affirmation needs a self that has done enough to recognise itself. That self is arriving now. What also arrives is the flat response — the shrug, the "okay," the immediate subject change. Read that correctly. Adolescents receive affirmation with the audience in mind even when there is no audience; visible pleasure at a parent\'s praise is socially expensive, so it goes underground, not away. Fathers commonly stop at exactly this point because the feedback loop has gone quiet, and quiet is the worst possible reason to stop.',
    actions: [
      'Say it and do not wait for a reaction. Change the subject yourself so no response is owed.',
      'Send it in writing sometimes — a text can be re-read privately, which is where it is actually received.',
    ],
    warrant: {
      passages: ['Matthew 3:17', 'Hebrews 3:13'],
      exegesis:
        'The Father\'s "with whom I am well pleased" is spoken at the Jordan with no recorded response from the Son and no ministry yet performed — affirmation given without a transaction. Hebrews 3:13 instructs "exhort one another every day, as long as it is called today, that none of you may be hardened" — the frequency is prescribed precisely because hardening is the default trajectory.',
      application:
        'Scripture models affirmation that expects no receipt and prescribes it daily against hardening. Both are directly applicable to a thirteen-year-old who has stopped visibly responding.',
      misuse:
        'Hebrews 3:13 addresses a congregation guarding one another against unbelief, not a parenting technique; borrowing it requires saying so. It is misused when "exhort" is heard as "correct daily," which inverts the verse — the exhortation in view is what keeps a heart soft, not what wears it down.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['proud-of-you', 'affirmation-ladder', 'father-voice'],
  },
  {
    id: 'hear.mother.early-adolescence',
    version: 1,
    claimType: 'normative',
    category: 'HEAR',
    scope: { kind: 'stage', stages: ['early-adolescence'] },
    voice: 'mother',
    pairedWith: 'hear.father.early-adolescence',
    title: 'Speaking to the version of them that has started hiding',
    body:
      'Around twelve a child begins curating which parts of themselves a parent gets to see, and mothers usually notice first because they lose the most access. The instinct is to pursue — more questions, more attempts to draw them out — and pursuit reliably accelerates the withdrawal. What works better is speaking accurately to the parts still visible, without making the speech a bid for entry. "You were kind to your brother tonight and I do not think you wanted to be" costs them nothing to receive. It also tells them the thing that keeps a door open at fifteen: that you are still watching accurately, and that being seen by you is not dangerous.',
    actions: [
      'Say one accurate observation a week that asks for no response and opens no conversation.',
      'When they volunteer something, respond to what they said, not to what you want to know next.',
    ],
    warrant: {
      passages: ['Proverbs 20:5', '1 Thessalonians 2:7'],
      exegesis:
        '"The purpose in a man\'s heart is like deep water, but a man of understanding will draw it out" — the image is patient, skilled retrieval from depth, not extraction. Paul describes apostolic gentleness as that of "a nursing mother taking care of her own children," a posture defined by the other person\'s pace rather than the caregiver\'s need.',
      application:
        'Both texts commend patience calibrated to the other person. Applied to a withdrawing adolescent, they argue for staying present and accurate rather than interrogating, and for tolerating the long interval before the water comes up.',
      misuse:
        'Proverbs 20:5 is misused as a warrant for pressing a teenager until they disclose — "drawing out" becomes a euphemism for a technique that overrides a young person\'s reticence. The proverb praises understanding, which includes understanding when not to draw.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['withdrawal', 'access', 'mother-voice'],
  },

  // ========================================= MIDDLE ADOLESCENCE (13–15) ===
  {
    id: 'hear.father.middle-adolescence',
    version: 1,
    claimType: 'normative',
    category: 'HEAR',
    scope: { kind: 'stage', stages: ['middle-adolescence'] },
    voice: 'father',
    pairedWith: 'hear.mother.middle-adolescence',
    title: '"I admire this about you" — the rung most fathers skip',
    body:
      'Admiration is a different act from pride, and the worksheet lists it as its own row for that reason. Pride looks at what your child did and is, at some level, about you: your investment returned. Admiration looks at a quality inside them and concedes something — that they possess it more than you do, or came to it without you. "You are more patient with your sister than I have ever been." Fathers skip this rung because it involves standing down. It is also, at fourteen, the single most powerful sentence available to you, because the child is actively asking whether they are becoming a distinct person, and admiration is the only affirmation that answers yes.',
    actions: [
      'Name one quality they have that you do not, and say it without qualifying it.',
      'Ask their opinion on something real and then act on it, where they can see you did.',
    ],
    warrant: {
      passages: ['Romans 12:10', 'Philippians 2:3'],
      exegesis:
        '"Outdo one another in showing honour" makes honour a competitive practice among Christians — the striving is to confer, not to receive. Philippians 2:3: "in humility count others more significant than yourselves," language of genuine estimation rather than performed modesty.',
      application:
        'These texts describe honour flowing in directions natural hierarchy would not predict. A father honouring a quality in his adolescent that exceeds his own is that instruction applied inside the household, and it is a specifically Christian move.',
      misuse:
        'Philippians 2:3 is frequently used to press children toward self-erasure, or to shame a parent for having any authority at all. Paul is describing an inner posture that governs how authority is used, not the abolition of the relationship — the same letter has Christ retaining his identity while declining to exploit it.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['admiration', 'affirmation-ladder', 'father-voice'],
  },
  {
    id: 'hear.mother.middle-adolescence',
    version: 1,
    claimType: 'normative',
    category: 'HEAR',
    scope: { kind: 'stage', stages: ['middle-adolescence'] },
    voice: 'mother',
    pairedWith: 'hear.father.middle-adolescence',
    title: 'Words in the middle of conflict, which is where they now live',
    body:
      'At fourteen, a meaningful share of your total speech happens inside disagreement, and that is the speech being remembered. This is not an argument for avoiding conflict — the boundaries still hold, and a mother who concedes to keep the peace teaches that pressure works. It is an argument about what is said in the ninety seconds after. Adolescents replay the ending. A conflict that closes with "I am not changing my answer, and I am not going anywhere" teaches something a conflict that closes with silence or a slammed door does not: that your love is not one of the things being negotiated.',
    actions: [
      'Close every argument with a sentence that separates the ruling from the relationship. Same words each time, so it becomes recognisable.',
      'Apologise specifically for your tone when your tone was wrong, without withdrawing the boundary.',
    ],
    warrant: {
      passages: ['Ephesians 4:26', 'Proverbs 15:1'],
      exegesis:
        '"Be angry and do not sin; do not let the sun go down on your anger" concedes that anger will occur and regulates its duration and expression rather than forbidding it. Proverbs 15:1 observes that "a soft answer turns away wrath" — a claim about mechanism, about what escalation actually responds to.',
      application:
        'Scripture assumes conflict in close relationships and legislates the ending. Applied here: repair before the day closes, and let the tone come down even when the ruling does not.',
      misuse:
        'Ephesians 4:26 is misused to demand instant reconciliation on the offended party\'s timetable, which can pressure a young person to perform forgiveness they have not reached. Proverbs 15:1 is misused to require that a child always answer softly — it is describing how wrath works, not assigning children the job of managing an adult\'s temper.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['conflict', 'repair', 'mother-voice'],
  },

  // =========================================== LATE ADOLESCENCE (15–18) ===
  {
    id: 'hear.father.late-adolescence',
    version: 1,
    claimType: 'normative',
    category: 'HEAR',
    scope: { kind: 'stage', stages: ['late-adolescence'] },
    voice: 'father',
    pairedWith: 'hear.mother.late-adolescence',
    title: 'Say it before the leaving, not at the leaving',
    body:
      'There is a specific failure that repeats in Christian families: the father who intends to say the important things and schedules them, implicitly, for the graduation dinner or the drive to the dorm. Two problems. The occasion is saturated — nothing said there is heard cleanly. And the years between fifteen and eighteen are precisely when a young man or woman is deciding what a father thinks of them, using the evidence available, and silence is read as evidence. Front-load it. What you would say in the car at eighteen should be said, in pieces, across three ordinary years, so that the drive is a confirmation of something already known rather than the first delivery of it.',
    actions: [
      'Write the letter you would give at eighteen. Then say a paragraph of it this month, in an ordinary conversation.',
      'Tell them one specific thing you got wrong as their father, and what you would do differently. Being trusted with that is itself an affirmation.',
    ],
    warrant: {
      passages: ['Genesis 27:1-4', '2 Timothy 4:6-8'],
      exegesis:
        'Isaac, believing himself near death, moves to bless — and the narrative that follows is a case study in a blessing left too late, contested and stolen amid deception. Paul, by contrast, writes to Timothy with his departure in view and has already said everything: "I have fought the good fight, I have finished the race." Nothing is being disclosed for the first time.',
      application:
        'Scripture shows both patterns. The deferred blessing becomes a scarce resource families fight over; the blessing given continuously across a relationship leaves nothing to be extracted at the end.',
      misuse:
        'The Isaac narrative is misread as endorsing a single transferable blessing that only one child can receive — the text is narrating a dysfunction, not prescribing a scarcity. Reading it as a model produces exactly the rivalry the story depicts.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['blessing', 'leaving', 'father-voice'],
  },
  {
    id: 'hear.mother.late-adolescence',
    version: 1,
    claimType: 'normative',
    category: 'HEAR',
    scope: { kind: 'stage', stages: ['late-adolescence'] },
    voice: 'mother',
    pairedWith: 'hear.father.late-adolescence',
    title: 'Talking to someone who is leaving, without making them manage your grief',
    body:
      'These three years carry a genuine loss for most mothers, and the loss is legitimate — something real is ending. The discipline is keeping it off the child\'s ledger. A seventeen-year-old who senses that their independence is costing their mother will do one of two things: manage her by staying smaller, or push away hard enough to make leaving survivable. Both are expensive. Say the affectionate things in the present tense, about who they are now, and take the grief to your husband, a friend, a counsellor, or God — all of whom can carry it, which your child cannot and should not.',
    actions: [
      'Say the affectionate thing without appending anything about missing them or time going fast.',
      'Name your grief out loud to another adult this month, so it has a destination that is not your child.',
    ],
    warrant: {
      passages: ['Luke 2:51-52', 'Genesis 2:24'],
      exegesis:
        'After the temple episode, Luke records that Mary "treasured up all these things in her heart" — she holds the weight internally while Jesus continues to increase in wisdom and stature. Genesis 2:24\'s "therefore a man shall leave his father and his mother" makes leaving structural to the design rather than a rupture of it.',
      application:
        'Mary\'s interior treasuring is a model for carrying what cannot be handed to the child. Genesis 2:24 reframes the loss: the departure a mother is grieving is the outcome the whole work was aimed at.',
      misuse:
        'Genesis 2:24 is regularly used as a weapon in both directions — by parents to demand a child not leave until some standard is met, or to justify cutting a young adult off entirely. It describes a reordering of primary loyalty in marriage, not the end of honour toward parents, which the same Scripture commands lifelong.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['leaving', 'grief', 'mother-voice'],
  },

  // ============================================== EMERGING ADULT (18–20) ===
  {
    id: 'hear.father.emerging-adult',
    version: 1,
    claimType: 'normative',
    category: 'HEAR',
    scope: { kind: 'stage', stages: ['emerging-adult'] },
    voice: 'father',
    pairedWith: 'hear.mother.emerging-adult',
    title: '"I respect the person you\'re becoming"',
    body:
      'Respect is the rung the printed worksheet does not have — it appears only as "(respect)" circled by hand beside the HEAR rows, which is a fair record of how recently most fathers have had to think about it. It is a different currency from pride. Pride can be issued to a child; respect can only be extended to a peer, and extending it is a decision to change the relationship. What makes it credible is not the sentence but its consequences: a father who says he respects his son\'s judgement and then keeps managing his decisions has said nothing. Say it, then behave as though it were true, including when you think they are choosing wrong.',
    actions: [
      'Say the sentence plainly, once, with no advice attached to it.',
      'Identify one decision of theirs you have been quietly managing, and stop — then do not comment on the outcome.',
    ],
    warrant: {
      passages: ['1 Peter 2:17', 'Romans 13:7'],
      exegesis:
        '"Honour everyone" is unqualified and universal in scope, placed alongside loving the brotherhood and fearing God. Romans 13:7 treats honour as something genuinely owed — "respect to whom respect is owed, honour to whom honour is owed" — a debt discharged, not a favour granted.',
      application:
        'If honour is owed to everyone, it is owed to an eighteen-year-old, and the fact that a father once had authority over them does not create an exemption. Withholding it until they earn it inverts the instruction.',
      misuse:
        'These texts are almost always cited in the child-honours-parent direction and almost never in reverse, which is itself the misuse — Peter\'s "everyone" was not written with a household carve-out for the person who used to need your permission.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['respect', 'affirmation-ladder', 'counselor', 'father-voice'],
  },
  {
    id: 'hear.mother.emerging-adult',
    version: 1,
    claimType: 'normative',
    category: 'HEAR',
    scope: { kind: 'stage', stages: ['emerging-adult'] },
    voice: 'mother',
    pairedWith: 'hear.father.emerging-adult',
    title: 'Confidence spoken over an unfinished person',
    body:
      'At nineteen your child is visibly incomplete and knows it — underemployed, uncertain, three months into a decision that is not working. The available maternal reflexes are reassurance that sounds like dismissal ("you\'ll be fine") and concern that sounds like a verdict ("I just worry about you"). The third option is harder and better: confidence stated about a process that is genuinely unfinished. "I have watched you work things out before and I expect you will work this out." It is not a prediction of the outcome. It is testimony about a person, offered by the witness with the longest record, and at this age you are the only one who can give it.',
    actions: [
      'Replace "you\'ll be fine" with a specific memory of them handling something hard.',
      'Ask "do you want help or do you want me to listen" — and then do only the one they named.',
    ],
    warrant: {
      passages: ['Philippians 1:6', '1 Thessalonians 5:11'],
      exegesis:
        '"He who began a good work in you will bring it to completion at the day of Jesus Christ" — Paul expresses confidence about people who were, at the time of writing, unfinished and in conflict. The confidence rests on God\'s track record, not on their current state. 1 Thessalonians 5:11: "encourage one another and build one another up, just as you are doing."',
      application:
        'Paul\'s pattern is confidence spoken over visible incompleteness, grounded in who is doing the work. A mother can say a true version of this to a nineteen-year-old whose life is mid-sentence.',
      misuse:
        'Philippians 1:6 is used as a guarantee of temporal outcomes — that a wandering child will certainly return, or a plan will certainly succeed. Paul is speaking about God completing sanctification by the day of Christ, not underwriting a career or a timeline, and reading it as a promise about the next two years sets a family up for a crisis of faith when the two years disappoint.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['confidence', 'emerging-adult', 'mother-voice'],
  },

  // ================================================= YOUNG ADULT (20–22) ===
  {
    id: 'hear.father.young-adult',
    version: 1,
    claimType: 'normative',
    category: 'HEAR',
    scope: { kind: 'stage', stages: ['young-adult'] },
    voice: 'father',
    pairedWith: 'hear.mother.young-adult',
    title: '"I need your counsel on this"',
    body:
      'The last rung reverses the direction of the relationship, and it cannot be faked. Asking your twenty-one-year-old for counsel on something that actually matters to you — a work decision, a conflict, a question about your own faith — and then visibly weighting their answer is the strongest available statement that the formation work is finished. It is also the moment the worksheet has been pointing at from age one: the final ceremony is called Recognize, and recognition means acknowledging what is already true rather than conferring something new. Fathers who cannot do this tend to keep a twenty-five-year-old in the position of a supervised teenager, which is the most common way a good relationship goes quietly wrong.',
    actions: [
      'Bring them a real decision of yours, before you have made it, and tell them afterwards how their input changed it.',
      'Mark the transition out loud at twenty-one rather than letting it happen by drift. Section 14 walks through the ceremony.',
    ],
    warrant: {
      passages: ['Proverbs 27:9', '3 John 4'],
      exegesis:
        '"Oil and perfume make the heart glad, and the sweetness of a friend comes from his earnest counsel" — the frame is friendship between equals, and the counsel is earnest rather than deferential. 3 John 4: "I have no greater joy than to hear that my children are walking in the truth" — the writer\'s joy has moved from their obedience to him to their independent walk.',
      application:
        'Both texts describe the endpoint the role curve is aimed at: counsel exchanged between friends, and a parent whose joy no longer depends on being obeyed. Asking for counsel is how a father says he has arrived there.',
      misuse:
        'Proverbs 27:9 is misused to justify unsolicited advice — the sweetness in the verse belongs to a friend whose counsel is sought, which is nearly the opposite of a parent volunteering it. Section 12 is explicit that the Counselor waits to be invited.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['trust', 'affirmation-ladder', 'counselor', 'recognize', 'father-voice'],
  },
  {
    id: 'hear.mother.young-adult',
    version: 1,
    claimType: 'normative',
    category: 'HEAR',
    scope: { kind: 'stage', stages: ['young-adult'] },
    voice: 'mother',
    pairedWith: 'hear.father.young-adult',
    title: 'Saying "I love you" to an adult, still, and first',
    body:
      'The worksheet marks "I love you" across the entire grid, one to twenty-one, with no gap — and at twenty-one it is the row most likely to have quietly gone dormant, replaced by logistics, updates, and the low-grade negotiation of how often anyone visits. Keep saying it, and keep saying it first, because an adult child weighing whether to call is doing a fast calculation about what the call will cost them emotionally. A mother who reliably leads with affection rather than with the accumulated questions is the cheapest call they can make. That is not a small thing; over twenty years it is most of whether the relationship survives distance.',
    actions: [
      'Lead with affection before information, every time, especially when you have concerns queued up.',
      'Let one call end with nothing asked for and nothing raised.',
    ],
    warrant: {
      passages: ['1 Corinthians 13:8', 'Isaiah 66:13'],
      exegesis:
        '"Love never ends" sits in a passage contrasting love with gifts that will pass away — the point is love\'s persistence past the expiry of everything functional around it. Isaiah 66:13: "As one whom his mother comforts, so I will comfort you" — God selects maternal comfort as the analogy for his own, and it is offered to adults in exile, not to children.',
      application:
        'Scripture treats maternal comfort as a lifelong category and takes it as an adequate picture of God\'s own. A mother\'s affection toward an adult child is not residual; it is the thing the whole relationship was for.',
      misuse:
        '1 Corinthians 13 is misused to require that a parent tolerate genuine mistreatment from an adult child under the heading of love bearing all things — the chapter describes love\'s character, not an instruction to abandon boundaries with someone who is now an adult and accountable as one.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['i-love-you', 'constant', 'young-adult', 'mother-voice'],
  },
];
