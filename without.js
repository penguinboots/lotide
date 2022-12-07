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

// Return subset of given array, removing unwanted elements
const without = function(arr, remove) {
  let fixed = [];
  for (let obj of arr) {
    if (remove.indexOf(obj) === -1) {
      fixed.push(obj);
    }
  }
  return fixed;
};

module.exports = without;

// assertArraysEqual(without([1,2,3], [1]), [2,3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);