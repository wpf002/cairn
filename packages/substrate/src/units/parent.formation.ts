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
    title: 'The anger that shows up when the children do',
    body:
      'Many men meet their own anger for the first time in fatherhood: the toy stepped on at midnight, the sixth refusal, the disrespect that lands somewhere old. The anger is information — usually about exhaustion, powerlessness, or a father being reenacted — and it is also the single most formative weather system in the house. James does not say "have no anger"; he gives its speed limit: slow. Slow is a skill, and skills are trained off the field, not during the game.',
    actions: [
      'Learn your two earliest physical cues (jaw, heat, volume) and make one rehearsed move when they fire: hands down, voice lower, or leave the room with a stated return time.',
      'Repair out loud within the hour, at their eye level: name it, own it, no "but you made me."',
      'If anger is winning more weeks than it loses, tell one man who will actually ask you about it again — and consider talking to a counselor; wanting help is strength functioning.',
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
    title: 'The anxiety that arrived with the love',
    body:
      'Maternal anxiety is love with the volume stuck up: the 2am listening for breath, the mental inventory of every outlet and staircase, the catastrophes rehearsed in the school pickup line. Some of it is the design working — vigilance kept your ancestors\' babies alive. The question is who carries it. Peter\'s instruction is not "stop caring"; it is a transfer of weight: cast the anxieties on the One who cares for both of you. And when anxiety stops responding to prayer and rest — when it is running the household — it has become a medical matter, and treating it is faithfulness, not failure.',
    actions: [
      'Name the worry out loud in prayer, specifically, then say what is actually true right now — the practice of casting is concrete, not vibes.',
      'Give the recurring 2am worry a daytime appointment: ten minutes, on paper, with your spouse or a friend. Worries lose rank when scheduled.',
      'If anxiety is stealing sleep, appetite, or joy for more than two weeks, bring it to your doctor with the same seriousness you would bring your child\'s fever. Perinatal and parental anxiety are treatable.',
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
    title: 'Patience is grown in you, not summoned by you',
    body:
      'Every parent runs out of patience; the difference is what they believe about the running out. If patience is willpower, its end is a personal failure and shame follows. If it is fruit — grown by the Spirit through seasons, pruning, and time — then its end is a signal to tend the root: sleep, prayer, help, margin. Parents do not become patient by clenching harder. They become patient the way orchards become fruitful, and orchards are allowed bad seasons.',
    actions: [
      'Audit the root, not the fruit: this week, what is patience actually running on — how much sleep, prayer, margin, help?',
      'Build one margin: ten unclaimed minutes between work and the front door, used to arrive rather than to scroll.',
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
