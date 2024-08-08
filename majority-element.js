// 169. Majority Element
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

//DEMO
// n / 2 = 7/2 = 3.5
// {'1':3,'2':4}
//         ^
// [2,2,1,1,1,2,2]
//      ^

function majorityElement(nums) {
    // create a frequency map in the hash table - key = num, value = frequency
    const map = freqMap(nums);
    // loop through the map and check which key(s) have a value > n / 2
    // 
    let majority = nums.length / 2; 
    for (let key in map) {
        if (map[key] > majority) {
            return Number(key);
        }
    }
}

function freqMap(arr) {
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

console.log(majorityElement([3,2,3]), 3)
console.log(majorityElement([2,2,1,1,1,2,2]), 2)