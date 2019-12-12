var sum = require('./8-sum');

test('properly returns compound value of passed arguments', function() {
  expect(sum(1,3,5,7)).toBe(16);
})

test('properly works without arguments', function() {
  expect(sum()).toBe('you should pass some numbers to get the answer');
})
