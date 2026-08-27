import type { Unit } from '../types.js';
import { EDITORIAL, REVIEWED, T1, T2, T3, TOBIAS } from './helpers.js';

/**
 * The formation layer of the pregnancy track: BIBLICAL PERSPECTIVE, PRAYER,
 * PREPARING TO PARENT — sections 5 and 16a, in unit form.
 *
 * One normative unit per category per trimester keeps every week of the
 * covered span answerable to all seven questions, and every warrant carries
 * its misuse statement, because the fastest way to lose a discerning parent
 * is to hand them a verse doing work it never claimed to do.
 */
export const PREGNANCY_FORMATION_UNITS: readonly Unit[] = [
  // ================================================================== SEE ===
  {
    id: 'pregnancy.see.t1.marriage-under-strain',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'pregnancy', weeks: T1 },
    voice: 'shared',
    title: 'It starts before they can see',
    lede: 'Nobody can tell you are pregnant yet. You are already exhausted, sick, and frightened.',
    body:
      'Nobody can tell yet. You are already tired, already sick, already scared, and there is nothing to show anyone. How you two treat each other in these weeks is the first draft of the house your child grows up in. They will not remember it. They will live in it.',
    actions: [
      'Say the hardest part of this week out loud to each other. Once.',
      'Take one chore off whoever is more tired. Do not wait to be asked.',
    ],
    warrant: {
      passages: ['Ephesians 5:25-33'],
      exegesis:
        'Paul grounds marriage in Christ\'s self-giving love for the church: the husband\'s headship is defined as sacrifice ("gave himself up for her"), and the passage frames mutual care of the other\'s body as care of one\'s own. It is a passage about costly, practical love, addressed first to the stronger party.',
      application:
        'A marriage absorbing the strain of early pregnancy is practising exactly the self-giving the passage describes. Serving a nauseated, exhausted spouse is not preamble to parenting; it is the first parenting act a child will ever benefit from.',
      misuse:
        'This passage is commonly misused to make submission the headline and to demand deference from a wife; its actual weight falls on sacrificial obligation. It is also misused as marriage-advice garnish with the Christ-and-church context stripped out.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['marriage', 'first-trimester'],
  },
  {
    id: 'pregnancy.see.t2.habits-of-the-house',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'pregnancy', weeks: T2 },
    voice: 'shared',
    title: 'Build the house before they arrive',
    lede: 'Some energy comes back this trimester. Habits get built with energy, and you will not have any later.',
    body:
      'Some energy comes back now. Use it. How you talk about people who left the room. Whether phones come to the table. Whether anyone prays out loud. A newborn does not learn these things. A newborn simply arrives into them. Building a household is work. Renovating one with an infant in it is much harder.',
    actions: [
      'Pick one habit you do not want passed on. Stop it this month, together.',
      'Start saying grace at meals now, so it is ordinary long before anyone asks about it.',
    ],
    warrant: {
      passages: ['Deuteronomy 6:6-9'],
      exegesis:
        'The Shema commands that God\'s words be first on the parent\'s own heart ("these words shall be on your heart") and then taught diligently to children, woven through the ordinary places of life — sitting, walking, lying down, rising. Formation is ambient and parental before it is instructional.',
      application:
        'The passage assumes a household where the parents\' own practice comes first. Pregnancy is the one season when that order can be established without an audience: the habits are on your heart before there is a child to teach them to.',
      misuse:
        'Deuteronomy 6 is commonly reduced to a mandate for formal family devotions, or quoted to guilt parents about insufficient religious instruction. Its actual order — the parent\'s heart first, then the child, through ordinary life — is the opposite of a program.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['habits', 'second-trimester'],
  },
  {
    id: 'pregnancy.see.t3.how-you-handle-fear',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'pregnancy', weeks: T3 },
    voice: 'shared',
    title: 'They will watch you be afraid',
    lede: 'You will not raise a child without them seeing you frightened. You can decide what they see you do next.',
    body:
      'Birth is close and your mind has started manufacturing. Diagnoses. Money. The whole world they have to grow up in. You will not raise a child without them seeing you afraid of something. What you can choose is what they watch you do with it. A prayer that says the fear out loud is not weaker than a calm face. It is the only version a child can copy.',
    actions: [
      'Write your three real fears about birth. Pray those, not around them.',
      'Tell one person which fear is loudest. Spoken fear is shared fear.',
    ],
    warrant: {
      passages: ['Philippians 4:6-7'],
      exegesis:
        'Paul, writing from imprisonment, instructs the Philippians to be anxious for nothing but in everything, with thanksgiving, to make requests known to God — with the result that God\'s peace, beyond understanding, guards heart and mind. The command is not to feel no anxiety; it is to route anxiety into specific, thankful petition.',
      application:
        'The passage legitimises naming fears to God in detail. A parent who prays their actual fears is doing what the text says, and is modelling for a future child that fear is carried to God rather than performed away.',
      misuse:
        'Commonly misused as a prohibition on feeling anxious — turning a promise of peace into an accusation against the anxious, including mothers with clinical perinatal anxiety, who need a doctor as well as prayer and should be told so.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['fear', 'third-trimester'],
  },

  // ============================================================== RECEIVE ===
  {
    id: 'pregnancy.receive.t1.received-before-productive',
    version: 1,
    claimType: 'normative',
    category: 'RECEIVE',
    scope: { kind: 'pregnancy', weeks: T1 },
    voice: 'shared',
    title: 'Loved before they can do anything',
    lede: 'Your child cannot smile, achieve, or thank you. They are already yours and already prayed for.',
    body:
      'Your child cannot smile at you. Cannot achieve anything. Cannot thank you or give you one thing back. And they are already yours, already loved, already prayed over by name. Get the order straight now, while it is easy. Everything you will ever say to this child stands on it. They are loved because they are yours, not because of what they manage.',
    actions: [
      'Pray for this child by whatever name you are using, before you know a thing about them.',
      'Say it out loud to each other this week. This child owes us nothing.',
    ],
    warrant: {
      passages: ['Matthew 3:17'],
      exegesis:
        'At the baptism, before Jesus has taught, healed, or called a single disciple, the Father speaks: "This is my beloved Son, with whom I am well pleased." The affirmation precedes the public ministry entirely. In the Father\'s household, belovedness is not a wage.',
      application:
        'Parental love that precedes performance is patterned on God\'s own declared order. A child whose earliest experience is being delighted in — not evaluated — has scaffolding for every later season, including the ones where they fail.',
      misuse:
        'This text is not commonly misused so much as ignored: households that would affirm it in theory still attach affection to grades, behaviour, and athletic performance in practice. The misuse is practical inversion — affirmation issued as payment.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['affirmation', 'unconditional-love'],
  },
  {
    id: 'pregnancy.receive.t2.two-parents-two-gifts',
    version: 1,
    claimType: 'normative',
    category: 'RECEIVE',
    scope: { kind: 'pregnancy', weeks: T2 },
    voice: 'shared',
    title: 'You will not give the same things',
    lede: 'What a child receives from a mother and from a father is not identical, and was never meant to be.',
    body:
      'The bump shows now and the roles start to feel real. What a child gets from each of you is different, and it is supposed to be. Paul reaches for both pictures in five verses. A nursing mother, gentle. A father, charging and encouraging. Same letter, same breath. A child does well receiving both. A house does well when each parent respects what the other is carrying.',
    actions: [
      'Name one thing you hope your child gets from you, and one from your spouse.',
      'Carrying both roles alone? Name the people who can help supply the other half.',
    ],
    warrant: {
      passages: ['1 Thessalonians 2:7-12'],
      exegesis:
        'Paul describes his ministry with two parental images five verses apart: gentle "like a nursing mother taking care of her own children," and "like a father with his children" exhorting, encouraging, and charging each one to walk worthily. Both postures are apostolic, both are parental, and neither replaces the other.',
      application:
        'The passage dignifies both the nurturing and the exhorting modes of parenting as genuinely formative. It underwrites differentiated parenting without ranking the parents — and it gives a single parent a map of what to deliberately cover, not a verdict.',
      misuse:
        'Misused when flattened into rigid gender roles ("mothers nurture, fathers demand") — Paul claims both postures for himself in one passage. Also misused against single parents; the text describes modes of care, not a required household census.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['voice', 'roles'],
  },
  {
    id: 'pregnancy.receive.t3.a-name-and-a-welcome',
    version: 1,
    claimType: 'normative',
    category: 'RECEIVE',
    scope: { kind: 'pregnancy', weeks: T3 },
    voice: 'shared',
    title: 'Prepare the welcome, not the nursery',
    lede: 'Car seats and bags and lists. Somewhere in there, prepare the only thing nobody else can.',
    body:
      'Car seats. Bags. Lists on the fridge. Somewhere in all of it, prepare the one thing only you can. A child takes their first identity from how they are received. Write the letter. Choose the blessing. Decide now what you will say over this child in the first days, before you are too tired to think. The cot gets outgrown in two years. The welcome does not.',
    actions: [
      'Each of you write a short letter. Seal it. Date it. Pick the milestone it opens on.',
      'Choose the blessing you will say in week one. Say it out loud now until it is yours.',
    ],
    warrant: {
      passages: ['Luke 1:57-66'],
      exegesis:
        'At John\'s birth, the naming is a public act of obedient welcome: against family expectation, Elizabeth and Zechariah name him as instructed, Zechariah\'s speech returns in blessing, and the neighbourhood asks "What then will this child be?" The child is received into a story and a calling before he can do anything at all.',
      application:
        'Naming and blessing are the family\'s first formative acts. Preparing deliberate words of welcome — a name with a reason, a blessing said aloud — receives a child into meaning rather than merely into logistics.',
      misuse:
        'Misused when birth narratives are pressed into prosperity-shaped promises about what a specific child will become. The passage warrants deliberate welcome; it does not warrant scripting a child\'s destiny.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['blessing', 'birth-preparation'],
  },

  // =========================================================== EXPERIENCE ===
  {
    id: 'pregnancy.experience.t1.mark-the-beginning',
    version: 1,
    claimType: 'normative',
    category: 'EXPERIENCE',
    scope: { kind: 'pregnancy', weeks: T1 },
    voice: 'shared',
    title: 'Set the first stone',
    lede: 'Israel piled stones at the Jordan so children would ask what they meant.',
    body:
      'Israel piled stones at the Jordan for one reason. So that children would ask what the stones meant, and somebody would have to tell the story. Your first stones go down this month. Keep the test. Keep a photo, a written prayer, the date you found out. One day this child asks how they began. You will want more than a shrug.',
    actions: [
      'Start the record this week. One photo, one dated note, one prayer.',
      'Write down the day you found out. Where you were, what you said, while it is sharp.',
    ],
    warrant: {
      passages: ['Joshua 4:4-7'],
      exegesis:
        'Twelve stones are taken from the Jordan and set up explicitly as a question-generator: "When your children ask in time to come, \'What do those stones mean to you?\' then you shall tell them." The memorial exists to provoke the next generation\'s question and carry the answer.',
      application:
        'Deliberate memory-keeping is a biblical formation practice, not nostalgia. A kept record of a child\'s beginning is a stone pile: its purpose is the future conversation in which God\'s faithfulness gets narrated to the child it concerns.',
      misuse:
        'Misused when memorial-making becomes performance for an audience (the highlight reel) rather than testimony for the child. The stones in Joshua face the family\'s children, not the neighbours.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['memory', 'journey'],
  },
  {
    id: 'pregnancy.experience.t2.speak-and-read-aloud',
    version: 1,
    claimType: 'normative',
    category: 'EXPERIENCE',
    scope: { kind: 'pregnancy', weeks: T2 },
    voice: 'shared',
    title: 'Let them hear your voices',
    lede: 'Hearing is coming online. Low, repeated sound carries best, which means voices.',
    body:
      'Hearing comes online around now. Low, repeated sound carries furthest into the womb, which means voices more than music. Read out loud. Pray out loud. Narrate the drive to work. These are the first experiences you can hand this child on purpose. They arrive already knowing what home sounds like.',
    actions: [
      'Read out loud to the baby for a few minutes a day. Either parent, any book.',
      'Pray over the baby at the same time each evening. Build the rhythm before the child arrives.',
    ],
    warrant: {
      passages: ['Deuteronomy 6:6-9', 'Psalm 78:1-4'],
      exegesis:
        'Both passages make faith transmission verbal and ambient: Deuteronomy weaves God\'s words through the ordinary hours of the household; Psalm 78 opens a generational chain — "things that we have heard and known, that our fathers have told us... we will tell to the coming generation." The medium of formation, in both, is the parent\'s voice.',
      application:
        'Speaking and reading to a child in the womb begins the practice both passages assume: a household where the parents\' voices carry what matters. The habit, once formed in pregnancy, survives into the newborn months when it counts.',
      misuse:
        'Misused if dressed up as a spiritual growth-hack — as though prenatal Bible reading confers advantage or blessing on the child. The warrant is for the practice of the household\'s voice, not for outcomes attributed to prenatal audio.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['voice', 'reading-aloud', 'bonding'],
  },
  {
    id: 'pregnancy.experience.t3.walk-through-the-first-night',
    version: 1,
    claimType: 'normative',
    category: 'EXPERIENCE',
    scope: { kind: 'pregnancy', weeks: T3 },
    voice: 'shared',
    title: 'Rehearse the first night',
    lede: 'Decide who gets up now. Deciding at 3am is how resentment gets built.',
    body:
      'Walk through the first night out loud, this week, while you are both rested. Who gets up. Who feeds. Who guards whose sleep. What happens when you are both completely empty and one of you has to be the adult anyway. Proverbs keeps tying wisdom to seeing a thing coming and getting the house ready. Decide at 3am and you build resentment. Decide now and you build a team.',
    actions: [
      'Talk through the nights. Feeds, changes, and who protects whose sleep on which night.',
      'Agree the visitor rules now. Who, when, how long. Do not negotiate this exhausted.',
      'Pick the signal that means "take the baby, I am done." No explanation required, ever.',
    ],
    warrant: {
      passages: ['Proverbs 24:27'],
      exegesis:
        '"Prepare your work outside; get everything ready for yourself in the field, and after that build your house." The proverb commends sequenced preparation: secure what sustains the household before the household is built. Wisdom literature consistently treats foresight as a moral quality, not a personality trait.',
      application:
        'Concrete rehearsal of the newborn weeks — labour divided, limits named, help arranged — is the proverb\'s pattern applied to the season where its absence costs most. Preparation here is love expressed in logistics.',
      misuse:
        'Wisdom sayings are misused when treated as guarantees (prepared families still get blindsided) or as grounds for judging the unprepared. A proverb describes how things generally go; it does not indict the family whose newborn defeats every plan.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['preparation', 'newborn-planning'],
  },

  // ================================================================= HEAR ===
  {
    id: 'pregnancy.hear.t1.speak-of-the-child-as-a-person',
    version: 1,
    claimType: 'normative',
    category: 'HEAR',
    scope: { kind: 'pregnancy', weeks: T1 },
    voice: 'shared',
    title: 'You hear it first',
    lede: 'Long before your child hears anything, you do. Listen to how you talk about this pregnancy.',
    body:
      'Long before your child hears anything, you do. Listen to the words you use about this pregnancy. Burden or gift. Disruption or arrival. Those are rehearsals for the household voice this child grows up inside. Psalm 139 does not call an unborn child potential. It calls them someone God already knows, unformed. Speaking that way is accuracy, not sentiment.',
    actions: [
      'Listen to how you refer to the baby this week. Say person, not project.',
      'Begin praying for the child by name or nickname, as someone already known to God.',
    ],
    warrant: {
      passages: ['Psalm 139:13-16'],
      exegesis:
        'The psalmist confesses that God formed his inward parts, knit him together in the womb, and saw his unformed substance — with all his days written before one existed. The claim is about God\'s knowledge and intention toward a person prior to birth; the womb is a place of divine workmanship, not anonymity.',
      application:
        'The passage warrants speaking of the unborn child as a known person, and shaping the household\'s language accordingly. What it forms first is the parents: reverence in how they narrate the pregnancy.',
      misuse:
        'Psalm 139 is the most keyword-matched passage in pregnancy content — routinely bolted onto fetal-anatomy facts as though it made developmental claims. It claims God\'s knowledge of the person, not embryology; using it as a science caption cheapens both.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['language', 'personhood'],
  },
  {
    id: 'pregnancy.hear.t2.words-between-parents',
    version: 1,
    claimType: 'normative',
    category: 'HEAR',
    scope: { kind: 'pregnancy', weeks: T2 },
    voice: 'shared',
    title: 'Your tone with each other',
    lede: 'A child\'s first language lesson is how their parents speak to one another.',
    body:
      'A child\'s first language lesson is the tone between their parents. Proverbs calls kind words honey to the soul and health to the body, which is a physical claim, not a nice one. Pregnancy is where kind words get hardest. Hormones, money, fear, no sleep. The voice you use with each other now is the voice your child will grow up assuming is normal.',
    actions: [
      'Pick the conversation that keeps turning sharp. Have it once, this week, rested and fed.',
      'Say one true kind sentence to your spouse each day about how they are handling this.',
    ],
    warrant: {
      passages: ['Proverbs 16:24'],
      exegesis:
        '"Gracious words are like a honeycomb, sweetness to the soul and health to the body." The proverb treats speech as having physical and psychological effect — words are presented as nourishment or (by contrast throughout Proverbs) as wounds.',
      application:
        'Deliberately gracious speech between spouses is formation of the household\'s acoustic environment. It is also the practice run for every affirming word the child will later need to hear; parents speak to children in the register they practised on each other.',
      misuse:
        'Misused to counsel niceness in place of truth — gracious words in Proverbs are honest ones kindly delivered, not conflict avoidance. Also misused to silence a spouse raising real grievances under the banner of "sweetness."',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['marriage', 'speech'],
  },
  {
    id: 'pregnancy.hear.t3.the-blessing-ready-at-birth',
    version: 1,
    claimType: 'normative',
    category: 'HEAR',
    scope: { kind: 'pregnancy', weeks: T3 },
    voice: 'shared',
    title: 'Have it ready before the first cry',
    lede: 'Decide now what this child hears from you on day one. You will not be thinking clearly.',
    body:
      'Your first words matter more to you than to the baby. Good. That is their value. Decide now what this child hears on day one. "I love you." "We wanted you." A blessing you chose in advance. On the day you will be exhausted and crying and not thinking clearly. Pick it while you can. Love comes first and is never earned back.',
    actions: [
      'Choose the exact first sentence each of you will say. Say it at the first chance.',
      'Put the blessing in your notes app and in the bag. Somewhere you will find it.',
    ],
    warrant: {
      passages: ['Matthew 3:17', 'Proverbs 25:11'],
      exegesis:
        'The Father\'s "beloved Son" declaration precedes Jesus\'s ministry — affirmation before performance. Proverbs 25:11 prizes the fitly spoken word: "a word fitly spoken is like apples of gold in a setting of silver" — right words, at the right moment, are treasure.',
      application:
        'Preparing the first words a child will hear applies both texts: love declared prior to any performance, delivered at the fitting moment. Parents who rehearse the blessing actually say it; those who improvise usually say logistics.',
      misuse:
        'Matthew 3:17 is misused when affirmation is preached but practised as a reward schedule. Proverbs 25:11 is misused as a demand for eloquence — the fit word at a birth is usually four words long.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['blessing', 'affirmation'],
  },

  // ================================================================ LEARN ===
  {
    id: 'pregnancy.learn.t1.learn-the-season',
    version: 1,
    claimType: 'normative',
    category: 'LEARN',
    scope: { kind: 'pregnancy', weeks: T1 },
    voice: 'shared',
    title: 'Learn the warning signs now',
    lede: 'At 2am you want to be remembering the warning signs, not searching for them.',
    body:
      'Learn what is normal, what is not, and when to call. Do it once, properly, this trimester. At 2am you want to be remembering, not searching with one hand while holding a phone light. Cairn keeps the list a tap away. The ones that save you time are the ones already in your head.',
    actions: [
      'Read the urgent maternal warning signs once, together, this week.',
      'Save your provider\'s after-hours number in both phones, labelled so either of you can find it half-asleep.',
    ],
    warrant: {
      passages: ['Proverbs 27:23'],
      exegesis:
        '"Know well the condition of your flocks, and give attention to your herds" — the sage commends attentive, informed stewardship of what is in one\'s care. Knowledge of the charge\'s actual condition, kept current, is the shepherd\'s duty.',
      application:
        'For expectant parents, the flock is the pregnancy: knowing its normal course and its warning signs is the direct modern form of the shepherd\'s attentiveness. Informed vigilance is a spiritual discipline, distinct from anxiety.',
      misuse:
        'Misused to sanctify health anxiety — the proverb commends knowing one\'s flock, not monitoring it hourly. It is also not a mandate for distrust of medical professionals; shepherds in Israel hired help.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['warning-signs', 'stewardship'],
  },
  {
    id: 'pregnancy.learn.t2.learn-your-own-formation',
    version: 1,
    claimType: 'normative',
    category: 'LEARN',
    scope: { kind: 'pregnancy', weeks: T2 },
    voice: 'shared',
    title: 'Study the parent you will be',
    lede: 'The only parenting variable fully in your control is you. Look at it now, while it is quiet.',
    body:
      'The only parenting variable fully in your control is you. What did your parents give you that you want to hand on? What arrived in you that stops here? Put it on paper, with your spouse, honestly, while the trimester is steady. Far cheaper now than in the middle of a toddler meltdown that has somehow summoned your father\'s voice out of your own mouth.',
    actions: [
      'Write two lists each. What you are keeping. What ends with you. Compare them.',
      'Tell one person the hardest thing on your "ends here" list. Hidden resolutions do not survive newborns.',
    ],
    warrant: {
      passages: ['Psalm 78:5-8'],
      exegesis:
        'The psalm commands generational transmission of God\'s works with an explicit purpose clause: that the coming generation "should not be like their fathers, a stubborn and rebellious generation." Scripture itself builds the breaking of inherited patterns into the definition of faithful transmission.',
      application:
        'Examining what to pass on and what to end is not disloyalty to one\'s parents; it is the psalm\'s own program. Christian formation of a family line includes deliberate discontinuity where the line went wrong.',
      misuse:
        'Misused as ammunition for blaming one\'s parents rather than as a mandate for one\'s own reformation — the psalm\'s address is forward, to what the reader will transmit, not backward to grievance.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['parent-formation', 'family-patterns'],
  },
  {
    id: 'pregnancy.learn.t3.learn-the-practical-floor',
    version: 1,
    claimType: 'normative',
    category: 'LEARN',
    scope: { kind: 'pregnancy', weeks: T3 },
    voice: 'shared',
    title: 'Competence is a form of love',
    lede: 'The newborn weeks are made entirely of small things. Jesus is unusually interested in small things.',
    body:
      'Safe sleep. The car seat, actually installed. Feeding. Knowing which fever is an emergency. The newborn weeks are made entirely of small things, and Jesus keeps locating trustworthiness there. Learn them now, both of you, with your hands where you can. Every parent fumbles. Only some parents chose not to prepare.',
    actions: [
      'Before week 38, both of you: safe sleep, car seat checked, feeding basics, the fever rule.',
      'Take an infant CPR class together. A good video course counts if there is none nearby.',
    ],
    warrant: {
      passages: ['Luke 16:10'],
      exegesis:
        '"One who is faithful in a very little is also faithful in much." In context Jesus is teaching about stewardship of worldly wealth as the training ground for true riches; the principle is that fidelity is demonstrated and formed in small, unglamorous competence.',
      application:
        'Mastering the unglamorous newborn basics is faithfulness in the very little that a newborn\'s life actually consists of. Practical competence is not beneath spiritual formation; in this season it is the form spiritual formation takes.',
      misuse:
        'Misused to moralise skill-gaps — the verse forms a trajectory of growing faithfulness, not a verdict on parents who are still learning. Every competent parent was an incompetent one first.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['newborn-prep', 'competence'],
  },

  // ============================================================== BELIEVE ===
  {
    id: 'pregnancy.believe.t1.god-of-the-unseen',
    version: 1,
    claimType: 'normative',
    category: 'BELIEVE',
    scope: { kind: 'pregnancy', weeks: T1 },
    voice: 'shared',
    title: 'Trusting what you cannot see',
    lede: 'No bump, often no announcement. Everything invisible and everything at stake.',
    body:
      'No bump yet. Often no announcement. Everything invisible and everything at stake. So this is where your family learns its first theological habit, which is handing God what you cannot monitor. You will need that habit at every stage for twenty-one years. It starts here because here you have no alternative.',
    actions: [
      'Pray one dated sentence for this child each day. Keep them. They are the first pages.',
      'If fear of loss is loud, say so to God and to one person. Do not carry it silently.',
    ],
    warrant: {
      passages: ['Hebrews 11:1'],
      exegesis:
        '"Faith is the assurance of things hoped for, the conviction of things not seen." The verse heads a catalogue of people who acted on God\'s promise without possessing its object — faith in Hebrews is practical reliance under conditions of non-visibility.',
      application:
        'Early pregnancy is a literal school of things hoped for and not seen. Practising daily entrustment now builds the habit every later stage of parenting will demand, when the child is out of sight in a hundred new ways.',
      misuse:
        'Misused as a guarantee that entrusted pregnancies end well. Hebrews 11 itself refuses this — its heroes include those who "did not receive what was promised" in their lifetime. Faith is reliance on God, not leverage over outcomes; grief and faith are not opposites.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['faith', 'trust', 'first-trimester'],
  },
  {
    id: 'pregnancy.believe.t2.the-god-who-gives-children',
    version: 1,
    claimType: 'normative',
    category: 'BELIEVE',
    scope: { kind: 'pregnancy', weeks: T2 },
    voice: 'shared',
    title: 'Given, not produced',
    lede: 'Psalm 127 says something sharper than the nursery wall art suggests.',
    body:
      'Every dedication service reaches for Psalm 127, usually softly. It is sharper than that. Children are a heritage from the LORD. Given, not produced. Entrusted, not owned. Settle that this trimester, because everything downstream runs on it. Discipline. Ambition. Whether you can let go at twenty-one. You are raising God\'s child, not your possession.',
    actions: [
      'Read Psalm 127 together, slowly. Talk about what "heritage" says about ownership.',
      'Pray about your own grip. Ask for the ability to hold this child openly.',
    ],
    warrant: {
      passages: ['Psalm 127:3-5'],
      exegesis:
        '"Behold, children are a heritage from the LORD, the fruit of the womb a reward." Within a psalm about the futility of self-secured building ("unless the LORD builds the house"), children are classed as God\'s gift and endowment — received within God\'s building of the house, not achieved by the builders.',
      application:
        'Receiving a child as heritage reframes the parental role as stewardship from the start. Parents who settle this early hold ambition, discipline, and eventual release differently from parents raising an extension of themselves.',
      misuse:
        'Sharply misused against the childless and those who have miscarried — as though the "reward" language graded God\'s favour by fertility. The psalm blesses the gift; it does not audit the recipients. Also misused (arrows imagery) to conscript children into parental projects.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['gift', 'stewardship'],
  },
  {
    id: 'pregnancy.believe.t3.strength-for-the-valley',
    version: 1,
    claimType: 'normative',
    category: 'BELIEVE',
    scope: { kind: 'pregnancy', weeks: T3 },
    voice: 'shared',
    title: 'He will be in the room',
    lede: 'Fast, slow, surgical, complicated. The promise is company, not a particular outcome.',
    body:
      'Birth might be fast. It might be surgical. It might go somewhere nobody planned. Pack this one fact: the Lord goes with you and does not leave. That is a promise of company, not of an outcome. Mothers say the verse they actually used in labour was the one they had memorised, never the one they had bookmarked.',
    actions: [
      'Memorise one short verse about God\'s presence. Both of you. Before week 38.',
      'Pray for the people who will be in the room. The providers, by role, and each other.',
    ],
    warrant: {
      passages: ['Deuteronomy 31:8', 'Isaiah 41:10'],
      exegesis:
        'Deuteronomy 31:8 — spoken to Joshua at a threshold he cannot control: "It is the LORD who goes before you. He will be with you; he will not leave you or forsake you. Do not fear." Isaiah 41:10 grounds fearlessness in accompaniment: "Fear not, for I am with you." Both are presence-promises to people entering what they cannot manage.',
      application:
        'Labour is a threshold entered, not managed. These texts legitimately promise what they promise — God\'s presence and sufficiency in it — and memorised presence-promises are the ones available when reading is impossible.',
      misuse:
        'Misused as outcome-promises — as though claimed verses secure uncomplicated deliveries. They promise God in the event, not control of the event; a mother whose birth went sideways was not under-believing.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['birth', 'presence'],
  },

  // =============================================================== BECOME ===
  {
    id: 'pregnancy.become.t1.the-parent-precedes-the-child',
    version: 1,
    claimType: 'normative',
    category: 'BECOME',
    scope: { kind: 'pregnancy', weeks: T1 },
    voice: 'shared',
    title: 'Who are you becoming?',
    lede: 'Cairn asks who your child is becoming. For nine months you are the only one who can answer.',
    body:
      'For nine months you are the only one who can answer it. Paul\'s fruit of the Spirit is the character list your child will come looking for in this house. Patience for the toddler years. Gentleness for the failures. Self-control for the door-slam at fifteen. None of it stockpiles. All of it grows, slowly, and the growing starts now.',
    actions: [
      'Pick the quality this child will most test in you. Pray for it the rest of the pregnancy.',
      'Ask your spouse which quality they would pick for you. Listen without defending.',
    ],
    warrant: {
      passages: ['Galatians 5:22-23'],
      exegesis:
        'Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control — presented not as achievements but as fruit: the organic produce of the Spirit\'s work in a person over time, contrasted with works of the flesh a few verses earlier.',
      application:
        'The character a child needs to grow up around is exactly this list, and it is grown rather than resolved into existence. Pregnancy is the head start: the parent\'s formation begins before the child\'s can.',
      misuse:
        'Misused as a self-improvement checklist to be willed into existence — the metaphor is fruit, which grows from rootedness, not resolve. Also misused to condemn parents mid-growth; fruit has seasons.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['parent-formation', 'character'],
  },
  {
    id: 'pregnancy.become.t2.a-household-with-a-direction',
    version: 1,
    claimType: 'normative',
    category: 'BECOME',
    scope: { kind: 'pregnancy', weeks: T2 },
    voice: 'shared',
    title: 'Decide what your family is for',
    body:
      'Micah gets a whole life into three clauses. Do justice. Love kindness. Walk humbly with your God. These weeks are the last unhurried chance to decide, together, what kind of household you are building. A family that never chooses a direction gets one assigned by its calendar.',
    actions: [
      'Answer this together in one sentence. "What is our family for?" Put it where you both see it.',
      'Pick one routine act of kindness your household will do. Start before the baby comes.',
    ],
    warrant: {
      passages: ['Micah 6:8'],
      exegesis:
        'Micah\'s oracle dismisses escalating ritual offerings and states what the LORD actually requires: "to do justice, and to love kindness, and to walk humbly with your God." The verse relocates religion from performance to a practised orientation of life.',
      application:
        'A family mission worth having is Micah-shaped: outward (justice), warm (kindness), and Godward (humility) — and it is established by practice, not by framing a slogan. Choosing it before the child arrives means the child is raised inside it rather than lectured about it.',
      misuse:
        'Misused as a replacement for the gospel (mere moralism), or flattened into political slogans of any stripe. Micah 6:8 describes covenant life with God, not a platform.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['family-mission', 'direction'],
  },
  {
    id: 'pregnancy.become.t3.the-long-view-from-week-40',
    version: 1,
    claimType: 'normative',
    category: 'BECOME',
    scope: { kind: 'pregnancy', weeks: T3 },
    voice: 'shared',
    title: 'You are beginning an adult',
    lede: 'Luke gives one sentence to eighteen years of Jesus\'s childhood. It is the whole job description.',
    body:
      'Luke spends one sentence on eighteen years. He increased in wisdom and stature and in favour with God and man. Mind, body, Godward, manward, and one direction. Increase. The job ends in a launch, not a keeping. Twenty-one years from this due date, the aim of everything you are about to do is an adult who does not need you. Start with that visible.',
    actions: [
      'Read the 21-year roadmap together before the birth. Not to plan it. To see its shape.',
      'Write one sentence each: "When this child leaves our home, I hope they are…" Keep it with the hospital-bag blessing.',
    ],
    warrant: {
      passages: ['Luke 2:52'],
      exegesis:
        '"And Jesus increased in wisdom and in stature and in favor with God and man." Luke\'s summary of the hidden years presents growth along four axes — cognitive, physical, spiritual, social — as the pattern of a rightly-formed childhood, in an ordinary household, over unhurried time.',
      application:
        'The four axes are the spine of this entire application\'s developmental model. Parents who hold all four resist the culture\'s collapse of childhood into one axis (usually achievement), and parents who hold the direction — increase toward adulthood — parent for launch rather than for keeping.',
      misuse:
        'Misused to baptise achievement culture ("increase" read as résumé). Luke\'s four axes include two — favor with God, favor with man — that no transcript measures; a child excelling on one axis is not a formed child.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['long-view', 'luke-2-52'],
  },
];
