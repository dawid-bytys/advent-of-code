import { readFromFile } from '../../utils';
import {
  ratesMultiplicationStructurally,
  ratesMultiplicationFunctionally,
} from './solution';
import { dayThreeMock } from './mocks';

describe('⏳ Testing day 3 solution for the first star...', () => {
  it('it should return 236 using structural function', () => {
    const result = ratesMultiplicationStructurally(dayThreeMock);

    expect(result).toEqual(236);
  });

  it('it should return 236 using functional function', () => {
    const result = ratesMultiplicationFunctionally(dayThreeMock);

    expect(result).toEqual(236);
  });

  it('it should return correct answer of my input using structural function -> 1997414', () => {
    const input = readFromFile('input.txt', 2021, 3);
    const formatedInput = input.split('\n');
    const result = ratesMultiplicationStructurally(formatedInput);

    expect(result).toEqual(1997414);
  });

  it('it should return correct answer of my input using functional function -> 1997414', () => {
    const input = readFromFile('input.txt', 2021, 3);
    const formatedInput = input.split('\n');
    const result = ratesMultiplicationFunctionally(formatedInput);

    expect(result).toEqual(1997414);
  });
});
