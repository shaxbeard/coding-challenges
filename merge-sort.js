function mergeSort(arr) {
  // base case
  if (arr.length <= 1) { // stop when each subarray has 1 (or zero?) elements
    return arr;
  }
  // define the left and right halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid); 
  const right = arr.slice(mid); 

  // recursively split the arr into halves until each subarray has just 1 element
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // sort the elements by stitching together each subarray
  return merge(sortedLeft, sortedRight); // merge() is a helper function here
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log(mergeSort(list), [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]); 


// Helper function to merge two sorted arrays
function merge(left, right) {
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }
  return [...merged, ...left.slice(i), ...right.slice(j)];
}
