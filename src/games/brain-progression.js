// #!/usr/bin/env node

import { getRandomNumber } from '../utils.js';
import engine, { roundsCount } from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const getArythmeticProgression = () => {
  const getFirstElement = getRandomNumber(0, 100);
  const getProgression = getRandomNumber(1, 10);
  const getExclusion = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const exclusionIndex = getExclusion(1, 9);

  let result = '';
  let counter = 0;
  let getReplacedNumber = 0;

  for (let i = 0; i < 10; i += 1) {
    if (i === 0) {
      result = `${getFirstElement}`;
      counter = getProgression + getFirstElement;
    } else if (i === exclusionIndex) {
      result = `${result} ${'..'}`;
      getReplacedNumber = counter;
      counter += getProgression;
    } else {
      result = `${result} ${counter}`;
      counter += getProgression;
    }
  }
  return [result, getReplacedNumber];
};

const brainProgression = () => {
  const result = [];
  for (let i = 0; i < roundsCount; i += 1) {
    result.push(getArythmeticProgression());
  }
  return result;
};

export default () => {
  const rounds = brainProgression();
  engine(rounds, gameDescription);
};
