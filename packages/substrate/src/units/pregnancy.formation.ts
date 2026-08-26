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
    title: 'What your child will see began before they can see',
    body:
      'The first trimester is often the hardest stretch of pregnancy that nobody else can see — fatigue, nausea, and worry arrive before any visible bump. How the two of you treat each other under this strain is the first draft of the household your child will grow up watching. Formation of the parent precedes formation of the child.',
    actions: [
      'Name the hardest part of this week to each other, out loud, once.',
      'Take one recurring chore off the more exhausted partner without being asked.',
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
    title: 'The habits your child will inherit are being set now',
    body:
      'The second trimester usually returns some energy — and energy is where habits are made. The rhythms you establish now (how you speak about people who are not in the room, how screens behave at your table, whether prayer happens out loud) are the ones a newborn will simply arrive into. It is far easier to build the household now than to renovate it with an infant in it.',
    actions: [
      'Choose one habit you do not want your child to inherit and stop it this month, together.',
      'Begin one visible practice of faith — grace at meals, or a short evening prayer — so it is ordinary long before your child asks about it.',
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
    title: 'Your child will watch how you carry fear',
    body:
      'The third trimester concentrates the mind: birth is coming, and with it every fear a parent can manufacture. You will not raise a child without them watching you be afraid — of diagnoses, of finances, of the world. What you can decide now is what they will watch you do with it. Prayer that names fear honestly is not weaker faith than composure; it is the only kind a child can learn from.',
    actions: [
      'Write down the three fears you actually have about birth and the first weeks. Pray them, specifically, rather than around them.',
      'Tell your spouse or a trusted friend which fear is the loudest. Fear that is spoken is fear that is shared.',
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
    title: 'Your child is already received, not yet productive',
    body:
      'Nothing about a first-trimester embryo performs. It cannot smile, achieve, or reciprocate — and it is already yours, already loved, already prayed over. Let that order sink in now, because the entire architecture of Christian parenting hangs on it: your child will be loved because they are yours, not because of what they do. Every affirmation you ever give them stands on this foundation.',
    actions: [
      'Pray for this child by whatever name or nickname you are using, thanking God for who they are before knowing anything about them.',
      'Say to each other once this week: this child owes us nothing.',
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
    title: 'What each of you will give is not interchangeable',
    body:
      'As the pregnancy becomes visible, roles start to feel real — and it is worth saying plainly that what a child receives from each parent is not identical, and is not meant to be. Scripture reaches for both images: the gentleness of a nursing mother and the exhorting charge of a father, in the same breath, from the same author. A child flourishes receiving both; a household flourishes when each parent honours what the other carries.',
    actions: [
      'Each of you: name one thing you hope your child receives specifically from you, and one you hope they receive specifically from your spouse.',
      'If you are carrying both roles alone, name the trusted people — family, church — who can help supply what a second parent would.',
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
    title: 'Prepare the welcome, not just the nursery',
    body:
      'The last weeks fill with logistics — car seats, bags, lists. Somewhere in it, prepare the thing only you can prepare: the welcome. A child receives their first identity from how they are received. Write the letter, choose the blessing, decide what you will say over this child in their first days. The nursery furniture will be outgrown in two years; the welcome never is.',
    actions: [
      'Each parent: write a short letter to the child, sealed, dated, to be read at a milestone you choose.',
      'Choose a short blessing or verse you will say over the baby in the first week, and practise saying it out loud so it is yours by the time it matters.',
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
    title: 'Mark the beginning so you can tell the story',
    body:
      'Israel piled stones at the Jordan for one reason: so that children would one day ask what the stones meant, and the story would be told. Your family\'s first stones get set now. Keep something from these weeks — the test, a photo, a written prayer, the date you found out — not for sentiment but for the telling: one day this child will ask how they began, and you will want more than a shrug.',
    actions: [
      'Start the record this week: one photo, one dated note, one prayer, kept where they will survive twenty-one years.',
      'Write down the story of finding out — where you were, what you said — while it is still sharp.',
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
    title: 'Give your child the sound of your voices',
    body:
      'From the middle of the second trimester, hearing is coming online, and low-pitched, repeated sounds — your voices — carry into the womb best. Reading aloud, praying aloud, and simply narrating your day are the first experiences you can deliberately give this child. They will be born already knowing what home sounds like.',
    actions: [
      'Spend several minutes a day speaking or reading aloud to the baby — either parent, any book.',
      'Pray aloud over the baby at the same time each evening, so the rhythm exists before the child does.',
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
    title: 'Rehearse the first weeks before you are in them',
    body:
      'Wisdom, in Proverbs, is repeatedly a matter of preparation — seeing what is coming and readying the house before it arrives. The newborn weeks are coming, and they are survivable in proportion to what was decided beforehand. Walk through the first night out loud together: who gets up, who feeds, who guards whose sleep, what happens when both of you are empty. Deciding at 3am is how resentment is built; deciding now is how a team is.',
    actions: [
      'Talk through nighttime responsibilities explicitly: feeds, changes, and who protects whose sleep on which nights.',
      'Agree the postpartum visitors policy now — who, when, how long — so neither of you negotiates it exhausted.',
      'Decide the signal either of you can use that means "I am past my limit; take the baby" — no justification required.',
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
    title: 'How you speak about this child is already forming you',
    body:
      'Long before your child hears anything, you do. The words you use about this pregnancy — burden or gift, disruption or arrival — are rehearsals of the household voice this child will grow up inside. Psalm 139 does not describe an embryo as potential; it describes a person known by God in the unformed state. Speaking of the child that way is not sentimentality. It is accuracy.',
    actions: [
      'Notice this week how you refer to the baby in conversation. Choose the language of person, not project.',
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
    title: 'The first voice your child needs to hear is yours to each other',
    body:
      'A child\'s first language lesson is the tone between their parents. Gracious speech is not decoration on a marriage; Proverbs calls it healing to the body and sweetness to the soul — and pregnancy, with its hormones, fears, and exhaustion, is where gracious speech gets hardest and matters most. The voice you use with each other in these months is the voice your child will assume is normal.',
    actions: [
      'Pick the recurring conversation that most often turns sharp (money, in-laws, names) and agree to have it once, well, this week — rested and fed.',
      'Each day, say one specific, true, kind sentence to your spouse about how they are handling this season.',
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
    title: 'Have "I love you" ready before the first cry',
    body:
      'The first words said over a child matter more to the parents than to the newborn — and that is precisely their value. Deciding now what this child will hear from you on day one ("I love you"; "you are wanted"; a blessing you chose in advance) sets the trajectory of the affirmation ladder this app will walk with you for twenty-one years: love first, from the beginning, never earned.',
    actions: [
      'Choose the exact first sentence each of you wants to say to the baby, and say it at the first opportunity.',
      'Put the chosen blessing where you will find it in the hospital — written in the notes app, or in the hospital bag.',
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
    title: 'Your curriculum this trimester: the pregnancy itself',
    body:
      'The first parental discipline is learning — and the first syllabus is this pregnancy: what is normal, what is a warning sign, when to call. Diligence here is not anxiety; it is stewardship. Learn the urgent maternal warning signs once, properly, so that at 2am you are recalling rather than searching. The app keeps them one tap away, but the ones that save time are the ones already in your head.',
    actions: [
      'Read the urgent maternal warning signs list once, together, this week.',
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
    title: 'Study the parent you intend to become',
    body:
      'The steadier middle trimester is the season to study the only parenting variable fully in your control: you. What did your own parents give you that you want to pass on? What arrived in you that stops here? Doing this inventory now — on paper, with your spouse, honestly — is cheaper than doing it in the middle of a toddler meltdown that has mysteriously summoned your father\'s temper through your own mouth.',
    actions: [
      'Each of you: write two lists — "received and keeping" and "received and ending here." Compare them.',
      'Pick the single hardest item on your "ending here" list and tell one trusted person about it. Hidden resolutions do not survive newborns.',
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
    title: 'Competence is a form of love: learn the newborn basics now',
    body:
      'Faithfulness in small things is where Jesus locates trustworthiness in large ones — and the newborn weeks are made entirely of small things: safe sleep setup, car-seat installation, feeding basics, when a fever is an emergency. Learn them now, both of you, hands-on where possible. A parent who fumbles is normal; a parent who never prepared chose to fumble.',
    actions: [
      'Both parents complete the practical floor before week 38: infant safe-sleep rules, car-seat installation (checked), feeding plan basics, and the under-3-months fever rule.',
      'Take an infant CPR class together, or complete a reputable video course if none is nearby.',
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
    title: 'Trusting God with what you cannot yet see',
    body:
      'The first trimester is an exercise in believing without seeing: no bump, often no announcement, everything invisible and everything at stake. This is the season to establish the family\'s first theological habit — entrusting to God what you cannot monitor. You will need this habit at every stage for twenty-one years; it merely starts here, where you have no alternative.',
    actions: [
      'Pray a daily, dated, one-sentence prayer of entrustment for this child. Keep them; they become the first pages of the journey record.',
      'If fear of loss is loud (it is for many), say so to God and to one trusted person rather than carrying it silently.',
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
    title: 'This child is a gift, which changes what you own',
    body:
      'The psalm every baby dedication reaches for says something sharper than its greeting-card usage: children are a heritage from the LORD — given, not produced; entrusted, not owned. Settle the ownership question in the second trimester, because everything downstream (discipline, ambition, release at twenty-one) depends on whether you believe you are raising your possession or God\'s.',
    actions: [
      'Read Psalm 127 together once, slowly, and talk about what "heritage" implies about ownership.',
      'Begin praying not only for the child but about your own grip: for the ability to hold this child openly rather than tightly.',
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
    title: 'The God who will be in the delivery room',
    body:
      'Whatever birth turns out to be — fast, slow, surgical, complicated — the theological fact to pack in the hospital bag is presence: the Lord goes with you; he does not leave. Not a promise of a particular birth outcome. A promise of company through whichever one arrives. Mothers report that the verse they actually used in labour was the one they had memorised, not the one they had bookmarked.',
    actions: [
      'Choose one short verse about God\'s presence and memorise it — both of you — before week 38.',
      'Pray together for the specific people who will be in the room: the providers, by role, and each other.',
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
    title: 'Who is this child\'s parent becoming?',
    body:
      'The question every stage of this app asks about your child — who are they becoming? — gets asked about you first, because for nine months you are the only one who can answer it. The fruit of the Spirit is the character list your child will need to find in the house: patience for the toddler years, gentleness for the failures, self-control for the teenage door-slam. None of it is stockpiled in advance; all of it is grown, and the growing starts now.',
    actions: [
      'Pick the one fruit-of-the-Spirit quality you know this child will most test in you. Make it your specific prayer for the rest of the pregnancy.',
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
      'Micah compresses the whole examined life into three clauses: do justice, love kindness, walk humbly with your God. Before the baby arrives is the last unhurried chance to decide, together, that this is the kind of household you are building — one with a direction, not just a schedule. Families that never choose a direction get assigned one by their calendar.',
    actions: [
      'Write a one-sentence answer, together, to: "What is our family for?" Put it somewhere you will both see it.',
      'Choose one concrete practice of justice or kindness your household will do routinely — and start before the baby comes, so it is a fact and not an intention.',
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
    title: 'You are not bringing home a baby; you are beginning an adult',
    body:
      'Luke gives one sentence to eighteen years of Jesus\'s childhood: he increased in wisdom and in stature and in favor with God and man. Four axes — mind, body, Godward, manward — and a direction: increase. That is the whole job description, and it ends with a launch, not a keeping. Twenty-one years from your due date, the aim of everything you are about to do is a capable, wise, godly adult who no longer needs you. Begin with that end visible.',
    actions: [
      'Read the 21-year roadmap in this app once, together, before the birth — not to plan it, but to see the shape of it.',
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
