const part1 = (input: string) => {
  const steps = input.split('\n');

  let horizontal = 0;
  let depth = 0;

  for (const step of steps) {
    const [command, magnitude] = step.split(' ');
    switch (command) {
      case 'forward':
        horizontal += Number(magnitude);
        break;
      case 'up':
        depth -= Number(magnitude);
        break;
      case 'down':
        depth += Number(magnitude);
        break;
    }
  }

  return horizontal * depth;
};

const part2 = (input: string) => {
  const steps = input.split('\n');

  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  for (const step of steps) {
    const [command, magnitude] = step.split(' ');
    switch (command) {
      case 'forward':
        horizontal += Number(magnitude);
        depth += aim * Number(magnitude);
        break;
      case 'up':
        aim -= Number(magnitude);
        break;
      case 'down':
        aim += Number(magnitude);
        break;
    }
  }

  return horizontal * depth;
};

export { part1, part2 };
