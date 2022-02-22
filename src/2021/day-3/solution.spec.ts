import { readFromFile } from '../../utils';
import { determineLifeSupportRating, ratesMultiplication } from './solution';
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

describe('⏳ Testing day 3 solution for the second star...', () => {
  it('it should return NaN', () => {
    const result = determineLifeSupportRating(dayThreeMock);

    expect(result).toEqual(NaN);
  });

  it('it should return correct answer of my input -> 1032597', () => {
    const input = readFromFile('input.txt', 2021, 3);
    const formatedInput = input.split('\n');
    const result = determineLifeSupportRating(formatedInput);

    expect(result).toEqual(1032597);
  });
});
