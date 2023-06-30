import startGameLoop from '../index.js';
import generateRandomInt from '../generateRandomInt.js';

const task = 'What number is missing in the progression?';

const generateProgression = (arrayLength) => {
  const arrayNumbers = [];

  const firstNumber = generateRandomInt(1, 100);
  arrayNumbers.push(firstNumber);

  const progressionValue = generateRandomInt(2, 100);

  for (let i = 0; i < arrayLength; i += 1) {
    const nextNumber = arrayNumbers[i] + progressionValue;
    arrayNumbers.push(nextNumber);
  }

  return arrayNumbers;
};

const generateQuestionSolution = () => {
  const arrayLength = generateRandomInt(5, 10);
  const hiddenElement = generateRandomInt(0, arrayLength - 1);

  const progression = generateProgression(arrayLength);
  const solution = progression[hiddenElement];

  progression[hiddenElement] = '..';
  const question = progression.join(' ');

  return [question, solution];
};

const startProgressionGame = () => {
  startGameLoop(task, generateQuestionSolution);
};

export default startProgressionGame;
