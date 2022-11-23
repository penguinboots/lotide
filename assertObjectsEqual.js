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

// Return true if objects are equal
const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) { // check number of keys match
    return false;
  }
  for (const key of Object.keys(obj1)) {
    if (!(key in obj2)) { // return false if obj2 does not contain each key in obj1
      return false;
    }
    if (typeof obj1[key] !== typeof obj2[key]) { // return false if value type mismatch
      return false;
    }
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) { // return false if both values arrays, and arrays do not match
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) { // return false if any primitive value of key does not match opposing
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ?
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) :
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "3" });
assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2" });