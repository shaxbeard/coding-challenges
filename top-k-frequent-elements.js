// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

//Input - an array of INTs - a single INT called "k"
//Return the top "k" most frequent nums in the array
//   So if k = 2, I will return the top 2 most fequent numbers from the array

// Solution with making a numMap and then sorting the keys in that map by their values
// Time complexity is O(n) to create the numMap + O(m log m) to sort the map using a "divide and conquer" sorting method
// The time for O(m log m) will likely dominate the time complexity, so you can drop the others because they are "non-dominant terms"
function topkFrequent(arr, k) {
  // Create a frequency map
  const freqMap = frequencyMap(arr); // O(n)

  // Pull out an array of just the keys from the freqMap
  // Sort the keys using the values from the freqMap
  const keysArr = Object.keys(freqMap).sort((a, b) => freqMap[b] - freqMap[a]); // O(m log m)

  //Slice out just the top k items from the array of keys (and convert the keys to numbers)
  return keysArr.slice(0, k).map(Number); // O(k) + O(k)
}

console.log(topkFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2]);
console.log(topkFrequent([1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 4], 2), [3, 1]);

// Separate the map into a separate function
// Why can this be below the function call? Beause functions declared using the function keyword are hoisted
function frequencyMap(arr) {
  const map = {};
  for (let num of arr) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num]++;
    }
  }
  return map;
}


