#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello ${userName}`);
console.log('Answer "yes" if the number is even, otherwise answer "no",');

/*
for (let i = 1; i < 4; i += 1) {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log('Question:', randomNumber);
  const playerAnswer = readlineSync.question('Your answer: ');

  if (randomNumber % 2 === 0) {
    if (playerAnswer === 'yes') {
      console.log('Correct!');
    } else {
    console.log(`"no" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${userName}`);
      i += 4;
    }
  } else if (randomNumber % 2 !== 0) {
    if (playerAnswer === 'no') {
      console.log('Correct!');
    } else {
    console.log(`"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${userName}`);
      i += 4;
    }
  } else {
    console.log(`"Wrong answer ;(.\nLet's try again, ${userName}`);
    i += 4;
  }
}
console.log(`Congratulations, ${userName}!`);
*/

const brainEvenGames = () => {
  for (let i = 1; i < 4; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log('Question:', randomNumber);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (randomNumber % 2 === 0) {
      if (playerAnswer === 'yes') {
        console.log('Correct!');
      } else {
        return console.log(`"no" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${userName}`);
      }
    } else if (randomNumber % 2 !== 0) {
      if (playerAnswer === 'no') {
        console.log('Correct!');
      } else {
        return console.log(`"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${userName}`);
      }
    } else {
      return console.log(`"Wrong answer ;(.\nLet's try again, ${userName}`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

brainEvenGames();
