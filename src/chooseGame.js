import readlineSync from 'readline-sync';
import greetUser from './cli.js';
import startEvenGame from './games/even.js';
import startCalcGame from './games/calc.js';
import startGcdGame from './games/gcd.js';
import startProgressionGame from './games/progression.js';
import startPrimeGame from './games/prime.js';

const chooseGame = () => {
  // Greet the user and ask for their name
  const userName = greetUser();

  console.log('Choose a brain game:');
  console.log('1 - brain-even. Determining an even number.');
  console.log('2 - brain-calc. Arithmetic expressions that need to be calculated.');
  console.log('3 - brain-gcd. Determination of the greatest common divisor.');
  console.log('4 - brain-progression. Finding missing numbers in a sequence of numbers.');
  console.log('5 - brain-prime. Determination of a prime number.');
  console.log('x - exit');

  const switchGame = () => {
    const selectedGame = readlineSync.question('Your choose: ');
    console.log('');
    switch (selectedGame) {
      case '1':
        return startEvenGame();
      case '2':
        return startCalcGame();
      case '3':
        return startGcdGame();
      case '4':
        return startProgressionGame();
      case '5':
        return `${startPrimeGame()}`;
      case 'x':
        return console.log(`Bye, ${userName}!`);
      default:
        throw new Error(`Incorrect option: "${selectedGame}"\n`);
    }
  };

  switchGame();
};

export default chooseGame;
