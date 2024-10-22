
//DEMO
// [5,4,1,8,7,2,6,3] - input
// [1,2,3,4,5,6,7,8] - output


// Step 1 - Split the array into halves until each arr has 1 or 0 items

//                   [5,4,1,8,7,2,6,3]  - length = 8
//                            ^         - mid index = 8 / 2 = 4
//                       /       \
//               [5,4,1,8]       [7,2,6,3] - left = arr.slice(0,4), right = arr.slice(4)
//               /      \         /      \
//          [5,4]     [1,8]  [7,2]       [6,3]  - slice each arr in halves again ...
//        /    \     /   \   /   \       /   \
//      [5]   [4]  [1]  [8] [7]  [2]  [6]     [3]


// What if the input array had an odd number of elements?
// YOU STILL END UP WITH EACH NUM IN ITS OWN ARRAY - THERE ARE NO "EMPTY ARRAYS"

//                   [5,4,1,8,7,2,6,3,9]  - length = 9
//                            ^         - mid index = 9 // 2 = 4
//                       /       \
//               [5,4,1,8]       [7,2,6,3,9] - left = arr.slice(0,4), right = arr.slice(4)
//               /      \         /      \
//          [5,4]     [1,8]  [7,2]       [6,3,9]  - slice each arr in halves again - left = arr.slice(0,2), right = arr.slice(2) 
//        /    \     /   \   /   \       /   \
//      [5]   [4]  [1]  [8] [7]  [2]  [6]     [3,9] - again, left = arr.slice(0,1), right = arr.slice(1)
//                                            /  \
//                                         [3]   [9]

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) { // stop when each subarray has 1 (or zero - this handles an empty input array) elements
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

console.log(mergeSort([5,4,1,8,7,2,6,3]),[1,2,3,4,5,6,7,8]); 


// Step 2 - Sort the individual nums by stiching the arrays together
//      [5]   [4]  [1]  [8] [7]  [2]  [6]     [3]
//       \    /      \  /     \  /      \    /
//       [4,5]       [1,8]    [2,7]     [3,6]
//           \      /            \      /
//           [1,4,5,8]            [2,3,6,7]
//                    \          /
//                   [1,2,3,4,5,6,7,8]

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
