// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//   0  1  2  3  4  5
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {

  if (n <= 1) return n;

  let a = 0;
  let b = 1;

  const loop = (i) => {

    const c = a + b;
    a = b;
    b = c;
    
    if (i === n) return c;
    return loop(i + 1);
  }

  return loop(2);
}

// console.log(fib(39))

module.exports = fib;
