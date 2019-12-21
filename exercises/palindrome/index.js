// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

  // solution #1
  // for (let start = 0; start < str.length / 2; start++) {

  //   const end = str.length - 1 - start;
  //   if (str[start] !== str[end]) return false;
  // }
  // return true;

  // solution #2
  // const reversed = str.split('').reverse().join('');
  // return str === reversed;

  // solution #3
  return str.split('').every((char, i, strArr) => {

    const mirroredIndex = strArr.length - 1 - i;
    return char === strArr[mirroredIndex];
  })
}

module.exports = palindrome;
