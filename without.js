// // Function Implementation

const without = function(array1, array2) {

  let newArray = []
 

    for (let i = 0; i < array1.length ; i++){
        if(!array2.includes(array1[i])){
        newArray.push(array1[i])
      } 
    }
    return newArray
    
}

module.exports = without
