/**
 * Verse text for the passages the substrate cites most.
 *
 * World English Bible, which is public domain. Cairn ships scripture on its
 * own surface (section 5's weekly card, section 21's dashboard), and a
 * reference with no words on it is not scripture in a product sense — it is a
 * footnote. Licensed translations would each need their own agreement and
 * their own attribution rules, so the WEB is what ships until someone
 * negotiates otherwise.
 *
 * Keyed by the normalized display form that parseScriptureRef produces.
 */
export interface Verse {
  readonly reference: string;
  readonly text: string;
}

export const VERSES: Readonly<Record<string, string>> = {
  'Luke 16:10':
    'He who is faithful in a very little is faithful also in much. He who is dishonest in a very little is also dishonest in much.',
  'Luke 2:52': 'And Jesus increased in wisdom and stature, and in favor with God and men.',
  'Matthew 3:17':
    'Behold, a voice out of the heavens said, "This is my beloved Son, with whom I am well pleased."',
  'Proverbs 25:11': 'A word fitly spoken is like apples of gold in settings of silver.',
  '1 Corinthians 13:11':
    'When I was a child, I spoke as a child, I felt as a child, I thought as a child. Now that I have become a man, I have put away childish things.',
  'Genesis 2:24':
    'Therefore a man will leave his father and his mother, and will join with his wife, and they will be one flesh.',
  '3 John 1:4': 'I have no greater joy than this: to hear about my children walking in truth.',
  'Deuteronomy 6:6-9':
    'These words, which I command you today, shall be on your heart; and you shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise up.',
  'Deuteronomy 6:7':
    'You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise up.',
  'Proverbs 27:23': 'Know well the state of your flocks, and pay attention to your herds.',
  'Galatians 5:22-23':
    'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faith, gentleness, and self-control.',
  'Titus 2:7': 'In all things show yourself an example of good works. In your teaching, show integrity, seriousness.',
  '1 Corinthians 11:1': 'Be imitators of me, even as I also am of Christ.',
  'Ephesians 4:26': 'Be angry, and do not sin. Do not let the sun go down on your wrath.',
  'Proverbs 22:6': 'Train up a child in the way he should go, and when he is old he will not depart from it.',
  '2 Thessalonians 3:10': 'If anyone is not willing to work, do not let him eat.',
  'Proverbs 22:7': 'The rich rule over the poor. The borrower is servant to the lender.',
  '2 Timothy 1:5':
    'I have been reminded of the sincere faith that is in you, which lived first in your grandmother Lois, and your mother Eunice, and, I am persuaded, in you also.',
  'Psalms 139:13-16':
    'For you formed my inmost being. You knit me together in my mother\'s womb. I will give thanks to you, for I am fearfully and wonderfully made.',
  'Ephesians 6:4':
    'You fathers, do not provoke your children to wrath, but nurture them in the discipline and instruction of the Lord.',
  'Colossians 3:21': 'Fathers, do not provoke your children, so that they will not be discouraged.',
  '1 Thessalonians 2:7-12':
    'We were gentle among you, like a nursing mother cherishes her own children. As you know, we exhorted, comforted, and implored every one of you, as a father does his own children.',
  'Micah 6:8':
    'He has shown you, O man, what is good. What does Yahweh require of you, but to act justly, to love mercy, and to walk humbly with your God?',
  'Romans 12:2':
    'Do not be conformed to this world, but be transformed by the renewing of your mind.',
  'Philippians 4:6-7':
    'In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God.',
  'Psalms 127:3': 'Behold, children are a heritage of Yahweh. The fruit of the womb is his reward.',
  'Joshua 4:6-7':
    'That this may be a sign among you, that when your children ask in time to come, saying, "What do you mean by these stones?" then you shall tell them.',
  'Joshua 4:4-7':
    'That this may be a sign among you, that when your children ask in time to come, saying, "What do you mean by these stones?" then you shall tell them.',
  'Proverbs 15:1': 'A gentle answer turns away wrath, but a harsh word stirs up anger.',
  'Ephesians 4:29':
    'Let no corrupt speech proceed out of your mouth, but only what is good for building others up as the need may be, that it may give grace to those who hear.',
  '1 Peter 3:15':
    'Always be ready to give an answer to everyone who asks you a reason concerning the hope that is in you, with humility and fear.',
  'Romans 5:8':
    'But God commends his own love toward us, in that while we were yet sinners, Christ died for us.',
  '1 John 4:19': 'We love him, because he first loved us.',
  'Proverbs 17:17': 'A friend loves at all times; and a brother is born for adversity.',
  '1 Corinthians 13:8':
    'Love never fails. But where there are prophecies, they will be done away with.',
  '1 Corinthians 6:18-20':
    'Do you not know that your body is a temple of the Holy Spirit who is in you, whom you have from God? You are not your own, for you were bought with a price.',
  '1 Corinthians 6:19-20':
    'Your body is a temple of the Holy Spirit who is in you, whom you have from God. You are not your own, for you were bought with a price. Therefore glorify God in your body.',
  '1 Corinthians 9:27':
    'But I beat my body and bring it into submission, lest by any means, after I have preached to others, I myself should be rejected.',
  '1 Peter 2:17':
    'Honor all men. Love the brotherhood. Fear God. Honor the king.',
  '1 Peter 5:7':
    'Cast all your worries on him, because he cares for you.',
  '1 Samuel 16:7':
    'Man looks at the outward appearance, but Yahweh looks at the heart.',
  '1 Thessalonians 2:7':
    'But we were gentle among you, like a nursing mother cherishes her own children.',
  '1 Thessalonians 2:7-8':
    'We were gentle among you, like a nursing mother cherishes her own children. Even so, affectionately longing for you, we were well pleased to impart to you not the Good News of God only, but also our own souls.',
  '1 Thessalonians 5:11':
    'Therefore exhort one another, and build each other up, even as you also do.',
  '1 Timothy 4:12-16':
    'Let no man despise your youth; but be an example to those who believe, in word, in your way of life, in love, in spirit, in faith, and in purity.',
  '1 Timothy 5:2':
    'Treat the elder women as mothers, and the younger as sisters, in all purity.',
  '1 Timothy 6:17-19':
    'Charge those who are rich in this present world that they not be arrogant, nor have their hope set on the uncertainty of riches, but on God, who richly provides us with everything to enjoy; that they do good, that they be rich in good works, that they be ready to distribute.',
  '2 Corinthians 12:9':
    'He has said to me, \\"My grace is sufficient for you, for my power is made perfect in weakness.\\"',
  '2 Corinthians 6:14':
    'Do not be unequally yoked with unbelievers, for what fellowship do righteousness and iniquity have?',
  '2 Timothy 3:14-15':
    'But you remain in the things which you have learned and have been assured of, knowing from whom you have learned them. From infancy, you have known the sacred writings which are able to make you wise for salvation.',
  '2 Timothy 3:15':
    'From infancy, you have known the sacred writings which are able to make you wise for salvation through faith which is in Christ Jesus.',
  '2 Timothy 4:6-8':
    'I have fought the good fight. I have finished the course. I have kept the faith.',
  '2 Timothy 4:7':
    'I have fought the good fight. I have finished the course. I have kept the faith.',
  'Colossians 3:23':
    'And whatever you do, work heartily, as for the Lord and not for men.',
  'Deuteronomy 31:8':
    'Yahweh himself is who goes before you. He will be with you. He will not fail you nor forsake you. Do not be afraid. Do not be discouraged.',
  'Deuteronomy 6:20-21':
    'When your son asks you in time to come, saying, \\"What do the testimonies, the statutes, and the ordinances mean?\\" then you shall tell your son, \\"We were slaves, and Yahweh brought us out with a mighty hand.\\"',
  'Deuteronomy 6:20-25':
    'When your son asks you in time to come, saying, \\"What do the testimonies mean?\\" then you shall tell your son the story of what God has done.',
  'Deuteronomy 6:4-7':
    'Hear, Israel: Yahweh is our God. Yahweh is one. You shall love Yahweh your God with all your heart, with all your soul, and with all your might. These words shall be on your heart; and you shall teach them diligently to your children.',
  'Ephesians 4:2-3':
    'With all lowliness and humility, with patience, bearing with one another in love, being eager to keep the unity of the Spirit in the bond of peace.',
  'Ephesians 4:25':
    'Therefore putting away falsehood, speak truth each one with his neighbor, for we are members of one another.',
  'Ephesians 4:26-27':
    'Be angry, and do not sin. Do not let the sun go down on your wrath, and do not give place to the devil.',
  'Ephesians 5:25':
    'Husbands, love your wives, even as Christ also loved the assembly and gave himself up for her.',
  'Ephesians 5:25-33':
    'Husbands, love your wives, even as Christ also loved the assembly and gave himself up for her. Even so husbands also ought to love their own wives as their own bodies.',
  'Ephesians 5:3':
    'But sexual immorality, and all uncleanness or covetousness, let it not even be mentioned among you, as becomes saints.',
  'Ephesians 5:33':
    'Nevertheless each of you must also love his own wife even as himself.',
  'Ephesians 6:1-4':
    'Children, obey your parents in the Lord, for this is right. You fathers, do not provoke your children to wrath, but nurture them in the discipline and instruction of the Lord.',
  'Esther 4:14':
    'Who knows if you have not come to the kingdom for such a time as this?',
  'Galatians 6:7':
    'Do not be deceived. God is not mocked, for whatever a man sows, that he will also reap.',
  'Genesis 1:27':
    'God created man in his own image. In God\'s image he created him; male and female he created them.',
  'Genesis 27:1-4':
    'Isaac said, \\"Behold now, I am old. I do not know the day of my death. Now therefore make me savory food, that my soul may bless you before I die.\\"',
  'Genesis 2:15':
    'Yahweh God took the man, and put him into the garden of Eden to cultivate and keep it.',
  'Genesis 48:15-16':
    'He blessed Joseph, and said, \\"The God before whom my fathers walked, the God who has fed me all my life long to this day, bless the boys.\\"',
  'Genesis 48:8-9':
    'Israel saw Joseph\'s sons, and said, \\"Who are these?\\" Joseph said to his father, \\"They are my sons.\\" He said, \\"Please bring them to me, and I will bless them.\\"',
  'Hebrews 10:24-25':
    'Let us consider how to provoke one another to love and good works, not forsaking our own assembling together, but exhorting one another.',
  'Hebrews 11:1':
    'Now faith is assurance of things hoped for, proof of things not seen.',
  'Hebrews 12:7-11':
    'God deals with you as with children. No discipline seems joyous at the time, but grievous; yet afterward it yields the peaceful fruit of righteousness to those who have been trained by it.',
  'Isaiah 41:10':
    'Do not be afraid, for I am with you. Do not be dismayed, for I am your God. I will strengthen you. I will help you.',
  'Isaiah 49:15':
    'Can a woman forget her nursing child, that she should not have compassion on the son of her womb? Even these may forget, yet I will not forget you.',
  'Isaiah 66:13':
    'As one whom his mother comforts, so I will comfort you.',
  'James 1:19-20':
    'Let every man be swift to hear, slow to speak, and slow to anger; for the anger of man does not produce the righteousness of God.',
  'James 2:1-4':
    'My brothers, do not hold the faith of our Lord Jesus Christ with partiality. Have you not shown partiality among yourselves, and become judges with evil thoughts?',
  'James 5:16':
    'Confess your sins to one another and pray for one another, that you may be healed.',
  'Job 31:1':
    'I made a covenant with my eyes; how then should I look lustfully at a young woman?',
  'John 20:27':
    'Then he said to Thomas, \\"Reach here your finger, and see my hands. Do not be unbelieving, but believing.\\"',
  'John 3:30':
    'He must increase, but I must decrease.',
  'John 8:10-11':
    'Jesus said, \\"Neither do I condemn you. Go your way. From now on, sin no more.\\"',
  'Joshua 24:15':
    'Choose today whom you will serve. But as for me and my house, we will serve Yahweh.',
  'Jude 1:22':
    'On some have compassion, making a distinction.',
  'Luke 15:20':
    'But while he was still far off, his father saw him, and was moved with compassion, and ran, and fell on his neck, and kissed him.',
  'Luke 19:8':
    'Zacchaeus stood and said to the Lord, \\"Behold, Lord, half of my goods I give to the poor. If I have wrongfully exacted anything of anyone, I restore four times as much.\\"',
  'Luke 1:57-66':
    'Her neighbors and her relatives heard that the Lord had magnified his mercy toward her, and they rejoiced with her.',
  'Luke 24:27':
    'Beginning from Moses and from all the prophets, he explained to them in all the Scriptures the things concerning himself.',
  'Luke 2:41-52':
    'After three days they found him in the temple, sitting in the middle of the teachers, both listening to them and asking them questions.',
  'Mark 10:13-16':
    'They were bringing to him little children, that he should touch them. Jesus said, \\"Allow the little children to come to me! Do not forbid them.\\" He took them in his arms and blessed them.',
  'Mark 10:14':
    'Allow the little children to come to me! Do not forbid them, for God\'s Kingdom belongs to such as these.',
  'Mark 6:31':
    'He said to them, \\"Come away into a deserted place, and rest a while.\\"',
  'Mark 9:24':
    'Immediately the father of the child cried out with tears, \\"I believe. Help my unbelief!\\"',
  'Matthew 18:15':
    'If your brother sins against you, go, show him his fault between you and him alone.',
  'Matthew 25:40':
    'The King will answer them, \\"Most certainly I tell you, because you did it to one of the least of these my brothers, you did it to me.\\"',
  'Matthew 5:23-24':
    'If you are offering your gift at the altar, and there remember that your brother has anything against you, leave your gift there. First be reconciled to your brother.',
  'Matthew 5:28':
    'But I tell you that everyone who gazes at a woman to lust after her has committed adultery with her already in his heart.',
  'Matthew 5:37':
    'But let your \\"Yes\\" be \\"Yes\\" and your \\"No\\" be \\"No.\\"',
  'Matthew 6:21':
    'For where your treasure is, there your heart will be also.',
  'Matthew 6:34':
    'Therefore do not be anxious for tomorrow, for tomorrow will be anxious for itself.',
  'Numbers 27:18-20':
    'Take Joshua, a man in whom is the Spirit, and lay your hand on him. You shall put of your honor on him, that all the congregation may obey.',
  'Numbers 6:24-26':
    'Yahweh bless you, and keep you. Yahweh make his face to shine on you, and be gracious to you. Yahweh lift up his face toward you, and give you peace.',
  'Philippians 1:6':
    'Being confident of this very thing, that he who began a good work in you will complete it.',
  'Philippians 2:12':
    'So then, my beloved, even as you have always obeyed, not only in my presence, but now much more in my absence, work out your own salvation with fear and trembling.',
  'Philippians 2:3':
    'Doing nothing through rivalry or through conceit, but in humility, each counting others better than himself.',
  'Proverbs 16:24':
    'Pleasant words are a honeycomb, sweet to the soul, and health to the bones.',
  'Proverbs 19:19':
    'A hot-tempered man must pay the penalty, for if you rescue him, you must do it again.',
  'Proverbs 20:5':
    'Counsel in the heart of man is like deep water, but a man of understanding will draw it out.',
  'Proverbs 21:20':
    'There is precious treasure and oil in the dwelling of the wise, but a foolish man swallows it up.',
  'Proverbs 24:16':
    'For a righteous man falls seven times and rises up again.',
  'Proverbs 24:27':
    'Prepare your work outside, and get your fields ready. Afterwards, build your house.',
  'Proverbs 28:13':
    'He who conceals his sins does not prosper, but whoever confesses and renounces them finds mercy.',
  'Proverbs 31:25':
    'Strength and dignity are her clothing. She laughs at the time to come.',
  'Proverbs 31:25-26':
    'Strength and dignity are her clothing. She laughs at the time to come. She opens her mouth with wisdom. Faithful instruction is on her tongue.',
  'Proverbs 31:28':
    'Her children rise up and call her blessed.',
  'Proverbs 31:30':
    'Charm is deceitful, and beauty is vain; but a woman who fears Yahweh, she shall be praised.',
  'Proverbs 31:8-9':
    'Open your mouth for the mute, in the cause of all who are left desolate. Judge righteously, and serve justice to the poor and needy.',
  'Proverbs 3:11-12':
    'My son, do not despise Yahweh\'s discipline, for whom Yahweh loves, he corrects, even as a father reproves the son in whom he delights.',
  'Psalms 127:3-5':
    'Behold, children are a heritage of Yahweh. The fruit of the womb is his reward.',
  'Psalms 139:13-14':
    'For you formed my inmost being. You knit me together in my mother\'s womb. I will give thanks to you, for I am fearfully and wonderfully made.',
  'Psalms 15:4':
    'He who keeps an oath even when it hurts, and does not change.',
  'Psalms 19:1':
    'The heavens declare the glory of God. The expanse shows his handiwork.',
  'Psalms 62:5-8':
    'My soul, wait in silence for God alone, for my expectation is from him. Trust in him at all times, you people. Pour out your heart before him. God is a refuge for us.',
  'Psalms 68:5-6':
    'A father of the fatherless, and a defender of the widows, is God in his holy habitation. God sets the lonely in families.',
  'Psalms 78:1-8':
    'We will not hide them from their children, telling to the generation to come the praises of Yahweh, that the generation to come might know, even the children who should be born.',
  'Psalms 78:4':
    'We will not hide them from their children, telling to the generation to come the praises of Yahweh, and his strength, and his wondrous deeds that he has done.',
  'Psalms 78:4-7':
    'Telling to the generation to come the praises of Yahweh, that the generation to come might know, that they might set their hope in God.',
  'Psalms 78:5-7':
    'He established a covenant, which he commanded our fathers, that they should make them known to their children, that the generation to come might know.',
  'Psalms 78:5-8':
    'That they should make them known to their children, that the generation to come might know, and might not be as their fathers, a stubborn and rebellious generation.',
  'Psalms 92:14':
    'They will still produce fruit in old age. They will be full of sap and green.',
  'Romans 12:10':
    'In love of the brothers be tenderly affectionate to one another; in honor preferring one another.',
  'Romans 13:7':
    'Give therefore to everyone what you owe: respect to whom respect is due; honor to whom honor is due.',
  'Romans 2:21':
    'You therefore who teach another, do you not teach yourself?',
  'Romans 2:4':
    'Do you despise the riches of his goodness, not knowing that the goodness of God leads you to repentance?',
  'Romans 8:1':
    'There is therefore now no condemnation to those who are in Christ Jesus.',
  'Ruth 1:16-17':
    'Where you go, I will go; and where you stay, I will stay. Your people shall be my people, and your God my God.',
  'Song of Solomon 4:7':
    'You are all beautiful, my love. There is no spot in you.',
  'Titus 2:3-5':
    'That older women likewise be reverent in behavior, teachers of that which is good, that they may train the young women to love their husbands and their children.',
  'Titus 2:4':
    'That they may train the young women to love their husbands, to love their children.',
  'Titus 2:7-8':
    'In all things show yourself an example of good works. In your teaching, show integrity, seriousness, and soundness of speech that cannot be condemned.',
  'Zephaniah 3:17':
    'Yahweh your God is among you, a mighty one who will save. He will rejoice over you with joy. He will calm you in his love. He will rejoice over you with singing.',
};

/** The verse text for a reference, if Cairn ships one. */
export function verseText(reference: string): string | null {
  return VERSES[reference] ?? null;
}

/** The first passage in a list that has verse text available. */
export function firstAvailableVerse(references: readonly string[]): Verse | null {
  for (const reference of references) {
    const text = VERSES[reference];
    if (text) return { reference, text };
  }
  return null;
}
