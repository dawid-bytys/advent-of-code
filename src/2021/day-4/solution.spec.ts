import { readFromFile } from '../../utils';
import { findFirstWinner, findLastWinner } from './solution';

describe('⏳ Testing day 3 solution for the first star...', () => {
  it('it should return correct answer of my input -> 2745', () => {
    const input = readFromFile('input.txt', 2021, 4);
    const result = findFirstWinner(input);

    expect(result).toEqual(2745);
  });
});

describe('⏳ Testing day 3 solution for the second star...', () => {
  it('it should return correct answer of my input -> 2745', () => {
    const input = readFromFile('input.txt', 2021, 4);
    const result = findLastWinner(input);

    expect(result).toEqual(2745);
  });
});
