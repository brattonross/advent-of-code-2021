import { part1, part2 } from './day-02';

describe('part 1', () => {
  it('should return the product of the final horizontal position and the final depth', () => {
    // Arrange
    const input = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

    // Act
    const actual = part1(input);

    // Assert
    expect(actual).toBe(150);
  });
});

describe('part 2', () => {
  it('should return the product of the final horizontal position and the final depth', () => {
    // Arrange
    const input = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

    // Act
    const actual = part2(input);

    // Assert
    expect(actual).toBe(900);
  });
});
