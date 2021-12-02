const part1 = (input: string) => {
  const nums = input.split('\n').map(Number);

  let total = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      total++;
    }
  }
  return total;
};

export { part1 };
