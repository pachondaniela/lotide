const eqArrays = require('./eqArrays.js')

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

module.exports = eqObjects





