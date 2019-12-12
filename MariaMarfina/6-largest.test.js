var largest = require('./6-largest');

test('properly works without arguments', function() {
  expect(largest()).toBe('you should pass some numbers to get the answer');
})

test('properly returns the largest number passed like a argument', function() {
  expect(largest(2, 0.1, -5, 100, 3)).toBe(100);
})