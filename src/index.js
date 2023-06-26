import readlineSync from 'readline-sync';

export const randomInteger = (min = 1, max = 100) => {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const gameBase = (question, randomTask) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  const userNameKnown = userName !== '' && userName !== 'no';

  if (userNameKnown) {
    console.log(`Hello, ${userName}!`);
  } else {
    console.log('Hello Mr. Smith!');
  }

  console.log(question);

  for (let i = 0; i < 3; i += 1) {
    const [task, solution] = randomTask();
    console.log(`Question: ${task}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === String(solution)) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${solution}".`);

      if (userNameKnown) {
        console.log(`Let's try again, ${userName}!`);
      } else {
        console.log('Let\'s try again!');
      }
      return;
    }
  }

  if (userNameKnown) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log('Congratulations!');
  }
};
