import { randomInteger, gameBase } from '../index.js';

const gcdGame = () => {
  const question = 'Find the greatest common divisor of given numbers.';

  // use the euclidean algorithm
  const euclideanAlgorithm = (a, b) => {
    while (b !== 0) {
      const remainder = a % b;
      a = b;
      b = remainder;
    }
    return a;
  };

  const randomTask = () => {
    const firstNumber = randomInteger(1, 100);
    const secondNumber = randomInteger(1, 100);

    const task = `${firstNumber} ${secondNumber}`;
    const solution = euclideanAlgorithm(firstNumber, secondNumber);

    return [task, solution];
  };

  // passing question, task and solution to gameBase
  gameBase(question, randomTask);
};

export default gcdGame;
