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

const takeUntil = function(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(i + 1);
    }
  }
};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual(results1, [2, 4, 5]);
// assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Redwood']);