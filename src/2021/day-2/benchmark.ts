import { benchmark } from '../../utils';
import { positionMultiplication } from './solution';
import { dayTwoMock } from './mocks';

benchmark<number>('* solution', () =>
  positionMultiplication(dayTwoMock, false),
);
benchmark<number>('** solution', () =>
  positionMultiplication(dayTwoMock, true),
);
