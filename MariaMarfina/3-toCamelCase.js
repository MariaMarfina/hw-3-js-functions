// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized.

function toCamelCase(str) {
  var separatedWords = str.split('_').join('-').split('-');
  var capitalizedWords = separatedWords.map(function(word, index) {
    if (index === 0) {
      return word;
    } else {
      return word[0].toUpperCase() + word.slice(1);
    }
  });
  return capitalizedWords.join('');
}

module.exports = toCamelCase;