// // Check if two values are equal
// const assertEqual = function(actual, expected) {
//   actual === expected ?
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`) :
//     console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
// };

// Take sentence as string, return count of each of the letters in sentence

const countLetters = function(sentence) {
  let result = {};
  // remove spaces
  let sent = sentence.replace(/ /g, '');
  // iterate through letters of sentence with spaces removed
  for (const letter of sent) {
    // if letter key exists in result, add 1, else set to 1
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;

// const result1 = countLetters("abcddd");
// assertEqual(result1["a"], 1);
// assertEqual(result1["d"], 3);