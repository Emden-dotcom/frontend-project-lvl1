// #!/usr/bin/env node

import { getRandomNumber } from '../utils.js';
import runTheGame, { roundsCount } from '../index.js';

const gameDescription = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operatorsList = ['+', '-', '*'];
  const getRandomOeratorIndex = getRandomNumber(0, 2);
  return operatorsList[getRandomOeratorIndex];
};

const getRandomOperationResult = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return (num1 + num2);
    case '-':
      return (num1 - num2);
    case '*':
      return (num1 * num2);
    default:
      throw new Error('Unsupported operator');
  }
};

const generateRound = () => {
  const generatedRandomOperator = getRandomOperator();
  const randomNumber1 = getRandomNumber(0, 10);
  const randomNumber2 = getRandomNumber(0, 10);
  const answer = getRandomOperationResult(
    generatedRandomOperator,
    randomNumber1,
    randomNumber2,
  );
  const question = `${randomNumber1} ${generatedRandomOperator} ${randomNumber2}`;
  return [question, answer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  runTheGame(rounds, gameDescription);
};
