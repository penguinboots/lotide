// Return true if arrays are equal
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
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

// Given array with other arrays inside, return flattened single-level array
const flatten = function(arr) {
  let flattened = [];
  for (let obj of arr) {
    if (Array.isArray(obj)) {
      flattened = flattened.concat(obj);
    } else {
      flattened.push(obj);
    }
  }
  return flattened;
};



assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6], "a", ["a", 2]]), [1, 2, 3, 4, 5, 6, "a", "a", 2]);