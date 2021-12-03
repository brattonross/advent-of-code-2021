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

export { part1 };
