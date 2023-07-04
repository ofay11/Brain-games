import startGameLoop from '../index.js';
import generateRandomInt from '../generateRandomInt.js';

const task = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
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
  const firstRandomNumber = generateRandomInt(1, 100);
  const secondRandomNumber = generateRandomInt(1, 100);

  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const solution = findGcd(firstRandomNumber, secondRandomNumber);

  return [question, solution];
};

const startGcdGame = () => {
  startGameLoop(task, generateQuestionSolution);
};

export default startGcdGame;
