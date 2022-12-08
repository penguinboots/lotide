const { assert } = require('chai');
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns a flattened array given array of numbers and nested arrays of numbers", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("returns a flattened array given an array with nested arrays using numbers and strings", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6], "a", ["a", 2]]), [1, 2, 3, 4, 5, 6, "a", "a", 2]);
  });
});