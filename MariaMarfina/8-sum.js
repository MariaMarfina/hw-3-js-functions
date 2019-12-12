// Function expects arbitrary number of digit arguments and returns compound value of them.
// Note: function should use recursion

function sum(nums) {
  if (arguments.length === 0) {
    return 'you should pass some numbers to get the answer';
  }
  if (arguments.length === 1) {
    return nums;
  }
  var argsWithoutFirstElem = [].slice.call(arguments, 1);
  return nums + sum.apply(null, argsWithoutFirstElem);
}

module.exports = sum;