const part1 = (input: string) => {
  const DAYS = 80;
  const nums = input.split(',').map(Number);

  for (let i = 0; i < DAYS; i++) {
    let newFish = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < 1) {
        nums[j] = 6;
        newFish++;
      } else {
        nums[j]--;
      }
    }

    for (let j = 0; j < newFish; j++) {
      nums.push(8);
    }
  }

  return nums.length;
};

export { part1 };
