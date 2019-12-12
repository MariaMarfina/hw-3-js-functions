var transform = require('./7-transform');

test('properly returns value from a base array.', function() {
  expect(transform([10, 20, 30, 40, 50])[3]()).toBe(40);
})

test('properly returns value from a base array.', function() {
  expect(transform([10, 20, 30, 40, 50])[4]()).toBe(50);
})

test('transforms array of numbers to array of functions', function() {
  expect(typeof transform([10, 20, 30, 40, 50])[3]).toBe('function');
})