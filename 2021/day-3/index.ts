import fs from 'fs';

const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const transposeMatrix = (matrix: string[][]) => {
  return matrix[0].map((_, i) => matrix.map(row => row[i]));
};

// *
const ratesMultiplication = (data: string[]) => {
  const splitedData = data.map(el => el.split(''));
  const transposedData = transposeMatrix(splitedData);
  const sumsOfColumns = transposedData.map(col =>
    col.map(val => Number(val)).reduce((x, y) => x + y),
  );

  const gammaRate = sumsOfColumns.map(sum => (sum > data.length / 2 ? '1' : '0')).join('');
  const epsilonRate = sumsOfColumns.map(sum => (sum > data.length / 2 ? '0' : '1')).join('');

  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
};

console.log(ratesMultiplication(input)); // 1997414
