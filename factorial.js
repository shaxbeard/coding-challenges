// USING A FOR LOOP

function factorial(n) {
  for (let i = n - 1; i > 1; i--) {
    n *= i;
  }
  return n;
}
// function factorial(n) {
//   debugger;
//   let answer = 1;
//   for (let i = n; i > 1; i--) {
//     answer *= i;
//   }
//   return answer;
// }
console.log(factorial(5), 120);

// USING A WHILE LOOP

// function factorial(n) {
//   var result = n;
//   if (n <= 1) {
//     return 1;
//   }
//   while (n > 1) {
//     n--;
//     result *= n;
//   }
//   return result;
// }
// console.log(factorial(4));

// USING RECURSION

// function factorial(n) {
//     if (n <= 1) {
//         return 1
//     }
//     return n * factorial(n - 1)
// }

// USING MEMOIZATION

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

// Recursive solution with memoization and closure
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
