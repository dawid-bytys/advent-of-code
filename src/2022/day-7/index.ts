import { readInput } from '../../utils';

const input = readInput(2022, 7).split('\n');

const createPath = (directories: string[]) => {
  return directories.map((directory, index) => {
    if (index === 0) {
      return directory;
    }
    return `${directories.slice(0, index).join('/')}/${directory}`;
  });
};

const getDirectoriesSizes = (lines: string[]) => {
  const stack: string[] = [];
  const directories = new Map<string, number>();

  for (const line of lines) {
    const parts = line.split(' ');
    if (parts[0] === '$') {
      if (parts[1] === 'cd') {
        if (parts[2] === '..') {
          stack.pop();
        } else {
          stack.push(parts[2]);
        }
      }
    } else if (parts[0] !== 'dir') {
      for (const path of createPath(stack)) {
        directories.set(path, (directories.get(path) || 0) + Number(parts[0]));
      }
    }
  }

  return [...directories.values()].map(size => size);
};

const totalSize = getDirectoriesSizes(input)[0];

// *
const directoriesSizesSum = getDirectoriesSizes(input).reduce((acc, size) => {
  if (size <= 100_000) {
    return acc + size;
  }
  return acc;
}, 0);

// **
const directoryToDeleteSize = Math.min(...getDirectoriesSizes(input).filter(size => size >= totalSize - 40_000_000));

console.log(directoriesSizesSum); // 1513699
console.log(directoryToDeleteSize); // 7991939
