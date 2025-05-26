const letterPositions = function(sentence){
  const results = {}

  for (let i = 0; i < sentence.length ; i++) {
      const char = sentence[i]

      if (char === " ") continue;

      if (results.hasOwnProperty(char)){
        results[char].push(i);
      } else {
        results[char] = [i]
      }
  }

  return results

}


module.exports = letterPositions;