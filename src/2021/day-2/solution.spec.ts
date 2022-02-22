import { readFromFile } from '../../utils';
import { positionMultiplication } from './solution';
import type { DayTwoInput, Action } from '../../types';

describe('⏳ Testing day 2 solution for the first star...', () => {
  it('it should return correct answer of my input -> 1728414', () => {
    const input = readFromFile('input.txt', 2021, 2);
    const formatedInput: DayTwoInput[] = input.split('\n').map(el => ({
      action: el.split(' ')[0] as Action,
      units: Number(el.split(' ')[1]),
    }));
    const result = positionMultiplication(formatedInput, false);

    expect(result).toEqual(1728414);
  });
});

describe('⏳ Testing day 2 solution for the second star...', () => {
  it('it should return the correct answer of my input -> 1765720035', () => {
    const input = readFromFile('input.txt', 2021, 2);
    const formatedInput: DayTwoInput[] = input.split('\n').map(el => ({
      action: el.split(' ')[0] as Action,
      units: Number(el.split(' ')[1]),
    }));
    const result = positionMultiplication(formatedInput, true);

    expect(result).toEqual(1765720035);
  });
});
