import { part1, part2 } from './day-06';

describe('part 1', () => {
  it('should return the number of lanternfish after 80 days', () => {
    const input = '3,4,3,1,2';

    const actual = part1(input);

    expect(actual).toBe(5934);
  });
});

describe('part 2', () => {
  it('should return the number of lanternfish after 256 days', () => {
    const input = '3,4,3,1,2';

    const actual = part2(input);

    expect(actual).toBe(26984457539);
  });
});
