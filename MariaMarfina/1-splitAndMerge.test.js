var splitAndMerge = require('./1-splitAndMerge');

test('properly splits string and merges it with separator', function() {
  expect(splitAndMerge("My name is John"," ")).toBe("M y n a m e i s J o h n");
  expect(splitAndMerge("Hello World!",",")).toBe("H,e,l,l,o W,o,r,l,d,!");
})