import { readInput } from '../../utils';

const rawInput = readInput(2022, 1);
const parsedCalories = rawInput.split('\n\n');

const totalCaloriesCarriedByEachElf = parsedCalories.map(meal => {
  return meal
    .split('\n')
    .map(Number)
    .reduce((acc, currentValue) => acc + currentValue);
});

// *
const mostCaloriesCarriedByOneElf = Math.max(...totalCaloriesCarriedByEachElf);

// **
const mostCaloriesCarriedByThreeElves = totalCaloriesCarriedByEachElf
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((acc, currentValue) => acc + currentValue);

console.log(mostCaloriesCarriedByOneElf); // 67450
console.log(mostCaloriesCarriedByThreeElves); // 199357
