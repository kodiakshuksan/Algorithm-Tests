// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

// var oddOrEven = function(num) {
//     const even = [];
//     const odd = [];
//     if (num%2) {
//         num.push(even)
//             } else {
//                 num.push(odd)
//                  }

    
//         console.log(even)
//         console.log(odd)
// };



var oddOrEven = function(num) {
    if (num % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  };