import { Action } from '../../types';
import { benchmark, readFromFile } from '../../utils';
import { positionMultiplication } from './solution';

const input = readFromFile('input.txt', 2021, 1)
  .split('\n')
  .map(el => ({
    action: el.split(' ')[0] as Action,
    units: Number(el.split(' ')[1]),
  }));

benchmark<number>('* solution', () => positionMultiplication(input, false));
benchmark<number>('** solution', () => positionMultiplication(input, true));
