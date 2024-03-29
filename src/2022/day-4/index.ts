import { readInput } from '../../utils';

const rawInput = readInput(2022, 4);
const lines = rawInput.split('\n');

const doSectionsOverlap = (firstSection: number[], secondSection: number[]) => {
  return (
    (firstSection[0] <= secondSection[0] && secondSection[1] <= firstSection[1]) ||
    (secondSection[0] <= firstSection[0] && firstSection[1] <= secondSection[1])
  );
};

const doSectionsOverlapAtAll = (firstSection: number[], secondSection: number[]) => {
  return (
    (firstSection[0] <= secondSection[0] && secondSection[0] <= firstSection[1]) ||
    (secondSection[0] <= firstSection[0] && firstSection[0] <= secondSection[1])
  );
};

// *, **
const getOverlapsCount = (input: string[], atAll: boolean) => {
  let countOfOverlaps = 0;

  for (const line of input) {
    const [firstSection, secondSection] = line.split(',').map(section => section.split('-').map(Number));
    if (atAll ? doSectionsOverlapAtAll(firstSection, secondSection) : doSectionsOverlap(firstSection, secondSection)) {
      ++countOfOverlaps;
    }
  }

  return countOfOverlaps;
};

console.log(getOverlapsCount(lines, false)); // 518
console.log(getOverlapsCount(lines, true)); // 909
