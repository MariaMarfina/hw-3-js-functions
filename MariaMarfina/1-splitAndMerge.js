// Write a function splitAndMerge
// Function accept 2 parameters:str and sp. str is a sentence. sp is a char as separator. 
// First we need to divide the sentence into words(Use separator space); 
// and then divide each word into characters(Use separator empty string); 
// and then merge each characters with the specified sp; 
// at last merge all the words(Use separator space) and return it.

function splitAndMerge(str, sp) {
  var wordsFromStr = str.split(' ');
  var separatedWords = [];
  for (var i = 0; i < wordsFromStr.length; i++) {
    separatedWords.push(wordsFromStr[i].split('').join(sp));
  }
  return separatedWords.join(' ');
}

module.exports = splitAndMerge;