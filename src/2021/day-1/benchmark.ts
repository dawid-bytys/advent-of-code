import { benchmark } from '../../utils';
import { dayOneMock } from './mocks';
import {
  countIncreasesFunctionally,
  countIncreasesStructurally,
  countTripletsIncreases,
} from './solution';

benchmark<number>('* structural function performance', () =>
  countIncreasesStructurally(dayOneMock),
);
benchmark<number>('* functional function performance', () =>
  countIncreasesFunctionally(dayOneMock),
);
benchmark<number>('** function performance', () =>
  countTripletsIncreases(dayOneMock),
);
