// // Return true if arrays are equal
// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// // Check if two arrays are equal
// const assertArraysEqual = function(actual, expected) {
//   eqArrays(actual, expected) ?
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`) :
//     console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
// };

const letterPositions = function(sentence) {
  const results = {};
  // iterate through sentence
  for (let i = 0; i < sentence.length; i++) {
    // if char at index is not a space
    if (sentence.charAt(i)) {
      // if it already exists in result, push index
      if (results[sentence.charAt(i)]) {
        results[sentence.charAt(i)].push(i);
      } else {
        // if it does not already exist in result, make new array in result with new key, add initial index
        results[sentence.charAt(i)] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;

// let result1 = letterPositions("hello");
// assertArraysEqual(result1["l"], [2, 3]);
// assertArraysEqual(result1["h"], [0]);