const head = require('./head.js');
const tail = require('./tail.js');
const middle = require('./middle.js');
const assertEqual = require('./assertEqual.js');
const eqArrays = require('./eqArrays.js');
const assertArraysEqual = require('./assertArraysEqual.js');
const countLetters = require('./countLetters.js');
const countOnly = require('./countOnly.js');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual.js');
const findKey = require('./findKey.js');
const findKeyByValue = require('./findKeyByValue.js');
const flatten = require('./flatten.js');
const letterPositions = require('./letterPositions.js');
const map = require('./map.js');
const takeUntil = require('./takeUntil.js');
const without = require('./without.js');



module.exports = {
  head,
  tail, 
  middle, 
  assertArraysEqual,
  assertEqual,
  eqArrays,
  countLetters,
  countOnly,
  eqObjects,
  assertObjectsEqual,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without
  };

