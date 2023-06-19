function topKFrequent(nums, k) {
  const numCount = {};

  // Count the occurrences of each number
  for (let num of nums) {
    if (numCount[num]) {
      numCount[num]++;
    } else {
      numCount[num] = 1;
    }
  }

  // Create an array of unique numbers
  const uniqueNums = Object.keys(numCount);

  // Sort the unique numbers based on their frequency
  uniqueNums.sort((a, b) => numCount[b] - numCount[a]);

  // Return the top k frequent elements
  return uniqueNums.slice(0, k).map(Number);
}

// Example usage:
const nums = [1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3];
const k = 2;
const result = topKFrequent(nums, k);
console.log(result); // Output: [1, 2]

// function topKFrequent(nums, k) {
//   // O(1) time

//   const count = new Map();

//   // 1. build hash map: number and how often it appears
//   // O(N) time
//   for (let num of nums) {
//     count.set(num, (count.get(num) || 0) + 1);
//   }

//   // 2-3. build heap of top k frequent elements and
//   // convert it into an output array
//   // O(N log k) time
//   return Array.from(count.keys())
//     .sort((a, b) => count.get(b) - count.get(a))
//     .slice(0, k);
// }

// Example usage:
// const nums = [1, 1, 1, 2, 2, 3];
// const k = 2;
// const result = topKFrequent(nums, k);
// console.log(result); // Output: [1, 2]
