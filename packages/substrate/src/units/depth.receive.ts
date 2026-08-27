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
    title: 'Words for what is happening inside them',
    body:
      'A five-year-old with no vocabulary for frustration expresses it with their body, because that is the only channel available. Naming feelings is not therapeutic indulgence — it is equipment. A child who can say "I am frustrated because it will not fit" has a route that does not run through the floor. What they need to receive here is the naming done for them, out loud, hundreds of times, until they can do it themselves: not "calm down" but "you are angry, and you are allowed to be angry, and you are not allowed to throw that."',
    actions: [
      'Name the feeling before you address the behaviour. Both, in that order, every time.',
      'Separate the emotion from the conduct out loud: the feeling is permitted, the action is not.',
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
    title: 'Their own money, and their own friendship conflicts',
    body:
      'Section 13 puts handling money and resolving friendship conflict on the age-ten curriculum, and seven to nine is where both begin. Money first: an amount that is genuinely theirs, spendable on things you consider foolish, because a child who has never wasted money has never learned anything from money. Conflict second, and harder: friendship disputes at this age are survivable and instructive, and a parent who intervenes directly — contacting the other child\'s parent, arranging the resolution — removes the practice at exactly the age it is cheapest to get wrong.',
    actions: [
      'Give a fixed amount that is fully theirs, including the freedom to waste it.',
      'Coach the conflict from the sideline; do not enter the field. Ask what they will say, then let them say it.',
      'Introduce giving from their own money, at an amount they decide.',
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
    title: 'What a father says to a daughter about her changing body',
    body:
      'A father is often the first man whose reaction to a daughter\'s developing body she registers, and his instinct is usually withdrawal — the hugs stop, the tone changes, the room is left. She reads that accurately as embarrassment and inaccurately as being about her. What she needs to receive is continuity: the same affection, the same ease, the same presence, plus explicit words that her worth is not relocating to her appearance. Fathers who go quiet here hand the entire question of what men think of her body to boys her own age and to the internet, both of which will answer it.',
    actions: [
      'Do not withdraw physical affection. Adjust the form if you need to; do not reduce the warmth.',
      'Say plainly, more than once, that she is not becoming more valuable or less valuable as her body changes.',
      'Never comment on her weight, and never joke about her appearance. Not once — these are remembered verbatim.',
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
    title: 'What a mother teaches a son about how women are spoken of',
    body:
      'A son learns what women are for partly from how his mother is treated and partly from what she permits to be said in her hearing. Nine to eleven is when the locker-room register arrives, and it arrives as jokes. What he needs to receive from his mother specifically is a clear, unembarrassed account of why a joke that reduces a woman to a body is not funny in this house — delivered without shaming him for having heard it or repeated it. This is also the stage to tell him plainly what is coming: that he will be shown images he did not seek, and that when it happens he is not in trouble and can say so.',
    actions: [
      'Name the standard for how women are spoken of here, before he brings the first joke home.',
      'Tell him explicitly that if he sees something he did not go looking for, he can tell you and will not be punished.',
      'Do not react with shock when something does surface. The reaction sets whether there is a second conversation.',
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
    title: 'A mother talking to her son about pornography',
    body:
      'Section 16b names this cross-voiced pair specifically. The usual arrangement — father handles it, mother stays out — leaves a son with one channel, and if the relationship with his father is strained at thirteen, that channel is closed. A mother\'s voice here carries something a father\'s cannot: she is a woman saying what this does to how he will see women, and she is unmistakably not ashamed of him. The content is short and repeatable. It is not a one-time talk, it is a standing subject, and the goal is that discovery is followed by disclosure rather than by two years of secrecy.',
    actions: [
      'Say it before it happens, not after. Assume exposure is when, not if.',
      'Make the standing offer explicit: telling you costs him nothing, every time, permanently.',
      'If it surfaces, respond to the disclosure before the content. What you do in the first ten seconds determines whether there is a next disclosure.',
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
    title: 'A father talking to his daughter about the attention that has started',
    body:
      'Around twelve or thirteen a daughter begins receiving attention of a kind she did not previously receive, some of it from boys, some of it from adult men, and much of it confusing. What she needs from her father is not surveillance and not a warning campaign about male intent, which teaches fear rather than judgement. It is a frank account from a man of what some of it means, delivered without panic, plus the unambiguous statement that she never owes anyone politeness at the cost of her own discomfort. Fathers who handle this by tightening restrictions instead of talking produce daughters who stop reporting.',
    actions: [
      'Tell her plainly she can be rude, leave, or refuse, and that you will back her every time without asking what she did.',
      'Explain what some attention means without characterising all men as threats.',
      'Respond to a report with belief and calm. Escalating in fury teaches her the cost of telling you.',
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
    title: 'Dating, consent, and a sexual ethic that has reasons behind it',
    body:
      'Thirteen to fifteen needs a Christian sexual ethic that is stated with its reasons attached, because an ethic delivered as a bare prohibition does not survive contact with a real relationship at seventeen. Three things have to be received together, and dropping any one of them breaks the other two: what Christians have historically held about sex and why; consent, in concrete terms, taught to sons and daughters equally as both a duty and a right; and the clear statement that a person who has already crossed the line they were taught is not disqualified from anything. The third is what keeps the first two from producing secrecy.',
    actions: [
      'Give the reasons, not just the rule. A rule without reasons is discarded the first time it costs something.',
      'Teach consent concretely and to both sons and daughters: what it is, how it is asked, how it is withdrawn.',
      'Say explicitly that failure here does not end their standing with God or with you.',
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
    title: 'The unglamorous competences that decide the first year away',
    body:
      'Section 13 lists what a fifteen-year-old should be learning and it is deliberately mundane: cook several meals, use a bank account, understand credit, interview for a job, recognise an unhealthy relationship, understand digital permanence. None of it is formation in the lofty sense and all of it determines whether the first year away is survivable. The failure mode is a household that has taught theology thoroughly and never taught a young person to register with a doctor. Both are the parent\'s job, and only one of them gets attention at church.',
    actions: [
      'Six meals they can cook unaided. Actually cooked, not watched.',
      'Their own bank account, managed by them, including one month where it goes badly.',
      'A real job application and interview, whatever the outcome.',
      'Walk through what credit is and what a debt actually costs over time.',
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
    title: 'The paperwork of an adult life, taught once and properly',
    body:
      'Section 13 lists what nineteen to twenty-one actually requires: file taxes, carry insurance, negotiate a lease and a salary, build and repair credit, choose a church and commit to it, give consistently. This is teachable in a handful of sittings and almost never taught, because it falls between school and church and neither claims it. Do it deliberately and do it once, with them driving and you advising — which is also the Counselor role rehearsed on low-stakes material. Being asked for help with a lease is a good sign, not a failure of independence.',
    actions: [
      'Sit with them through one tax filing, with them doing it.',
      'Read one lease together, line by line, before they sign it.',
      'Teach salary negotiation explicitly, including the script. Most people are never taught this at all.',
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
    title: 'Evaluating a relationship for marriage rather than for feeling',
    body:
      'Section 13 states it precisely: at twenty-one the task is evaluating a romantic relationship for marriage rather than for feeling. That is a skill, and a young adult who has only ever been told to guard their heart has not been given it. What they need to receive — if and when they ask, since you are the Counselor now — is a set of questions rather than a verdict: how does this person behave when thwarted, what do they do with money, how do they treat people who serve them, what happens after they are wrong, is their faith theirs. Offer the questions. Do not deliver the answer.',
    actions: [
      'Give them the questions to ask themselves rather than your assessment of the person.',
      'State your reservation once, privately, if you have one. Then stop and honour their decision.',
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
