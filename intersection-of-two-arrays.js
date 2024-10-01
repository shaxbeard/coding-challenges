// Intersection of Two Arrays
// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must be unique and you may return the result in any order.

// TWO THINGS TO TAKE AWAY FROM THIS PROBLEM
// #1 - WHENEVER YOU WANT TO IGNORE DUPLICATES, CONSIDER CONVERTING ARRAYS TO SETS
// #2 - CONSIDER SORTING NUMBERS IF YOU ARE USING TWO POINTERS WITH NUMBERS

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.


// DEMO FOR METHOD #1
// [4,9,5], [9,4,9,8,4] -  input arrays

// result = {9,4}
// {4,9,5}, [9,4,9,8,4] - nums1 converted to a 
//           ^
// return [9,4]
// NOTE - Why is this solution considered "hashing" or a Hash Set?
// When we use a set, it is similar to using a Hash Table like: {4:true,9:true,5:true}

// Method #1 - Set - Best solution for time complexity - O(n) - also short and simple
function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const result = new Set();

    for (const num of nums2) {
        if (set1.has(num)) {
            result.add(num);
        }
    }
    // return Array.from(result);
    return [...result];
}

//DEMO FOR METHOD #2
// [4,9,5], [9,4,9,8,4] - unsorted input arrays

// result = [4,9]
// [4,5,9], [4,4,8,9,9] - sorted input arrays
//        i        
//                 j


// Method #2 - Two Pointers - Best solution for space complexity O(1)
function intersection(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    const result = [];
    let i = 0, j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            // If this is the first occurrence or not a duplicate in the result
            if (result.length === 0 || result[result.length - 1] !== nums1[i]) {
                result.push(nums1[i]);
            }
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++; 
        } else {
            j++; 
        }
    }

    return result;
}



console.log(intersection([1,2,2,1],[2,2]), [2]);
console.log(intersection([4,9,5],[9,4,9,8,4]), [9,4]);







