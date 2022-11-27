const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = function(object, callback) {
  let result = undefined;
  for (let key of Object.keys(object)) { // iterate through array of all obj keys
    if (callback(object[key])) { // if callback using key value is truthy
      result = key;
      return result;
    }
  }
  return result;
};

let result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(result1, "noma");