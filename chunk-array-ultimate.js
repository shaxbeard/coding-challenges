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

function chunkArray(array, size) {
  let result = [];
  let arrayCopy = [...array];

  while (arrayCopy.length > 0) {
    result.push(arrayCopy.slice(0, size));
  }
  return result;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5));
