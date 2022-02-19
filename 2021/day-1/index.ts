import fs from 'fs';

const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n')
  .map(el => Number(el));

// *
const countIncreases = (data: number[]) => {
  let count = 0;

  for (let i = 0; i < data.length - 1; i++) {
    if (data[i] < data[i + 1]) count++;
  }

  return count;
};

// **
const countTripletIncreases = (data: number[]) => {
  const sumsOfTriplets = data.map((_, i, arr) => arr[i] + arr[i + 1] + arr[i + 2]);
  let count = 0;

  for (let i = 0; i < sumsOfTriplets.length - 1; i++) {
    if (sumsOfTriplets[i] < sumsOfTriplets[i + 1]) count++;
  }

  return count;
};
