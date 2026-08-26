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
    title: 'What a newborn needs: reliable response',
    body:
      'A newborn needs exactly one thing from you that no one else can supply at scale: reliable response. Fed when hungry, held when crying, warmed when cold — thousands of small answered needs are how a human being first learns that the world is trustworthy and that they are worth responding to. This is also the first theology your child will ever absorb: before any words about a faithful God, they will have data about faithful parents.',
    actions: [
      'Respond to cries promptly and without fear of spoiling — responsiveness in this stage builds security, not dependence.',
      'Split the responding so both parents are known responders — babies attach to those who answer.',
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
    title: 'What a three-to-six-month-old needs: your delight',
    body:
      'Your baby has begun the serve-and-return game — a smile served, awaiting your return. What they need in this window is a face that lights up when they appear. Delight is not the decoration on attachment; it is the mechanism: the baby who repeatedly sees joy on the faces that matter concludes something about their own worth that no later argument easily removes. Zephaniah pictures God rejoicing over his people with singing. Your baby is learning that category from you.',
    actions: [
      'Play the return game daily: exaggerated faces, imitated sounds, unhurried turns. This is brain-building, not killing time.',
      'Let your face show the gladness — the deliberately lit-up greeting when they wake is a formative event, twice a day, free.',
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
    title: 'What a six-to-twelve-month-old needs: a base to explore from',
    body:
      'Your baby is becoming mobile, and mobility reveals the architecture of attachment: crawl away, look back, check the face, continue. What they need now is a secure base — a parent who is reliably there to return to, and visibly glad at both the leaving and the returning. The pattern being set here is the pattern of the next twenty years: they will always be leaving you in larger and larger circles, and how the small circles go teaches them whether leaving is safe.',
    actions: [
      'Be findable: when they look back mid-crawl, be looking. The glance-and-check is attachment doing its work.',
      'Welcome the separations of this age (another room, a sitter, the church nursery) as practice — brief, warm goodbyes rather than escapes while distracted.',
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
    title: 'What a one-to-two-year-old needs: warm walls',
    body:
      'A newly walking child needs boundaries the way a stairwell needs a railing — not as punishment for climbing but as the structure that makes climbing safe. What they need from you now is a small number of consistent limits, warmly and boringly enforced: the outlet is always off-limits, the hand is always held in the parking lot, bedtime is always bedtime. Consistency is the kindness; a limit that moves with your mood teaches negotiation with reality itself.',
    actions: [
      'Choose few limits and hold all of them: safety, sleep, and how people are treated. Everything else can flex.',
      'Enforce without heat — the tone says "this is how the world is," not "you are in trouble for testing it." Testing is their job.',
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
    title: 'What a two-to-three-year-old needs: names for the storm',
    body:
      'Your two-year-old has feelings the size of weather systems and a vocabulary the size of a shoebox. What they need from you is the naming: "You\'re angry — the tower fell." "You\'re sad — Grandma left." A named feeling becomes, over hundreds of repetitions, a manageable one; the psalms model exactly this — the full range of human emotion, spoken to a listening God rather than suppressed or obeyed. Correction can wait until the storm has a name.',
    actions: [
      'Name the feeling before addressing the behaviour, every time you can manage it: "You\'re furious. And we don\'t hit."',
      'Read the feelings out loud in books: "How do you think he feels?" Emotional vocabulary is built in calm moments and spent in hard ones.',
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
    title: 'What a three-to-five-year-old needs: real jobs, real praise',
    body:
      'A preschooler needs something no amount of entertainment supplies: genuine contribution. Setting the table, feeding the dog, carrying the small bag — done imperfectly, owned completely. This is the on-ramp of the twenty-year transfer of responsibility this app is built around, and it starts smaller and earlier than most parents guess. Pair it with praise aimed at effort and character ("you kept trying," "that was kind") rather than talent — the kind of praise that builds workers rather than performers.',
    actions: [
      'Give one real household job they fully own — with a visual reminder, low standards, and zero rescue-redoing in front of them.',
      'Praise the effort and the character move, specifically, within earshot of the other parent when possible.',
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
