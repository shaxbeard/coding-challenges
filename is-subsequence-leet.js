// 392. Is Subsequence
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some 
// (can be none) of the characters without disturbing the relative positions of the remaining characters. 
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false


// DEMO HERE
// Success
//  0123  012345  
//  abc   ahbgdc   
//     i          
//             j
// on success, i === s.length


// Failue
// "axc"  "ahbgdc"
//   i             // on failure, i !== s.length
//               j

// Notice the similar structure to the mergeTwoSortedArrays problem
// Keep looping WHILE BOTH i < s.length AND j < t.length
// If the letters match increment both i and j
// ELSE - increment just j
// If the i pointer surpasses the string, then the answer is true
// If the j pointer surpasses the string, then the answer is false

function isSubsequence(s,t) {
    let i = 0, j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return i === s.length; // crucial logic here
}

// Java solution - almost identical to JS syntax - actually Typescript!
// class Solution {
//     public boolean isSubsequence(String s, String t) {
//         int i = 0;
//         int j = 0;
//         while (i < s.length && j < t.length) {
//             if (s.charAt(i) == t.charAt(i)) { // s.charAt(i) not s[i] 
//                 i++;
//             }
//             j++;
//         }
//         return i == s.length();
//     }
// }

console.log(isSubsequence("abc", "ahbgdc"), true);
console.log(isSubsequence("axc", "ahbgdc"), false);


