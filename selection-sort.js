// ITERATIVE SOLUTION - time complexity is O(n^2)
// function selectionSort(array) {
//   const length = array.length;

//   for (let i = 0; i < length; i++) {
//     let min = i;
//     let temp = array[i];
//     for (let j = i + 1; j < length; j++) {
//       if (array[j] < array[min]) {
//         min = j;
//       }
//     }
//     array[i] = array[min];
//     array[min] = temp;
//   }
//   return array;
// }

// const unsortedArray = [64, 25, 12, 22, 11];
// console.log(selectionSort(unsortedArray), [11, 12, 22, 25, 64]);

// RECURSIVE SOLUTION - time complexity is ALSO O(n^2)
function selectionSortRecursive(arr, startIndex = 0) {
  const length = arr.length;

  if (startIndex < length - 1) {
    let minIndex = startIndex;

    // Find the index of the minimum element in the remaining unsorted part of the array
    for (let i = startIndex + 1; i < length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }

    // Swap the minimum element with the first element in the unsorted part
    const temp = arr[minIndex];
    arr[minIndex] = arr[startIndex];
    arr[startIndex] = temp;

    // Recursively call the selectionSortRecursive function with the next starting index
    selectionSortRecursive(arr, startIndex + 1);
  }

  return arr;
}

// Example usage:
const array = [64, 25, 12, 22, 11];
const sortedArray = selectionSortRecursive(array);
console.log(sortedArray); // Output: [11, 12, 22, 25, 64]
