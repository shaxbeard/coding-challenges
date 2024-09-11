// THIS IS ALSO PROBLEM SET 1, PROBLEM 3 IN THE MIT INTRO TO PYTHON COURSE

// Assume s is a string of lower case characters.

// Write a program that prints the longest substring of s in which the letters occur in alphabetical order. 
// For example, if s = 'azcbobobegghakl', then your program should print:
// "Longest substring in alphabetical order is: beggh"

// In the case of ties, print the first substring. For example, if s = 'abcbcd', then your program should print
// "Longest substring in alphabetical order is: abc"

//  012345678901234
// 'azcbobobegghakl' // input string s, len = 15
//   ^
// maxStr = "a"
// currStr = "a"
// is "z" > the char at the END of currStr? Yes, add the "z" to currStr (using str concatenation)
// is "c" >= the char at the END of currStr? No, reset currStr to "c" (s[i])

// function longest(s) {
// // Initialize a maxStr and a currStr at 0 // NO, they are initialized at s[0] - they are not counters in this version
// let maxStr = s[0];
// let currStr = s[0];
// for (let i = 1; i < s.length; i++) { // loop through the string starting with index = 1
//     if (s[i] >= currStr[currStr.length - 1]) { // Test currChar against the last char in currStr
//         currStr += s[i]; //
//         if (currStr.length > maxStr.length) { // Update maxStr on each iteration
//             maxStr = currStr;
//         }
//     } else {
//         currStr = s[i]; // if currChar < the last char in currStr, reset currStr to currChar
//     }
// }
// return maxStr;
// }

// console.log(longest('azcbobobegghakl'), "beggh");

// PYTHON SOLUTION 
// s = 'azcbobobegghakl'
// maxStr = s[0]
// curStr = s[0]
// for char in s[1:]:
//     if char >= curStr[-1]:
//         curStr += char
//         if len(curStr) > len(maxStr):
//             maxStr = curStr
//     else: 
//         curStr = char
// print("Longest substring in alphabetical order is:", maxStr)

// PYTHONIC SOLUTION IN JAVASCRIPT
s = 'azcbobobegghakl'
let maxStr = s[0]
let curStr = s[0]
for (let char of s.slice(1)){
    if (char >= curStr[curStr.length - 1]) {
        curStr += char
        if (curStr.length > maxStr.length) {
            maxStr = curStr
        } 
    } else {
        curStr = char
    }
}
console.log("Longest substring in alpha order is:", maxStr)

