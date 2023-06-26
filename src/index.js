import readlineSync from 'readline-sync';

export const randomInteger = (min = 1, max = 100) => {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const gameBase = (question, randomTask) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(question);

  for (let i = 0; i < 3; i += 1) {
    const [task, solution] = randomTask();
    console.log(`Question: ${task}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === String(solution)) {
      console.log('Correct!');
    } else {console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${solution}".\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
