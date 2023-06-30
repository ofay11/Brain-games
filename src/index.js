import readlineSync from 'readline-sync';

export default (task, generateQuestionSolution) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(task);

  const roundCounter = 3;
  for (let i = 0; i < roundCounter; i += 1) {
    const [question, solution] = generateQuestionSolution();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== String(solution)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${solution}".\nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
