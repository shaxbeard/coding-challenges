// "Is Unique. Practical guide."
// Given an array of numbers, return true if all of the numbers are unique, or false if there are duplicates.

// NESTED FOR() LOOPS
function isUnique(arr) {
  let result = true;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        result = false;
      }
    }
  }
  return result;
}

// ONE FOR() LOOP WITH A CACHE
// function isUnique(arr) {
//   const cache = {};
//   let result = true;

//   for (let i = 0; i < arr.length; i++) {
//     if (cache[arr[i]]) {
//       result = false;
//     } else {
//       cache[arr[i]] = true;
//     }
//   }
//   return result;
// }

console.log(isUnique([1, 2, 3]), true);
console.log(isUnique([1, 1, 3]), false);
