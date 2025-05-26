// Call in functions

const assertObjectsEqual = require('../assertObjectsEqual.js');


// Test cases

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};

assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject); 
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);