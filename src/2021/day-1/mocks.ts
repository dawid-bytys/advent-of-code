import { generateMockInput, generateRandomNumber } from '../../utils';

export const dayOneMock = generateMockInput<number>(1000000, () =>
  generateRandomNumber(100),
);
