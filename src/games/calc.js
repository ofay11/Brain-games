import { randomInteger, gameBase } from '../index.js';

const calcGame = () => {
  const question = 'What is the result of the expression?';

  const signs = ['+', '-', '*'];

  const calculations = (a, operator, b) => {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      default:
        throw new Error('Invalid operator');
    }
  };

  // generation of tasks and solutions
  const randomTask = () => {
    const sign = signs[randomInteger(0, 2)];
    const firstNumber = randomInteger(1, 100);
    const secondNumber = randomInteger(1, 100);

    const task = `${firstNumber} ${sign} ${secondNumber}`;
    const solution = calculations(firstNumber, sign, secondNumber);

    return [task, solution];
  };

  // passing question, task and solution to gameBase
  gameBase(question, randomTask);
};

export default calcGame;
