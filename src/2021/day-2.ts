import type { DayTwoInput } from './types';

// *
export const getPositionMultiplicationWithoutAim = (data: DayTwoInput[]) => {
  let horizontalPosition = 0;
  let depth = 0;

  for (const { action, units } of data) {
    switch (action) {
      case 'forward':
        horizontalPosition += units;
        break;
      case 'down':
        depth += units;
        break;
      case 'up':
        depth -= units;
        break;
    }
  }

  return horizontalPosition * depth;
};

// **
export const getPositionMultiplicationWithAim = (data: DayTwoInput[]) => {
  let horizontalPosition = 0;
  let depth = 0;
  let aim = 0;

  for (const { action, units } of data) {
    switch (action) {
      case 'forward':
        horizontalPosition += units;
        depth += units * aim;
        break;
      case 'down':
        aim += units;
        break;
      case 'up':
        aim -= units;
        break;
    }
  }

  return horizontalPosition * depth;
};
