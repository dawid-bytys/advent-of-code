import { readFromFile } from '../../utils';

const input = readFromFile('input.txt', 2021, 4);

/*const formatIntoColumns = (data: string) => {
  return data.split('\n');
};*/

const formatIntoRows = (data: string) => {
  return data
    .split('\n')
    .slice(1)
    .map(line => (line !== '' ? line : null))
    .filter(line => line);
};

//export const submarineBingo = (data: string[]) => {};

console.log(formatIntoRows(input));
