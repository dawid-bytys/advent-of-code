import { readInput } from '../../utils';

const input = readInput(2022, 3).split('\n');

const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const getFirstCommonChar = (firstString: string, secondString: string, thirdString?: string) => {
  for (const char of firstString) {
    if (secondString.includes(char) && (!thirdString || thirdString.includes(char))) {
      return char;
    }
  }
  return null;
};

const getStringHalves = (input: string) => {
  const half = Math.floor(input.length / 2);
  return [input.slice(0, half), input.slice(half)];
};

// *
const getPrioritiesSum = (input: string[]) => {
  let sumOfPriorities = 0;

  for (const line of input) {
    const [firstCompartment, secondCompartment] = getStringHalves(line);
    const firstCommonChar = getFirstCommonChar(firstCompartment, secondCompartment);
    if (firstCommonChar) {
      const indexOfFirstCommonChar = ALPHABET.indexOf(firstCommonChar);
      sumOfPriorities += indexOfFirstCommonChar + 1;
    }
  }

  return sumOfPriorities;
};

// **
const getPrioritiesByThreeRucksacksSum = (input: string[]) => {
  let sumOfPriorities = 0;

  for (let i = 0; i < input.length - 2; i += 3) {
    const firstCommonChar = getFirstCommonChar(input[i], input[i + 1], input[i + 2]);
    if (firstCommonChar) {
      const indexOfFirstCommonChar = ALPHABET.indexOf(firstCommonChar);
      sumOfPriorities += indexOfFirstCommonChar + 1;
    }
  }

  return sumOfPriorities;
};

console.log(getPrioritiesSum(input)); // 7908
console.log(getPrioritiesByThreeRucksacksSum(input)); // 2838
