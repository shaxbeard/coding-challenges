// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//   const sum = arr.reduce((total, item) => {
//     if (item < 0) {
//       return total;
//     }
//     console.log("total: ", total);
//     console.log("item: ", item);
//     return total + item;
//   }, 0);
//   return sum;
// }

//PREP
//Parameter -
//Return -
//Example -
//Pseudocode -
//Methods!

function positiveSum(arr) {
  return arr.reduce((total, item) => (item > 0 ? total + item : total), 0);
  // return arr.reduce((total, item) => total + item);
}

console.log(positiveSum([1, -4, 7, 12]));

//   let sum = 0;
//   arr.forEach((item) => {
//     item > 0 ? (sum += item) : null;
//   });
//   return sum;
// }

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
