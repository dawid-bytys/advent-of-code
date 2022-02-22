import type { Action, DayTwoInput } from '../../types';
import { generateMockInput, generateRandomNumber } from '../../utils';

export const dayTwoMock: DayTwoInput[] = generateMockInput<DayTwoInput>(
  1000000,
  () => ({
    action: ['forward', 'up', 'down'][generateRandomNumber(2)] as Action,
    units: generateRandomNumber(100),
  }),
);
