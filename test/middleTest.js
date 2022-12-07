const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns empty array for array length < 3", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns an array of 2 for even-length arrays with length >3", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
