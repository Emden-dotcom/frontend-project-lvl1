// #!/usr/bin/env node

import { getRandomNumber } from '../utils.js';
import engine, { roundsCount } from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrimeNumber = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const brainPrime = () => {
  const result = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const randomNumber = getRandomNumber(2, 1000);
    const isPrime = checkPrimeNumber(randomNumber);
    result.push([randomNumber, isPrime]);
  }
  return result;
};

export default () => {
  const rounds = brainPrime();
  engine(rounds, gameDescription);
};
