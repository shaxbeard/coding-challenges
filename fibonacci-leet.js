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
function fib(n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

console.log(fib(6), 8);
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

// CS DOJO RECURSIVE SOLUTION
// function fib(n) {
//   if (n === 1 || n === 2) {
//     return 1;
//   }
//   return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(4), 5);

// [1,1,2,3,5]  # This starts the fibonacci sequence WITHOUT THE ZERO

// RECURSIVE SOLUTION USING MEMOIZATION
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
// console.log(fib(5), 8);

// VISUALIZATION VERSION OF MEMOIZED FIBONACCI
// var memo = {};
// var fib = function (n) {
//   if (n === 0 || n === 1) {
//     return n;
//   } else if (memo[n]) {
//     return memo[n];
//   } else {
//     var result = fib(n - 1) + fib(n - 2);
//     memo[n] = result;
//     return result;
//   }
// };

// fib(5);

// LEON VERSION OF MEMOIZED FIBONACCI
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

// SIMPLE RECURSIVE SOLUTION
// let memo = {};
// function fib(n) {
//   if (n <= 1) {
//     return n;
//   }
//   let result = fib(n - 1) + fib(n - 2);
//   memo[n] = result;
//   return result;
// }

//log
// console.log(fib(5));
