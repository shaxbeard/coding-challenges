// Given an array and a chunk size,
// divide the array into many sub-arrays
// where each sub-array has the specified length.

// LOOPING THROUGH THE ARRAY
// function chunkArray(arr, size) {
//   let result = [];

//   for (value of arr) {
//     let lastArray = result[result.length - 1];
//     if (!lastArray || lastArray.length == size) {
//       result.push([value]);
//     } else {
//       lastArray.push(value);
//     }
//     console.log(lastArray);
//   }
//   return result;
// }

// LOOPING THROUGH THE NUMBER OF CHUNKS

// function chunkArray(array, size) {
//   let result = [];
//   let arrayCopy = [...array];

//   while (arrayCopy.length > 0) {
//     result.push(arrayCopy.splice(0, size));
//   }
//   return result;
// }

// USING SLICE()

// function chunkArray(array, size) {
//   let result = [];

//   for (i = 0; i < array.length; i += size) {
//     let chunk = array.slice(i, i + size);
//     result.push(chunk);
//   }
//   return result;
// }

// RECURSION
// function chunkArray(array, size) {
//   if (array.length <= size) {
//     return [array];
//   }
//   return [array.slice(0, size), ...chunkArray(array.slice(size), size)];
// }

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5));
