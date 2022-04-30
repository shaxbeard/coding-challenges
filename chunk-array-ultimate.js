// Given an array and a chunk size,
// divide the array into many sub-arrays
// where each sub-array has the specified length.

function chunkArray(arr, size) {
  let result = [];

  for (value of arr) {
    let lastArray = result[result.length - 1];
    if (!lastArray || lastArray.length == size) {
      result.push([value]);
    } else {
      lastArray.push(value);
    }
  }
  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2), [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
]);
