const assertArraysEqual = require('../assertArraysEqual.js');
const flatten = require('../flatten.js');


// Test cases
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,4,6]); 
assertArraysEqual(flatten([3, 7, [3, 4, 5] , [6]]), [3,7,3,4,5,6]); 