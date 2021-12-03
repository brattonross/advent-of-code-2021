const part1 = (input: string) => {
  const nums = input.split('\n');
  const numLength = nums[0].length;
  const counts = Array.from({ length: numLength }, () => [0, 0]);

  for (let num of nums) {
    for (let i = 0; i < num.length; i++) {
      const digit = Number(num[i]);
      counts[i][digit]++;
    }
  }

  let gamma = '';
  let epsilon = '';

  for (let [zeroCount, oneCount] of counts) {
    gamma += zeroCount > oneCount ? '0' : '1';
    epsilon += zeroCount > oneCount ? '1' : '0';
  }

  return parseInt(gamma, 2) * parseInt(epsilon, 2);
};

const part2 = (input: string) => {
  const nums = input.split('\n');

  const findRating = (
    arr: Array<string>,
    criteria: (counts: Array<number>) => string
  ) => {
    let candidates = arr;
    const numLength = arr[0].length;

    for (let i = 0; i < numLength; i++) {
      const counts = [0, 0];
      for (let num of candidates) {
        const digit = Number(num[i]);
        counts[digit]++;
      }

      let requiredDigit = criteria(counts);
      candidates = candidates.filter((c) => c[i] === requiredDigit);

      if (candidates.length === 1) {
        return candidates[0];
      }
    }

    throw new Error(`No rating found!`);
  };

  const oxygenRating = findRating(nums, (counts) =>
    counts[0] > counts[1] ? '0' : '1'
  );
  const co2Rating = findRating(nums, (counts) =>
    counts[0] <= counts[1] ? '0' : '1'
  );

  return parseInt(oxygenRating, 2) * parseInt(co2Rating, 2);
};

export { part1, part2 };
