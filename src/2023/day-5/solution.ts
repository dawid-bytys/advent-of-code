import { readInput } from '../../utils';

const input = readInput(2023, 5);

function findLowestLocationOne(input: string) {
  const [seedsStr, ...blocks] = input.trim().split('\n\n');
  let seeds = seedsStr.split(': ')[1].replace(/\s+/g, ' ').split(' ').map(Number);

  for (const block of blocks) {
    const ranges: number[][] = [];

    for (const line of block.split('\n').slice(1)) {
      ranges.push(line.split(' ').map(Number));
    }

    const newSeeds: number[] = [];

    for (const x of seeds) {
      let found = false;

      for (const [a, b, c] of ranges) {
        if (b <= x && x < b + c) {
          newSeeds.push(x - b + a);
          found = true;
          break;
        }
      }

      if (!found) {
        newSeeds.push(x);
      }
    }

    seeds = newSeeds;
  }

  return Math.min(...seeds);
}

console.log(findLowestLocationOne(input));
