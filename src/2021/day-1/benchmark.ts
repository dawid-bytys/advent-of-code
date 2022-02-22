import { benchmark, readFromFile } from '../../utils';
import {
  countIncreasesFunctionally,
  countIncreasesStructurally,
  countTripletsIncreases,
} from './solution';

const input = readFromFile('input.txt', 2021, 1).split('\n').map(Number);

benchmark<number>('* structural function performance', () =>
  countIncreasesStructurally(input),
);
benchmark<number>('* functional function performance', () =>
  countIncreasesFunctionally(input),
);
benchmark<number>('** function performance', () =>
  countTripletsIncreases(input),
);
