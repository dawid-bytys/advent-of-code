import { readInput } from '../../utils';
import type { Shape } from './types';

const input = readInput(2022, 2).split('\n');

export const shapes: Shape[] = [
  {
    name: ['A', 'X'],
    weight: 1,
    beats: ['C', 'Z'],
  },
  {
    name: ['B', 'Y'],
    weight: 2,
    beats: ['A', 'X'],
  },
  {
    name: ['C', 'Z'],
    weight: 3,
    beats: ['B', 'Y'],
  },
];

// *
const myTotalScore = input.reduce((acc, currentValue) => {
  const [opponent, me] = currentValue.split(' ');
  const opponentShape = shapes.find(({ name }) => name.includes(opponent));
  const myShape = shapes.find(({ name }) => name.includes(me));

  if (!opponentShape || !myShape) {
    throw new Error('Invalid input');
  }
  if (myShape.beats.includes(opponent)) {
    return acc + myShape.weight + 6;
  }
  if (opponentShape.beats.includes(me)) {
    return acc + myShape.weight;
  }
  if (opponentShape === myShape) {
    return acc + myShape.weight + 3;
  }

  return acc;
}, 0);
