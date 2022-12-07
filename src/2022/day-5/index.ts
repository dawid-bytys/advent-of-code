import { readInput } from '../../utils';

const rawInput = readInput(2022, 5);
const lines = rawInput.split('\n\n');

const getParsedCrates = (lines: string[]) => {
  const countOfCrates = Number(lines.at(-1)?.trim().slice(-1));
  const parsedCrates: string[][] = [...Array(countOfCrates)].map(() => []);

  for (const line of lines.slice(0, -1)) {
    for (let i = 0; i < countOfCrates; ++i) {
      const index = 1 + i * 4;
      if (index < line.length && line[index] !== ' ') {
        parsedCrates[i].push(line[index]);
      }
    }
  }

  return parsedCrates;
};

// *, **
const getFinalTopCrates = (lines: string[], atOnce: boolean) => {
  const parsedCrates = getParsedCrates(lines[0].split('\n'));

  for (const line of lines[1].split('\n')) {
    const [count, from, to] = line.match(/\d+/g)!.map(Number);
    const stacksToMove = parsedCrates[from - 1].splice(0, count);
    if (atOnce) {
      parsedCrates[to - 1].unshift(...stacksToMove);
    } else {
      parsedCrates[to - 1].unshift(...stacksToMove.reverse());
    }
  }

  return parsedCrates.map(crate => crate[0]).join('');
};

console.log(getFinalTopCrates(lines, false)); // JDTMRWCQJ
console.log(getFinalTopCrates(lines, true)); // VHJDDCWRD
