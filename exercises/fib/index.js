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

  const cache = {
    '0': 0,
    '1': 1
  };

  const loop = (i) => {

    if (i <= 1) return i;

    const a = cache[i - 1];
    if (!a) {
      cache[i - 1] = loop(i - 1);
    }

    const b = cache[i - 2];
    if (!b) {
      cache[i - 2] = loop(i - 2);
    }

    cache[i] = cache[i - 1] + cache[i - 2];
    return cache[i]
  }

  return loop(n);
}

// console.log(fib(39))

module.exports = fib;
