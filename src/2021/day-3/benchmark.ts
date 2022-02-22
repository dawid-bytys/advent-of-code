import { benchmark, readFromFile } from '../../utils';
import { ratesMultiplication, determineLifeSupportRating } from './solution';

const input = readFromFile('input.txt', 2021, 1).split('\n');

benchmark<number>('* solution', () => ratesMultiplication(input));
benchmark<number>('** solution', () => determineLifeSupportRating(input));
