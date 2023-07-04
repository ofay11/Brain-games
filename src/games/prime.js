import startGameLoop from '../index.js';
import generateRandomInt from '../generateRandomInt.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let divider = 2; divider <= number / 2; divider += 1) {
    if (number % divider === 0) {
      return false;
    }
  }

  return true;
};

const generateQuestionSolution = () => {
  const randomNumber = generateRandomInt(1, 100);
  const question = randomNumber;
  const solution = isPrime(randomNumber) ? 'yes' : 'no';

  return [question, solution];
};

const startPrimeGame = () => {
  startGameLoop(task, generateQuestionSolution);
};

export default startPrimeGame;
