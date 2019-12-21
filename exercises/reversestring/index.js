// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

  // solution #1
  // return str.split('').reverse().join('');

  // solution #2
  // let reversed = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   reversed += str[i];
  // }
  // return reversed;

  // solution #3
  // let reversed = '';
  // for (const char of str) {
  //   reversed = char + reversed;
  // }
  // return reversed;

  // solution #4
  return str.split('').reduce((reversed, char) => char + reversed, '')
}

module.exports = reverse;
