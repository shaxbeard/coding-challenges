// Given a string s, find the length of the longest
// substring without repeating characters. 

// The category for this solution is Sliding Window

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// DEMO
// "abcabcdbb"
//  ^
//     ^


function lengthOfLongestSubstring(s) {
    let charSet = new Set()
    let l = 0
    let res = 0

    for (let r = 0; r < s.length; r++) { // r loops over the entire string (instead of initializing r pointer)
        while (charSet.has(s[r])) { // keep removing from set until you reach the repeated char
            charSet.delete(s[l]) // remove left char from set
            l++ // remove left char from "window"
        }
        charSet.add(s[r]) // add right char to set
        res = Math.max(res, r - l + 1) // use pointers to calculate the length of each substring
    }
    return res
}

console.log(lengthOfLongestSubstring("abcabcbb"), 3); 
console.log(lengthOfLongestSubstring("bbbbb"), 1);    
console.log(lengthOfLongestSubstring("pwwkew"), 3);   



