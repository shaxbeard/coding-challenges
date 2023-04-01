// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

//Input - one integer, data type is integer only - no integer as string, no funny business
// Return - the conditons above

// Example 1:
// Input: n = 3
// Output: ["1","2","Fizz"]

// Example 2:
// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]

// Example 3:
// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// if i does not meet ANY of the three main conditions, return answer[i] = [i] - SO answer[1] = ["1"] ????

// function fizzBuzz(n) {
//   const arr = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       arr.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       arr.push("Fizz");
//     } else if (i % 5 === 0) {
//       arr.push("Buzz");
//     } else {
//       arr.push(i.toString());
//     }
//   }
//   return arr;
// }

// OPTIMIZATION - DRY CODE AND BETTER READABILITY BY REMVOING REPETITIVE BITS
function fizzBuzz(n) {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    const divisbleBy3 = i % 3 === 0;
    const divisbleBy5 = i % 5 === 0;

    if (divisbleBy3 && divisbleBy5) {
      arr.push("FizzBuzz");
    } else if (divisbleBy3) {
      arr.push("Fizz");
    } else if (divisbleBy5) {
      arr.push("Buzz");
    } else {
      arr.push(i.toString());
    }
  }
  return arr;
}

// function fizzBuzz(n) {
//   const arr = [];
//   for (let i = 1; i <= n; i++) {
//     i % 3 === 0 && i % 5 === 0
//       ? arr.push("FizzBuzz")
//       : i % 3 === 0
//       ? arr.push("Fizz")
//       : i % 5 === 0
//       ? arr.push("Buzz")
//       : arr.push(i.toString());
//   }
//   return arr;
// }

// function fizzBuzz(n) {
//   return Array.from({ length: n }, (_, i) => {
//     i += 1;
//     return i % 3 === 0 && i % 5 === 0
//       ? "FizzBuzz"
//       : i % 3 === 0
//       ? "Fizz"
//       : i % 5 === 0
//       ? "Buzz"
//       : //   : `${i}`;
//         i.toString();
//   });
// }

// function fizzBuzz(n) {
//   return [...Array(n)].map((x, i) => {
//     i += 1;
//     return i % 3 === 0 && i % 5 === 0
//       ? "FizzBuzz"
//       : i % 3 === 0
//       ? "Fizz"
//       : i % 5 === 0
//       ? "Buzz"
//       : //   : `${i}`;
//         i.toString();
//   });
// }

console.log(fizzBuzz(3), ["1", "2", "Fizz"]);
console.log(fizzBuzz(5), ["1", "2", "Fizz", "4", "Buzz"]);
console.log(fizzBuzz(15), [
  "1",
  "2",
  "Fizz",
  "4",
  "Buzz",
  "Fizz",
  "7",
  "8",
  "Fizz",
  "Buzz",
  "11",
  "Fizz",
  "13",
  "14",
  "FizzBuzz",
]);
