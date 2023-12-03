import { readInput } from '../../utils';

const input = readInput(2023, 3);

function isNumeric(char: string) {
  return !isNaN(Number(char));
}

function isSymbol(lines: string[], i: number, j: number) {
  if (i < 0 || i >= lines.length || j < 0 || j >= lines[0].length) {
    return false;
  }

  return lines[i][j] !== '.' && !isNumeric(lines[i][j]);
}

function findSum(input: string) {
  const lines = input.trim().split('\n');

  let sum = 0;

  for (const [i, line] of lines.entries()) {
    let start = 0;
    let end = 0;

    while (end < line.length) {
      start = end;
      let num = '';

      while (end < line.length && isNumeric(line[end])) {
        num += line[end];
        ++end;
      }

      if (num === '') {
        ++end;
        continue;
      }

      const parsedNum = Number(num);

      if (isSymbol(lines, i, start - 1) || isSymbol(lines, i, end)) {
        sum += parsedNum;
        continue;
      }

      for (let k = start - 1; k < end + 1; ++k) {
        if (isSymbol(lines, i - 1, k) || isSymbol(lines, i + 1, k)) {
          sum += parsedNum;
          break;
        }
      }
    }
  }

  return sum;
}

console.log(findSum(input));
