// Import the function writted for head

const head = require('../head.js')
const assertEqual = require('../assertEqual.js')


//Test Code

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);