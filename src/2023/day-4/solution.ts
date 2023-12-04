import { readInput } from '../../utils';

const input = readInput(2023, 4);

interface Card {
  winningNumbers: Set<number>;
  numbers: Set<number>;
}

function parseInput(input: string) {
  const lines = input.trim().split('\n');
  const cards: Card[] = [];

  for (const line of lines) {
    const [first, rest] = line.replace(/\s{2}/g, ' ').split(' | ');
    const [_, card] = first.split(': ');
    const winningNumbers = card.split(' ').map(Number);
    const numbers = rest.split(' ').map(Number);

    cards.push({ winningNumbers: new Set(winningNumbers), numbers: new Set(numbers) });
  }

  return cards;
}

function findTotalPoints(input: string) {
  const cards = parseInput(input);
  let totalPoints = 0;

  for (const card of cards) {
    const intersectionLength = new Set([...card.winningNumbers].filter((x) => card.numbers.has(x))).size;

    if (intersectionLength > 0) {
      totalPoints += 2 ** (intersectionLength - 1);
    }
  }

  return totalPoints;
}

function findTotalScratchcards(input: string) {
  const cards = parseInput(input);
  const scratchcardsCount = new Array(cards.length).fill(1);

  for (const [i, card] of cards.entries()) {
    const intersectionSize = new Set([...card.winningNumbers].filter((x) => card.numbers.has(x))).size;

    for (let j = i + 1; j <= i + intersectionSize; ++j) {
      scratchcardsCount[j] += scratchcardsCount[i];
    }
  }

  return scratchcardsCount.reduce((acc, curr) => acc + curr, 0);
}

console.log(findTotalPoints(input));
console.log(findTotalScratchcards(input));
