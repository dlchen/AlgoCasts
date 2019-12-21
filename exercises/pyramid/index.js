// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  ' (n - 1) +  # + (n - 1)
//       ' ### ' (n - 2) + 
//       '#####'

function pyramid(n) {

  // const loop = (string, row, col) => {

  //   if (row === n) {
  //     return;
  //   // } else if (col === n) {
  //   //   console.log(string);
  //   //   loop('', row + 1, 0);
  //   } else {

  //     string += ' '.repeat(n - row - 1) + '#'.repeat(row * 2 + 1) + ' '.repeat(n - row - 1);
  //     console.log(string);
  //     loop('', row + 1)
  //   }
  // };

  // loop('', 0, 0);

  const mid = Math.floor((n * 2 - 1) / 2);

  const loop = (string, row, col) => {

    if (row === n) {
      return;
    }
    
    if (col === (n * 2 - 1)) {
      console.log(string);
      return loop('', row + 1, 0);
    }
    
    const char = (col >= mid - row) && (col <= mid + row) ? '#' : ' '
    loop(string + char, row, col + 1);
    // let char;
    // if (col < n - 1) {
    //   char = col >= n - 1 - row ? '#' : ' '
    // } else {
    //   char = col - n + 1 <= row ? '#' : ' '
    // }
    // loop(string + char, row, col + 1);
  };

  loop('', 0, 0);
}

pyramid(3);

module.exports = pyramid;
