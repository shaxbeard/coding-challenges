// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
// find two numbers such that they add up to a specific target number. 

// Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// Example 1:
// Input: numbers = [1,3,4,5,7,11], target = 9
// Output: [3,4]
// Explanation: The sum of 4 and 5 is 9. Therefore, index1 = 3, index2 = 4. We return [1, 2].

// Example 2:
// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

// curSum = 9
// [1,3,4,5,7,11], target = 9
//     ^
//       ^
function twoSum(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    while(l < r) {
        let curSum = numbers[l] + numbers[r];
        if (curSum > target) { // Start with the right side
            r--; //Move the right pointer to decrease the sum
        } else if (curSum < target) {
            l++; //Move the left pointer to increase the sum
        } else {
            return [l + 1, r + 1]
        }   
    }
    return [];
}

console.log(twoSum([2,7,11,15], 9), [1,2])
console.log(twoSum([2,3,4], 6), [1,3])
console.log(twoSum([1,3,4,5,7,11], 9), [3,4])
