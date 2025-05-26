// Import functions that we want to use

const assert = require('chai').assert;
const tail = require('../tail.js')

// Test Code

describe("#tail" , () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs'] " , () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
    });

   it("returns [10,11,12] for [9,10,11,12] " , () => {
    assert.deepEqual(tail([9,10,11,12]), [10,11,12]);
    });

  it("make sure the original array was not altered by the tail function", () => {
  const words = ["Hello", "Lighthouse", "Labs"];
  const result = tail(words);
  assert.deepEqual(result, ["Lighthouse", "Labs"]);
  assert.strictEqual(words.length, 3);
});

});