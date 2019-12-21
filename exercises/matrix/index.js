// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

  const m = new Array(n).fill(null).map(_ => []);

  let val = 1;
  let start_col = 0;
  let end_col = n - 1;
  let start_row = 0;
  let end_row = n - 1;

  while (start_col <= end_col && start_row <= end_row) {

    for (let i = start_col; i <= end_col; i++) {
      m[start_row][i] = val;
      val += 1;
    }
    start_row += 1;

    for (let i = start_row; i <= end_row; i++) {
      m[i][end_col] = val;
      val += 1;
    }
    end_col -= 1;

    for (let i = end_col; i >= start_col; i--) {
      m[end_row][i] = val;
      val += 1;
    }
    end_row -= 1;

    for (let i = end_row; i >= start_row; i--) {
      m[i][start_col] = val;
      val += 1;
    }
    start_col += 1;
  }

  return m;
}

// console.log(matrix(3));

module.exports = matrix;
