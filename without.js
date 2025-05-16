// // Function Implementation

const without = function(array1, array2) {

  let newArray = []

    for (let i = 0; i < array1.length ; i++){
      for (let j = 0 ; j < array2.length ; j ++){
        if(array1[i] !== array2[j]){
        newArray.push(array1[i])
      } 
      }
    }
    return newArray
}

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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(` ✅ Assertion Passed:  ${actual} === ${expected}`);
  } else  {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
  
}

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const test2 = [10,11,12];
console.log(without(test2, [11])); 
assertArraysEqual(test2, [10,11,12]);