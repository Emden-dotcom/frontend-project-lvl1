// #!/usr/bin/env node

import { getRandomNumber } from '../utils.js';
import runTheGame, { roundsCount } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getDivisors = (num) => {
  const result = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  return result;
};

const getCommonDivisor = (array1, array2) => {
  const result = [];
  for (let y = 0; y < array1.length; y += 1) {
    for (let i = 0; i < array2.length; i += 1) {
      if (array1[y] === array2[i]) {
        result.push(array1[y]);
      }
    }
  }
  return result;
};

const getNod = () => {
  const result = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);
    const randonDividersFirstNumber = getDivisors(randomNumber1);
    const randonDividersSecondNumber = getDivisors(randomNumber2);
    const commonDivisorsList = getCommonDivisor(
      randonDividersFirstNumber,
      randonDividersSecondNumber,
    );
    const commonDivisor = Math.max(...commonDivisorsList);
    result.push([`${randomNumber1} ${randomNumber2}`, commonDivisor]);
  }
  return result;
};

export default () => {
  const rounds = getNod();
  runTheGame(rounds, gameDescription);
};
