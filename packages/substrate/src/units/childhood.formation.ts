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
    title: 'Rhythm, not outings',
    lede: 'An infant\'s formative experiences are not trips. They are the same song, nightly.',
    body:
      'The same song before every sleep. Grace before meals they cannot eat yet. The same church faces smiling at them on Sunday. Rhythm is how someone who cannot read learns what the world is like. A household whose rhythms already include God hands a baby a first map with worship on it.',
    actions: [
      'Set one fixed daily ritual each. The bath song, the morning window, the blessing.',
      'Carry the baby into the congregation from the start. That is an experience, not logistics.',
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
    title: 'The touchable world',
    lede: 'A toddler is a scientist with no grant and no safety protocols.',
    body:
      'A toddler is a scientist with no grant and no safety protocols. Give them the touchable world. Dirt, water, animals, rain, dough, all the mess your schedule would rather skip. Narrate it plainly. "God made this. Feel it." One-on-one starts mattering here too, for its exclusivity rather than its content. Ten minutes where nobody else exists teaches a two-year-old that they are worth somebody\'s undivided attention.',
    actions: [
      'Get outside daily. Name what God made, in plain words, while they touch it.',
      'Give each child ten unshared minutes a day, device down, following their lead.',
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
    title: 'Firsts worth remembering',
    lede: 'Preschool memory starts keeping. Engineer the firsts now.',
    body:
      'Preschool memory starts keeping, so engineer the firsts. The first night in a tent. The first time they hand over a gift they chose for someone who needed it. The first job finished and celebrated. The first loss nobody rescued them from. Start the traditions too. The birthday blessing, the Christmas Eve reading, the Saturday pancakes. Traditions are the stones children ask about later.',
    actions: [
      'Plan one memorable first this season. Let them anticipate it for days.',
      'Start one tradition a year that is theirs. Write down where it came from.',
      'Let them lose a game this month without a rescue. Debrief gently after.',
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
    lede: 'Your child should never remember the first time they heard it.',
    body:
      'Say it to a baby who cannot understand it yet. Your child should never be able to remember the first time they heard it, the way nobody remembers learning the floor was there. Fix it to the same moments every day. Waking, leaving, sleeping. Then say it after discipline, which is when the words do their heaviest work. Ages one to twenty-one, no gaps.',
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
    lede: 'By three a child is fluent in your evaluations. Grading is most of what they hear.',
    body:
      'By three a child is fluent in your evaluations. Grading is most of what they hear. "Good job" is wallpaper. Weave in something else. "You are ours." "God made you on purpose." "Being with you is one of my favourite things." A blessing has no performance clause anywhere in it. Children can hear that difference years before they can describe it.',
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
    title: 'This year the student is you',
    lede: 'A baby\'s syllabus is short. Trust, language, cause and effect. You are the student.',
    body:
      'Trust, through needs that get answered. Language, through the thousands of words you say at them. Cause and effect, through dropped spoons. The real student this year is you. Learning the cues. Reading tiredness before it turns into despair. Telling a hungry cry from a bored one. Expertise in this particular human is what everything later rests on.',
    actions: [
      'Narrate your day to the baby in ordinary speech. The word count is a real input.',
      'Learn your baby\'s tired cues and act early. Read the child God gave you.',
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
    title: 'The first yes',
    lede: 'A toddler learns what you enforce, not what you announce.',
    body:
      'Come when called. Stop at "stop." Hands are not for hitting. Keep the list short and the follow-through total, because a toddler learns what you enforce, not what you announce. Nobody is breaking a will here. You are building the trust that stops a three-year-old at the kerb because you said so, years before they can understand why. It is a safety feature and a spiritual foundation in one skill.',
    actions: [
      'Train the safety commands as games, in calm moments. Come. Stop. Hold my hand.',
      'Never give an instruction you will not follow through. Unenforced words become weather.',
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
    title: 'The age-five curriculum',
    lede: 'Every one of these is easier taught at five than at fifteen.',
    body:
      'Tell the truth when it costs something. Clean up what you got out. Lose a game without melting down. Please, thank you, wait your turn. Kind words and unkind ones. Who may touch them, and that no is a full sentence. One job, done to the end. None of it arrives on a birthday. All of it comes by repetition, modelling and calm correction, and every one is easier at five than at fifteen.',
    actions: [
      'Pick the weakest item and make it this month\'s focus. One skill, practised.',
      'Make truth cheap. When they confess, the consequence shrinks and the thanks is real.',
      'Teach body boundaries plainly. Correct names, who helps with what, and no body secrets.',
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
    title: 'God loves you',
    lede: 'The whole theological curriculum for three years is one sentence.',
    body:
      'The whole curriculum for three years is one sentence, taught almost without words. Reliable arms. A sung grace. The bedtime prayer they hear said over them. The tone this house uses when God comes up. Add the smallest verbal layer as language arrives. God made this. God loves you. Talking to God is called praying. Thank you, God. That is enough.',
    actions: [
      'Pray over your child nightly. One sentence, same shape, their name in it.',
      'Sing one worship song daily. Melody carries theology years before syntax can.',
      'Say grace even for toddler snacks. Gratitude to God, installed as furniture.',
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
    title: 'Who God is like',
    lede: 'Not only that God loves them. What God is actually like.',
    body:
      'Good. Maker of everything. The one who forgives when we say sorry. The one Jesus shows us. Bible stories start doing real work now. Creation, Noah, David, and above all Jesus welcoming children, healing, dying, alive again. Their questions will be enormous. "Who made God?" "Can God see me in the bathroom?" Answer simply and honestly. A child whose questions are welcome at four brings the harder ones at fourteen.',
    actions: [
      'Read a Bible storybook a few nights a week. Repetition beats novelty here.',
      'Answer every God-question simply. "Nobody knows, and is that not amazing?" is faithful.',
      'Start sorry-prayers alongside thank-you prayers. Forgiveness, practised early.',
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
    title: 'What these five years are for',
    lede: 'Not a happy toddler or a compliant preschooler. Those are weather.',
    body:
      'Not a happy toddler. Not a compliant preschooler. Those are weather. You are laying the foundation of a person. Securely attached. Starting to govern themselves. Able to tell the truth. At home in a house where God is real. Everything asked of you from birth to five serves the twenty-one-year-old you are already raising. Hold it loosely week to week and firmly year to year.',
    actions: [
      'Write them a short letter each birthday. Who they are becoming, what you saw.',
      'In a hard week, ask what this child needs to become. Then what that makes your job.',
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
