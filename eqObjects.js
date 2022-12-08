const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
