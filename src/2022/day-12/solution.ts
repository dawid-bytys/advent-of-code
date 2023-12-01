import { readInput } from '../../utils';

const input = readInput(2022, 12);
const matrix = input.split('\n').map(line => line.split(''));

function findShortestPath(matrix: string[][]) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let currentShortestPath = Number.MIN_SAFE_INTEGER;

  function dfs(i: number, j: number) {
    if (i < 0 || j < 0 || i >= rows || j >= cols) {
      return;
    }

    let currentPathLength = 0;

    if (matrix[i][j] === 'e') {
      currentShortestPath = Math.min(currentPathLength, currentShortestPath);
    } else {
      ++currentPathLength;
    }

    dfs(i + 1, j);
    dfs(i, j + 1);
    dfs(i + 1, j + 1);
  }

  dfs(0, 0);

  return currentShortestPath;
}

console.log(findShortestPath(matrix));
