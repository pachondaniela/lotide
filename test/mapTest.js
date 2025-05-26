// Call Functions

const assertArraysEqual = require('../assertArraysEqual.js');
const map = require('../map.js');


// Test Cases


const words2 = ["happy", "Apple", "Faith", "Yes", "Possible"];

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, (word) => word[0]);
console.log(results1);

assertArraysEqual(map(words, (word) => word[0]), [ 'g', 'c', 't', 'm', 't'])
assertArraysEqual(map(words2, (word) => word[0]), [ 'h', 'A', 'F', 'Y', 'P'])