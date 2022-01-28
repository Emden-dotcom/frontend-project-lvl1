// #!/usr/bin/env node

import { getRandomNumber } from '../utils.js';
import runTheGame, { roundsCount } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return getGcd(num2 % num1, num1);
};

const generateRound = () => {
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const answer = getGcd(randomNumber1, randomNumber2);
  return [question, answer];
};

export default () => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }

  runTheGame(rounds, gameDescription);
};
