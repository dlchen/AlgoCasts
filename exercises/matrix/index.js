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
  const target = n * n + 1;

  function fillStartRow(val, i, start_col, end_col, start_row, end_row) {

    if (val === target) return;

    if (i > end_col) {
      return fillEndCol(val, start_row + 1, start_col, end_col, start_row + 1, end_row);
    };

    m[start_row][i] = val;
    fillStartRow(val + 1, i + 1, start_col, end_col, start_row, end_row)
  }

  function fillEndCol(val, i, start_col, end_col, start_row, end_row) {

    if (val === target) return;

    if (i > end_row) {
      return fillEndRow(val, end_col - 1, start_col, end_col - 1, start_row, end_row);
    }

    m[i][end_col] = val;
    fillEndCol(val + 1, i + 1, start_col, end_col, start_row, end_row)
  }

  function fillEndRow(val, i, start_col, end_col, start_row, end_row) {

    if (val === target) return;

    if (i < start_col) {
      return fillStartCol(val, end_row - 1, start_col, end_col, start_row, end_row - 1);
    }

    m[end_row][i] = val;
    fillEndRow(val + 1, i - 1, start_col, end_col, start_row, end_row)
  }

  function fillStartCol(val, i, start_col, end_col, start_row, end_row) {

    if (val === target) return;

    if (i < start_row) {
      return fillStartRow(val, start_col + 1, start_col + 1, end_col, start_row, end_row);
    }

    m[i][start_col] = val;
    fillStartCol(val + 1, i - 1, start_col, end_col, start_row, end_row)
  }

  fillStartRow(1, 0, 0, n - 1, 0, n - 1);

  return m;
}

console.log(matrix(3));

module.exports = matrix;
