// THIS IS ALSO PROBLEM SET 1, PROBLEM 3 IN THE MIT INTRO TO PYTHON COURSE

// Assume s is a string of lower case characters.

// Write a program that prints the longest substring of s in which the letters occur in alphabetical order. 
// For example, if s = 'azcbobobegghakl', then your program should print:
// "Longest substring in alphabetical order is: beggh"

// In the case of ties, print the first substring. For example, if s = 'abcbcd', then your program should print
// "Longest substring in alphabetical order is: abc"


function longestAlphabeticalSubstring(s) {
    // Initialize the longest substring and current substring with the first character
    let longest = s[0];
    let current = s[0];

    // Iterate through the string starting from the second character
    for (let i = 1; i < s.length; i++) {
        // Check if the current character continues the alphabetical order
        if (s[i] >= current[current.length - 1]) {
            // If it does, add it to the current substring
            current += s[i];
            // Update the longest substring if the current one is longer
            if (current.length > longest.length) {
                longest = current;
            }
        } else {
            // If not, reset the current substring to the current character
            current = s[i];
        }
    }

    // Return the longest alphabetical substring found
    return longest;
}

// Example usage
let s1 = 'azcbobobegghakl';
console.log("Longest substring in alphabetical order is: " + longestAlphabeticalSubstring(s1));

let s2 = 'abcbcd';
console.log("Longest substring in alphabetical order is: " + longestAlphabeticalSubstring(s2));
