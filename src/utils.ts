import fs from 'fs';
import path from 'path';
import type { Day, Year } from './types';

export const readFromFile = (filename: string, year: Year, day: Day) => {
  return fs.readFileSync(
    path.resolve(__dirname, `${year}`, `day-${day}`, filename),
    'utf-8',
  );
};

export const benchmark = <T>(message: string, func: () => T) => {
  console.time(message);
  func();
  console.timeEnd(message);
};

export const generateRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const generateMockInput = <T>(numberOfLines: number, func: () => T) => {
  return new Array(numberOfLines).fill(null).map(() => func()) as T[];
};

export const generateRandomBits = (length: number) => {
  return new Array(length)
    .fill(null)
    .map(() => ['1', '0'][generateRandomNumber(1)])
    .join('');
};
