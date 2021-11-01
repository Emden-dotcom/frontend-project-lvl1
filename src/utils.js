/* eslint-disable import/prefer-default-export */

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
export const randomNumber = getRandomNumber(0, 10);
