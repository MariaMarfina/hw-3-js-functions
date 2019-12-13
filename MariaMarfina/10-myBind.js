// Write a polyfill for a .bind() function and save it in Function.prototype.myBind(). 
// myBind() should work in an exact same way as the usual bind() - take context as a first parameter and the list of arguments separated by comma.
// Hint: play with the function in Function.prototype and see what this points to inside it. 

Function.prototype.myBind = function(context) {
  var self = this;
  var args = [].slice.call(arguments, 1);
  return function() {
    args = args.concat([].slice.call(arguments));
    return self.apply(context, args);
  }
}