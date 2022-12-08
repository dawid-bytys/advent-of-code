import { readInput } from '../../utils';

const rawInput = readInput(2022, 8);
const TREES_MATRIX = rawInput.split('\n').map(row => row.split(''));

// *, **
const getVisibleTreesCountAndScenicScore = (trees: string[][]) => {
  let visibleTreesCount = trees[0].length * 4 - 4;
  let scenicScore = 0;

  for (let i = 1; i < trees.length - 1; ++i) {
    for (let j = 1; j < trees.length - 1; ++j) {
      let aboveCount = 0;
      let belowCount = 0;
      let leftCount = 0;
      let rightCount = 0;
      let visibleWays = 0;

      for (let k = i - 1; k >= 0; --k) {
        ++aboveCount;
        if (trees[k][j] >= trees[i][j]) {
          break;
        }
        if (k === 0) {
          ++visibleWays;
        }
      }

      for (let k = i + 1; k < trees.length; ++k) {
        ++belowCount;
        if (trees[k][j] >= trees[i][j]) {
          break;
        }
        if (k === trees.length - 1) {
          ++visibleWays;
        }
      }

      for (let k = j - 1; k >= 0; --k) {
        ++leftCount;
        if (trees[i][k] >= trees[i][j]) {
          break;
        }
        if (k === 0) {
          ++visibleWays;
        }
      }

      for (let k = j + 1; k < trees.length; ++k) {
        ++rightCount;
        if (trees[i][k] >= trees[i][j]) {
          break;
        }
        if (k === trees.length - 1) {
          ++visibleWays;
        }
      }

      if (visibleWays != 0) {
        ++visibleTreesCount;
      }

      scenicScore = Math.max(scenicScore, aboveCount * belowCount * leftCount * rightCount);
    }
  }

  return [visibleTreesCount, scenicScore];
};

console.log(getVisibleTreesCountAndScenicScore(TREES_MATRIX)); // [1854, 527340]
