import readlineSync from 'readline-sync';

let userName;

const greetUser = () => {
  if (!userName) {
    console.log('\nWelcome to the Brain Games!');
    userName = readlineSync.question('May I have your name? ');

    if (userName === '') {
      userName = 'BRAIN';
    }
    console.log(`Hello, ${userName}!\n`);
  }

  return userName;
};

export default greetUser;
