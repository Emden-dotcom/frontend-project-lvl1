// #!/usr/bin/env node

import { getRandomNumber } from '../utils.js';
import runTheGame, { roundsCount } from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrimeNumber = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = getRandomNumber(2, 1000);
  const answer = checkPrimeNumber(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  runTheGame(rounds, gameDescription);
};
