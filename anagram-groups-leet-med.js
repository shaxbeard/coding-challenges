// Given an array of strings strs, group all anagrams together into sublists. 
// You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, 
// but the order of the characters can be different.

// Example 1:
// Input: strs = ["act","pots","tops","cat","stop","hat"]
// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

// Example 2:
// Input: strs = ["x"]
// Output: [["x"]]


// {}                                       # result object
// ["act","pots","tops","cat","stop","hat"]  # input array
//    i
//     j

// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25    # Indexes
// a b c d e f g h i j  k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z    # lowercase letters
//[1,0,1,0,0,0,0,0,0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]   # count for each item
// "act"   # str 
// The charCode for "a" is 97 - so to store count instances of "a",
// increment the index at "a".charCodeAt() - 97  ... and the same to store the count for the rest of the letters


// At the end of the loop, our result object should look like this
// {
//     '10100000000000000001000000': [ 'act', 'cat' ],
//     '00000000000000110011000000': [ 'pots', 'tops', 'stop' ],
//     '10000001000000000001000000': [ 'hat' ]
// }

var groupAnagrams = function(strs) {
    let res = {};
    for (let str of strs) {
        let count = new Array(26).fill(0);
        for (let char of str) count[char.charCodeAt() - 97]++; // increment the count for each letter
        let key = count.join("");
        // push each word to an array in an object where its key is the "count array"
        !res[key] ? res[key] = [str] : res[key].push(str); 
    }
    return Object.values(res);
};


console.log(groupAnagrams(["act","pots","tops","cat","stop","hat"]), [["hat"],["act", "cat"],["stop", "pots", "tops"]])