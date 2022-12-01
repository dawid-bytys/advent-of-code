import { readInput } from '../../utils';

const parsedCalories = readInput(2022, 1).split('\n\n');

const totalCaloriesCarriedByEachElf = parsedCalories.map(meal => {
  return meal
    .split('\n')
    .map(Number)
    .reduce((a, b) => a + b);
});

// *
const mostCaloriesCarriedByOneElf = Math.max(...totalCaloriesCarriedByEachElf);

// **
const mostCaloriesCarriedByThreeElves = totalCaloriesCarriedByEachElf
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((a, b) => a + b);

console.log(mostCaloriesCarriedByOneElf); // 67450
console.log(mostCaloriesCarriedByThreeElves); // 199357
