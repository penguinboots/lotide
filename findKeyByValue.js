// Check if two values are equal
const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(searchObj, searchVal) {
  let result = undefined;
  // iterate through searchObj and examine each key : value pair
  for (const [key, value] of Object.entries(searchObj)) {
    // if value matches desired string, set result to key
    if (value === searchVal) {
      result = key;
    }
  }
  return result;

};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const bestFruitsByColour = {
  red: "Apple",
  yellow: "Lemon",
  orange: "Clementine"
};

assertEqual(findKeyByValue(bestFruitsByColour, "Apple"), "red");
assertEqual(findKeyByValue(bestFruitsByColour, "Lime"), undefined);