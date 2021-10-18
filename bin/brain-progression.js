#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello ${userName}`);
console.log('What number is missing in the progression?');

const getArithmeticProgressionArray = () => {
  const getFirstElement = Math.floor(Math.random() * 10);
  const getProgression = Math.floor(Math.random() * 10);
  //  console.log('getFirstElement>>>>>', getFirstElement);
  //  console.log('getProgression>>>>>', getProgression);
  const getArray = [];
  let counter;

  for (let i = 0; i < 10; i += 1) {
    if (i === 0) {
      getArray[0] = getFirstElement;
      counter = getFirstElement + getProgression;
    } else {
      getArray.push(counter);
      counter = getProgression + counter;
    }
  }
  return getArray;
};

const brainProgression = () => {
  for (let i = 1; i < 4; i += 1) {
    const finalArray = getArithmeticProgressionArray();
    const randomArrayValueExclusion = Math.floor(Math.random() * 10);
    const excludedValue = finalArray[randomArrayValueExclusion];
    finalArray[randomArrayValueExclusion] = '..';

    console.log('Question:', finalArray);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === excludedValue.toString()) {
      console.log('Correct!');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${excludedValue}".\nLet's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
brainProgression();
