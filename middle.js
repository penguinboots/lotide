
// Return the middle value(s) of given array, return empty array if given array of length 1 or 2
const middle = function(arr) {
  let newMid = [];
  let mid = arr.length / 2;
  if (arr.length > 2) {
    arr.length % 2 === 0 ?
      newMid = newMid.concat(arr.slice(mid - 1, mid + 1)) :
      newMid.push(arr[Math.floor(mid)]);
  }
  console.log(newMid);
  return newMid;
};

module.exports = middle;