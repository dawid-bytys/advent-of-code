import fs from 'fs';
import path from 'path';
export const getInput = (filename: string) => {
  return fs
    .readFileSync(path.resolve(__dirname, '2021', 'inputs', filename))
    .toString()
    .split('\n')
    .map(el => Number(el));
};
