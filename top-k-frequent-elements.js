function map(nums) {
  const numCount = {};
  for (let i = 0; i < nums.length; i++) {
    if (numCount[nums[i]]) {
      numCount[nums[i]]++;
    } else {
      numCount[nums[i]] = 1;
    }
  }
  return numCount;
}

function charMap(string) {
  return string.split("").reduce((map, nums) => {
    map[nums] ? map[nums]++ : (map[nums] = 1);
    return map;
  }, {});
}

const myString = "abracadabra";
console.log(charMap(myString));

function topKFrequent(nums, k) {
  debugger;

  // Count the occurrences of each number in a hash map
  const numCount = map(nums);
  // numCount: { 1: 3, 2: 2, 3: 6 }

  // Create an array of unique numbers (the KEYS from the hash map)
  const uniqueNums = Object.keys(numCount);

  // uniqueNums: ['1', '2', '3']

  // Sort the unique numbers based on their frequency (the VALUES of these numbers in the hash map!)
  uniqueNums.sort((a, b) => numCount[b] - numCount[a]);

  // uniqueNums: ['3', '1', '2']

  // Return the top k frequent elements
  return uniqueNums.slice(0, k).map(Number);
  // [3, 1]
}

// Example usage:
const nums = [1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3];
const k = 2;
const result = topKFrequent(nums, k);
console.log(result); // Output: [1, 2]

// IS THERE A RECURRING PATTERN OF LOGIC FOR THIS SOLUTION?
// This solution is a pattern of "sort the hash map".
// Here, it is sorting just the hash map KEYS in the order of the hash map VALUES

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
