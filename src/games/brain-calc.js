// #!/usr/bin/env node

import { getRandomNumber } from '../utils.js';
import runTheGame, { roundsCount } from '../index.js';

const gameDescription = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operatorsList = ['+', '-', '*'];
  const getRandomOeratorIndex = getRandomNumber(0, 2);
  return operatorsList[getRandomOeratorIndex];
};

const getRandomNumberOperationResult = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return (num1 + num2);
    case '-':
      return (num1 - num2);
    default:
      return (num1 * num2);
  }
};

export const getBrainCalculator = () => {
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
    const question = `${randomNumber1} ${generatedRandomOperator} ${randomNumber2}`;
    result.push([question, operationResult]);
  }
  return result;
};

export default () => {
  const rounds = getBrainCalculator();
  runTheGame(rounds, gameDescription);
};
