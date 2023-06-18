import readlineSync from 'readline-sync';

export default function greetUser() {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export let name;
