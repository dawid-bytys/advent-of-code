import { readInput } from '../../utils';
import type { Round } from './types';

const input = readInput(2022, 2).split('\n');

const OUTCOMES = {
  'A X': 3 + 1,
  'A Y': 6 + 2,
  'A Z': 0 + 3,
  'B X': 0 + 1,
  'B Y': 3 + 2,
  'B Z': 6 + 3,
  'C X': 6 + 1,
  'C Y': 0 + 2,
  'C Z': 3 + 3,
};

const OUTCOMES_WITH_HANDICAP = {
  'A X': 0 + 3,
  'A Y': 3 + 1,
  'A Z': 6 + 2,
  'B X': 0 + 1,
  'B Y': 3 + 2,
  'B Z': 6 + 3,
  'C X': 0 + 2,
  'C Y': 3 + 3,
  'C Z': 6 + 1,
};

// *, **
const getTotalScore = (rounds: Round[], handicap: boolean) => {
  const outcomes = handicap ? OUTCOMES_WITH_HANDICAP : OUTCOMES;
  return rounds.reduce((acc, round) => acc + outcomes[round], 0);
};

console.log(getTotalScore(input as Round[], false)); // 12740
console.log(getTotalScore(input as Round[], true)); // 11980
