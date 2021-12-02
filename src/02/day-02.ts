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

export { part1 };
