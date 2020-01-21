var largest = require('./6-largest');

test('properly works without arguments', function() {
  expect(largest()).toBe('No args');
})

test('properly returns the largest number passed like a argument', function() {
  expect(largest(2, 0.1, -5, 100, 3)).toBe(100);
})