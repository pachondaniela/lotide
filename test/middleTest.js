// Import functions

const assertArraysEqual = require('../assertArraysEqual.js')
const middle = require('../middle.js')


// Test cases for arrays of 1 OR 2 elements
assertArraysEqual(middle([1]),[]); 
assertArraysEqual(middle([1, 2]),[]);

// For arrays with Odd number of elements. 
assertArraysEqual(middle([1,2,3]),[2])
assertArraysEqual(middle([1,2,3,4,5]),[3])


// For arrays with Even number of elements
assertArraysEqual(middle([1,2,3,4]),[2,3])
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4])