require('./10-myBind');

test('properly works in an exact same way as the usual bind()', function() {
  function addPropToNumber(number) { return this.prop + number; }
  var bound = addPropToNumber.myBind({ prop: 9 });
  expect(bound(1)).toBe(10);
})