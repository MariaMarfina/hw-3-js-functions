// Write function countDown. 
// Function expects number and logs values one by one till zero with one second delay.

function countDown(num) {
  var currNum = num;
  var timerId = setInterval(function() {
    if (currNum === 0) {
      clearInterval(timerId);
    }
    console.log(currNum);
    currNum--;
  }, 1000);
}

countDown(3); // 3 2 1 0