import type { Unit } from '../types.js';
import { EDITORIAL, REVIEWED, TOBIAS } from './helpers.js';

/**
 * RECEIVE, per stage, ages 5–21.
 *
 * Section 16b rates RECEIVE a *light* split: emotional, developmental and
 * practical needs are largely shared, but "manhood/womanhood instruction and
 * the sexual-development track are voiced — and cross-voiced deliberately:
 * fathers need guidance on speaking to daughters about body image and dating,
 * mothers on speaking to sons about pornography and respect."
 *
 * Those cross-voiced units are the ones section 16b calls the highest-value in
 * the schema: "not mother-content and father-content sitting in parallel silos
 * — the pairs where each parent needs to know what the *other* is carrying."
 * They are marked with `pairedWith` so premium spouse-sharing surfaces both
 * sides, and they are deliberately written cross-sex rather than same-sex.
 */
export const DEPTH_RECEIVE_UNITS: readonly Unit[] = [
  {
    id: 'receive.early-childhood.emotional-vocabulary',
    version: 1,
    claimType: 'normative',
    category: 'RECEIVE',
    scope: { kind: 'stage', stages: ['early-childhood'] },
    voice: 'shared',
    title: 'Give them the words',
    lede: 'A five-year-old with no word for frustration uses their body instead.',
    body:
      'A five-year-old with no word for frustration uses their body instead. Naming a feeling is equipment, not indulgence. A child who can say "I am frustrated because it will not fit" has a route that does not run through the floor. Do the naming out loud, several hundred times. Not "calm down." Try "you are angry, you are allowed to be angry, and you may not throw that."',
    actions: [
      'Name the feeling before you address the behaviour. Both, in that order, every time.',
      'Separate the feeling from the conduct out loud. One is allowed, one is not.',
    ],
    warrant: {
      passages: ['Ephesians 4:26', 'Psalm 62:8'],
      exegesis:
        '"Be angry and do not sin" concedes the emotion and regulates only its expression — Scripture does not treat anger itself as the fault. Psalm 62:8: "pour out your heart before him; God is a refuge for us" — the Psalms are full of raw feeling addressed to God rather than tidied before presentation.',
      application:
        'Scripture distinguishes emotion from conduct and models unedited emotional expression toward God. Teaching a child that distinction is teaching them the Psalms\' own posture.',
      misuse:
        'Ephesians 4:26 is used to shut down anger entirely, especially in children, when the verse explicitly permits it. Reading it as "do not be angry" reverses the text and teaches a child that a normal emotion is itself a sin.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['emotional-regulation', 'vocabulary'],
  },
  {
    id: 'receive.middle-childhood.money-and-conflict',
    version: 1,
    claimType: 'normative',
    category: 'RECEIVE',
    scope: { kind: 'stage', stages: ['middle-childhood'] },
    voice: 'shared',
    title: 'Their money, their conflicts',
    lede: 'A child who has never wasted money has never learned anything from money.',
    body:
      'Money first. An amount that is genuinely theirs, spendable on things you consider foolish. A child who has never wasted money has never learned anything from money. Conflict second, and harder. Friendship disputes at this age are survivable and instructive. A parent who phones the other child\'s parent and arranges the resolution has removed the practice at the exact age it is cheapest to get wrong.',
    actions: [
      'Give a fixed amount that is fully theirs, including the freedom to waste it.',
      'Coach from the sideline. Ask what they will say, then let them say it.',
      'Start giving from their own money, at an amount they choose.',
    ],
    warrant: {
      passages: ['Matthew 18:15', 'Proverbs 21:20'],
      exegesis:
        '"If your brother sins against you, go and tell him his fault, between you and him alone" prescribes direct, private, first-person address as the opening move in conflict — before any escalation to third parties. Proverbs 21:20 contrasts the wise, who store up, with the fool who devours everything he has.',
      application:
        'Matthew 18:15 is a directly teachable procedure for a nine-year-old: go yourself, go privately, go first. Proverbs supplies the frame for money as something to be managed rather than consumed.',
      misuse:
        'Matthew 18:15 is regularly used to silence someone reporting abuse by requiring they confront the abuser privately first. It addresses ordinary sin between peers, and applying it to a power imbalance or to a crime is a serious and known misuse that has protected abusers in churches.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: false, opportunity: true },
    tags: ['money', 'conflict', 'life-skills'],
  },

  // ---- The sexual-development track, cross-voiced (section 16b) --------
  {
    id: 'receive.father.pre-adolescence.daughter-body-image',
    version: 1,
    claimType: 'normative',
    category: 'RECEIVE',
    scope: { kind: 'stage', stages: ['pre-adolescence'] },
    voice: 'father',
    pairedWith: 'receive.mother.pre-adolescence.son-respect',
    title: 'When her body starts changing',
    lede: 'The instinct is withdrawal. She reads it accurately as embarrassment, inaccurately as about her.',
    body:
      'You are often the first man whose reaction she registers. The instinct is withdrawal. The hugs stop. The tone changes. You leave the room. She reads that accurately as embarrassment and inaccurately as being about her. What she needs is continuity. Same affection, same ease, same presence, plus words saying her worth has not moved to her appearance. Go quiet and you hand the question to boys her own age and to the internet.',
    actions: [
      'Do not withdraw affection. Adjust the form if you must. Keep the warmth.',
      'Say more than once that her worth has not moved as her body changed.',
      'Never comment on her weight. Never joke about her appearance. Not once.',
    ],
    warrant: {
      passages: ['1 Samuel 16:7', 'Song of Solomon 4:7'],
      exegesis:
        '"The LORD sees not as man sees: man looks on the outward appearance, but the LORD looks on the heart" locates true assessment away from the visible. Song of Solomon includes frank, unembarrassed delight in a beloved\'s physical form within a covenant relationship — Scripture is neither squeamish about bodies nor reductive about them.',
      application:
        'Together these hold two things a father must hold at once: his daughter\'s body is good and not shameful, and her worth is not located there. Silence communicates neither.',
      misuse:
        'Song of Solomon is misapplied to father-daughter relationships, which is a serious category error — it is spousal, and the material is not transferable. It is cited here for the single point that Scripture treats bodies as good, and nothing beyond that. 1 Samuel 16:7 is misused to dismiss a girl\'s genuine distress about her appearance rather than to reframe where worth sits.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['body-image', 'puberty', 'cross-voice', 'father-voice'],
  },
  {
    id: 'receive.mother.pre-adolescence.son-respect',
    version: 1,
    claimType: 'normative',
    category: 'RECEIVE',
    scope: { kind: 'stage', stages: ['pre-adolescence'] },
    voice: 'mother',
    pairedWith: 'receive.father.pre-adolescence.daughter-body-image',
    title: 'How women get spoken of here',
    lede: 'The locker-room register arrives around nine, and it arrives as jokes.',
    body:
      'The locker-room register arrives around nine, as jokes. A son learns what women are for from how his mother is treated and what she lets be said near her. Tell him, unembarrassed, why a joke reducing a woman to a body is not funny here. Do not shame him for repeating one. He will be shown images he did not seek, and he will not be in trouble for saying so.',
    actions: [
      'Name the standard before he brings the first joke home.',
      'Tell him he can report something he did not seek, and will not be punished.',
      'Do not react with shock when it surfaces. That decides whether there is a second talk.',
    ],
    warrant: {
      passages: ['1 Timothy 5:2', 'Genesis 1:27'],
      exegesis:
        'Paul instructs Timothy to treat "younger women as sisters, in all purity" — a specific relational category assigned to a young man\'s conduct toward women his own age. Genesis 1:27 grounds the dignity of male and female alike in the image of God, prior to any account of role or function.',
      application:
        '1 Timothy 5:2 gives a boy an actual frame — sister, in all purity — rather than a prohibition with nothing behind it. Genesis 1:27 supplies the reason it matters.',
      misuse:
        '1 Timothy 5:2\'s "in all purity" is misused to make young men see women primarily as sources of temptation to be avoided, producing avoidance rather than respect. The instruction is to relate as family, not to withdraw.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['respect', 'pornography-prep', 'cross-voice', 'mother-voice'],
  },
  {
    id: 'receive.mother.early-adolescence.son-pornography',
    version: 1,
    claimType: 'normative',
    category: 'RECEIVE',
    scope: { kind: 'stage', stages: ['early-adolescence'] },
    voice: 'mother',
    pairedWith: 'receive.father.early-adolescence.daughter-attention',
    title: 'A mother, on pornography',
    lede: 'The usual arrangement leaves a son with one channel. At thirteen it can be closed.',
    body:
      'Father handles it and mother stays out. That leaves a son one channel, and at thirteen it can be closed. Your voice carries what his father\'s cannot. A woman telling him what this does to how he will see women, who is plainly not ashamed of him. Keep it short and repeatable. Not a talk, a standing subject. The aim is that discovery gets followed by disclosure instead of two years of secrecy.',
    actions: [
      'Say it before it happens, not after. Assume exposure is when, not if.',
      'Make the offer explicit. Telling you costs him nothing, every time.',
      'Respond to the disclosure before the content. The first ten seconds decide the next one.',
    ],
    warrant: {
      passages: ['Matthew 5:28', 'Romans 8:1'],
      exegesis:
        'Jesus locates adultery in the look and the intent, not only the act — a claim about the interior life that raises the standard rather than lowering it. Romans 8:1: "there is therefore now no condemnation for those who are in Christ Jesus," which is the frame the higher standard has to be delivered inside.',
      application:
        'Both are needed simultaneously. Matthew 5:28 without Romans 8:1 produces a thirteen-year-old who believes he is already condemned and therefore has no reason to disclose anything.',
      misuse:
        'Matthew 5:28 is regularly used to convince adolescent boys that involuntary attraction is itself adultery, producing scrupulosity and shame that drive concealment. Jesus addresses the cultivated look and intent, not the first involuntary response — and a boy taught otherwise learns that he is already lost, which removes every incentive to speak.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['pornography', 'disclosure', 'cross-voice', 'mother-voice'],
  },
  {
    id: 'receive.father.early-adolescence.daughter-attention',
    version: 1,
    claimType: 'normative',
    category: 'RECEIVE',
    scope: { kind: 'stage', stages: ['early-adolescence'] },
    voice: 'father',
    pairedWith: 'receive.mother.early-adolescence.son-pornography',
    title: 'When the attention starts',
    lede: 'Some of it from boys, some from grown men, most of it confusing.',
    body:
      'Around twelve she starts getting attention she did not get before. Some from boys, some from grown men, most of it confusing. She does not need surveillance, and a campaign about male intent teaches fear rather than judgement. She needs a frank account from a man, without panic. And one sentence. She never owes anyone politeness at the cost of her own comfort.',
    actions: [
      'Tell her she can be rude, leave, or refuse, and you will back her without asking why.',
      'Explain what some of it means without making all men threats.',
      'Meet a report with belief and calm. Fury teaches her what telling you costs.',
    ],
    warrant: {
      passages: ['Proverbs 31:8-9', 'Esther 4:14'],
      exegesis:
        '"Open your mouth for the mute, for the rights of all who are destitute… defend the rights of the poor and needy" is instruction to a king on using position on behalf of those with less power. Esther is a young woman placed in genuine danger who acts with deliberation rather than compliance, and is credited for it.',
      application:
        'Scripture assigns those with power the job of defending those without it — a father\'s position relative to his daughter\'s situation. Esther shows a young woman exercising judgement under real threat rather than being managed.',
      misuse:
        'Purity-culture readings turn a father into the owner and gatekeeper of his daughter\'s sexuality, which is not in these texts and which reliably produces either concealment or shame. The aim is a daughter with her own judgement and a father who backs it, not a daughter under guard.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['attention', 'safety', 'cross-voice', 'father-voice'],
  },
  {
    id: 'receive.middle-adolescence.dating-and-consent',
    version: 1,
    claimType: 'normative',
    category: 'RECEIVE',
    scope: { kind: 'stage', stages: ['middle-adolescence'] },
    voice: 'shared',
    title: 'An ethic with its reasons attached',
    lede: 'A rule delivered bare does not survive contact with a real relationship at seventeen.',
    body:
      'A bare prohibition does not survive a real relationship at seventeen. Three things go together, and dropping one breaks the others. What Christians have held about sex, and why. Consent in concrete terms, to sons and daughters alike, as a duty and a right. And the plain statement that someone who already crossed the line is not disqualified. The third stops the first two producing secrecy.',
    actions: [
      'Give the reasons, not just the rule. A bare rule gets dropped the first time it costs something.',
      'Teach consent to sons and daughters alike. What it is, how it is asked, how it is withdrawn.',
      'Say that failure here ends their standing with neither God nor you.',
    ],
    warrant: {
      passages: ['1 Corinthians 6:19-20', 'John 8:10-11'],
      exegesis:
        '"Your body is a temple of the Holy Spirit within you… you were bought with a price" grounds sexual ethics in belonging and worth rather than in shame or in the body being bad. In John 8 Jesus neither condemns the woman brought to him nor endorses what she did: "neither do I condemn you; go, and from now on sin no more" — both halves, in that order.',
      application:
        'The Christian sexual ethic is grounded positively, in the body\'s worth, rather than negatively in disgust. John 8 supplies the order a household must follow: no condemnation first, then the instruction.',
      misuse:
        '1 Corinthians 6:19-20 has been used in purity teaching to tell young people — daughters disproportionately — that sexual sin permanently damages them, using imagery of chewed gum or crushed flowers. That is not in the text and it directly contradicts John 8, and it is one of the most damaging misuses in recent evangelical practice.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['sexuality', 'consent', 'dating', 'ethics'],
  },
  {
    id: 'receive.late-adolescence.practical-competence',
    version: 1,
    claimType: 'normative',
    category: 'RECEIVE',
    scope: { kind: 'stage', stages: ['late-adolescence'] },
    voice: 'shared',
    title: 'The unglamorous competences',
    lede: 'None of it is lofty. All of it decides whether the first year away is survivable.',
    body:
      'Cook several meals. Run a bank account. Understand credit. Sit a job interview. Recognise an unhealthy relationship. Understand digital permanence. None of it is lofty and all of it decides whether the first year away is survivable. The failure mode is a household that taught theology thoroughly and never taught a young person to register with a doctor. Both are your job. Only one gets attention at church.',
    actions: [
      'Six meals they can cook unaided. Actually cooked, not watched.',
      'Their own bank account, run by them, including a month that goes badly.',
      'A real job application and interview, whatever the outcome.',
      'Walk through what credit is and what a debt costs over time.',
    ],
    warrant: {
      passages: ['Proverbs 22:7', '1 Timothy 5:8'],
      exegesis:
        '"The borrower is the slave of the lender" names debt plainly as a form of servitude — a wisdom observation about its real character rather than a prohibition on borrowing. 1 Timothy 5:8 is blunt about provision: anyone who does not provide for relatives "has denied the faith and is worse than an unbeliever."',
      application:
        'Scripture treats financial competence and the capacity to provide as genuinely serious rather than merely practical. Teaching them is not a lesser task than teaching doctrine.',
      misuse:
        'Proverbs 22:7 is used to forbid all borrowing including mortgages and education, which the proverb does not do — it describes the relationship debt creates so a person enters it knowingly. 1 Timothy 5:8 is misused to shame those unable to provide through illness or unemployment.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['life-skills', 'money', 'independence'],
  },
  {
    id: 'receive.emerging-adult.adult-admin',
    version: 1,
    claimType: 'normative',
    category: 'RECEIVE',
    scope: { kind: 'stage', stages: ['emerging-adult'] },
    voice: 'shared',
    title: 'The paperwork of an adult life',
    lede: 'Teachable in a handful of sittings, and almost never taught.',
    body:
      'File taxes. Carry insurance. Negotiate a lease and a salary. Build credit and repair it. Choose a church and commit to it. Give consistently. All teachable in a handful of sittings, and almost never taught, because it falls between school and church and neither claims it. Do it once, deliberately, with them driving and you advising. Being asked for help with a lease is a good sign.',
    actions: [
      'Sit through one tax filing with them. They do it.',
      'Read one lease together, line by line, before they sign it.',
      'Teach salary negotiation, including the script. Most people never get taught it.',
    ],
    warrant: {
      passages: ['Luke 14:28', 'Proverbs 27:23'],
      exegesis:
        '"Which of you, desiring to build a tower, does not first sit down and count the cost?" — Jesus uses financial prudence as a self-evidently sensible practice in an analogy about discipleship, assuming his hearers agree it is wise. Proverbs 27:23: "know well the condition of your flocks, and give attention to your herds" — attentive management of what you have.',
      application:
        'Scripture assumes competent stewardship as ordinary wisdom. Teaching the mechanics is teaching an assumption the Bible makes about adults.',
      misuse:
        'Luke 14:28 is lifted out of its context — a passage about the cost of following Christ, which concludes with renouncing all one has. Using it purely as financial advice inverts a text that is warning about the price of discipleship.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: false, opportunity: true },
    tags: ['adult-admin', 'money', 'counselor'],
  },
  {
    id: 'receive.young-adult.evaluating-a-marriage',
    version: 1,
    claimType: 'normative',
    category: 'RECEIVE',
    scope: { kind: 'stage', stages: ['young-adult'] },
    voice: 'shared',
    title: 'Evaluating for marriage',
    lede: 'A young adult told only to guard their heart has not been given a skill.',
    body:
      'This is a skill. A young adult told only to guard their heart has not been given it. You are the Counselor now, so wait to be asked. Then give questions rather than a verdict. How does this person behave when thwarted. What do they do with money. How do they treat people who serve them. What happens after they are wrong. Is their faith theirs. Offer the questions. Do not deliver the answer.',
    actions: [
      'Give them the questions, not your assessment of the person.',
      'State a reservation once, privately. Then stop, and honour their decision.',
      'Say plainly that you will treat their choice as family regardless.',
    ],
    warrant: {
      passages: ['Proverbs 31:30', '2 Corinthians 6:14'],
      exegesis:
        '"Charm is deceitful, and beauty is vain, but a woman who fears the LORD is to be praised" directs assessment past the immediately attractive toward the durable. 2 Corinthians 6:14 warns against being "unequally yoked with unbelievers" — an agricultural image of two animals mismatched for the same work.',
      application:
        'Both texts push evaluation toward character and shared direction rather than toward feeling. They supply the questions; they do not supply a parent\'s verdict on a specific person.',
      misuse:
        '2 Corinthians 6:14 is weaponised by parents to break up relationships, and stretched well past its context — Paul is addressing partnership with idolatry in Corinth, and applying it as a blunt screening rule has driven many young adults to conceal relationships rather than reconsider them. Proverbs 31:30 is used to dismiss ordinary attraction as spiritually suspect.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['marriage', 'discernment', 'counselor'],
  },
];
