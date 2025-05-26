// Function Implementation
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

module.exports = countLetters




