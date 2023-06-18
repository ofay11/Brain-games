import readlineSync from 'readline-sync';
import randomInteger from './randomInteger.js';
import { name } from './cli.js';

function isEven(number) {
  return number % 2 === 0;
}

export default function evenGame() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const randomNumber = randomInteger();
    const userAnswer = readlineSync.question(`Question: ${randomNumber} `);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    // const convertedValue = question === 'yes';
    if (userAnswer === correctAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
}
