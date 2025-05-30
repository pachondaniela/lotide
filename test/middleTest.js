// Import functions

const assert = require('chai').assert;
const middle = require('../middle.js');

// Test Cases 

describe("#middle" , () => {
  it("returns an empty array for arrays of 1 or 2 elements" , () => {
    assert.deepEqual(middle([1]), []);
    });

  it("returns [2] for [1,2,3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); 
  }); 

  it("returns [3] for [1,2,3,4,5]", () => {
  assert.deepEqual(middle([1,2,3,4,5]),[3]);
  });

  it("returns [2,3] for [1,2,3,4]", () => {
  assert.deepEqual(middle([1,2,3,4]),[2,3]);
  });

  it("returns [3,4] for [1,2,3,4,5,6]", () => {
  assert.deepEqual(middle([1,2,3,4,5,6]),[3,4]);
  });

  it("make sure the original array was not altered by the middle function", () => {
  const words = ["hello", "world", "lighthouse"];
  const result = middle(words);
  assert.deepEqual(result, ["world"]);
  assert.strictEqual(words.length, 3);
});

});