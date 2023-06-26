// LEETCODE PROBLEM #509 - FIBONACCI NUMBER
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

/*

#####################    SOLUTIONS BELOW  ###############################
*/

//  FOR() LOOP SOLUTION
// function fib(n) {
//   const arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2];
//   }
//   return arr[n];
// }

// console.log(fib(6), 8);
//[0,1,1,2,3,5,8,13,21,34,55]

// ITERATIVE SOLUTION WITH WHILE()
// function fib(n) {
//   let previous = 1,
//     current = 1;

//   if (n <= 1) {
//     return 1;
//   } else {
//     let counter = n - 1;

//     while (counter) {
//       let temp = current;
//       current += previous;
//       previous = temp;
//       counter--;
//     }
//   }
//   return current;
// }

// A RECURSIVE SOLUTION
// function fib(n) {
//   if (n <= 1) {
//     return 1;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(4), 5);

// [0,1,1,2,3,5]  # Do we include the zero or not?

// LEON VERSION OF MEMOIZED FIBONACCI - memo in the global scope
// const memo = {};
// function fib(n) {
//   if (n <= 1) {
//     return n;
//   } else if (memo[n]) {
//     return memo[n];
//   } else {
//     let result = fib(n - 1) + fib(n - 2);
//     memo[n] = result;
//     return result;
//   }
// }
// console.log(fib(5));
// [0, 1, 1, 2, 3, 5, 8];

//log
// console.log(fib(5));

// RECURSIVE SOLUTION USING MEMOIZATION - memo in local scope, no closure
// function fib(n, memo) {
//   memo = memo || {};
//   if (memo[n]) {
//     return memo[n];
//   }

//   if (n <= 1) {
//     return 1;
//   }

//   return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
// }
// console.log(fib(6));

//RECURSIVE SOLUTION USING MEMOIZATION AND CLOSURE
function fibonacciClosure() {
  let memo = {};
  return function fib(n) {
    if (n in memo) {
      return memo[n];
    } else {
      if (n < 2) {
        return 1; // OR return n to add zero at start
      } else {
        return (memo[n] = fib(n - 1) + fib(n - 2));
      }
    }
  };
}

const fasterFib = fibonacciClosure();

console.log(fasterFib(5), 8);

//[0,1,1,2,3,5,8,13,21,34,55]
//OR
//[1,1,2,3,5,8,13,21,34,55]
