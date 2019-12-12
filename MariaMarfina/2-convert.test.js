var convert = require('./2-convert');

test('properly converts a hash into an array', function() {
  expect(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}))
  .toStrictEqual([["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]);
})

