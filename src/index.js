import readlineSync from 'readline-sync';
import greetUser from './cli.js';

export default (task, generateQuestionSolution) => {
  // Getting the username. Greet the user only if we haven't done so before
  const userName = greetUser();

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
