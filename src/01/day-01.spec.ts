import { part1, part2 } from './day-01';

describe('part 1', () => {
  it('should return the number of measurements that are larger than the previous measurement', () => {
    // Arrange
    const input = `199
200
208
210
200
207
240
269
260
263`;

    // Act
    const actual = part1(input);

    // Assert
    expect(actual).toBe(7);
  });
});

describe('part 2', () => {
  it('should return the number of sums that are larger than the previous sum', () => {
    // Arrange
    const input = `199
200
208
210
200
207
240
269
260
263`;

    // Act
    const actual = part2(input);

    // Assert
    expect(actual).toBe(5);
  });
});
