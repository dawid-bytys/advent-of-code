import { readInput } from '../../utils';

const input = readInput(2022, 4).split('\n');

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
const getCountOfOverlaps = (input: string[], atAll: boolean) => {
  let countOfOverlaps = 0;

  for (const line of input) {
    const [firstSection, secondSection] = line.split(',').map(section => section.split('-').map(Number));
    if (atAll ? doSectionsOverlapAtAll(firstSection, secondSection) : doSectionsOverlap(firstSection, secondSection)) {
      ++countOfOverlaps;
    }
  }

  return countOfOverlaps;
};

console.log(getCountOfOverlaps(input, false)); // 518
console.log(getCountOfOverlaps(input, true)); // 909
