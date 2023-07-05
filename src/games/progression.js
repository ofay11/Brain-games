import startGameLoop from '../index.js';
import generateRandomInt from '../generateRandomInt.js';

const task = 'What number is missing in the progression?';

const generateProgression = (
  lengthProgression,
  randomProgressionStartValue,
  randomProgressionValue,
) => {
  const arrayProgression = [randomProgressionStartValue];

  for (let i = 0; i < lengthProgression; i += 1) {
    const nextNumber = arrayProgression[i] + randomProgressionValue;
    arrayProgression.push(nextNumber);
  }

  return arrayProgression;
};

const generateQuestionSolution = () => {
  const lengthProgression = generateRandomInt(5, 10);
  const randomProgressionStartValue = generateRandomInt(1, 100);
  const randomProgressionValue = generateRandomInt(2, 100);
  const generatedProgression = generateProgression(
    lengthProgression,
    randomProgressionStartValue,
    randomProgressionValue,
  );

  const hiddenElement = generateRandomInt(0, generatedProgression.length - 1);
  const solution = generatedProgression[hiddenElement];
  generatedProgression[hiddenElement] = '..';

  const question = generatedProgression.join(' ');

  return [question, solution];
};

const startProgressionGame = () => {
  startGameLoop(task, generateQuestionSolution);
};

export default startProgressionGame;
