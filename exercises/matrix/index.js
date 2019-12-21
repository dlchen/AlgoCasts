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

  const dirs = [
    { _: 'RIGHT', x: 0, y: 1 },
    { _: 'DOWN', x: 1, y: 0 },
    { _: 'LEFT', x: 0, y: -1 },
    { _: 'UP', x: -1, y: 0 }
  ]

  const m = new Array(n).fill(null).map(_ => new Array(n).fill(null));

  // console.log(m);

  const loop = (x, y, val, d_index, backtrack) => {

    if (val === n * n + 1) {
      return;
    }

    if (d_index === dirs.length) {
      return loop(x, y, val, 0, backtrack)
    }

    if (backtrack) {
      return loop(x + dirs[d_index].x, y + dirs[d_index].y, val, d_index, false)
    }

    const row = m[x] || [];
    const curr = row[y];
    const curr_dir = dirs[d_index];

    // const next = (m[x + curr_dir.x] || [])[y + curr_dir.y]
    // if (next !== null) {
    //   m[x][y] = val;
    //   d_index = d_index + 1
    //   return loop()
    // }
    
    if (curr !== null) {
      const prev_x = x + (curr_dir.x * -1);
      const prev_y = y + (curr_dir.y * -1);
      return loop(prev_x, prev_y, val, d_index + 1, true)
    } else {
      m[x][y] = val;
      const next_x = x + curr_dir.x;
      const next_y = y + curr_dir.y;
      return loop(next_x, next_y, val + 1, d_index, false)
    }

    // const next = m[x + dirs[d_index].x][y + dirs[d_index].y];

    // if (next === null) {
    //   return loop(x + d_index.x, y + d_index.y)
    // }

    // if (m[x][y] !== null) {
    //   const prev_x = x + (direction.x * -1);
    //   const prev_y = y + (direction.y * -1);
    //   return loop(prev_x, prev_y, val, direction + 1)
    // }

  }

  loop(0, 0, 1, 0, false)

  return m;
}

// console.log(matrix(3));

module.exports = matrix;
