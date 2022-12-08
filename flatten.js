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

module.exports = flatten;