// #!/usr/bin/env node

import { getRandomNumber } from '../utils.js';
import engine, { roundsCount } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEvenGames = () => {
  const result = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const randomNumber = getRandomNumber(0, 100);
    if (randomNumber % 2 === 0) {
      result.push([randomNumber, 'yes']);
    } else if (randomNumber % 2 !== 0) {
      result.push([randomNumber, 'no']);
    }
  }
  return result;
};

export default () => {
  const rounds = brainEvenGames();
  engine(rounds, gameDescription);
};
