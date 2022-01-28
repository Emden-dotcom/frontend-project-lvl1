// #!/usr/bin/env node

import { getRandomNumber } from '../utils.js';
import runTheGame, { roundsCount } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const randomNumber = getRandomNumber(0, 100);
    const getEvenGameAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
    rounds.push([randomNumber, getEvenGameAnswer]);
  }
  runTheGame(rounds, gameDescription);
};
