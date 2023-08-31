// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//PREP
//Parameter -
//Return -
//Example -
//Pseudocode -
//Methods!

// METHOD #1 - MANUAL TRANSMISSION WITH FOR() AND IF()
// function positiveSum(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

//METHOD #2 - SHORTER WITH FOREACH()
// function positiveSum(arr) {
//   let sum = 0;

//   arr.forEach(num => num > 0 && (sum += num));
//   return sum;
// }

// console.log(positiveSum([1, -4, 7, 12]));

// METHOD #3 - USING REDUCE WITH 1 LINE
// function positiveSum(arr) {
//   return arr.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);
// }

// METHOD #4 - USING REDUCE WITH MULITPLE LINES
// function positiveSum(arr) {
//   return arr.reduce((a, c) => {
//     if (c > 0) {
//       return a + c;
//     } else {
//       return a;
//     }
//   }, 0);
// }
// console.log(positiveSum([1, -4, 7, 12]));

// function positiveSum(arr) {
//   return arr.reduce((total, item) => (item > 0 ? total + item : total), 0);
//   // return arr.reduce((total, item) => total + item);
// }

// console.log(positiveSum([1, -4, 7, 12]));

//   return arr.reduce((total, item) => (item > 0 ? total + item : null), 0);
//   return sum;
// }

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// expected output: 10
