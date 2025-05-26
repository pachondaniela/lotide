// Call Functions

const assertEqual = require('../assertEqual.js');
const countLetters = require('../countLetters.js');


// Test Code

assertEqual(countLetters("lighthouse")["l"], 1);
assertEqual(countLetters("lighthouse in the house")["l"], 1);
assertEqual(countLetters("lighthouse in the house")["h"], 4);
assertEqual(countLetters("Daniela")["D"], 1);