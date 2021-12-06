import readlineSync from 'readline-sync';

export const roundsCount = 3;

const engine = (gameData, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = gameData[i];
    console.log('Question:', question);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === answer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default engine;
