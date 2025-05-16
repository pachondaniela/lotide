// // Function Implementation

const flatten = function (array) {
  
  let newArray = []
  for (let i = 0 ; i < array.length ;  i++){
    if (Array.isArray(array[i])){
      for (let j = 0 ; j < array[i].length ; j++) {
        newArray.push(array[i][j])
      }
    } else {
      newArray.push(array[i])
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


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,4,6]); 
assertArraysEqual(flatten([3, 7, [3, 4, 5] , [6]]), [3,7,3,4,5,6]); 