import fs from 'fs';
import path from 'path';
import type { Day, Year } from './types';

export const readFromFile = (filename: string, year: Year, day: Day) => {
  return fs.readFileSync(
    path.resolve(__dirname, `${year}`, `day-${day}`, filename),
    'utf-8',
  );
};
