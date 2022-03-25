// The Fibonacci numbers, commonly denoted F(n) form a sequence,
// called the Fibonacci sequence, such that each number is the sum of the two preceding ones,
// starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.

// Example 1:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:
// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// The full sequence with 3 numbers: [0,1,1]

// Example 3:
// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
// The full sequence with 4 numbers: [0,1,1,2]

//  FOR() LOOP SOLUTION
// function fib(n) {
//   let arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2];
//   }
//   return arr[n];
// }

// console.log(fib(4), 3);

// ITERATIVE SOLUTION WITH WHILE()
function fib(n) {
  let previous = 1,
    current = 1;

  if (n <= 1) {
    return 1;
  } else {
    let counter = n - 1;

    while (counter) {
      let temp = current;
      current += previous;
      previous = temp;
      counter--;
    }
  }
  return current;
}
