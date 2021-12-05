const parseLines = (arr: string) =>
  arr
    .split('\n')
    .filter(Boolean)
    .map((s) =>
      s.split(' -> ').map((coord) => coord.trim().split(',').map(Number))
    );

const countLine = (line: Array<Array<number>>, map: Map<string, number>) => {
  const [start, end] = line;

  const incrementCount = (x: number, y: number) => {
    const key = `${x},${y}`;
    map.set(key, (map.get(key) ?? 0) + 1);
  };

  if (start[0] === end[0]) {
    if (start[1] > end[1]) {
      for (let y = start[1]; y >= end[1]; y--) {
        incrementCount(start[0], y);
      }
    } else {
      for (let y = start[1]; y <= end[1]; y++) {
        incrementCount(start[0], y);
      }
    }
  } else if (start[1] === end[1]) {
    if (start[0] > end[0]) {
      for (let x = start[0]; x >= end[0]; x--) {
        incrementCount(x, start[1]);
      }
    } else {
      for (let x = start[0]; x <= end[0]; x++) {
        incrementCount(x, start[1]);
      }
    }
  } else {
    let xStep = start[0] > end[0] ? -1 : 1;
    let yStep = start[1] > end[1] ? -1 : 1;

    let y = start[1];
    for (
      let x = start[0];
      xStep === -1 ? x >= end[0] : x <= end[0];
      x += xStep
    ) {
      incrementCount(x, y);
      y += yStep;
    }
  }
};

const part1 = (input: string) => {
  const parsed = parseLines(input);
  const validLines = parsed.filter(
    ([start, end]) => start[0] === end[0] || start[1] === end[1]
  );

  const counts = new Map<string, number>();

  for (let line of validLines) {
    countLine(line, counts);
  }

  let total = 0;
  for (let val of counts.values()) {
    if (val > 1) {
      total++;
    }
  }
  return total;
};

const part2 = (input: string) => {
  const validLines = parseLines(input);

  const counts = new Map<string, number>();

  for (let line of validLines) {
    countLine(line, counts);
  }

  let total = 0;
  for (let val of counts.values()) {
    if (val > 1) {
      total++;
    }
  }
  return total;
};

export { part1, part2 };
