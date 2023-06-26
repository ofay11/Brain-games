import readlineSync from 'readline-sync';
import evenGame from './even.js';
import calcGame from './calc.js';
import gcdGame from './gcd.js';
import progressionGame from './progression.js';
import primeGame from './prime.js';

const gameSelection = () => {
  console.log('\nChoose a game:');
  console.log('1 - brain-even');
  console.log('2 - brain-calc');
  console.log('3 - brain-gcd');
  console.log('4 - brain-progression');
  console.log('5 - brain-prime');
  console.log('x - exit');

  const switchGame = () => {
    const selectedGame = readlineSync.question('Your choose: ');
    switch (selectedGame) {
      case '1':
        return evenGame();
      case '2':
        return calcGame();
      case '3':
        return gcdGame();
      case '4':
        return progressionGame();
      case '5':
        return primeGame();
      case 'x':
        return console.log('Bye!');
      default:
        return switchGame();
    }
  };

  switchGame();
};

export default gameSelection;
