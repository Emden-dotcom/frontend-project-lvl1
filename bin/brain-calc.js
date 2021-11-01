#!/usr/bin/env node
import { randomNumber, greeting } from '../src/utils.js';

console.log(greeting());
console.log('What is the result of the expression?');

const getRandomOperator = () => {
  const randomPercentage = Math.random();
  if (randomPercentage < 0.33) {
    return '+';
  } if (randomPercentage < 0.66) {
    return '-';
  }
  return '*';
};
getRandomOperator();

const getRandomNumberOperationResult = (operator, num1, num2) => {
  if (operator === '+') {
    return (num1 + num2);
  } if (operator === '-') {
    return (num1 - num2);
  }
  return (num1 * num2);
};



export const brainCalculator = () => {
  for (let i = 1; i < 4; i += 1) {
    const generatedRandomOperator = getRandomOperator();
    const randomNumber1 = randomNumber;
    const randomNumber2 = randomNumber;
    const operationResult = getRandomNumberOperationResult(
      generatedRandomOperator,
      randomNumber1,
      randomNumber2,
    );

const questionForPlayer = `${randomNumber1} ${generatedRandomOperator} ${randomNumber2}`;
  }
  return [questionForPlayer, operationResult];

  };

/*
    console.log('Question:', randomNumber1, generatedRandomOperator, randomNumber2);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === operationResult.toString()) {
      console.log('Correct!');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${operationResult}".\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);

*/


//brainCalculator();