// Given an array of integers nums, return the length of the longest consecutive sequence of elements.

// A consecutive sequence is a sequence of elements in which each element is exactly 
// 1 greater than the previous element.

// You must write an algorithm that runs in O(n) time.  // no sorting allowed 

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 1:
// Input: nums = [2,20,4,10,3,4,5]
// Output: 4
// Explanation: The longest consecutive sequence is [2, 3, 4, 5].

// Example 2:
// Input: nums = [0,3,2,5,4,6,1,1]
// Output: 7


//[100,4,200,1,3,2]   # input array

// max = 4
// currNum = 8
// currMax = 4
//     x       x x
//{100,8,200,5,7,6}   # array converted to a set
//                 ^

function longestConsecutive(nums) {
    if (nums == null || nums.length === 0) return 0; // input check
    const set = new Set(nums); 
    let max = 0;  // global max

    for (let num of set) {
      if (set.has(num - 1)) continue;  // disregard nums that don't begin a sequence
      let currNum = num;
      let currMax = 1;
      while (set.has(currNum + 1)) {
        currNum++;
        currMax++;
      }
      max = Math.max(max, currMax);
    }
    return max;
}

console.log(longestConsecutive([2,20,4,10,3,4,5]), 4)
console.log(longestConsecutive([0,3,2,5,4,6,1,1]), 7)
console.log(longestConsecutive([0,3,5,4,6,1,1]), 4)

// SETS HAVE THE POTENTIAL FOR O(1) LOOKUPS LIKE A HASH TABLE
// The specification requires sets to be implemented "that, on average, provide access times that are sublinear 
// on the number of elements in the collection". Therefore, it could be represented internally as a hash table (with O(1) lookup),
//  a search tree (with O(log(N)) lookup), or any other data structure, as long as the complexity is better than O(N).

