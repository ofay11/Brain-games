import { randomInteger, gameBase } from '../index.js';

const gcdGame = () => {
  const question = 'Find the greatest common divisor of given numbers.';

  // use the euclidean algorithm
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
