// 350. Intersection of Two Arrays II

// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must appear as many times as it shows in both arrays 
// and you may return the result in any order.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

// DEMO
// [4,9,5], nums1
// [9,4,9,8,4], nums2
// ['4':1, '9':1, '5':1]
//          ^
// ['9':2, '4':2, '8':1]
// minCount(4) = 1
// push the 4 to result array 1 time
// minCount(9) = 1
// push the 9 to the result 1 time

// [1,2,2,1]
// [2,2]
// ['1':2, '2':2]
// ['2':2]
// minCount(2) = 2
// push the 2 to the result array 2 times


// MY SOLUTION - I MADE A HASH MAP FOR EACH OF THE ARRAYS
// function intersect(nums1, nums2) {
//     const hash1 = frequencyMap(nums1);
//     const hash2 = frequencyMap(nums2); 
//     const result = [];
//     for (let key in hash1) {
//         if (hash2[key]) {
//             // Calculate how many times we should push each num to the new array
//             const minCount = Math.min(hash1[key], hash2[key]); // The "intersection" is the min value of the two
//             for (let i = 0; i < minCount; i++) {
//                 result.push(Number(key))
//             }
//         }
//     }
//     return result;
// }

// function frequencyMap(arr) {
//     const hash = {};
//     for (let num of arr) {
//         !hash[num] ? hash[num] = 1 : hash[num]++;
//     }
//     return hash;
// }

// console.log(intersect([4,9,5], [9,4,9,8,4]), [4,9]);
// console.log(intersect([1,2,2,1], [2,2]), [2,2]);

// DEMO FOR SOLUTION BELOW
// Example 1
// [4,9,5], nums1
// [9,4,9,8,4], nums2
//          ^
// ['4':0, '9':0, '5':1], hash map for nums1 (decremented)
// [9,4], result

// Example 2
// [1,2,2,1], nums1
// [2,2], nums2
//    ^
// ['1':2, '2':0], hash map for nums1 (decremented)
// ['2','2'], result


// LEETCODE SOLUTION - USING JUST ONE HASH MAP
// var intersect = function(nums1, nums2) {
//     obj = {};
//     result = [];
//     for(let num of nums1){
//         obj[num] = obj[num] ? obj[num]+1 : 1
//     }
//     for(let num of nums2){
//         if(obj[num]){
//             obj[num]--
//             result.push(num)
//         }
//     }
//     return result
// };
// console.log(intersect([4,9,5], [9,4,9,8,4]), [4,9]);
// console.log(intersect([1,2,2,1], [2,2]), [2,2]);

// METHOD USING SORT AND TWO POINTERS 
var intersect = function(nums1, nums2) {
    let n1 = nums1.sort((a,b)=>a-b)
    let n2 = nums2.sort((a,b)=>a-b)
    let i = 0
    let j = 0
    let result = []
    while(i<n1.length && j<n2.length){
        if(n1[i] < n2[j]) i++
        else if(n1[i]> n2[j]) j++
        else {
            result.push(n1[i])
            i++
            j++
        }
    }
    return result
}


console.log(intersect([4,9,5], [9,4,9,8,4]), [4,9]);
console.log(intersect([1,2,2,1], [2,2]), [2,2]);








