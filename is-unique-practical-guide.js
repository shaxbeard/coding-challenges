// "Is Unique. Practical guide."
// Given an array of numbers, return true if all of the numbers are unique, or false if there are duplicates.

// NESTED FOR() LOOPS - With 10 numbers this is the fastest algorithm
// function isUnique(arr) {
//   let result = true;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (i !== j && arr[i] === arr[j]) {
//         return false;
//       }
//     }
//   }
//   return result;
// }
function isUnique(arr) {
  let result = true;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return result;
}

// function isUnique(arr) {
//   const numsMap = {};
//   for (num of arr) {
//     if (numsMap[num]) {
//       return false;
//     } else {
//       numsMap[num] = true;
//     }
//   }
//   return true;
// }

console.log(isUnique([1, 1, 1, 1, 1, 3]), false);
console.log(isUnique([1, 2, 3]), true);
console.log(isUnique([1, 1, 3]), false);
