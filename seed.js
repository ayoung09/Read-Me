const db = require('./models');
const Text = require('./models/text');

const seedTexts = () => db.Promise.map([
  {title: 'The Red Pony',
    body: 'When the triangle sounded in the morning, Jody dressed more quickly even than usual. In the kitchen, while he washed his face and combed back his hair, his mother addressed him irritably. “Don’t you go out until you get a good breakfast in you.” \\n He went into the dining room and sat at the long white table. He took a steaming hotcake from the platter, arranged two fried eggs on it, covered them with another hotcake and squashed the whole thing with his fork. \\n His father and Billy Buck came in. Jody knew from the sound on the floor that both of them were wearing flat-heeled shoes, but he peered under the table to make sure. His father turned off the oil lamp, for the day had arrived, and he looked stern and disciplinary, but Billy Buck didn’t look at Jody at all. He avoided the shy questioning eyes of the boy and soaked a whole piece of toast in his coffee. \\n Carl Tiflin said crossly, “You come with us after breakfast!” \\n Jody had trouble with his food then, for he felt a kind of doom in the air. . . . The two men stood up from the table and went out into the morning light together, and Jody respectfully followed a little behind them. He tried to keep his mind from running ahead, tried to keep it absolutely motionless.'},
  {title: 'Raymond\'s Run',
    body: 'I don’t have much work to do around the house like some girls. My mother does that. And I don’t have to earn my pocket money. And anything else that’s got to get done, my father does. All I have to do in life is mind my brother Raymond, which is enough. \\n Sometimes I slip and say my little brother Raymond. But as any fool can see he’s much bigger and he’s older too. But a lot of people call him my little brother cause he needs looking after cause he’s not quite right. And a lot of smart mouths got lots to say about that too. But now, if anybody has anything to say to Raymond, anything to say about his big head, they have to come by me. And I don’t play the dozens or believe in standing around with somebody in my face doing a lot of talking. I much rather just knock you down and take my chances even if I am a little girl with skinny arms and a squeaky voice, which is how I got the name Squeaky. And if things get too rough, I run. And as anybody can tell you, I’m the fastest thing on two feet.'}
], text => Text.create(text));


db.sync({force: true})
.then(() => seedTexts())
.then(() => {
  console.log('Data seeded successfully');
})
.catch(err => {
  console.error('There was a problem seeding database: ', err, err.stack);
});
