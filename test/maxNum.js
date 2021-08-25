// Write code to return the largest number in the given array

var maxNum = function(arr) {
  
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  }       