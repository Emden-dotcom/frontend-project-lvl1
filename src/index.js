import readlineSync from 'readline-sync';
import { brainCalculator } from '../bin/brain-calc.js';






const engine_Wroom_Wroom = (brainCalculator) => {
console.log('Question:', randomNumber1, generatedRandomOperator, randomNumber2);
const playerAnswer = readlineSync.question('Your answer: ');
if (playerAnswer === operationResult.toString()) {
  console.log('Correct!');
} else {
  console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${operationResult}".\nLet's try again, ${userName}!`);
  return;
}
console.log(`Congratulations, ${userName}!`);
};
