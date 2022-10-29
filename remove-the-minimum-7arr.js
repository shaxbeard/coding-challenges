// Given an array of integers, remove the smallest value.
// Do not mutate the original array/list.
// If there are multiple elements with the same value, remove the one with a lower index.
// If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

//input - array, int only, no neg - CAN HAVE DUPLICATES OF SAME NUMBER
//return a new array -> same as input array but without the smallest number - if smallest is duplicated, remove the first index of the num

function removeMinimum(arr) {
  return arr;
}

console.log(removeMinimum([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
console.log(removeMinimum([5, 3, 2, 1, 4]), [5, 3, 2, 4]);
console.log(removeMinimum([2, 2, 1, 2, 1]), [2, 2, 2, 1]);
