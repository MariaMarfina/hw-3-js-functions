// Write largest function that returns the largest number passed like a argument.

function largest() {
  if (arguments.length === 0) {
    return 'you should pass some numbers to get the answer';
  }

  var largestNum = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    if (arguments[i] > largestNum) {
      largestNum = arguments[i];
    }
  }
  return largestNum;
}

module.exports = largest;