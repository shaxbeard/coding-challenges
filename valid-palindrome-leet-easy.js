// A phrase is a palindrome if, 
// after converting all uppercase letters into lowercase letters 
// and removing all non-alphanumeric characters, 
// it reads the same forward and backward. 
// Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.
// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// METHOD 1 - NAIVE SOLUTION USING EXTRA MEMORY
// function isPalindrome(s) {
//   let newStr = "";
//   for (let char of s) {
//     if (/[a-zA-Z0-9]/.test(char)) {
//        newStr += char.toLowerCase();
//     }
//   }
//   return newStr === newStr.split("").reverse().join("");
// }

// console.log(isPalindrome("A man, a plan, a canal: Panama"), true)
// console.log(isPalindrome("race a car"), false)

//"A man, a plan, a canal: Panama"
// ^                            ^



// METHOD #2 - SOLUTION USING TWO POINTERS
function isPalindrome(s) {
    let l = 0;
    let r = s.length - 1;

    while (l < r) { // loop until the pointers touch
        // Skip past all chars except for the alphanumeric (lowercase letters, uppercase letters, numbers)
        // check again that the pointers have not touched while skipping the non-alphanums
        while (l < r && !alphaNum(s[l])) l++; 
        while (r > l && !alphaNum(s[r])) r--;
        // Test if each letter is the same on the left and right (case insensitive)
        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
        l++;
        r--;
    }
    return true;
}

// SIMPLER VERSION OF isAlnum() 
// function isAlnum(char) {
//     return /[a-zA-Z0-9]/.test(char);
// }

// MANUAL VERSION TO TEST isAlnum()
function isAlnum(c) {
    return (
        ('A'.charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= 'Z'.charCodeAt(0)) ||
        ('a'.charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= 'z'.charCodeAt(0)) ||
        ('0'.charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= '9'.charCodeAt(0))
    );
}

console.log(isPalindrome("A man, a plan, a canal: Panama"), true)
console.log(isPalindrome("race a car"), false)

// def isPalindrome(self, s: str) -> bool:
//         i, j = 0, len(s) - 1
//         while i < j:
//             while i < j and not s[i].isalnum(): i += 1
//             while i < j and not s[j].isalnum(): j -= 1

//             if s[i].lower() != s[j].lower(): return False
//             i += 1
//             j -= 1

//         return True

