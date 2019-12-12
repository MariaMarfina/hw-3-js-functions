var stringExpansion = require('./5-stringExpansion');

test('properly returns the expansion of the string that includes alphanumeric characters', () => {
  expect(stringExpansion('3D2a5d2f')).toBe('DDDaadddddff');
})

test('if there are two consecutive numeric characters the first one is ignored', () => {
  expect(stringExpansion('3d332f2a')).toBe('dddffaa');
})

test('if there are two consecutive alphabetic characters then the first character has no effect on the one after it', () => {
  expect(stringExpansion('abcde')).toBe('abcde');
})

test('empty strings should return an empty string', () => {
  expect(stringExpansion('')).toBe('');
})