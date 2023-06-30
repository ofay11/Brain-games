import startGameLoop from '../index.js';
import generateRandomInt from '../generateRandomInt.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

// parity check
const isEven = (number) => number % 2 === 0;

// generation of question and solutions
const generateQuestionSolution = () => {
  const randomNumber = generateRandomInt();
  const question = randomNumber;
  const solution = isEven(randomNumber) ? 'yes' : 'no';

  return [question, solution];
};

const startEvenGame = () => {
  startGameLoop(task, generateQuestionSolution);
};

export default startEvenGame;
