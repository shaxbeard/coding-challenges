// Given an array and a chunk size,
// divide the array into many sub-arrays
// where each sub-array has the specified length.

// LOOPING THROUGH THE ARRAY
function chunkArray(arr, size) {
  let result = [];

  for (value of arr) {
    // On each iteration, set the value of lastArray to the last nested array inside of the result array
    const lastArray = result[result.length - 1];
    // If lastArray is empty or we have reached our target chunk size
    if (!lastArray || lastArray.length == size) {
      // Then push a new nested array with the current value inside of it into the outer result array
      result.push([value]);
      // Otherwise, keep pushing new numbers in the current nested array to build up our chunks
    } else {
      lastArray.push(value);
    }
  }
  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5));

// LOOPING THROUGH THE NUMBER OF CHUNKS WITH SPLICE()
// function chunkArray(array, size) {
//   let result = [];
//   let arrayCopy = [...array];

//   while (arrayCopy.length > 0) {
//     result.push(arrayCopy.splice(0, size));
//   }
//   return result;
// }
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5));

// USING SLICE()
// function chunkArray(array, size) {
//   let result = [];

//   for (i = 0; i < array.length; i += size) {
//     result.push(array.slice(i, i + size));
//   }
//   return result;
// }
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5));

// RECURSION
// function chunkArray(array, size) {
//   if (array.length <= size) {
//     return [array];
//   }
//   return [array.slice(0, size), ...chunkArray(array.slice(size), size)];
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5));
