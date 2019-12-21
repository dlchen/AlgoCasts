// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {

  // for (let row = 0; row < n; row++) {
  //   let print = '';
  //   for (let col = 0; col < n; col++) {
  //     print += (col <= row) ? '#' : ' ';
  //   }
  //   console.log(print);
  // }

  // const loop = (string, row, column) => {

  //   if (row === n) {
  //     return;
  //   } else if (column === n) {
  //     console.log(string);
  //     loop('', row + 1, 0);
  //   } else {
  //     loop(string + (column <= row ? '#' : ' '), row, column + 1);
  //   }
  // };

  // forward steps
  const loop = (string, row, column) => {

    if (row === n) {
      return;
    } else if (column === n) {
      console.log(string);
      loop('', row + 1, 0);
    } else {
      loop(string + (column >= n - 1 - row ? '#' : ' '), row, column + 1);
    }
  };

  loop('', 0, 0);
}

steps(3);

module.exports = steps;
