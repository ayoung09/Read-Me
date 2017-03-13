const db = require('./models');
const Text = require('./models/text');

const seedTexts = () => db.Promise.map([
  {title: 'Short Sample Text',
    body: 'This is a sample text that a student would read.'},
  {title: 'The Red Pony',
    body: 'When the triangle sounded in the morning, Jody dressed more quickly even than usual. In the kitchen, while he washed his face and combed back his hair, his mother addressed him irritably. “Don’t you go out until you get a good breakfast in you.” He went into the dining room and sat at the long white table. He took a steaming hotcake from the platter, arranged two fried eggs on it, covered them with another hotcake and squashed the whole thing with his fork. His father and Billy Buck came in. Jody knew from the sound on the floor that both of them were wearing flat-heeled shoes, but he peered under the table to make sure. His father turned off the oil lamp, for the day had arrived, and he looked stern and disciplinary, but Billy Buck didn’t look at Jody at all. He avoided the shy questioning eyes of the boy and soaked a whole piece of toast in his coffee. Carl Tiflin said crossly, “You come with us after breakfast!” Jody had trouble with his food then, for he felt a kind of doom in the air. . . . The two men stood up from the table and went out into the morning light together, and Jody respectfully followed a little behind them. He tried to keep his mind from running ahead, tried to keep it absolutely motionless.'},
  {title: 'Raymond\'s Run',
    body: 'I don’t have much work to do around the house like some girls. My mother does that. And I don’t have to earn my pocket money. And anything else that’s got to get done, my father does. All I have to do in life is mind my brother Raymond, which is enough. Sometimes I slip and say my little brother Raymond. But as any fool can see he’s much bigger and he’s older too. But a lot of people call him my little brother cause he needs looking after cause he’s not quite right. And a lot of smart mouths got lots to say about that too. But now, if anybody has anything to say to Raymond, anything to say about his big head, they have to come by me. And I don’t play the dozens or believe in standing around with somebody in my face doing a lot of talking. I much rather just knock you down and take my chances even if I am a little girl with skinny arms and a squeaky voice, which is how I got the name Squeaky. And if things get too rough, I run. And as anybody can tell you, I’m the fastest thing on two feet.'},
    {title: 'Innocence and Capital Punishment',
      body: 'The issue of innocence has changed the death penalty debate in this country. The importance of this issue has increased in recent years with the development of DNA technology. This science has led to the discovery of a disturbing number of mistakes in capital cases and to the release of many wrongfully convicted inmates. The potential for wrongful convictions in capital cases has led many people to question the reliability of the criminal justice system. Mistaken eyewitness identifications, false confessions, faulty science, and unreliable informant testimony have been identified as causes leading to the conviction of innocent people.'},
      {title: 'Hammurabi\'s Code',
        body: '"An eye for an eye, and a tooth for a tooth." This phrase, along with the idea of written laws, goes back to ancient Mesopotamian culture that prospered long before the Bible was written or the civilizations of the Greeks or Romans flowered. "An eye for an eye ..." is a paraphrase of Hammurabi\'s Code, a collection of 282 laws inscribed on an upright stone pillar. The code was found in 1901 while digging up the ancient city of Susa, which is in modern-day Iran. Hammurabi is the best known and most celebrated of all Mesopotamian kings. He ruled the Babylonian Empire from 1792-50 B.C. Although he was concerned with keeping order in his kingdom, this was not his only reason for assembling the list of laws. As he conquered more territory and his empire grew, he saw the need to unify the various groups of people he controlled.'},
], text => Text.create(text));


db.sync({force: true})
.then(() => seedTexts())
.then(() => {
  console.log('Data seeded successfully');
})
.catch(err => {
  console.error('There was a problem seeding database: ', err, err.stack);
});
