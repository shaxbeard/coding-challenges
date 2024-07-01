
// METHOD 1 - Iterative solution

// CodeWars test error says "factorial for 0 is 1"
// BUT THIS IS THE ITERATIVE SOLUTION IN MY ANKI !!!!!
// function factorial(n) {
//   for (let i = n - 1; i > 1; i--) {
//     n *= i;
//   }
//   return n;
// }

// This iterative solution passes on CodeWars
// function factorial(n) {
  // let answer = 1;
  // for (let i = n; i > 1; i--) {
  //   answer *= i;
  // }
  // return answer;
// }
// console.log(factorial(5), 120);




// METHOD 2 - USING RECURSION
function factorial(n) {
  // base case
    if (n < 2) {
        return 1;
    }
  // recursive case
    return n * factorial(n - 1);
}

// METHOD 3 - USING RECURSION AND MEMOIZATION
// function factorial(n, memo) {
//   memo = memo || {};
//   if (n <= 1) {
//     return 1;
//   } else if (memo[n]) {
//     return memo[n];
//   } else {
//     return (memo[n] = n * factorial(n - 1, memo));
//   }
// }

// console.log(factorial(5));

// METHOD 4 - USING RECURSION, MEMOIZATION, AND CLOSURE
// function factorial() {
//   let memo = {};
//   return function fact(num) {
//     if (num < 2) {
//       return 1;
//     }
//     if (memo[num]) {
//       return memo[num];
//     }
//     return (memo[num] = num * fact(num - 1));
//   };
// }

// const fasterFactorial = factorial();
// console.log(fasterFactorial(5), 120);
