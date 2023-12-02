import { readInput } from '../../utils';

const input = readInput(2023, 2);

type CubeCount = {
  red: number;
  green: number;
  blue: number;
};

type GameRecord = {
  id: number;
  subsets: CubeCount[];
};

function parseInput(input: string) {
  const gamesMap = new Map<number, CubeCount[]>();
  const lines = input.trim().split('\n');

  for (const line of lines) {
    const [idPart, subsetsPart] = line.split(':');
    const id = parseInt(idPart.match(/\d+/)![0], 10);
    const subsets = subsetsPart
      .trim()
      .split(';')
      .map((subset) => {
        const counts = subset.match(/\d+ \w+/g) || [];
        const cubeCount: CubeCount = { red: 0, green: 0, blue: 0 };

        for (const count of counts) {
          const [num, color] = count.split(' ');
          cubeCount[color as keyof CubeCount] = parseInt(num, 10);
        }

        return cubeCount;
      });

    gamesMap.set(id, subsets);
  }

  return gamesMap;
}

function isGameValid(game: GameRecord, target: CubeCount = { red: 12, green: 13, blue: 14 }) {
  const { subsets } = game;
  const { red, green, blue } = target;

  for (const subset of subsets) {
    const { red: r, green: g, blue: b } = subset;

    if (r > red || g > green || b > blue) {
      return false;
    }
  }

  return true;
}

function findGamesIdSum(input: string) {
  const parsedInput = parseInput(input);
  let sum = 0;

  for (const [id, subsets] of parsedInput) {
    const gameRecord: GameRecord = { id, subsets };

    if (isGameValid(gameRecord)) {
      sum += id;
    }
  }

  return sum;
}

function calculatePower(subsets: CubeCount[]) {
  const maxCubeCount: CubeCount = {
    red: Number.MIN_SAFE_INTEGER,
    green: Number.MIN_SAFE_INTEGER,
    blue: Number.MIN_SAFE_INTEGER,
  };

  for (const subset of subsets) {
    maxCubeCount.red = Math.max(maxCubeCount.red, subset.red);
    maxCubeCount.green = Math.max(maxCubeCount.green, subset.green);
    maxCubeCount.blue = Math.max(maxCubeCount.blue, subset.blue);
  }

  return maxCubeCount.red * maxCubeCount.green * maxCubeCount.blue;
}

function findTotalPower(input: string) {
  const parsedInput = parseInput(input);
  let totalPower = 0;

  for (const subsets of parsedInput.values()) {
    totalPower += calculatePower(subsets);
  }

  return totalPower;
}

console.log(findGamesIdSum(input));
console.log(findTotalPower(input));
