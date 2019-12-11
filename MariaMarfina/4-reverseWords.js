// Write a function that takes a sentence (string) and reverses each word in the sentence.

function reverseWords(str) {
  var wordsArr = str.split(' ');
  var reversedWords = wordsArr.map(function(word) {
    return word.split('').reverse().join('');
  })
  return reversedWords.join(' ');
}

module.exports = reverseWords;