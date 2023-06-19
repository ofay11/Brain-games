import { randomInteger, gameBase } from '../index.js';

const evenGame = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';

  // parity check
  const isEven = (number) => number % 2 === 0;

  // generation of tasks and solutions
  const randomTask = () => {
    const randomNumber = randomInteger();
    const solution = isEven(randomNumber) ? 'yes' : 'no';

    return [randomNumber, solution];
  };

  // passing question, task and solution to gameBase
  gameBase(question, randomTask);
};

export default evenGame;
