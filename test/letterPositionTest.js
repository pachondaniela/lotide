// Import Functions

const assertArraysEqual = require('../assertArraysEqual.js');
const letterPositions = require('../letterPositions.js');


// Test Cases
assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual([1, 2, 3], [3, 2, 1])
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])
assertArraysEqual(["1", "2", "3"], ["1", "2", 3])

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("I love You").o, [3,8]);