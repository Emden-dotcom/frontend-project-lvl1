// #!/usr/bin/env node

import { getRandomNumber } from '../utils.js';
import engine, { roundsCount } from '../index.js';

const gameDescription = 'What is the result of the expression?';

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

export const brainCalculator = () => {
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

export default () => {
  const rounds = brainCalculator();
  engine(rounds, gameDescription);
};
