import { readInput } from '../../utils';

const input = readInput(2023, 6);

function parseInput(input: string) {
  const lines = input.trim().split('\n');
  const times = lines[0].trim().split(/\s+/).slice(1).map(Number);
  const distances = lines[1].trim().split(/\s+/).slice(1).map(Number);

  return { times, distances };
}

function countWaysToBeatRecord(input: string) {
  const { times, distances } = parseInput(input);
  let totalWays = 1;

  for (let i = 0; i < times.length; ++i) {
    let ways = 0;

    for (let j = 0; j <= times[i]; ++j) {
      if ((times[i] - j) * j > distances[i]) {
        ++ways;
      }
    }

    totalWays *= ways;
  }

  return totalWays;
}

function countWaysToBeatRecordLonger(input: string) {
  const { times, distances } = parseInput(input);

  const totalRaceTime = Number(times.map(String).reduce((acc, el) => acc + el, ''));
  const totalDistance = Number(distances.map(String).reduce((acc, el) => acc + el, ''));

  let totalWays = 0;

  for (let i = 0; i <= totalRaceTime; ++i) {
    if ((totalRaceTime - i) * i > totalDistance) {
      ++totalWays;
    }
  }

  return totalWays;
}

console.log(countWaysToBeatRecord(input));
console.log(countWaysToBeatRecordLonger(input));
