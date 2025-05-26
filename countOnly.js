// Function Implementation

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// The function should report back how many instances of each string were found in  allItems array of string. The function should return an object. 

const countOnly = function (allItems,itemsToCount) {
  const results = {};

  for (const item of allItems){
    if (itemsToCount[item]){
    if(results[item]){
        results[item] += 1;
      } else {
        results[item] = 1;
      }
}
  }
return results;
}

module.exports = countOnly





