// // Function Implementation

const middle = function(array) {
  
  const middleIndex = Math.floor(array.length/2)
  
    if(array.length === 1 || array.length === 2) {
      return []
    } else if (array.length % 2 === 0){
      return [array[middleIndex - 1] , array [middleIndex]]
    } else if (array.length % 2 !== 0) {
      return [array[middleIndex]]
    }
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



// Test cases for arrays of 1 OR 2 elements
assertArraysEqual(middle([1]),[]); 
assertArraysEqual(middle([1, 2]),[]);

// For arrays with Odd number of elements. 
assertArraysEqual(middle([1,2,3]),[2])
assertArraysEqual(middle([1,2,3,4,5]),[3])


// For arrays with Even number of elements
assertArraysEqual(middle([1,2,3,4]),[2,3])
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4])