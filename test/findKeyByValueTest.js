// Call functions

const assertEqual = require('../assertEqual.js');
const findKeyByValue = require('../findKeyByValue.js');


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