const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randomNumber = getRandomNumber(0, 10);

export default randomNumber;
