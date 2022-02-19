import fs from 'fs';

const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n')
  .map(el => ({ action: el.split(' ')[0], units: Number(el.split(' ')[1]) }));

interface Input {
  action: string;
  units: number;
}

// *, **
const positionMultiplication = (data: Input[], withAim: boolean) => {
  let horizontalPosition = 0,
    depth = 0,
    aim = 0;

  for (const { action, units } of data) {
    switch (action) {
      case 'forward':
        horizontalPosition += units;
        if (withAim) depth += units * aim;
        break;
      case 'down':
        if (withAim) {
          aim += units;
        } else {
          depth += units;
        }
        break;
      case 'up':
        if (withAim) {
          aim -= units;
        } else {
          depth -= units;
        }
        break;
    }
  }

  return horizontalPosition * depth;
};

console.log(positionMultiplication(input, false)); // 1728414
console.log(positionMultiplication(input, true)); // 1765720035
