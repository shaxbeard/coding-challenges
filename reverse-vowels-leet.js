// 345. Reverse Vowels of a String

// IMPORTANT!! This problem has taught me (once and for all!) that strings are immutable
// Say you have a string s = "ice cream"
// You cannot change letters such as s[0] = "a"
// It's confusing because if you have an array, arr = ["i","c","e"," ","c","r","e","a","m"]
// Then you CAN change letters such as arr[0] = "a"

// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:
// Input: s = "IceCreAm"
// Output: "AceCreIm"
// Explanation:
// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm"


// DEMO - start by converting s to an array
//   0   1   2   3   4   5   6   7  - indexes
// ["I","c","e","C","r","e","A","m"] - length = 8
//   l
//                               r


// SOLUTION #1 - THE TOP SOLUTION ON LEETCODE
var reverseVowels = function(s) {
   const vowels = 'aeiouAEIOU';
   let l = 0;
   let r = s.length - 1;
   const arr = s.split('');
 
   while (l < r) {
     // You MUST check that l < r each time or you can get an unwanted swap
     // This is the same logic for two pointers as in Valid Palindrome !!
     while (l < r && !vowels.includes(arr[l])) {
       l++;
     }
     while (l < r && !vowels.includes(arr[r])) {
       r--;
     }
     [arr[l], arr[r]] = [arr[r], arr[l]];
     l++;
     r--;
   }
    return arr.join('');
 };

 console.log(reverseVowels("IceCreAm"), "AceCreIm")


// JAVA SOLUTION 
//  class Solution {
//     public String reverseVowels(String s) {
//         char[] word = s.toCharArray();
//         int start = 0;
//         int end = s.length() - 1;
//         String vowels = "aeiouAEIOU";
        
//         while (start < end) {
//             // Move start pointer until it points to a vowel
//             while (start < end && vowels.indexOf(word[start]) == -1) {
//                 start++;
//             }
            
//             // Move end pointer until it points to a vowel
//             while (start < end && vowels.indexOf(word[end]) == -1) {
//                 end--;
//             }
            
//             // Swap the vowels
//             char temp = word[start];
//             word[start] = word[end];
//             word[end] = temp;
            
//             // Move the pointers towards each other
//             start++;
//             end--;
//         }
        
//         String answer = new String(word);
//         return answer;
//     }
// }

// JAVASCRIPT SOLUTION #2
// function reverseVowels(s) {
//     const vowels = "aeiouAEIOU";
//     const arr = s.split("");

//     let l = 0;
//     let r = s.length - 1
//     while (l < r) {
//         if (!vowels.includes(arr[l])) {
//             l++;
//             continue;
//         }
//         if (!vowels.includes(arr[r])) {
//             r--;
//             continue;
//         }
//         // swap - refactor to check if s[l] === s[r]?
//         let temp = arr[l];
//         arr[l] = arr[r];
//         arr[r] = temp;
//         l++;
//         r--;
//     }
//     return arr.join("");
// }

// console.log(reverseVowels("IceCreAm"), "AceCreIm")