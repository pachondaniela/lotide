// Import Functions
const assertArraysEqual = require('../assertArraysEqual.js')

// Test Code

assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual([1, 2, 3], [3, 2, 1])
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])
assertArraysEqual(["1", "2", "3"], ["1", "2", 3])