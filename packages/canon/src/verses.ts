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
