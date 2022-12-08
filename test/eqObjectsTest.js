const { assert } = require("chai");
const eqObjects = require('../eqObjects');
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

describe("#eqObjects", () => {
  it("returns true given two objects with the same key-value pairs", () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it("returns false wheng given objects with different numbers of keys", () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });
  it("returns true when given two objects with matching key-value pairs where some values are arrays", () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });
});