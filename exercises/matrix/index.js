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

  let val = 1;
  let start_col = 0;
  let end_col = n - 1;
  let start_row = 0;
  let end_row = n - 1;

  function fillStartRow(i) {

    if (val === target) return;

    if (i > end_col) {
      start_row += 1;
      return fillEndCol(start_row);
    };

    m[start_row][i] = val++;
    fillStartRow(i + 1)
  }

  function fillEndCol(i) {

    if (val === target) return;

    if (i > end_row) {
      end_col -= 1;
      return fillEndRow(end_col);
    }

    m[i][end_col] = val++;
    fillEndCol(i + 1)
  }

  function fillEndRow(i) {

    if (val === target) return;

    if (i < start_col) {
      end_row -= 1;
      return fillStartCol(end_row);
    }

    m[end_row][i] = val++;
    fillEndRow(i - 1)
  }

  function fillStartCol(i) {

    if (val === target) return;

    if (i < start_row) {
      start_col += 1;
      return fillStartRow(start_col);
    }

    m[i][start_col] = val++;
    fillStartCol(i - 1)
  }

  fillStartRow(start_col);

  return m;
}

console.log(matrix(3));

module.exports = matrix;
