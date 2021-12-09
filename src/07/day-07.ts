const part1 = (input: string) => {
  const nums = input
    .split(',')
    .map(Number)
    .sort((a, b) => a - b);
  const median = nums[Math.floor(nums.length / 2)];
  return nums.reduce((acc, cur) => acc + Math.abs(cur - median), 0);
};

export { part1 };
