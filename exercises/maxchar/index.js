// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

  const freq = str.split('').reduce((freq, char) => {

    freq[char] = freq[char] + 1 || 1;
    return freq;
  }, {})

  // let maxChar;
  // for (const char in freq) {
  //   if (!maxChar) maxChar = char;
  //   maxChar = freq[maxChar] > freq[char] ? maxChar : char;
  // }
  // return maxChar;

  return Object.keys(freq).reduce((maxChar, char) => {

    return freq[maxChar] > freq[char] ? maxChar : char;
  });
}

module.exports = maxChar;
