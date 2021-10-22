#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Find the greatest common divisor of given numbers.');

const getDivisorsList = (num) => {
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
  for (const item of array1) {
    for (let i = 0; i < array2.length; i += 1) {
      if (item === array2[i]) {
        result.push(item);
      }
    }
  }
  return result;
};

const brainCalculator = () => {
  for (let i = 1; i < 4; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 100);
    const listRandonDividersFirstNumber = getDivisorsList(randomNumber1);
    const listRandonDividersSecondNumber = getDivisorsList(randomNumber2);
    const commonDivisorsList = getCommonDivisor(
      listRandonDividersFirstNumber,
      listRandonDividersSecondNumber,
    );
    const commonDivisor = Math.max(...commonDivisorsList);
    //  console.log('randomNumber1>>>>>', randomNumber1);
    //  console.log('randomNumber2>>>>>', randomNumber2);
    //  console.log('randomDividers1>>>>>', listRandonDividersFirstNumber);
    //  console.log('randomDividers2>>>>>', listRandonDividersSecondNumber);
    // console.log('commonDivisor>>>>>', commonDivisorsList);
    //  console.log('commonDivisor>>>>', commonDivisor);
    console.log('Question:', randomNumber1, randomNumber2);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === commonDivisor.toString()) {
      console.log('Correct!');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${commonDivisor}".\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

brainCalculator();
