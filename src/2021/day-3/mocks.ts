import { generateMockInput, generateRandomBits } from '../../utils';

export const dayThreeMock = generateMockInput<string>(1000000, () =>
  generateRandomBits(16),
);
