// #!/usr/bin/env node
import readlineSync from 'readline-sync';

import { getRandomNumber, roundsCount } from '../utils.js';

const taskDescription = 'What is the result of the expression?';

const getRandomOperator = () => {
  const randomPercentage = Math.random();
  if (randomPercentage < 0.33) {
    return '+';
  } if (randomPercentage < 0.66) {
    return '-';
  }
  return '*';
};

const getRandomNumberOperationResult = (operator, num1, num2) => {
  if (operator === '+') {
    return (num1 + num2);
  } if (operator === '-') {
    return (num1 - num2);
  }
  return (num1 * num2);
};

const brainCalculator = () => {
  const result = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const generatedRandomOperator = getRandomOperator();
    const randomNumber1 = getRandomNumber(0, 10);
    const randomNumber2 = getRandomNumber(0, 10);
    const operationResult = getRandomNumberOperationResult(
      generatedRandomOperator,
      randomNumber1,
      randomNumber2,
    );
    const questionForPlayer = `${randomNumber1} ${generatedRandomOperator} ${randomNumber2}`;
    result.push([questionForPlayer, operationResult]);
  }
  return result;
};

const theGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(taskDescription);
  const array = brainCalculator();
  for (let i = 0; i < roundsCount; i += 1) {
    const [questionForPlayer, operationResult] = array[i];
    console.log('Question:', questionForPlayer);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === operationResult.toString()) {
      console.log('Correct!');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${operationResult}".\nLet's try again, ${userName}!`);
      return;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};
theGame(brainCalculator);

export default theGame();
