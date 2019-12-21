// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

  // return str
  //   .split(' ')
  //   .map(word => word[0].toUpperCase() + word.slice(1))
  //   .join(' ');

  let result = '';
  for (const i in str) {

    if (str[i - 1] === ' ' || str[i - 1] === undefined) {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = capitalize;
