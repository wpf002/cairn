import type { Unit } from '../types.js';
import { EDITORIAL, REVIEWED, TOBIAS } from './helpers.js';

/**
 * SEE, voiced and split by stage, ages 5–21.
 *
 * Section 16b rates SEE a *heavy* split — "a child watching a father model
 * manhood and a child watching a mother model womanhood are different
 * formative events" — and the worksheet's two SEE rows are explicitly
 * father-voiced, which makes the mother-voiced counterparts original
 * construction rather than transcription. Substrate v1 had voiced pairs only
 * through the coach years; the teen and adult bands were shared units spanning
 * three stages at once. This file closes that.
 *
 * The organising idea across all sixteen: what a child can *read* changes with
 * age. A five-year-old sees actions. A ten-year-old reads subtext. A fifteen-
 * year-old audits consistency across contexts and has years of evidence. The
 * modelling does not change; the child's instrumentation does.
 */
export const DEPTH_SEE_UNITS: readonly Unit[] = [
  // ============================================ EARLY CHILDHOOD (5–7) ===
  {
    id: 'see.father.early-childhood',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: ['early-childhood'] },
    voice: 'father',
    pairedWith: 'see.mother.early-childhood',
    title: 'They can tell someone now',
    lede: 'At five your child can recount what happened. To a teacher. To a grandparent.',
    body:
      'At five your child can tell someone else what happened. Not just absorb it. Recount it, to a teacher, to a grandparent, to themselves in the dark. Two things get copied most reliably at this age. What a father does with his anger, and what he does with his phone while somebody is talking to him. Neither is a lecture topic. Both go in word for word.',
    actions: [
      'Phone face-down and out of reach when they start talking. They are timing you.',
      'Lose your temper, then repair it where they can see. Name it. Do not excuse it.',
    ],
    warrant: {
      passages: ['Deuteronomy 6:6-9', '1 Corinthians 11:1'],
      exegesis:
        'Deuteronomy 6 puts the words on the parent\'s own heart first — "these words that I command you today shall be on your heart" — and only then describes teaching them to children across ordinary life: sitting, walking, lying down, rising. The order is not incidental. Paul\'s "be imitators of me, as I am of Christ" makes imitation legitimate only when it is pointing somewhere past the person being imitated.',
      application:
        'Formation runs through a parent who already carries the thing, in the ordinary hours rather than the scheduled ones. Both texts license "watch me" and both bound it.',
      misuse:
        'Deuteronomy 6 is routinely reduced to a schedule — family devotions as a box — when the passage is describing saturation across a whole day and locates the starting point inside the parent. Paul\'s verse is misused when the "as I am of Christ" clause is dropped, which turns a qualified invitation into a demand for unqualified emulation.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['modelling', 'anger', 'attention', 'father-voice'],
  },
  {
    id: 'see.mother.early-childhood',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: ['early-childhood'] },
    voice: 'mother',
    pairedWith: 'see.father.early-childhood',
    title: 'How you treat the cashier',
    lede: 'Five-year-olds watch how adults treat other adults, and draw the lines from what they see.',
    body:
      'The cashier. The neighbour who talks too long. The person who got your order wrong. Five-year-olds watch how adults treat other adults and draw the lines from what they see. Who counts. Who can be spoken to sharply. Whose name you bother learning. They do not take a principle from this. They take a map. Warm to friends and clipped to strangers teaches a theory of human worth without one sentence about it.',
    actions: [
      'Learn one service worker\'s name and use it where your child can hear.',
      'After someone is difficult, tell your child what you were choosing. Not that you were right.',
    ],
    warrant: {
      passages: ['James 2:1-4', 'Matthew 25:40'],
      exegesis:
        'James addresses a congregation seating the well-dressed visitor well and the poor one badly, and calls it becoming "judges with evil thoughts" — the sin is the sorting itself. Matthew 25:40 locates Christ in the least of these, so treatment of the person who can return nothing is treatment of him.',
      application:
        'Scripture treats differential warmth toward people by their usefulness as a serious fault, not a social lubricant. A child watching a mother sort people is watching the theology of James 2 either confirmed or contradicted.',
      misuse:
        'Matthew 25:40 gets sentimentalised into a general warm feeling about kindness, losing the specificity of the judgement scene it sits inside. James 2 is misused to forbid all discernment about people, when what it forbids is assigning worth by status.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['modelling', 'dignity', 'mother-voice'],
  },

  // =========================================== MIDDLE CHILDHOOD (7–9) ===
  {
    id: 'see.father.middle-childhood',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: ['middle-childhood'] },
    voice: 'father',
    pairedWith: 'see.mother.middle-childhood',
    title: 'What you say about your work',
    lede: 'Around seven they ask what you do all day. What sticks is the tone, not the job title.',
    body:
      'Around seven a child asks what you actually do all day. What sticks is the tone, not the job title. "I hate it, but the bills" teaches that adult life is a sentence to be served. Do not pretend it is all interesting. Say the whole true thing. This part is dull. This part matters. Here is who is better off because I did it.',
    actions: [
      'Name one thing your work did this week for a person who is not you.',
      'Take them where you work, or show them what you made. Once this year.',
    ],
    warrant: {
      passages: ['Colossians 3:23', 'Genesis 2:15'],
      exegesis:
        '"Whatever you do, work heartily, as for the Lord and not for men" reframes the audience of ordinary labour — written, in context, to slaves, which makes it a claim about the dignity of work performed under genuinely poor conditions. Genesis 2:15 places work in the garden before the fall: it is part of the original design, not a consequence of it.',
      application:
        'Scripture treats work as inherently dignified and directed Godward regardless of how interesting it is. A father narrating his own work that way is teaching the doctrine in the only register a seven-year-old can receive it.',
      misuse:
        'Colossians 3:23 is regularly used by employers, and by parents, to extract effort while ignoring the passage\'s immediate address to masters in the next verses. It sanctifies work; it does not sanctify exploitation, and using it to shut down a legitimate complaint inverts it.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['work-ethic', 'vocation', 'father-voice'],
  },
  {
    id: 'see.mother.middle-childhood',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: ['middle-childhood'] },
    voice: 'mother',
    pairedWith: 'see.father.middle-childhood',
    title: 'Be wrong out loud',
    lede: 'Around five a child stops trying things she might get wrong. Girls hit this earlier.',
    body:
      'She will not start the drawing. She rubs out the same line four times. She cries over a worksheet. Girls hit this earlier and harder. Reassurance does almost nothing here. What works is watching their mother be wrong out loud and survive it, with no spiral and no self-attack. Say "I got that wrong, I am redoing it" flatly, then redo it. Your child is checking whether you believe it about yourself.',
    actions: [
      'Say "I was wrong about that" in front of them this month. Then move on.',
      'Let them watch you try something you are bad at, and keep going.',
    ],
    warrant: {
      passages: ['Proverbs 24:16', '2 Corinthians 12:9'],
      exegesis:
        '"The righteous falls seven times and rises again" — the mark of righteousness in the proverb is the rising, not the not-falling. Paul is told "my grace is sufficient for you, for my power is made perfect in weakness," and concludes he will boast in weakness rather than conceal it.',
      application:
        'Neither text treats failure as disqualifying, and Paul actively declines to hide his. A mother modelling recoverable failure is demonstrating the doctrine of grace at the exact age a child is deciding whether mistakes are survivable.',
      misuse:
        '2 Corinthians 12:9 is misused to spiritualise avoidable failure or to discourage competence — Paul is describing a thorn he asked three times to have removed, not a case for lowered effort. Proverbs 24:16 is misused as a promise that any repeated failure will eventually reverse.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['failure', 'perfectionism', 'mother-voice'],
  },

  // ============================================ PRE-ADOLESCENCE (9–11) ===
  {
    id: 'see.father.pre-adolescence',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: ['pre-adolescence'] },
    voice: 'father',
    pairedWith: 'see.mother.pre-adolescence',
    title: 'They can read the silences',
    lede: 'At nine a child no longer needs raised voices to know there is a conflict.',
    body:
      'At nine a child stops needing raised voices to know there is a conflict. They read the shortened sentences, the sudden errand, the temperature of a room. Your marriage stops being described to them and starts being interpreted. They do not need to see an absence of disagreement, which they will read correctly as concealment. They need to see one handled. It starts, it ends, and nothing was destroyed in between.',
    actions: [
      'Let them see one ordinary disagreement resolve. Not every conflict behind a door.',
      'Speak well of your wife when she is not there. They notice which version they get.',
    ],
    warrant: {
      passages: ['Ephesians 5:25', 'Ephesians 4:2-3'],
      exegesis:
        '"Husbands, love your wives, as Christ loved the church and gave himself up for her" sets a self-giving standard rather than an authority claim — the measure is sacrifice, not command. Ephesians 4:2-3 prescribes "humility and gentleness, with patience, bearing with one another in love, eager to maintain the unity of the Spirit in the bond of peace," which assumes friction requiring bearing-with.',
      application:
        'Scripture assumes conflict inside covenant relationships and specifies the manner of handling rather than its avoidance. A ten-year-old who sees that pattern learns what marriage survives.',
      misuse:
        'Ephesians 5 is the most abused passage in Christian marriage teaching, routinely quoted from verse 22 while skipping the self-giving standard laid on the husband three verses later and the mutual submission in verse 21. Used to demand compliance, it inverts the text.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['marriage', 'conflict', 'dad-loving-mom', 'father-voice'],
  },
  {
    id: 'see.mother.pre-adolescence',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: ['pre-adolescence'] },
    voice: 'mother',
    pairedWith: 'see.father.pre-adolescence',
    title: 'Your friendships are the lesson',
    lede: 'They are entering the years when friendship rules everything, and watching yours.',
    body:
      'Friendship is about to run your child\'s life. Yours is the only adult version they have watched up close. They are learning whether friendship survives a disagreement. Whether you speak about an absent friend the way you speak to her. Whether you have anyone at all. A ten-year-old in a first real falling-out is running your example, because it is the only one they have.',
    actions: [
      'Let them see you repair a friendship instead of replacing it.',
      'Do not run your friends down in front of them. They are working out what you say elsewhere.',
    ],
    warrant: {
      passages: ['Proverbs 17:17', 'Proverbs 18:24'],
      exegesis:
        '"A friend loves at all times, and a brother is born for adversity" places the test of friendship at the point of difficulty rather than enjoyment. Proverbs 18:24 contrasts a man of many companions who "comes to ruin" with "a friend who sticks closer than a brother" — quantity against depth.',
      application:
        'Proverbs treats durable, tested friendship as a distinct good and a skill. Watching a mother maintain one through strain is the primary instruction a pre-adolescent gets in it.',
      misuse:
        'Proverbs 17:17 gets used to guilt someone into staying in a relationship that is harming them — "a friend loves at all times" as an argument against ever leaving. Proverbs describes the character of a true friend, and does not oblige a person to absorb mistreatment to prove they are one.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['friendship', 'modelling', 'mother-voice'],
  },

  // ========================================== EARLY ADOLESCENCE (11–13) ===
  {
    id: 'see.father.early-adolescence',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: ['early-adolescence'] },
    voice: 'father',
    pairedWith: 'see.mother.early-adolescence',
    title: 'The audit begins',
    lede: 'Your child can now hold two versions of you in mind and compare them.',
    body:
      'She has watched you twelve years. This year she compares the notes. How you are at church against how you are in the car home. What you say about honesty against how you talk about taxes. Adolescents name this more than anything else when they walk away later. She is not looking for a perfect man. She is checking whether the same man shows up twice.',
    actions: [
      'Name one gap between what you teach and how you live, before they name it.',
      'Notice what changes about you between the church car park and your kitchen.',
    ],
    warrant: {
      passages: ['Matthew 23:2-3', 'Titus 2:7'],
      exegesis:
        'Jesus tells the crowds to do what the scribes and Pharisees say but not what they do, "for they preach, but do not practise" — the indictment is specifically the gap. Titus 2:7 charges Titus to "show yourself in all respects to be a model of good works," making the teacher\'s own life part of the curriculum.',
      application:
        'Scripture names the say-do gap as the characteristic religious failure and puts the teacher\'s life inside the lesson. An adolescent running that comparison on a father is doing what Jesus did to the Pharisees.',
      misuse:
        'Matthew 23 is misused as licence for adolescents to dismiss any imperfect authority, and by adults as a club against other Christians. Jesus is confronting religious leaders exploiting their office, not establishing that inconsistency voids all instruction — he tells the crowd to still do what they say.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['hypocrisy', 'consistency', 'father-voice'],
  },
  {
    id: 'see.mother.early-adolescence',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: ['early-adolescence'] },
    voice: 'mother',
    pairedWith: 'see.father.early-adolescence',
    title: 'Your phone, and their rules',
    lede: 'The first real charge of hypocrisy usually gets filed here. It is often accurate.',
    body:
      'Device rules arrive, and so does the first real charge of hypocrisy. It is often accurate. A twelve-year-old told to leave the phone at dinner, by a parent scrolling at dinner, has learned one thing. The rule is about power. The rule can still stand. An adult and a twelve-year-old do not have the same brain or the same risk. But argue the difference out loud, because it will not survive being enforced in silence.',
    actions: [
      'Keep one device rule yourself, visibly, for a month before you require it.',
      'Say why the rules differ. Concede the parts where they do not.',
    ],
    warrant: {
      passages: ['Romans 2:21', '1 Corinthians 9:27'],
      exegesis:
        '"You then who teach others, do you not teach yourself?" — Paul confronts a teacher exempting himself from his own instruction. 1 Corinthians 9:27: "I discipline my body and keep it under control, lest after preaching to others I myself should be disqualified" — the apostle applies the standard to himself first, precisely because he preaches it.',
      application:
        'Paul makes self-application the precondition of credible instruction. A parent setting a device boundary is under the same rule, which does not mean identical limits — it means an examined life behind the limit.',
      misuse:
        'These verses get used to argue that a parent must be flawless before setting any boundary, which would abolish parenting. Paul kept preaching while disciplining himself; the requirement is honest self-application, not achieved perfection.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['technology', 'consistency', 'mother-voice'],
  },

  // ========================================= MIDDLE ADOLESCENCE (13–15) ===
  {
    id: 'see.father.middle-adolescence',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: ['middle-adolescence'] },
    voice: 'father',
    pairedWith: 'see.mother.middle-adolescence',
    title: 'Apologise properly',
    lede: 'By fourteen your child has a list of times you were wrong and said nothing.',
    body:
      'Your child has a list of times you were wrong and said nothing. They are watching whether a grown man can apologise to someone with less power. Most cannot. "I am sorry I shouted, but you were being impossible" is not an apology. They parse it instantly. Name the act. Leave out their part. Ask for nothing. It costs you something real. They remember it.',
    actions: [
      'Apologise once with no "but" and no request for one back.',
      'Do not explain yourself afterwards. Let it stand alone.',
    ],
    warrant: {
      passages: ['James 5:16', 'Matthew 5:23-24'],
      exegesis:
        '"Confess your sins to one another and pray for one another, that you may be healed" makes confession horizontal and mutual, not only vertical. Matthew 5:23-24 instructs someone mid-offering to leave the gift, go, and be reconciled first — the reconciliation outranks the worship, and the initiative sits with the one who is remembered as having caused offence.',
      application:
        'Scripture treats confession between people as ordinary Christian practice with no exemption for rank. A father apologising to his son or daughter is doing what James describes, in the household where it is hardest.',
      misuse:
        'James 5:16 has been used to compel disclosure to authority figures in ways that damage people; the verse describes mutual confession among equals, not a duty to report oneself to whoever holds power. Matthew 5 is misused to pressure a wronged party into initiating reconciliation, when the address is to the offender.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['apology', 'repair', 'father-voice'],
  },
  {
    id: 'see.mother.middle-adolescence',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: ['middle-adolescence'] },
    voice: 'mother',
    pairedWith: 'see.father.middle-adolescence',
    title: 'Faith on a Tuesday',
    lede: 'Around thirteen they first suspect your faith is social rather than real.',
    body:
      'Around thirteen they suspect your faith is social. A family activity with a building attached. Attendance does not answer that. Attendance looks like habit. What answers it is what they were not meant to see. You praying at an odd hour. A Bible used on a Tuesday. A decision made on conviction when the easy option sat right there. Do not stage it. Staged gets caught.',
    actions: [
      'Stop hiding your own practice. Let it be visible without announcing it.',
      'Once, explain a decision that cost you something. Briefly. No moral attached.',
    ],
    warrant: {
      passages: ['Matthew 6:5-6', '2 Timothy 1:5'],
      exegesis:
        'Jesus contrasts praying "to be seen by others" with going into a room and shutting the door — the target is performance for an audience, not visibility as such. 2 Timothy 1:5 traces Timothy\'s "sincere faith" through his grandmother Lois and mother Eunice: faith transmitted along a maternal line, and named as sincere precisely because it was genuine before it was inherited.',
      application:
        'Held together, these argue for real private practice that a child happens to encounter rather than a demonstration arranged for them. Lois and Eunice show the transmission working; Matthew 6 rules out the counterfeit.',
      misuse:
        'Matthew 6:6 is used to argue that all faith should be entirely private, which conflicts with the same sermon\'s "let your light shine before others." Jesus is targeting motive, not visibility. 2 Timothy 1:5 is misused as a guarantee that a mother\'s faith will transmit — Timothy\'s father is notably absent from the verse, and no promise is being issued.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['private-faith', 'sincerity', 'mother-voice'],
  },

  // =========================================== LATE ADOLESCENCE (15–18) ===
  {
    id: 'see.father.late-adolescence',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: ['late-adolescence'] },
    voice: 'father',
    pairedWith: 'see.mother.late-adolescence',
    title: 'What your money says',
    lede: 'By sixteen they understand household finance well enough to audit it.',
    body:
      'By sixteen your child can audit the accounts. What gets bought without thinking. What gets deliberated. What gets given away. Whether generosity is a line item or a story you tell. They are inside your finances for the last time, and what they see becomes their default. Talk stewardship and buy reflexively, and you taught the buying. Decline something affordable where they can see it.',
    actions: [
      'Show them one real trade-off. What you did not buy so this could happen.',
      'Give once at a level the household actually feels. Tell them it happened.',
    ],
    warrant: {
      passages: ['Matthew 6:21', '1 Timothy 6:17-19'],
      exegesis:
        '"Where your treasure is, there your heart will be also" runs the causality in the direction people find inconvenient: the spending forms the affection, not merely reports it. 1 Timothy 6:17-19 instructs the rich not to be haughty or to set hopes on uncertain riches but "to be generous and ready to share" — and notably does not instruct them to divest.',
      application:
        'Scripture treats financial behaviour as formative rather than incidental, and prescribes visible generosity within ordinary means. A seventeen-year-old reading the household ledger is reading a moral document.',
      misuse:
        'Matthew 6:21 is used to shame ordinary provision or to imply that any saving indicates a misplaced heart, which the same Scripture contradicts in Proverbs. 1 Timothy 6:10 — the love of money, not money — is the most consistently misquoted verse in this area, and dropping "the love of" changes the claim entirely.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['money', 'generosity', 'stewardship', 'father-voice'],
  },
  {
    id: 'see.mother.late-adolescence',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: ['late-adolescence'] },
    voice: 'mother',
    pairedWith: 'see.father.late-adolescence',
    title: 'The first time they doubt out loud',
    lede: 'It comes sideways, in a car, timed to be low stakes. Your face decides the next five years.',
    body:
      'It comes in a car, sideways, timed to sound like nothing. Usually to the mother. Your face in the first two seconds decides the next five years. Panic teaches that doubt is dangerous and belongs somewhere else. That is how a question becomes a silent departure. Calm interest teaches that this house holds it. You are not being asked for an answer.',
    actions: [
      'Ask "what brought that up?" Then listen without correcting anything.',
      'Say that doubt puts them outside neither this family nor God\'s reach.',
    ],
    warrant: {
      passages: ['Mark 9:24', 'Jude 22'],
      exegesis:
        'The father of the afflicted boy cries "I believe; help my unbelief!" — and Jesus proceeds to heal, engaging the mixed and honest state rather than requiring it be resolved first. Jude 22: "have mercy on those who doubt" is a direct instruction about the posture owed to doubters within the community.',
      application:
        'Scripture records doubt inside faith without treating it as disqualifying and explicitly commands mercy toward it. A mother receiving an adolescent\'s doubt calmly is following an instruction, not merely being kind.',
      misuse:
        'Mark 9:24 is sometimes used to imply that any lack of certainty is a failure needing repentance, when the narrative shows Jesus responding to the honest admission with action. Jude 22 is misused as licence to leave doubt unaddressed — mercy is the posture, not indifference.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['doubt', 'faith-crisis', 'mother-voice'],
  },

  // ============================================== EMERGING ADULT (18–20) ===
  {
    id: 'see.father.emerging-adult',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: ['emerging-adult'] },
    voice: 'father',
    pairedWith: 'see.mother.emerging-adult',
    title: 'Being overtaken',
    lede: 'Your child passes you at something that used to be yours. They watch how you take it.',
    body:
      'Your child passes you at something that used to be yours. Lifting, fixing, arguing, or the thing you taught them yourself. They watch how you take it, because it previews every transition still coming. Competing, minimising, or a joke that lands as a correction all say the same thing. Your standing depended on being ahead. Plain pleasure at being overtaken says the whole project was aimed here and you meant it.',
    actions: [
      'Concede a domain out loud. Ask them to teach you, then actually learn it.',
      'When they beat you, say so plainly. No qualifier, no story about your prime.',
    ],
    warrant: {
      passages: ['John 3:30', 'Numbers 27:18-20'],
      exegesis:
        'John the Baptist, at the height of his following, says of Christ "he must increase, but I must decrease" — a deliberate handover framed as fulfilment rather than loss. Moses is instructed to commission Joshua publicly, laying hands on him and investing "some of your authority" in the sight of the congregation, so the transfer is witnessed.',
      application:
        'Both texts model authority handed over on purpose and in the open. A father visibly enjoying being surpassed is enacting a pattern Scripture treats as maturity rather than decline.',
      misuse:
        'John 3:30 is applied as a general call to self-erasure, including in situations where someone should hold their ground; John is speaking about his specific role relative to Christ, not issuing a rule that every person should shrink.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['handover', 'humility', 'counselor', 'father-voice'],
  },
  {
    id: 'see.mother.emerging-adult',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: ['emerging-adult'] },
    voice: 'mother',
    pairedWith: 'see.father.emerging-adult',
    title: 'What you do with the empty room',
    lede: 'Your nineteen-year-old is watching what happens to you now that they have gone.',
    body:
      'Your nineteen-year-old is watching what happens to you now. Twenty years of occupation moved out. Build something in that space and you free them to leave properly. Hollow out and you hand them a debt they never agreed to. They pay it in guilt, in dutiful calls, or in staying away because the calls got heavy. This is one of the last big things you model. It is also, plainly, for you.',
    actions: [
      'Start one thing this year that has nothing to do with your children.',
      'When they ask how you are, answer with your life, not news about them.',
    ],
    warrant: {
      passages: ['Proverbs 31:25', 'Psalm 92:14'],
      exegesis:
        '"Strength and dignity are her clothing, and she laughs at the time to come" — the portrait is of a woman oriented forward without anxiety, and the laughter is at the future rather than about the past. Psalm 92:14: "they still bear fruit in old age; they are ever full of sap and green," a claim that fruitfulness is not a stage that ends.',
      application:
        'Scripture pictures a woman with a future, not a completed assignment. A mother continuing to grow after the house empties is living the text, and incidentally releasing her child from managing her grief.',
      misuse:
        'Proverbs 31 is used as a checklist against which real women are measured and found wanting; it is a poem in praise of a composite figure, in an acrostic, spoken by a mother to a son about what to value. Reading it as a performance standard is close to the opposite of its function.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['empty-nest', 'release', 'mother-voice'],
  },

  // ================================================= YOUNG ADULT (20–22) ===
  {
    id: 'see.father.young-adult',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: ['young-adult'] },
    voice: 'father',
    pairedWith: 'see.mother.young-adult',
    title: 'Your life is now the argument',
    body:
      'Your child now reads your life as a finished case. Not a set of rules. They can see what two decades of choices produced. Whether the marriage is warm. Whether the faith held under something hard. Whether you have friends. It is the most honest assessment you will get, and no speech can change it. What is left is the part still being lived. They are taking notes for their own turn.',
    actions: [
      'Keep doing the things you would want them to do at sixty. That is the remaining lesson.',
      'Tell them one thing you would do differently, without self-pity, as information rather than confession.',
    ],
    warrant: {
      passages: ['Psalm 78:4', '2 Timothy 4:7'],
      exegesis:
        'Psalm 78 commits to telling "the coming generation the glorious deeds of the LORD" — a generational handover of testimony, and the psalm is candid about Israel\'s failures alongside God\'s acts. Paul\'s "I have fought the good fight, I have finished the race, I have kept the faith" is a life offered as completed evidence.',
      application:
        'Scripture treats a life as the final testimony handed to the next generation, and does not require that the testimony be flawless — Psalm 78 includes the failures on purpose.',
      misuse:
        '2 Timothy 4:7 is misused as a standard of achieved success that shames anyone whose life did not resolve neatly; Paul writes it from prison, shortly before execution, having been abandoned by most of his colleagues. It is not a victory lap.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: false },
    tags: ['legacy', 'testimony', 'father-voice'],
  },
  {
    id: 'see.mother.young-adult',
    version: 1,
    claimType: 'normative',
    category: 'SEE',
    scope: { kind: 'stage', stages: ['young-adult'] },
    voice: 'mother',
    pairedWith: 'see.father.young-adult',
    title: 'How you treat the person they chose',
    body:
      'If your child is with someone, you now model how you treat that person. Warmth toward someone you would not have chosen proves you meant it about their flourishing. Say your reservation once. Early, privately, then set it down. A partner who worked out they were being tolerated does not forget. This is where a good twenty-year relationship quietly starts to cool.',
    actions: [
      'Say your reservation once, privately, then commit to the relationship you actually have.',
      'Build something direct with their partner that does not route through your child.',
    ],
    warrant: {
      passages: ['Ruth 1:16-17', 'Romans 12:10'],
      exegesis:
        'Ruth\'s "your people shall be my people, and your God my God" is spoken to Naomi, her mother-in-law — the Bible\'s most famous statement of covenant loyalty runs along an in-law relationship, and it is the younger woman choosing the older. Romans 12:10: "love one another with brotherly affection. Outdo one another in showing honour."',
      application:
        'Scripture treats in-law relationships as sites of real covenant loyalty rather than tolerated proximity. A mother extending genuine honour to her child\'s partner is working in a tradition the book of Ruth takes seriously enough to build a genealogy on.',
      misuse:
        'Ruth 1:16-17 is routinely read at weddings as though spoken between spouses. Knowing it is a daughter-in-law speaking to a mother-in-law changes what it demands — and makes it considerably more pointed for the parent hearing it.',
      theologicalReviewer: TOBIAS,
      reviewDate: REVIEWED,
    },
    provenance: EDITORIAL,
    signal: { emphasis: true, opportunity: true },
    tags: ['in-laws', 'honour', 'mother-voice'],
  },
];
