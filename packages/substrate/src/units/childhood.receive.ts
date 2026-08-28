import type { Unit } from '../types.js';
import { EDITORIAL, REVIEWED, TOBIAS } from './helpers.js';

/**
 * RECEIVE, birth to five — mostly shared (section 16b: light split).
 * One unit per stage, each answering "what does my child need from me right
 * now" for that specific band.
 */
export const CHILDHOOD_RECEIVE_UNITS: readonly Unit[] = [
  {
    id: 'child.receive.newborn.presence',
    version: 1,
    claimType: 'normative',
    category: 'RECEIVE',
    scope: { kind: 'stage', stages: ['newborn'] },
    voice: 'shared',
    title: 'Reliable response',
    lede: 'Thousands of small answered needs teach a person that the world is trustworthy.',
    body:
      'Fed when hungry. Held when crying. Warmed when cold. Thousands of small answered needs are how a person first learns the world is trustworthy and that they are worth answering. This is also the first theology your child absorbs. Long before any words about a faithful God, they will have evidence about faithful parents.',
    actions: [
      'Answer cries promptly. Responsiveness at this stage builds security, not dependence.',
      'Split the responding. Babies attach to whoever answers.',
    ],
    warrant: {
      passages: ['1 Thessalonians 2:7-8', 'Isaiah 49:15'],
      exegesis:
        'Paul reaches for the nursing mother as his image of gentle, self-giving care — "affectionately desirous of you… ready to share not only the gospel but our own selves." Isaiah 49:15 uses maternal responsiveness as the measure of divine faithfulness: "Can a woman forget her nursing child?… yet I will not forget you."',
      application:
        'Scripture treats reliable parental response as the human picture of God\'s own faithfulness. Answering a newborn is not merely care; it is the child\'s first exposure to what covenant reliability feels like.',
      misuse:
        'Isaiah 49:15 is misused to crush mothers who feel they are failing — the verse\'s point is that God\'s faithfulness exceeds even the strongest human bond, not that mothers must be infallible to picture it.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['attachment', 'responsiveness'],
  },
  {
    id: 'child.receive.early-infancy.delight',
    version: 1,
    claimType: 'normative',
    category: 'RECEIVE',
    scope: { kind: 'stage', stages: ['early-infancy'] },
    voice: 'shared',
    title: 'Your delight',
    lede: 'A smile served, awaiting your return. What they need is a face that lights up.',
    body:
      'Your baby has started the serve-and-return game. A smile served, waiting on yours. What they need is a face that lights up when they appear. Delight is the mechanism of attachment, not its decoration. A baby who repeatedly sees joy on the faces that matter concludes something about their worth that no later argument removes easily. Zephaniah pictures God rejoicing over his people with singing.',
    actions: [
      'Play the return game daily. Big faces, copied sounds, unhurried turns.',
      'Light up when they wake. A formative event, twice a day, free.',
    ],
    warrant: {
      passages: ['Zephaniah 3:17'],
      exegesis:
        '"The LORD your God is in your midst… he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing." God\'s posture toward his people is depicted as audible, demonstrative delight and quieting love — parental joy, expressed.',
      application:
        'Expressed delight is a divine attribute a parent gets to embody first. A baby cannot read theology, but they are fluent in faces, and a delighted face is their first vocabulary lesson in the character of God.',
      misuse:
        'Misused to demand performed happiness from exhausted or depressed parents. The text describes God\'s heart, not a mandated affect — and a parent too depleted to feel delight needs support and possibly a doctor, not guilt.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['delight', 'serve-and-return'],
  },
  {
    id: 'child.receive.later-infancy.secure-base',
    version: 1,
    claimType: 'normative',
    category: 'RECEIVE',
    scope: { kind: 'stage', stages: ['later-infancy'] },
    voice: 'shared',
    title: 'A base to explore from',
    lede: 'Crawl away, look back, check the face, continue.',
    body:
      'Crawl away. Look back. Check the face. Continue. Mobility exposes the architecture of attachment, and what they need now is a base. A parent reliably there to come back to, visibly glad at the leaving and at the returning. The pattern set here runs for twenty years. They will keep leaving you in larger and larger circles, and the small ones teach them whether leaving is safe.',
    actions: [
      'Be findable. When they look back mid-crawl, be looking.',
      'Treat small separations as practice. Brief warm goodbyes, never escapes while distracted.',
    ],
    warrant: {
      passages: ['Psalm 62:5-8'],
      exegesis:
        'God is described as rock, fortress, and refuge — "trust in him at all times… pour out your heart before him." The psalmist\'s security is not the absence of venture but a fixed point that makes venture possible.',
      application:
        'The secure base a parent provides is the developmental picture of the refuge the psalm describes. A child who has experienced trustworthy return-points is being given the raw material for later trusting the God who is one.',
      misuse:
        'Misused to sanctify overprotection — a fortress in the Psalms is what one goes out from and returns to, not a place of confinement. Hovering is not a secure base; it is a signal that the world is unsafe.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['secure-base', 'exploration'],
  },
  {
    id: 'child.receive.early-toddler.boundaries',
    version: 1,
    claimType: 'normative',
    category: 'RECEIVE',
    scope: { kind: 'stage', stages: ['early-toddler'] },
    voice: 'shared',
    title: 'Warm walls',
    lede: 'A railing is not punishment for climbing. It is what makes climbing safe.',
    body:
      'A stairwell needs a railing. Not to punish climbing, but to make climbing safe. A newly walking child needs a small number of limits, warmly and boringly enforced. The outlet is always off-limits. The hand is always held in the car park. Bedtime is always bedtime. Consistency is the kindness. A limit that moves with your mood teaches a child to negotiate with reality itself.',
    actions: [
      'Choose few limits and hold all of them. Safety, sleep, how people are treated.',
      'Enforce without heat. Your tone says how the world is, not that they are in trouble.',
    ],
    warrant: {
      passages: ['Proverbs 3:11-12'],
      exegesis:
        '"My son, do not despise the LORD\'s discipline… for the LORD reproves him whom he loves, as a father the son in whom he delights." Discipline in Proverbs is located inside delight — the correcting father is the delighting father, and the correction is evidence of the relationship, not a breach of it.',
      application:
        'Limits delivered with warmth teach a toddler the biblical shape of discipline: love and boundary in the same voice. A child who receives both from one face does not have to choose later between a God of love and a God of holiness.',
      misuse:
        'Misused to justify harshness as love ("discipline proves I love you"). The verse anchors discipline in delight — correction that carries contempt, humiliation, or rage has left the verse\'s territory entirely.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['boundaries', 'discipline'],
  },
  {
    id: 'child.receive.toddler.emotional-vocabulary',
    version: 1,
    claimType: 'normative',
    category: 'RECEIVE',
    scope: { kind: 'stage', stages: ['toddler'] },
    voice: 'shared',
    title: 'Names for the storm',
    lede: 'Feelings the size of weather systems, and a vocabulary the size of a shoebox.',
    body:
      'Your two-year-old has feelings the size of weather systems and a vocabulary the size of a shoebox. Do the naming. "You are angry. The tower fell." "You are sad. Grandma left." Over hundreds of repetitions a named feeling becomes a manageable one. The psalms do exactly this, taking the full range of human emotion to a listening God rather than suppressing it. Correction can wait until the storm has a name.',
    actions: [
      'Name the feeling before the behaviour. "You are furious. And we do not hit."',
      'Ask how a character feels while reading. Vocabulary is built calm and spent hard.',
    ],
    warrant: {
      passages: ['Psalm 62:8', 'Ephesians 4:26'],
      exegesis:
        '"Pour out your heart before him" — the psalms institutionalise emotional honesty before God; lament, anger, and fear are given liturgical words. Ephesians 4:26, "Be angry and do not sin," distinguishes the feeling from the transgression: anger itself is not the sin.',
      application:
        'Teaching a toddler to name feelings is the first lesson in the Bible\'s own emotional practice: feelings are real, speakable, and distinct from what we do about them. This is the foundation of both self-control and honest prayer.',
      misuse:
        'Ephesians 4:26 is misused in both directions: to license venting ("be angry!") and to forbid the feeling ("do not sin" read back onto the anger itself). The verse permits the emotion and bounds the behaviour — the exact distinction a toddler needs.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['emotions', 'vocabulary'],
  },
  {
    id: 'child.receive.preschool.responsibility',
    version: 1,
    claimType: 'normative',
    category: 'RECEIVE',
    scope: { kind: 'stage', stages: ['preschool'] },
    voice: 'shared',
    title: 'Real jobs, real praise',
    lede: 'Genuine contribution, which no amount of entertainment supplies.',
    body:
      'Setting the table. Feeding the dog. Carrying the small bag. Done imperfectly, owned completely. A preschooler needs genuine contribution, which no amount of entertainment supplies. This is the on-ramp to a twenty-year transfer of responsibility, and it starts earlier than most parents guess. Pair it with praise for effort and character. "You kept trying." "That was kind." Praise for talent builds performers instead.',
    actions: [
      'Give one real job they fully own. Low standards, and no redoing it in front of them.',
      'Praise the effort and the character move, in earshot of the other parent.',
    ],
    warrant: {
      passages: ['Luke 16:10', 'Colossians 3:23'],
      exegesis:
        '"One who is faithful in a very little is also faithful in much" — trustworthiness is built and demonstrated at small scale first. Colossians 3:23 dignifies all work as done "heartily, as for the Lord" — work\'s worth is not indexed to its size.',
      application:
        'A preschooler\'s tiny owned job is the "very little" where faithfulness begins its two-decade build. Treating their contribution as real work, worthy of real standards and real thanks, applies Colossians at child scale.',
      misuse:
        'Luke 16:10 is misused as a productivity ladder — as if children exist to be optimised into competence. The passage is about faithfulness of character, and a preschooler\'s job is formation, not output; the table matters less than the child setting it.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: false, opportunity: true },
    tags: ['responsibility', 'chores', 'praise'],
  },
];
