#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('What number is missing in the progression?');

const getArythmeticProgression = () => {
  const getFirstElement = Math.floor(Math.random() * 10);
  const getProgression = Math.floor(Math.random() * 10);
  const getExclusion = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const exclusionIndex = getExclusion(1, 9);

  let result = '';
  let counter = 0;
  let getReplacedNumber = 0;

  for (let i = 0; i < 10; i += 1) {
    if (i === 0) {
      result = `${result} ${getFirstElement}`;
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
  for (let i = 1; i < 4; i += 1) {
    const array = getArythmeticProgression();
    const arrayAsString = array[0].toString();
    console.log('Question:', arrayAsString);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === array[1].toString()) {
      console.log('Correct!');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${array[1]}".\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
brainProgression();
