import type { Unit } from '../types.js';
import { ALL_0_5, EDITORIAL, INFANCY, REVIEWED, TOBIAS, TODDLERHOOD } from './helpers.js';

/**
 * EXPERIENCE, HEAR, LEARN, BELIEVE, BECOME — birth to five.
 * The remaining five categories of the seven, in shared voice except where
 * the split earns its keep.
 */
export const CHILDHOOD_FORMATION_UNITS: readonly Unit[] = [
  // =========================================================== EXPERIENCE ===
  {
    id: 'child.experience.infancy.rhythms',
    version: 1,
    claimType: 'normative',
    category: 'EXPERIENCE',
    scope: { kind: 'stage', stages: [...INFANCY] },
    voice: 'shared',
    title: 'Experiences to create in the first year: rhythm and faces',
    body:
      'An infant\'s formative experiences are not outings; they are rhythms. The same song before every sleep. Grace before meals they cannot eat yet. The weekly gathering where the same church faces smile at them. Rhythm is how a preliterate person learns what the world is like — and a household whose rhythms already include God is giving the baby a first geography with worship in it.',
    actions: [
      'Set one fixed daily ritual per parent — the bath song, the morning window, the goodnight blessing — and defend it.',
      'Bring the baby into the worshiping community from the start; being carried in the congregation is an experience, not a logistics problem.',
    ],
    warrant: {
      passages: ['Deuteronomy 6:7', 'Luke 2:22-27'],
      exegesis:
        'Deuteronomy locates formation in repeated dailiness — sitting, walking, lying down, rising. Luke shows the infant Jesus brought to the temple in his parents\' observance; his first experiences of the faith were experiences of being carried into it.',
      application:
        'Ritual dailiness and being physically brought into worship are the two experience-channels an infant actually has. Both are commanded or modeled; neither requires the child to understand yet.',
      misuse:
        'Misused when rhythm becomes rigidity — Deuteronomy describes life-woven formation, not a schedule to be defended against the baby it serves. The rhythm serves the child; it is not the other way round.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['rhythms', 'ritual'],
  },
  {
    id: 'child.experience.early-toddler-toddler.world',
    version: 1,
    claimType: 'normative',
    category: 'EXPERIENCE',
    scope: { kind: 'stage', stages: ['early-toddler', 'toddler'] },
    voice: 'shared',
    title: 'Experiences to create at one to three: the touchable world',
    body:
      'A toddler is a scientist with no grant and no safety protocols. The experience they need most is the touchable world — dirt, water, animals, rain, dough, the mess your schedule would prefer to skip — with a parent narrating creation as creation: "God made this. Feel it." One-on-one time starts mattering here too, not for its content but for its exclusivity: ten minutes where nobody else exists teaches a two-year-old the sentence underneath all formation — I am worth someone\'s undivided time.',
    actions: [
      'Get outside daily where possible; narrate what God made in plain words while they touch it.',
      'Give each child ten unshared minutes a day, device down, following their lead. Guard it like an appointment.',
    ],
    warrant: {
      passages: ['Psalm 19:1', 'Mark 10:13-16'],
      exegesis:
        '"The heavens declare the glory of God" — creation is itself revelatory speech, available to those who cannot yet read. In Mark, Jesus indignantly overrules the disciples to receive children — "Let the children come to me" — taking them in his arms and blessing them: unhurried, physical, individual attention to small children is a Christlike act, not a scheduling failure.',
      application:
        'The created world is a toddler-accessible theology curriculum, and exclusive attention is the delivery mechanism Jesus himself modeled with children too young for content.',
      misuse:
        'Mark 10 is misused as a slogan while the actual practice — stopping, holding, blessing individual children — is delegated to programs. The passage rebukes precisely the adults who considered children an interruption.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: false, opportunity: true },
    tags: ['creation', 'one-on-one'],
  },
  {
    id: 'child.experience.preschool.firsts',
    version: 1,
    claimType: 'normative',
    category: 'EXPERIENCE',
    scope: { kind: 'stage', stages: ['preschool'] },
    voice: 'shared',
    title: 'Experiences to create at three to five: firsts worth remembering',
    body:
      'Preschool memory starts keeping. This is the window for the deliberate firsts: the first camping night, the first time they hand the gift they chose to someone who needed it, the first job finished and celebrated, the first loss taken without a rescue. Engineer them — the worksheet behind this app calls these "special opportunities," and it marks them because they close. Also begin the tradition stack: the birthday blessing, the Christmas Eve reading, the Saturday pancakes. Traditions are the stones children ask about later.',
    actions: [
      'Plan one memorable first this season and let them anticipate it for days — anticipation is half the formation.',
      'Establish one tradition per year that is theirs — and write down its origin story in the family journal.',
      'Let them lose a game this month without rescuing the outcome; debrief gently afterward.',
    ],
    warrant: {
      passages: ['Deuteronomy 6:20-25', 'Joshua 4:6-7'],
      exegesis:
        'Deuteronomy anticipates the son\'s future question — "What is the meaning of the testimonies…?" — and scripts the parental answer as narrative: we were slaves, and the LORD brought us out. Joshua\'s stones exist to provoke that question. Biblical pedagogy engineers experiences that make children ask.',
      application:
        'Deliberate firsts and standing traditions are question-generators: they make a child ask "why do we do this?", which is the door every telling of the gospel story in a family walks through.',
      misuse:
        'Misused when the memory-making becomes the point — experiences curated for photographs rather than for the question they will one day provoke. The stones face the child, not the camera.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: false, opportunity: true },
    tags: ['traditions', 'milestones', 'firsts'],
  },

  // ================================================================= HEAR ===
  {
    id: 'child.hear.i-love-you-from-day-one',
    version: 1,
    claimType: 'normative',
    category: 'HEAR',
    scope: { kind: 'stage', stages: [...ALL_0_5] },
    voice: 'shared',
    title: 'Say it before they understand it',
    lede: 'Your child should never be able to remember the first time they heard it.',
    body:
      'Say it to a baby who cannot understand it yet. That is the point. Your child should never be able to remember the first time they heard it, the way nobody remembers learning the floor was there. Fix it to the same moments every day. Waking, leaving, sleeping. Then say it after discipline, which is when the words do their heaviest work. Ages one to twenty-one, no gaps.',
    actions: [
      'Pick two daily anchors. Last words at bedtime, first words at reunion.',
      'After every correction, say it out loud. The discipline and the love arrive in the same hour.',
    ],
    warrant: {
      passages: ['1 John 4:19', 'Romans 5:8'],
      exegesis:
        '"We love because he first loved us." "God shows his love for us in that while we were still sinners, Christ died for us." Divine love is prevenient — declared and enacted before any response, comprehension, or merit existed on our side.',
      application:
        'Saying "I love you" to a child too young to understand it, and immediately after they have been at their worst, is the parental enactment of prevenient love — the gospel\'s order, practised at crib height.',
      misuse:
        'Not commonly misquoted, but commonly hollowed: words of love coexisting with chronic absence or harshness teach a child that the words are ceremonial. The verse\'s love "shows" itself; the words need the showing.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['i-love-you', 'constant', 'affirmation-ladder'],
  },
  {
    id: 'child.hear.blessing-not-evaluation',
    version: 1,
    claimType: 'normative',
    category: 'HEAR',
    scope: { kind: 'stage', stages: ['toddler', 'preschool'] },
    voice: 'shared',
    title: 'Bless them, do not grade them',
    lede: 'By three, a child is fluent in your evaluations. Most of what they hear is grading.',
    body:
      'By three a child is fluent in your evaluations, and grading is most of what they hear. "Good job" is wallpaper. Weave in something else. "You are ours." "God made you on purpose." "Being with you is one of my favourite things." A blessing has no performance clause anywhere in it. Children can hear that difference years before they can describe it.',
    actions: [
      'Say one sentence a day about their presence, not their output.',
      'Put a hand on their head at Sunday bedtime and bless them the same way each week.',
    ],
    warrant: {
      passages: ['Numbers 6:24-26', 'Genesis 48:8-9'],
      exegesis:
        'The Aaronic blessing — "The LORD bless you and keep you…" — is pure bestowal: nothing in it is conditioned on the recipient\'s performance. Jacob blessing Joseph\'s sons enacts the family blessing as deliberate, hands-on, spoken inheritance.',
      application:
        'The biblical blessing is a speech-act parents can actually perform: regular, physical, unconditional words that confer identity rather than grade behaviour. It is the oldest tool in the formation kit and the least used.',
      misuse:
        'Misused when "blessing" becomes prediction or pressure — scripting the child\'s future ("you will be a preacher") rather than conferring God\'s keeping. Bless the child toward God; do not draft their biography.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['blessing', 'affirmation'],
  },

  // ================================================================ LEARN ===
  {
    id: 'child.learn.infancy.parent-curriculum',
    version: 1,
    claimType: 'normative',
    category: 'LEARN',
    scope: { kind: 'stage', stages: [...INFANCY] },
    voice: 'shared',
    title: 'The first year\'s curriculum runs through you',
    body:
      'A baby\'s syllabus is short and non-negotiable: trust, through answered needs; language, through the thousands of words you narrate at them; cause and effect, through games and dropped spoons. Which means the actual student this year is you — learning your baby\'s cues, learning to read tiredness before it becomes despair, learning the difference between a hungry cry and a bored one. Study your child. Expertise in this particular human is the qualification everything later relies on.',
    actions: [
      'Narrate your day to the baby in ordinary speech — the word count they hear this year is a real developmental input.',
      'Learn your baby\'s specific tired cues and act on them early; you are learning to read the child God actually gave you, not the one in the book.',
    ],
    warrant: {
      passages: ['Proverbs 27:23', 'Proverbs 22:6'],
      exegesis:
        'Know well the condition of your flocks — attentive knowledge of the particular charge. Proverbs 22:6, read carefully, commends training a child "in the way he should go" — with a long interpretive tradition hearing "according to his way": formation fitted to the actual child, not a generic mold.',
      application:
        'The first year is when a parent earns particular knowledge of this child — the observational expertise that lets every later stage of training be fitted rather than forced.',
      misuse:
        'Proverbs 22:6 is the most misused parenting verse in the Bible: read as a guarantee, it indicts every parent of a prodigal. It is a wisdom saying about the general power of early formation, not a covenant promise — and this app will say so every time it cites it.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['language', 'attunement'],
  },
  {
    id: 'child.learn.toddlerhood.first-obedience',
    version: 1,
    claimType: 'normative',
    category: 'LEARN',
    scope: { kind: 'stage', stages: ['early-toddler', 'toddler'] },
    voice: 'shared',
    title: 'What a toddler is learning: the first yes',
    body:
      'Between one and three, a child can begin learning that a parent\'s word means something: come when called, stop at "stop," hands are not for hitting. Keep the list short and the follow-through total — a toddler learns what you enforce, not what you announce. This is not about breaking a will; it is about building the specific trust that lets a three-year-old stop at the curb because you said so, before they can understand why. First obedience is a safety feature and a spiritual foundation in the same skill.',
    actions: [
      'Train the safety commands deliberately, as games, in calm moments: "come," "stop," "hold my hand."',
      'Never give an instruction you are not prepared to follow through on — every unenforced command teaches that your words are weather.',
    ],
    warrant: {
      passages: ['Ephesians 6:1-4'],
      exegesis:
        '"Children, obey your parents in the Lord, for this is right" — addressed to children as moral agents, paired immediately with the charge to fathers not to provoke. Obedience and non-provocation are one instruction with two audiences: the child\'s yes is to be made learnable by the parent\'s reasonableness.',
      application:
        'Teaching a toddler to respond to a parent\'s word — with few commands, warmly and totally enforced — is the earliest form of Ephesians 6\'s two-sided contract. The parent\'s side is consistency and fairness; the child\'s side is being learned one "come here" at a time.',
      misuse:
        'Ephesians 6:1 is misused as a standalone hammer — "obey" quoted without verse 4\'s restraint on the parent. Instant, unquestioning compliance as a totalising goal is not the passage\'s vision and builds either rebels or targets.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['obedience', 'safety', 'discipline'],
  },
  {
    id: 'child.learn.preschool.life-curriculum',
    version: 1,
    claimType: 'normative',
    category: 'LEARN',
    scope: { kind: 'stage', stages: ['preschool'] },
    voice: 'shared',
    title: 'The age-five life curriculum',
    body:
      'By around five, a child can be learning, with coaching and failure built in: telling the truth even when it costs; cleaning up what they got out; losing a game without melting down; please, thank you, and waiting a turn; the difference between kind and unkind words; basic body boundaries — who may touch them, and that no is a full sentence; and simple owned responsibilities done to completion. None of these arrive by birthday. All of them are teachable by repetition, modeling, and unhysterical correction — and every one is easier taught at five than at fifteen.',
    actions: [
      'Pick the weakest item on the list and make it this month\'s single coaching focus — one skill at a time, named and practised.',
      'Teach truth-telling by making it cheap: when they confess, the consequence shrinks and the thanks is real.',
      'Teach body boundaries matter-of-factly: correct names for body parts, which adults help with what, and that secrets about bodies are never kept.',
    ],
    warrant: {
      passages: ['Proverbs 1:8', 'Zechariah 8:16', 'Luke 16:10'],
      exegesis:
        'Proverbs opens with both parents as instructors — "your father\'s instruction… your mother\'s teaching" — a home curriculum. Zechariah\'s "speak the truth to one another" makes truthfulness a covenant community\'s baseline. Luke 16:10 grounds large trust in small faithfulness.',
      application:
        'A deliberate, small, coached life curriculum at five is the biblical home-instruction pattern operating at the right scale: truth, self-control, courtesy, and responsibility as taught skills with both parents as faculty.',
      misuse:
        'Misused when the curriculum becomes a compliance checklist scored for parental pride. The proverb\'s instruction is a garland of grace on the child\'s head — formation given to adorn them, not performance extracted to validate the teachers.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['life-skills', 'truthfulness', 'boundaries'],
  },

  // ============================================================== BELIEVE ===
  {
    id: 'child.believe.0-3.god-loves-you',
    version: 1,
    claimType: 'normative',
    category: 'BELIEVE',
    scope: { kind: 'stage', stages: ['newborn', 'early-infancy', 'later-infancy', 'early-toddler', 'toddler'] },
    voice: 'shared',
    title: 'The 0–3 foundation: God loves you',
    body:
      'The entire theological curriculum for the first three years is one sentence — God loves you — taught almost entirely without words. It is taught by reliable arms, by the sung grace, by the bedtime prayer they hear over themselves, by the tone the household uses when God comes up. Add the smallest verbal layer as language arrives: God made this. God loves you. We talk to God, and it is called praying. Thank you, God. That is the whole syllabus, and it is enough.',
    actions: [
      'Pray aloud over your child nightly — one sentence, same shape, their name in it.',
      'Sing one worship song into the daily rhythm; melody carries theology years before syntax can.',
      'Say table grace even for toddler snacks — gratitude to God, installed as furniture.',
    ],
    warrant: {
      passages: ['Deuteronomy 6:4-7', '2 Timothy 3:15'],
      exegesis:
        'The Shema\'s teaching is diligent, domestic, and constant — talk of God woven through the household\'s day. Paul notes Timothy knew the sacred writings "from childhood" (brephos — infancy): formation in the faith is depicted as starting before understanding.',
      application:
        'Ambient, pre-verbal formation — prayer heard, songs sung, gratitude practised — is the biblical starting line. A child should not be able to remember first learning that God loves them, any more than first learning their own name.',
      misuse:
        'Misused when infant faith formation is treated as securing the child\'s salvation by parental technique — formation plants and waters; God gives the growth. Also misused in reverse, as an excuse for postponement: "they won\'t understand yet" misses that the Shema\'s method never depended on understanding first.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['prayer', 'foundation', 'believe-curriculum'],
  },
  {
    id: 'child.believe.4-6.gods-character',
    version: 1,
    claimType: 'normative',
    category: 'BELIEVE',
    scope: { kind: 'stage', stages: ['preschool'] },
    voice: 'shared',
    title: 'The 4–6 layer: learning who God is',
    body:
      'A preschooler is ready for the next layer: not just that God loves them, but what God is like. Good. Maker of everything. The one who forgives when we say sorry. The one Jesus shows us. Bible stories now do real work — creation, Noah, David, and above all Jesus: welcoming children, healing, dying and alive again, told plainly and often. Their questions will be enormous ("Who made God?", "Can God see me in the bathroom?") — answer simply and honestly, and treasure the asking. A child whose questions are welcomed at four brings the harder ones at fourteen.',
    actions: [
      'Read a Bible storybook a few nights a week — repetition of the same stories beats novelty.',
      'Answer every God-question with respect, simply, and admit plainly when something is a mystery — "nobody knows; isn\'t that amazing?" is a faithful answer.',
      'Begin sorry-prayers alongside thank-you prayers: forgiveness as an early, practised category.',
    ],
    warrant: {
      passages: ['Psalm 78:4-7', 'Mark 10:14'],
      exegesis:
        'Psalm 78 commissions telling "the glorious deeds of the LORD" to the next generation, so that they "set their hope in God" — narrative formation ordered toward trust. Jesus declares the kingdom belongs to children as children — their mode of receiving is commended, not merely tolerated.',
      application:
        'Story-based teaching about God\'s character and deeds is the psalm\'s exact program, and a preschooler\'s uncynical reception is, per Jesus, an asset. The stories are the doctrine, at this age.',
      misuse:
        'Psalm 78 is misused when the stories get moralised into behaviour lessons ("be brave like David") with God edited out of his own deeds — the psalm\'s stated aim is hope in God, not extraction of virtues.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['bible-stories', 'questions', 'believe-curriculum'],
  },

  // =============================================================== BECOME ===
  {
    id: 'child.become.0-5.the-direction',
    version: 1,
    claimType: 'normative',
    category: 'BECOME',
    scope: { kind: 'stage', stages: [...ALL_0_5] },
    voice: 'shared',
    title: 'What the first five years are for',
    body:
      'The objective of these years is not a happy toddler or a compliant preschooler — those are weather. The objective is the foundation of a person: securely attached, beginning self-control, able to tell the truth, at home in a household where God is real. Everything this app has asked of you from birth to five serves that person — the twenty-one-year-old you are already, slowly, raising. Hold the direction loosely week to week and firmly year to year: increase, on all four axes — wisdom, stature, favour with God, favour with people.',
    actions: [
      'Once a year, on their birthday, write the child a short letter: who they are becoming, what you saw this year. Eighteen of these become the Story of their childhood.',
      'When a hard week comes, ask the directional question instead of the behavioural one: what does this child need to become — and what does that make this week\'s job?',
    ],
    warrant: {
      passages: ['Luke 2:52', 'Proverbs 22:6'],
      exegesis:
        'Luke 2:52 gives childhood a fourfold direction — wisdom, stature, favour with God and man — increase as the pattern of formation. Proverbs 22:6 commends early training fitted to the child\'s way, as a general wisdom of formation\'s long reach.',
      application:
        'Parenting by direction rather than by incident is the practical meaning of both texts: the daily decisions of the toddler years are navigation, and navigation requires knowing the destination — a formed adult, launched.',
      misuse:
        'Both texts misused together produce the outcome-ownership error: parents believing they manufacture the adult. Formation bends powerfully; it does not determine. The child is a person before God, not a project — and Proverbs 22:6 is a proverb, not a warranty.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['direction', 'luke-2-52', 'long-view'],
  },
];
