import fs from 'fs';
import path from 'path';
import { part1 } from './day-01';

const input = fs.readFileSync(path.resolve(__dirname, 'input.txt'), {
  encoding: 'utf-8',
});

const solution1 = part1(input);

console.log('Part 1: ', solution1);
