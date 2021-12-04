const getBoards = (arr: Array<string>) => {
  // Build an array of 2d arrays that represent each board.
  let boards = [];
  let board = [];
  for (let i = 2; i < arr.length; i++) {
    const line = arr[i];

    if (!line) {
      boards.push(board);
      board = [];
      continue;
    }

    board.push(line.split(' ').filter(Boolean).map(Number));
    if (i === arr.length - 1) {
      boards.push(board);
    }
  }
  return boards;
};

const hasWon = (board: Array<Array<number>>, row: number, col: number) => {
  return (
    board[row].every((n) => n === -1) || board.every((arr) => arr[col] === -1)
  );
};

const sumUnmarked = (board: Array<Array<number>>) => {
  return board.reduce(
    (acc, row) =>
      acc + row.filter((n) => n > -1).reduce((acc, cur) => acc + cur, 0),
    0
  );
};

const part1 = (input: string) => {
  const lines = input.split('\n');

  const boards = getBoards(lines);

  // Iterate over the sequence of numbers that are called,
  // and determine after each one whether there is a winner.
  const nums = lines[0].split(',').map(Number);
  for (let num of nums) {
    for (let board of boards) {
      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === num) {
            // Replace the number with -1 to indicate that it has been called.
            board[i][j] = -1;

            // Check if this board has won.
            if (hasWon(board, i, j)) {
              const sum = sumUnmarked(board);
              return sum * num;
            }
          }
        }
      }
    }
  }
};

const part2 = (input: string) => {
  const lines = input.split('\n');

  const boards = getBoards(lines);

  // Iterate over the sequence of numbers that are called,
  // and determine after each one whether there is a winner.
  const nums = lines[0].split(',').map(Number);
  for (let num of nums) {
    // Iterate over the boards backwards so that we can remove
    // winning boards as we find them.
    for (let n = boards.length - 1; n >= 0; n--) {
      let board = boards[n];

      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === num) {
            // Replace the number with -1 to indicate that it has been called.
            board[i][j] = -1;

            // Check if this board has won.
            if (hasWon(board, i, j)) {
              if (boards.length === 1) {
                const sum = sumUnmarked(board);
                return sum * num;
              }

              // Remove this board from the array as it has won.
              boards.splice(boards.indexOf(board), 1);
            }
          }
        }
      }
    }
  }
};

export { part1, part2 };
