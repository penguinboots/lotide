// Check if two values are equal
const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// Return all elements of array except first. Arrays with one element or an empty array return an empty array.
const tail = function(arr) {
  let newTail = [];
  if (arr.length > 2) {
    newTail = arr.slice(1);
  }
  return newTail;
};

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check empty array
const test2 = tail([]);
assertEqual(test2.length, 0);

// Test Case 3: Check length-1 array
const test3 = tail([1]);
assertEqual(test3.length, 0);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
