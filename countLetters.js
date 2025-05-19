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

const countLetters = function (string) {
  const letterCounts = {};

  for (const char of string){
      if(char === " ") continue;

      if(letterCounts.hasOwnProperty(char)){
        letterCounts[char]++;
      } else {
        letterCounts[char] = 1
      }
  }
 return letterCounts
}



test = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}


assertEqual(countLetters("lighthouse")["l"], 1);
assertEqual(countLetters("lighthouse in the house")["l"], 1);
assertEqual(countLetters("lighthouse in the house")["h"], 4);
assertEqual(countLetters("Daniela")["D"], 1);