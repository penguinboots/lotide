// Return first element of array, or undefined if empty array
const head = function(arr) {
  return (arr.length > 0 ? arr[0] : undefined);
};

module.exports = head;