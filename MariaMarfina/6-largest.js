// Write largest function that returns the largest number passed like a argument.

function largest() {
  if (!arguments.length) {
    return 'No args';
  }

  return Math.max.apply(null, [].slice.call(arguments));
}

module.exports = largest;