// Write smallest function that returns the smallest number passed like a argument.

function smallest() {
  if (arguments.length === 0) {
    return 'you should pass some numbers to get the answer';
  }

  var smallestNum = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    if (arguments[i] < smallestNum) {
      smallestNum = arguments[i];
    }
  }
  return smallestNum;
}

module.exports = smallest;