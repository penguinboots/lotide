// Return true if arrays are equal
const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Check if two arrays are equal
const assertArraysEqual = function(actual, expected) {
  eqArrays(actual, expected) ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// Return the middle value(s) of given array, return empty array if given array of length 1 or 2
const middle = function(arr) {
  let newMid = [];
  let mid = arr.length / 2;
  if (arr.length > 2) {
    arr.length % 2 === 0 ?
      newMid = newMid.concat(arr.slice(mid - 1, mid + 1)) :
      newMid.push(arr[Math.floor(mid)]);
  }
  console.log(newMid);
  return newMid;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);