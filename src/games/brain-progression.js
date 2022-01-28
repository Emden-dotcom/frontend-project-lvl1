// #!/usr/bin/env node

import { getRandomNumber } from '../utils.js';
import runTheGame, { roundsCount } from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const generateProgression = (first, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(first + i * step);
  }
  return result;
};

const generateRound = () => {
  const firstElement = getRandomNumber(0, 100);
  const progressionStep = getRandomNumber(1, 10);
  const exclusionIndex = getRandomNumber(1, 9);

  const progression = generateProgression(firstElement, progressionStep, progressionLength);
  const answer = progression[exclusionIndex].toString();
  progression[exclusionIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  runTheGame(rounds, gameDescription);
};
