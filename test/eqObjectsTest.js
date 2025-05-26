//

const assertEqual = require('../assertEqual.js');
const eqObjects = require('../eqObjects.js');



// Test code
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};

assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),true); 
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),false); 