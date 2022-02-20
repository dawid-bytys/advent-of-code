import { readFromFile } from '../../utils';
import { ratesMultiplication } from './solution';
import { dayThreeMock } from './mocks';

describe('⏳ Testing day 3 solution for the first star...', () => {
  it('it should return 236', () => {
    const result = ratesMultiplication(dayThreeMock);

    expect(result).toEqual(236);
  });

  it('it should return correct answer of my input -> 1997414', () => {
    const input = readFromFile('input.txt', 2021, 3);
    const formatedInput = input.split('\n');
    const result = ratesMultiplication(formatedInput);

    expect(result).toEqual(1997414);
  });
});
