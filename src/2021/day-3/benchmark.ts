import { benchmark } from '../../utils';
import { ratesMultiplication, determineLifeSupportRating } from './solution';
import { dayThreeMock } from './mocks';

benchmark<number>('* solution', () => ratesMultiplication(dayThreeMock));
benchmark<number>('** solution', () =>
  determineLifeSupportRating(dayThreeMock),
);
