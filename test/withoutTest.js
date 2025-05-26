// Call functions

const assertArraysEqual = require('../assertArraysEqual.js');
const without = require('../without.js');

// Test Cases

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const test2 = [10,11,12];
console.log(without(test2, [11])); 
assertArraysEqual(test2, [10,11,12]);