import { readFileSync } from 'fs';
import { join } from 'path';
import type { Day, Year } from './types';

export function readInput(year: Year, day: Day) {
  return readFileSync(join(__dirname, `/${year}/day-${day}/input.txt`), 'utf8');
}
