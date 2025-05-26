// // Function Implementation

const eqArrays = require('./eqArrays.js');


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(` ✅ Assertion Passed:  ${actual} === ${expected}`);
  } else  {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
  
}

module.exports = assertArraysEqual;