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

const part2 = (input: string) => {
  const DAYS = 256;
  // Store the total number of fish for the numbers 0-8 that have an internal counter of that number.
  const internalCounters = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const fish = input.split(',').map(Number);

  // Set up the inital state.
  for (let internalCounter of fish) {
    internalCounters[internalCounter]++;
  }

  for (let i = 0; i < DAYS; i++) {
    // Shift the first number of fish (internal counter 0) off of the array.
    // This moves all of the other counts into the correct new position as well.
    const fishProduced = internalCounters.shift()!;

    // Now we need to add a new fish for each one that had an internal count of 0,
    // as well as set each of those existing fish to have a timer of 6.
    internalCounters.push(fishProduced);
    internalCounters[6] += fishProduced;
  }

  return internalCounters.reduce((acc, cur) => acc + cur, 0);
};

export { part1, part2 };
