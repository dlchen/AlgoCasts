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

  const memo = (fn) => {

    const cache = {};

    return (...args) => {

      if (cache[args]) {
        return cache[args];
      }

      cache[args] = fn(...args);

      return cache[args];
    }
  }

  const fib = (i) => {

    if (i <= 1) return i;

    return memoFib(i - 1) + memoFib(i - 2);
  }

  const memoFib = memo(fib);

  return memoFib(n);
}

// console.log(fib(39))

module.exports = fib;
