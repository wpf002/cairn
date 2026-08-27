import type { Unit } from '../types.js';
import { EDITORIAL, REVIEWED, TOBIAS } from './helpers.js';

/**
 * BECOMING THE PARENT THEY NEED. Section 26, shipped voiced per section 36:
 * the father's anger and the mother's anxiety are not the same content.
 *
 * Parent-scoped units are indexed to the parent, not the child's age —
 * scope 'parent' with stages 'all' — and selected by voice like everything
 * else.
 */
export const PARENT_FORMATION_UNITS: readonly Unit[] = [
  {
    id: 'parent.father.anger',
    version: 1,
    claimType: 'normative',
    category: 'BECOME',
    scope: { kind: 'parent', stages: 'all' },
    voice: 'father',
    pairedWith: 'parent.mother.anxiety',
    title: 'The anger you did not know about',
    lede: 'Most men meet their own temper for the first time somewhere around the sixth refusal at bedtime.',
    body:
      'A brick of Lego at midnight. The sixth "no." A tone that lands somewhere much older than tonight. Most men meet their real temper in fatherhood, and it tells them something true: you are exhausted, you have no control here, and your own father is in the room. James sets a speed limit rather than a ban. Slow to anger. Slow is a skill, and nobody learns a skill during the game.',
    actions: [
      'Name your two earliest tells. Jaw, heat, volume. Pick one move for when they fire.',
      'Repair within the hour, at their eye level. Name it. Own it. No "but you made me."',
      'If anger is winning more weeks than it loses, tell one man who will ask you again.',
    ],
    warrant: {
      passages: ['James 1:19-20', 'Ephesians 4:26-27'],
      exegesis:
        'James: "quick to hear, slow to speak, slow to anger; for the anger of man does not produce the righteousness of God." Anger is not banned; it is decelerated, and its output is measured against God\'s righteousness. Ephesians permits the emotion, bounds the behaviour, and adds urgency — do not let the sun set on it; do not give the devil a foothold.',
      application:
        'A father\'s anger management is discipleship with a measurable form: speed. The trained pause between trigger and response is where the fruit of self-control does its work — and where a child learns that big feelings and safe hands can be the same man.',
      misuse:
        'James 1:20 is misused as proof a Christian father should feel no anger, which drives the feeling underground where it leaks as coldness or sarcasm. The text regulates expression, not existence — and it is never a licence for the slow-burn quiet rage that children find more frightening than volume.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['parent-formation', 'anger', 'father'],
  },
  {
    id: 'parent.mother.anxiety',
    version: 1,
    claimType: 'normative',
    category: 'BECOME',
    scope: { kind: 'parent', stages: 'all' },
    voice: 'mother',
    pairedWith: 'parent.father.anger',
    title: 'The worry that came with the love',
    lede: 'You lie still at 2am listening for breathing. That is love with the volume stuck up.',
    body:
      'You listen at 2am for breathing. You count outlets and stair rails. You rehearse the disaster in the pickup line. Some of that is the design working. The question is who carries it. Peter does not say stop caring. He says hand the weight to the One already carrying you both. When worry stops answering to prayer or sleep, it is a medical thing. Treating it is faithfulness.',
    actions: [
      'Pray the worry out loud, by name. Then say what is actually true tonight.',
      'Give the 2am worry a daytime slot. Ten minutes, on paper, with someone who loves you.',
      'If it is stealing sleep or appetite for two weeks, take it to your doctor. It is treatable.',
    ],
    warrant: {
      passages: ['1 Peter 5:7', 'Matthew 6:34'],
      exegesis:
        'Peter: "casting all your anxieties on him, because he cares for you" — the participle describes an ongoing, deliberate transfer, grounded in God\'s own care. Jesus in Matthew 6 does not deny tomorrow\'s troubles ("sufficient for the day is its own trouble"); he forbids borrowing them into today.',
      application:
        'A mother\'s anxiety has a stated destination and a stated scope: carried to God as it comes, and confined to the actual day. The practices — spoken casting, scheduled worry, honest medical care — are the modern mechanics of both texts.',
      misuse:
        'Both passages are weaponised against anxious women as evidence of weak faith — "just cast it, just don\'t worry." That reading turns comfort into accusation and keeps mothers from treatment. Clinical anxiety is not a casting failure any more than a broken leg is a walking failure.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['parent-formation', 'anxiety', 'mother'],
  },
  {
    id: 'parent.shared.patience',
    version: 1,
    claimType: 'normative',
    category: 'BECOME',
    scope: { kind: 'parent', stages: 'all' },
    voice: 'shared',
    title: 'Patience is grown, not summoned',
    lede: 'Every parent runs out. What matters is what you believe about the running out.',
    body:
      'Every parent runs out. If patience is willpower, running out is a personal failure, and shame comes next. Paul calls it fruit instead. Fruit grows on a tree, through seasons and pruning and time. So an empty tank is not a verdict on you. It is a reading on the root. How much sleep. How much prayer. How much help. Nobody clenches their way into an orchard, and orchards are allowed bad years.',
    actions: [
      'Check the root, not the fruit. What is your patience running on this week?',
      'Take ten minutes between work and the front door. Use them to arrive, not to scroll.',
    ],
    warrant: {
      passages: ['Galatians 5:22-23', 'John 15:4-5'],
      exegesis:
        'Patience sits in Galatians\' fruit list — produce of the Spirit, contrasted with works. John 15 supplies the mechanism: "Abide in me... apart from me you can do nothing"; fruitfulness flows from connection, not exertion.',
      application:
        'Parental patience is cultivated by tending its conditions — abiding, rest, community — rather than performed by will. This reframe converts the worst parenting moments from verdicts into diagnostics.',
      misuse:
        'The fruit list is misused as a report card, generating exactly the shame that depletes patience further. Fruit metaphors are seasonal and growth-shaped; a depleted parent needs the vine, not a lower grade.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    tags: ['parent-formation', 'patience'],
  },
];
