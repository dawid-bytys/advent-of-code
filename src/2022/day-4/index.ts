import { readInput } from '../../utils';

const input = readInput(2022, 4).split('\n');

const doSectionsOverlap = (firstSection: number[], secondSection: number[]) => {
  return firstSection[0] <= secondSection[0] && secondSection[1] <= firstSection[1];
};

const doSectionsOverlapAtAll = (firstSection: number[], secondSection: number[]) => {
  return (
    (firstSection[0] <= secondSection[0] && secondSection[0] <= firstSection[1]) ||
    (firstSection[0] <= secondSection[1] && secondSection[1] <= firstSection[1])
  );
};

// *
const getCountOfOverlaps = (input: string[]) => {
  let countOfOverlaps = 0;

  for (const line of input) {
    const [firstSection, secondSection] = line.split(',').map(section => section.split('-').map(Number));

    if (doSectionsOverlap(firstSection, secondSection) || doSectionsOverlap(secondSection, firstSection)) {
      ++countOfOverlaps;
    }
  }

  return countOfOverlaps;
};

// **
const getCountOfOverlapsAtAll = (input: string[]) => {
  let countOfOverlaps = 0;

  for (const line of input) {
    const [firstSection, secondSection] = line.split(',').map(section => section.split('-').map(Number));

    if (doSectionsOverlapAtAll(firstSection, secondSection) || doSectionsOverlapAtAll(secondSection, firstSection)) {
      ++countOfOverlaps;
    }
  }

  return countOfOverlaps;
};

console.log(getCountOfOverlaps(input)); // 518
console.log(getCountOfOverlapsAtAll(input)); // 909