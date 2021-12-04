const part1 = (input: string) => {
  const lines = input.split('\n');

  // Build an array of 2d arrays that represent each board.
  let boards = [];
  let board = [];
  for (let i = 2; i < lines.length; i++) {
    const line = lines[i];

    if (!line) {
      boards.push(board);
      board = [];
      continue;
    }

    board.push(line.split(' ').filter(Boolean).map(Number));
    if (i === lines.length - 1) {
      boards.push(board);
    }
  }

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
            if (
              board[i].every((n) => n === -1) ||
              board.every((arr) => arr[j] === -1)
            ) {
              let sum = 0;
              for (let k = 0; k < board.length; k++) {
                sum += board[k]
                  .filter((n) => n > -1)
                  .reduce((acc, cur) => acc + cur, 0);
              }
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

  // Build an array of 2d arrays that represent each board.
  let boards = [];
  let board = [];
  for (let i = 2; i < lines.length; i++) {
    const line = lines[i];

    if (!line) {
      boards.push(board);
      board = [];
      continue;
    }

    board.push(line.split(' ').filter(Boolean).map(Number));
    if (i === lines.length - 1) {
      boards.push(board);
    }
  }

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
            if (
              board[i].every((n) => n === -1) ||
              board.every((arr) => arr[j] === -1)
            ) {
              if (boards.length === 1) {
                let sum = 0;
                for (let k = 0; k < board.length; k++) {
                  sum += board[k]
                    .filter((n) => n > -1)
                    .reduce((acc, cur) => acc + cur, 0);
                }
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
