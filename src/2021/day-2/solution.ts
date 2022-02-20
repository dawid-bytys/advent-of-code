import type { DayTwoInput } from '../../types';

// O(n) *, **
export const positionMultiplication = (
  data: DayTwoInput[],
  withAim: boolean,
) => {
  let horizontalPosition = 0;
  let depth = 0;
  let aim = 0;

  for (const { action, units } of data) {
    switch (action) {
      case 'forward':
        horizontalPosition += units;
        if (withAim) depth += units * aim;

        break;
      case 'down':
        if (withAim) aim += units;
        else depth += units;

        break;
      case 'up':
        if (withAim) aim -= units;
        else depth -= units;

        break;
    }
  }

  return horizontalPosition * depth;
};
