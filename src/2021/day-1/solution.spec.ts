import { readFromFile } from '../../utils';
import {
  countIncreasesStructurally,
  countIncreasesFunctionally,
  countTripletsIncreases,
} from './solution';

describe('⏳ Testing day 1 solution for the first star...', () => {
  it('it should return correct answer of my input using structural function -> 1527', () => {
    const input = readFromFile('input.txt', 2021, 1);
    const formatedInput = input.split('\n').map(Number);
    const result = countIncreasesStructurally(formatedInput);

    expect(result).toEqual(1527);
  });

  it('it should return correct answer of my input using functional function -> 1527', () => {
    const input = readFromFile('input.txt', 2021, 1);
    const formatedInput = input.split('\n').map(Number);
    const result = countIncreasesFunctionally(formatedInput);

    expect(result).toEqual(1527);
  });
});

describe('⏳ Testing day 1 solution for the second star...', () => {
  it('it should return the correct answer of my input -> 1575', () => {
    const input = readFromFile('input.txt', 2021, 1);
    const formatedInput = input.split('\n').map(Number);
    const result = countTripletsIncreases(formatedInput);

    expect(result).toEqual(1575);
  });
});
