import { randomInteger, gameBase } from '../index.js';

const primeGame = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const isPrime = (number) => {
    if (number < 2) {
      return 'no';
    }

    let divider = 2;

    while (divider <= number / 2) {
      if (number % divider === 0) {
        return 'no';
      }
      divider += 1;
    }

    return 'yes';
  };

  // generation of tasks and solutions
  const randomTask = () => {
    const task = randomInteger(1, 100);
    const solution = isPrime(task);

    return [task, solution];
  };

  gameBase(question, randomTask);
};

export default primeGame;
