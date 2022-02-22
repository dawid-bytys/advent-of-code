// Help functions for the functional method
const transposeMatrix = (matrix: string[][]) => {
  return matrix[0].map((_, i) => matrix.map(row => row[i]));
};

const getSumsOfColumns = (data: string[][]) => {
  return data.map(col => col.map(val => Number(val)).reduce((x, y) => x + y));
};

// * functionally
export const ratesMultiplicationFunctionally = (data: string[]) => {
  const splitedData = data.map(el => el.split(''));
  const transposedData = transposeMatrix(splitedData);
  const sumsOfColumns = getSumsOfColumns(transposedData);

  const gammaRate = sumsOfColumns
    .map(sum => (sum > data.length / 2 ? '1' : '0'))
    .join('');
  const epsilonRate = sumsOfColumns
    .map(sum => (sum > data.length / 2 ? '0' : '1'))
    .join('');

  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
};

// * structurally
export const ratesMultiplicationStructurally = (data: string[]) => {
  let gammaRate = '';
  let epsilonRate = '';
  let i = 0;

  while (i !== data[0].length) {
    const sumOfOnes = data
      .filter(el => el.charAt(i) === '1')
      .map(el => Number(el.charAt(i))).length;

    if (sumOfOnes > data.length / 2) {
      gammaRate += '1';
      epsilonRate += '0';
    } else {
      gammaRate += '0';
      epsilonRate += '1';
    }

    i++;
  }

  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
};
