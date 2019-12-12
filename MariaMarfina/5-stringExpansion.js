// Write a function stringExpansion
// Given a string that includes alphanumeric characters ('3a4B2d') return the expansion of that string: 
// The numeric values represent the occurance of each letter preceding that numeric value. 

function stringExpansion(str) {
  var characters = str.split("");
  var repeatTimes = 1;
  var expandedString = characters.reduce(function(res, character) {
    if (!isNaN(character)) {
      repeatTimes = character;
    } else {
      res += character.repeat(repeatTimes);
      repeatTimes = 1;
    }
    return res;
  }, "");
  return expandedString;
}

module.exports = stringExpansion;