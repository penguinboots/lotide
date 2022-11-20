// Check if two values are equal
const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(searchArr, searchVal) {
  let result = "";

  
  return result;

};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
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