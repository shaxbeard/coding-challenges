// Given a random non-negative number,
// you have to return the digits of this number within an array in reverse order.

function reverseNum(num) {
  //   return num.toString().split("").reverse().map(Number);
  return String(num).split("").reverse().map(Number);
}

console.log(reverseNum(35231), [1, 3, 2, 5, 3]);
