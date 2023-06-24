import { randomInteger, gameBase } from '../index.js';

const progressionGame = () => {
  const question = 'What number is missing in the progression?';

  const randomTask = () => {
    const arrayLength = randomInteger(5, 10);
    const hiddenElement = randomInteger(0, arrayLength - 1);
    const firstNumber = randomInteger(1, 100);
    const progressionValue = randomInteger(2, 100);

    const arrayNumbers = [firstNumber];
    let solution = 0;

    for (let i = 0; i < arrayLength; i += 1) {
      const nextNumber = arrayNumbers[i] + progressionValue;
      arrayNumbers.push(nextNumber);

      if (i === hiddenElement) {
        solution = arrayNumbers[i];
        arrayNumbers[hiddenElement] = '..';
      }
    }
    const task = arrayNumbers.join(' ');

    return [task, solution];
  };

  gameBase(question, randomTask);
};

export default progressionGame;
