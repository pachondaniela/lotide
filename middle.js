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

module.exports = middle;
