import { readFileSync } from 'fs';

const lines = readFileSync('src/2022/input.txt', 'utf8').split('\n\n');

const totalCaloriesCarriedByEachElf = lines.map(line =>
  line
    .split('\n')
    .map(Number)
    .reduce((a, b) => a + b),
);

// *
const mostCaloriesCarriedByOneElf = Math.max(...totalCaloriesCarriedByEachElf);

// **
const mostCaloriesCarriedByThreeElfs = totalCaloriesCarriedByEachElf
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((a, b) => a + b);

console.log(mostCaloriesCarriedByOneElf); // 67450
console.log(mostCaloriesCarriedByThreeElfs); // 199357
