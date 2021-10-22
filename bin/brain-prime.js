#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const checkPrimeNumber = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const brainPrime = () => {
  for (let i = 1; i < 4; i += 1) {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
    const randomNumber = getRandomNumber(2, 1000);
    const isPrime = checkPrimeNumber(randomNumber);
    console.log('Question:', randomNumber);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === isPrime.toString()) {
      console.log('Correct!');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${isPrime}".\nLet's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
brainPrime();
