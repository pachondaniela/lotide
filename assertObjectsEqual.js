//Test Code
const eqArrays = function(array1, array2) {
  if(array1.length !== array2.length){
      return false;
  } 
    for (let i = 0; i < array1.length ; i++){
      if(array1[i] !== array2[i]){
        return false
      } 
    }
    return true
  
}


const eqObjects = function(object1, object2){
  const obj1keys = Object.keys(object1)
  const obj2keys = Object.keys(object2)
   if(obj1keys.length !== obj2keys.length){
      return false;
    } 
  for (const key of obj1keys) {
    const val1 = object1[key];
    const val2 = object2[key];

    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!eqArrays(val1, val2)) return false;
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
}


const assertObjectsEqual = function(actual,expected){
  const inspect = require("util").inspect
  if(eqObjects(actual,expected) === true){
     console.log(` ✅ Assertion Passed:  ${inspect(actual)} === ${inspect(expected)}`);
  } else  {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

}


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};

assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject); 
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);