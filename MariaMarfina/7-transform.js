// Write function transform that will transform array of numbers to array of functions that will return value from a base array.

function transform(baseArray) {
  var functions = baseArray.map(function(num) {
    return function() {
      return num;
    }
  })
  return functions;
}

module.exports = transform;