var reverseWords = require('./4-reverseWords');

test('properly takes a sentence (string) and reverses each word in the sentence', () => {
  expect(reverseWords(" A fun little challenge! ")).toBe(" A nuf elttil !egnellahc ");
})