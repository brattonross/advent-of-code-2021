const part1 = (input: string) => {
  const parsed = input
    .split('\n')
    .filter(Boolean)
    .map((s) =>
      s.split(' -> ').map((coord) => coord.trim().split(',').map(Number))
    );

  const validLines = parsed.filter(
    ([start, end]) => start[0] === end[0] || start[1] === end[1]
  );

  const counts = new Map<string, number>();

  const incrementCount = (x: number, y: number) => {
    const key = `${x},${y}`;
    counts.set(key, (counts.get(key) ?? 0) + 1);
  };

  for (let [start, end] of validLines) {
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
    } else {
      if (start[0] > end[0]) {
        for (let x = start[0]; x >= end[0]; x--) {
          incrementCount(x, start[1]);
        }
      } else {
        for (let x = start[0]; x <= end[0]; x++) {
          incrementCount(x, start[1]);
        }
      }
    }
  }

  let total = 0;
  for (let val of counts.values()) {
    if (val > 1) {
      total++;
    }
  }
  return total;
};

export { part1 };
