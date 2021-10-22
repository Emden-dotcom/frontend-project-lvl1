#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?');

const getRandomOperator = () => {
  const randomPercentage = Math.random();
  if (randomPercentage < 0.33) {
    return '+';
  } else if (randomPercentage < 0.66) {
    return '-';
  } else {
    return '*';
  }
};
getRandomOperator();

const getRandomNumberOperationResult = (operator, num1, num2) => {
  if (operator === '+') {
    return (num1 + num2);
  } else if (operator === '-') {
  return (num1 - num2);
  } else {
    return (num1 * num2);
  }
};

const brainCalculator = () => {
  for (let i = 1; i < 4; i += 1) {
    const generatedRandomOperator = getRandomOperator();
    const randomNumber1 = Math.floor(Math.random() * 10);
    const randomNumber2 = Math.floor(Math.random() * 10);
    const operationResult = getRandomNumberOperationResult(
      generatedRandomOperator,
      randomNumber1,
      randomNumber2,
    );

    console.log('Question:', randomNumber1 + generatedRandomOperator + randomNumber2);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === operationResult.toString()) {
      console.log('Correct!');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${operationResult}".\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

brainCalculator();
