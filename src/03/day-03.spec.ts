import { part1, part2 } from './day-03';

describe('part 1', () => {
  it('should return the power consumption of the submarine', () => {
    const input = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;

    const actual = part1(input);

    expect(actual).toBe(198);
  });

  it('should return the life support rating of the submarine', () => {
    const input = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;

    const actual = part2(input);

    expect(actual).toBe(230);
  });
});
