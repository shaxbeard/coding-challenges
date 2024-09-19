// 1207. Unique Number of Occurrences
// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

// Example 1:
// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

// DEMO
// [1,2,2,2,1,1,3]
// {1:3, 2:3, 3:1}
// [3,3,1] - frequency array, length = 3
// {3,1} - set of the frequency array, size = 2
// If size === length, then the num of occurrences is unique = true

// Create a hash table (frequency map) for the individual nums in the array
// Create an array of the VALUES (the frequencies) of the hash table
// Test if each value in the array is unique


// function uniqueOccurrences(arr) {
//     const freqMap = {};
//     for (let num of arr) {
//         !freqMap[num] ? freqMap[num] = 1 : freqMap[num]++;
//     }
//     const freqArr = Object.values(freqMap);
//     return new Set(freqArr).size === freqArr.length;
// }

// console.log(uniqueOccurrences([1,2,2,1,1,3]), true)
// console.log(uniqueOccurrences([1,2,2,2,1,1,3]), false)

function uniqueOccurrences(arr) {
    const freqMap = {};
    for (let num of arr) {
        !freqMap[num] ? freqMap[num] = 1 : freqMap[num]++;
    }
    const freqArr = Object.values(freqMap);
    return isUnique(freqArr);
}

function isUnique(arr) {
    const map = {};
    for (let num of arr) {
        if (num in map) return false;
        map[num] = true;
    }
    return true;
}

console.log(uniqueOccurrences([1,2,2,1,1,3]), true)
console.log(uniqueOccurrences([1,2,2,2,1,1,3]), false)