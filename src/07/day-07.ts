const part1 = (input: string) => {
  const nums = input
    .split(',')
    .map(Number)
    .sort((a, b) => a - b);
  const median = nums[Math.floor(nums.length / 2)];
  return nums.reduce((acc, cur) => acc + Math.abs(cur - median), 0);
};

const part2 = (input: string) => {
  const nums = input.split(',').map(Number);

  // Figure out the range of positions that are viable
  let min = Infinity;
  let max = 0;
  for (let num of nums) {
    if (num > max) {
      max = num;
    } else if (num < min) {
      min = num;
    }
  }

  // Determine minimum fuel required.
  let minFuel = Infinity;
  for (let pos = min; pos < max; pos++) {
    let fuelUsed = 0;
    for (let num of nums) {
      const distance = Math.abs(num - pos);
      for (let i = 1; i <= distance; i++) {
        fuelUsed += i;
      }
    }

    if (fuelUsed < minFuel) {
      minFuel = fuelUsed;
    }
  }

  return minFuel;
};

export { part1, part2 };
