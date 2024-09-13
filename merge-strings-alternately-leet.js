// Merge Strings Alternately
// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// Example 2:
// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"

// result = "apbqcrst"
// DEMO
// "abc" "pqrst"
//     i
//          j


// METHOD #1 - WORK WITH STRINGS
// But at scale str concatenation has worse performance than array manipulation (str immutability) 
// function mergeStr(word1, word2) {
//     let i = 0
//     let j = 0
//     let result = ""

//     while (i < word1.length && j < word2.length) {
//         result += word1[i]
//         result += word2[j]
//         i++
//         j++
//     }
//     // result = [...result, ...word1.slice(i), ...word2.slice(j)].join("")
//     result += word1.slice(i)
//     result += word2.slice(j)
//     return result;
// }

// console.log(mergeStr("ab","pqrs"), "apbqrs")

// METHOD #2 - Manipulate chars in an array then convert to a string
// Use array b/c at scale str concatenation has worse performance than array manipulation (str immutability) 
function mergeStr(word1, word2) {
    let i = 0;
    let j = 0;
    let res = [];

    while (i < word1.length && j < word2.length) {
        res.push(word1[i]);
        res.push(word2[j]);
        i++;
        j++;
    }
    res.push(word1.slice(1));
    res.push(word2.slice(j));
    // res = [...res, ...word1.slice(i), ...word2.slice(j)];
    return res.join("");
}

console.log(mergeStr("ab","pqrs"), "apbqrs")
