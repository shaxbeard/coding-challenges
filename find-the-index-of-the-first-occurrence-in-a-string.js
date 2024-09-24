// Given two strings needle and haystack, 
// return the index of the first occurrence of needle in haystack, 
// or -1 if needle is not part of haystack.

// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Example 2:
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Input: two strings - any funny business? empty string, etc.? no
// Return the index of 1st occurrence of str2 in str1

// METHOD 1 - Naive solution
// I didn't know you could use indexOf() with a word !!!!
// function strstr(haystack, needle) {
//   return haystack.indexOf(needle);
// }


// wordIndex =
// DEMO
//  012345678901      012
// "zzsazbusadtsad", "sad", length = 3
//  i           
//                    j


// METHOD 2 - BRUTE FORCE WITH NESTED FOR LOOPS ,Time = O(N * M)
// This is also the wrong answer, right? - Neetcode says this should be your solution
// Neetcode says that the KMP algorithm is O(n + m) but it is too complicated to learn for an interview

const strstr = (haystack, needle) => {    
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {    // start looping through haystack until the remaining substring is shorter than needle
        for (let j = 0; j < needle.length; j++) {    // start looping through both needle and haystack
          if (needle[j] !== haystack[i + j]) break;  // when the characters don't match, break out of the loop and return to looping through haystack                                
          if (j === needle.length - 1) return i;     // otherwise, if all of the characters matched, // return the index of the first character of haystack with which we started the loop
        }
    }
    return -1;                                        // return -1 if there wasn't a match
  };



console.log(strstr("zzsazbusadtsad", "sad"), 7)
console.log(strstr("sadbutsad", "sad"), 0)
console.log(strstr("leetcode", "leeto"), -1)