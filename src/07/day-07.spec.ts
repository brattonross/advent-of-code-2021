import { part1 } from './day-07';

describe('part 1', () => {
  it('should return minimum fuel amount to align the horizontal positions', () => {
    const input = '16,1,2,0,4,2,7,1,2,14';

    const actual = part1(input);

    expect(actual).toBe(37);
  });
});
