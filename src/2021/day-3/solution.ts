const transposeMatrix = (matrix: string[][]) => {
  return matrix[0].map((_, i) => matrix.map(row => row[i]));
};

const getSumsOfColumns = (data: string[][]) => {
  return data.map(col => col.map(val => Number(val)).reduce((x, y) => x + y));
};

// *
export const ratesMultiplication = (data: string[]) => {
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
