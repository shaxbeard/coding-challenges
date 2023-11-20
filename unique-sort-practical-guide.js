//Task: Transform this simple sorting algorithm into a unique sort.
// It should not return any duplicate values in the sorted array.

//Input - array of integers, no funny business, but there will duplicates of some integers
//Return - remove all duplicate integers, then sort the array

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]

// I COULD use nested arrays to remove the duplicatees
// OR I could use a cache to check each number against a saved object of previous numbers

// const uniqSort = function (arr) {
//   //   const breadcrumbs = {};
//   let uniques = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (i !== j && arr[i] !== arr[j]) {
//         uniques.push(arr[i]);
//       }
//     }
//     return uniques;
//   }

//   //   return arr.sort((a, b) => a - b);
// };

const uniqSort = function (arr) {
  const breadcrumbs = {};
  const result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (!breadcrumbs[arr[i]]) {
      result.push(arr[i]);
      breadcrumbs[arr[i]] = true;
    }
  }

  return result.sort((a, b) => a - b);
};

console.log(uniqSort([4, 2, 2, 3, 2, 2, 2]), [2, 3, 4]);
