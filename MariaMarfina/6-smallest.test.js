var smallest = require('./6-smallest');

test('properly works without arguments', function() {
  expect(smallest()).toBe('No args');
})

test('properly returns the smallest number passed like a argument', function() {
  expect(smallest(2, 0.1, -5, 100, 3)).toBe(-5);
})