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
    title: 'They can now narrate what you did',
    body:
      'The change at five is that your child can tell someone else what happened. Not just absorb it — recount it, to a teacher, to a grandparent, to themselves. That is when modelling stops being ambient and starts being testimony. The two behaviours children reproduce most reliably at this age are what a father does with his anger and what he does with his phone when someone is talking to him. Neither is a lecture topic. Both are being recorded verbatim.',
    actions: [
      'Put the phone face-down and out of reach when they start talking. They are timing you.',
      'When you lose your temper, repair it in front of them — name what you did, without excusing it.',
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
    title: 'How you treat people who can do nothing for you',
    body:
      'Five- to seven-year-olds are unusually attentive to how adults treat other adults, and they draw the category lines from what they see: who counts, who can be spoken to sharply, whose name you bother to learn. The cashier, the neighbour who talks too long, the person who got your order wrong. Children do not extract a principle from this — they extract a map. A mother who is warm to her friends and clipped to strangers has taught a working theory of human worth without saying a sentence about it.',
    actions: [
      'Learn and use one service worker\'s name where your child can hear you do it.',
      'When someone is difficult in front of your child, say afterwards what you were choosing and why — not that you were right.',
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
    title: 'What your child hears you say about your work',
    body:
      'Somewhere around seven a child starts asking what you actually do all day, and the answer they retain is not the job title — it is the tone. A father who narrates work as endurance ("I hate it, but the bills") teaches that adult life is a sentence to be served. A father who narrates it as contribution, including the parts that are genuinely tedious, teaches that work is something a person does on purpose. This is not a case for pretending. It is a case for saying the true whole thing: this part is dull, this part matters, here is who is better off because I did it.',
    actions: [
      'Describe one specific thing your work accomplished this week for a person who is not you.',
      'Take them to where you work, or show them the thing you made, once this year.',
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
    title: 'What you do with your own mistakes, watched by a perfectionist',
    body:
      'Seven to nine is when many children — daughters disproportionately — begin to fear getting things wrong in a way that is genuinely costly: not trying, hiding work, crying over a rubbed-out line. The most effective intervention is not reassurance. It is watching their mother be wrong out loud and survive it, visibly, without spiralling or self-attacking. "I got that wrong, I am going to redo it" said flatly and then acted on teaches something no amount of "it is okay to make mistakes" can, because the child is checking whether you believe it about yourself.',
    actions: [
      'Say "I was wrong about that" out loud, in front of them, at least once this month — and then move on without self-criticism.',
      'Let them see you attempt something you are visibly bad at, and keep going.',
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
    title: 'They can read the room now — including the silences',
    body:
      'Around nine or ten a child stops needing raised voices to know there is a conflict. They read the shortened sentences, the exits, the temperature. This is the age at which a marriage stops being described to a child and starts being interpreted by them. The worksheet marks Dad Loving Mom across the entire span for a reason — but the content of that row changes here. What they need to see is not the absence of disagreement, which they will correctly identify as concealment. It is disagreement handled: you can hear it start, and you can see it end, and nothing was destroyed in between.',
    actions: [
      'Let them witness one ordinary disagreement resolve, rather than exporting every conflict behind a closed door.',
      'Speak well of your wife when she is not in the room. They notice which version they are hearing.',
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
    title: 'Your friendships are their syllabus',
    body:
      'Just as your child is entering the years when friendship becomes the dominant social fact of their life, they are watching yours — and mothers are usually the parent whose friendships are visible. What they learn is specific and durable: whether adult friendship survives disagreement, whether you talk about absent friends the way you talk to them, whether you have anyone at all. A ten-year-old navigating a first serious falling-out is running your example, because it is the only model of adult friendship they have watched at close range.',
    actions: [
      'Let them see you repair a friendship rather than replace it.',
      'Do not narrate your friends critically in front of them; they are calculating what you say about them elsewhere.',
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
    title: 'The audit begins: public you against private you',
    body:
      'Early adolescence brings a new cognitive capacity aimed straight at you — the ability to hold two versions of a person in mind and compare them. Your child now has years of data and the machinery to cross-reference it. How you are at church against how you are in the car on the way home. What you say about honesty against how you talk about your taxes. This is where hypocrisy becomes visible, and it is the leading reason adolescents give for discarding a faith later. The good news is that consistency, not flawlessness, is what passes the audit — and admitting a gap you have not yet closed counts as consistency.',
    actions: [
      'Name one gap between what you teach and how you live, out loud, before they name it.',
      'Check what changes about you between the church car park and the kitchen.',
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
    title: 'Your phone, against the rules you set about theirs',
    body:
      'This is the stage where device rules arrive, and where the first genuine charge of hypocrisy usually gets filed. It is often accurate. An adolescent told to leave the phone at dinner, by a parent scrolling at dinner, has learned exactly one thing: that the rule is about power rather than principle. Mothers are frequently the rule-setter here and the most-observed user. The rule can stand — an adult and a twelve-year-old genuinely do not have the same brain or the same risk — but the asymmetry has to be argued honestly rather than enforced silently, and it will not survive if your own use is unexamined.',
    actions: [
      'Apply one device rule to yourself first, visibly, for a month before you require it of them.',
      'Say out loud why the rules differ, and concede the parts where they do not.',
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
    title: 'Apologising to a fourteen-year-old, properly',
    body:
      'By fourteen your child has a detailed record of times you were wrong and did not say so. What they are watching for now is whether an adult man can apologise to someone with less power than him, specifically and without conditions. Most cannot. The tell is the shape: "I am sorry I shouted, but you were being impossible" is not an apology, and they can parse it instantly. The clean version names the act, omits their contribution, and asks nothing. It costs a father something real, which is precisely why it is one of the most formative things a fourteen-year-old can witness.',
    actions: [
      'Apologise once with no "but" clause and no request for a reciprocal apology.',
      'Do not follow it by explaining yourself. Let it stand alone.',
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
    title: 'What you do with your faith when nobody is watching',
    body:
      'Thirteen to fifteen is when many children first suspect their parents\' faith is social rather than real — a family activity with a building attached. The evidence that answers the suspicion is not attendance, which they can attribute to habit. It is the private practice they were not supposed to see: found praying at the kitchen table at an odd hour, a Bible that is visibly used on a Tuesday, a decision explained by conviction when the convenient option was available. Do not stage this. Staged versions are detected and are worse than nothing. Just stop concealing what is already there.',
    actions: [
      'Stop hiding your own practice out of self-consciousness. Let it be visible without being announced.',
      'Once, explain a decision you made on conviction that cost you something — briefly, without a moral attached.',
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
    title: 'What your money says, now that they understand money',
    body:
      'By sixteen your child understands household finance well enough to audit it: what gets bought quickly, what gets deliberated, what gets given away, whether generosity is a line item or a story you tell. This is the last stage where they are inside the accounts, and what they see becomes the default they carry into their own. A father who talks about stewardship and buys reflexively has taught the buying. One who visibly declines something affordable, or gives at a level that is actually felt, has taught something an entire youth-group series cannot.',
    actions: [
      'Let them see one real financial decision including the trade-off — what you did not buy so this could happen.',
      'Give once at a level that visibly costs the household something, and let them know it happened.',
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
    title: 'How you react the first time they say they are not sure they believe',
    body:
      'It usually arrives between fifteen and eighteen, often to the mother, often deliberately timed to be low-stakes — in a car, sideways, as though it were nothing. Your face in the first two seconds decides the next five years. Panic teaches that doubt is dangerous and must be conducted elsewhere, which is how a temporary question becomes a permanent departure conducted in silence. Calm interest teaches that this house can hold the question. You are not being asked to have an answer. You are being tested on whether the relationship can survive the honesty, and that is a much easier test to pass.',
    actions: [
      'Respond with a question, not a defence: "what brought that up?" Then listen without correcting.',
      'Say out loud that doubt does not put them outside the family or outside God\'s reach.',
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
    title: 'How you handle no longer being the strongest man in the room',
    body:
      'Somewhere around here your child overtakes you at something that used to be yours — physically, technically, or in plain competence at a thing you taught them. How a father takes that is watched with real interest, because it is a preview of every future transition in the relationship. Competing, minimising, or making a joke that lands as a correction all teach that your standing depended on being ahead. Straightforward pleasure in being overtaken teaches something else entirely: that the whole project was aimed at this, and you meant it.',
    actions: [
      'Concede a domain out loud. Ask them to teach you something and actually learn it.',
      'When they outperform you, say so plainly, without a qualifier or a story about your own prime.',
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
    title: 'What you do with the room they left',
    body:
      'Your nineteen-year-old is watching, from a distance, what happens to you now that the central occupation of two decades has moved out. This is not vanity on their part — it is load-bearing. A mother who visibly builds something in the vacated space frees her child to leave properly. A mother who visibly hollows out gives them a debt they did not agree to, and they will pay it in guilt, in over-frequent calls made from obligation, or in staying away because the calls are too heavy. What you do next is one of the last big things you model, and it is genuinely for you as well as for them.',
    actions: [
      'Start one thing this year that is yours and has nothing to do with your children. Let them hear about it.',
      'When they ask how you are, answer with your actual life rather than with news about them.',
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
      'At twenty-one your child evaluates your life as a completed case rather than a set of rules they are under. They can see what two decades of your choices produced: whether the marriage is warm, whether the faith held under something hard, whether the work was worth it, whether you have friends. This is the most honest assessment you will ever receive, and none of it is deliverable by speech any more. What is still available is the part still being lived — how you handle the next decade, including its losses. They are still watching, and now they are taking notes for their own turn.',
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
      'If your child is in a serious relationship, the single most consequential thing you now model is how you treat that person. Warmth toward someone you did not select, and would not have selected, is the clearest available evidence that you meant it when you said the goal was their flourishing rather than your preferences. Reservations can be spoken — once, early, privately, and then set down. What cannot be recovered is a partner who learned they were being tolerated. Mothers carry disproportionate weight here, and this is frequently where a good twenty-year relationship with a child quietly begins to cool.',
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
