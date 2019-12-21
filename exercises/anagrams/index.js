// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

  const freq = (str) => {

    str = str.replace(/\W/g, '').toLowerCase();

    const freq = {};
    for (const char of str) {
      freq[char] = freq[char]++ || 1;
    }
    return freq;
  };

  const freqA = freq(stringA);
  const freqB = freq(stringB);

  if (Object.keys(freqA).length !== Object.keys(freqB).length) {
    return false;
  }

  return Object.keys(freqA).every(char => freqA[char] === freqB[char]);
}

module.exports = anagrams;
