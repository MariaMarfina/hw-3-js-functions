// Write smallest function that returns the smallest number passed like a argument.

function smallest() {
  if (!arguments.length) {
    return 'No args';
  }

  return Math.min.apply(null, [].slice.call(arguments));
}

module.exports = smallest;