import { readInput } from '../../utils';

const input = readInput(2023, 4);

interface Card {
  winningNumbers: number[];
  numbers: number[];
}

function parseInput(input: string) {
  const lines = input.trim().split('\n');
  const cards: Card[] = [];

  for (const line of lines) {
    const splittedLine = line
      .substring(line.indexOf(': ') + 2)
      .replace(/\s{2,}/g, ' ')
      .split(' | ');
    const winningNumbers = splittedLine[0].split(' ').map(Number);
    const numbers = splittedLine[1].split(' ').map(Number);

    cards.push({ winningNumbers, numbers });
  }

  return cards;
}

function findTotalPoints(input: string) {
  const cards = parseInput(input);

  let totalPoints = 0;

  for (const card of cards) {
    let points = 0;

    for (const num of card.numbers) {
      if (card.winningNumbers.includes(num)) {
        if (points === 0) {
          points = 1;
        } else {
          points *= 2;
        }
      }
    }

    totalPoints += points;
  }

  return totalPoints;
}

console.log(findTotalPoints(input));
