// #!/usr/bin/env node

import { getRandomNumber } from '../utils.js';
import runTheGame, { roundsCount } from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const getArythmeticProgression = () => {
  const firstElement = getRandomNumber(0, 100);
  const progression = getRandomNumber(1, 10);
  const exclusionIndex = getRandomNumber(1, 9);

  let result = '';
  let counter = 0;
  let getReplacedNumber = 0;

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === 0) {
      result = `${firstElement}`;
      counter = progression + firstElement;
    } else if (i === exclusionIndex) {
      result = `${result} ${'..'}`;
      getReplacedNumber = counter;
      counter += progression;
    } else {
      result = `${result} ${counter}`;
      counter += progression;
    }
  }
  return [result, getReplacedNumber];
};

const getBrainProgressionArray = () => {
  const result = [];
  for (let i = 0; i < roundsCount; i += 1) {
    result.push(getArythmeticProgression());
  }
  return result;
};

export default () => {
  const rounds = getBrainProgressionArray();
  runTheGame(rounds, gameDescription);
};
