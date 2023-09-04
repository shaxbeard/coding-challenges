// In this recursive function, index will be the current index of the node we are considering in the array
function sumTreeBranch(arr, index) {
  if (index >= arr.length || arr[index] === -1) {
    return 0;
  }

  //In a binary tree represented as an array,
  //the left child index can be calculated as 2 * index + 1
  //and the right child index as 2 * index + 2.
  const leftChildIndex = 2 * index + 1;
  const rightChildIndex = 2 * index + 2;

  const leftSum = sumTreeBranch(arr, leftChildIndex);
  const rightSum = sumTreeBranch(arr, rightChildIndex);

  return arr[index] + leftSum + rightSum;
}

function compareBranches(arr) {
  if (!arr.length) {
    return "Tree is empty";
  }

  const rootValue = arr[0];
  const leftSum = sumTreeBranch(arr, 1);
  const rightSum = sumTreeBranch(arr, 2);

  if (leftSum > rightSum) {
    return "Left branch is larger";
  } else if (leftSum < rightSum) {
    return "Right branch is larger";
  } else {
    return "Both branches are equal";
  }
}

// Example usage
// const treeArray = [3, 6, 2, 9, -1, 10];
const treeArray = [3, 6, 2, 9, -1, 12];
const result = compareBranches(treeArray);
console.log(result);

//      3
//     / \
//    6   2
//   /   /
//  9   10
