
// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const { assert } = require("chai");
const findKeyByValue = require('../findKeyByValue');

const bestFruitsByColour = {
  red: "Apple",
  yellow: "Lemon",
  orange: "Clementine"
};

describe("#findKeyByValue", () => {
  it('returns "red" given bestFruitsByColour and "Apple"', () => {
    assert.strictEqual(findKeyByValue(bestFruitsByColour, "Apple"), "red");
  });
  it('returns "undefined" when given key does not exist in given object', () => {
    assert.strictEqual(findKeyByValue(bestFruitsByColour, "Lime"), undefined);
  });
});