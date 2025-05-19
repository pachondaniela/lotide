const findKeyByValue = function (List , Show){
 for(let items in List) {
  if(Show === List[items]){
    return items
  }
}
return undefined
}



// Function Implementation

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅ Assertion Passed:  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


//Test Code

assertEqual("Lighthouse Labs" , "Bootcamp");
assertEqual(1,1);


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"),"comedy")