// Return all elements of array except first. Arrays with one element or an empty array return an empty array.
const tail = function(arr) {
  let newTail = [];
  if (arr.length > 2) {
    newTail = arr.slice(1);
  }
  return newTail;
};

module.export = tail;