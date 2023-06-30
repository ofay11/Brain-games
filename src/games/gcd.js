import startGameLoop from '../index.js';
import generateRandomInt from '../generateRandomInt.js';

const task = 'Find the greatest common divisor of given numbers.';

const euclideanAlgorithm = (a, b) => {
  let firstValue = a;
  let secondValue = b;
  while (secondValue !== 0) {
    const remainder = firstValue % secondValue;
    firstValue = secondValue;
    secondValue = remainder;
  }
  return firstValue;
};

const generateQuestionSolution = () => {
  const firstNumber = generateRandomInt(1, 100);
  const secondNumber = generateRandomInt(1, 100);

  const question = `${firstNumber} ${secondNumber}`;
  const solution = euclideanAlgorithm(firstNumber, secondNumber);

  return [question, solution];
};

const startGcdGame = () => {
  startGameLoop(task, generateQuestionSolution);
};

export default startGcdGame;
