// 387. First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

// SIMPLE SOLUTION USING INDEXOF() AND LASTINDEXOF() - PERFORMANCE NOT AS GOOD
// function firstUniqChar(s) {
//     for (let i = 0; i < s.length; i++) {
//         if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(firstUniqChar("leetcode"), 0);
// console.log(firstUniqChar("loveleetcode"), 2);
// console.log(firstUniqChar("aabb"), -1);

//DEMO
//  012345678901   //indexes
// "loveleetcode"
//    ^

// {l:2,o:2,v:1,e:4,t:3,c:1,d:1}, count


// METHOD #1 - MY SOLUTION USING HASH TABLE
function firstUniqChar(s) {
    const map = {};
    for (let char of s) {
        !map[char] ? map[char] = 1 : map[char]++;
    }

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return i;
        }
    }
    return -1;
}

function freqMap(str) {
    const map = {};
    for (let char of str) {
        if (!map[char]) {
            map[char] = 1;
        } else {
            map[char]++;
        }
    }
    return map;
}

function freqMap(str) {
    const map = {};
    for (let char of str) {
        !map[char] ? map[char] = 1 : map[char]++;
    }
    return map;
}
function freqMap(str) {
    const map = {};
    for (let char of str) {
        map[char] = (map[char] || 0) + 1;
    }
    return map;
}

console.log(firstUniqChar("leetcode"), 0);
console.log(firstUniqChar("loveleetcode"), 2);
console.log(firstUniqChar("aabb"), -1);

// VARIATION ON MY SOLUTION WITH SHORTER SYNTAX
// var firstUniqChar = function(s) {
//     let hash = {};
//     for (let c of s) {
//         hash[c] = (hash[c] || 0) + 1;
//     }
//     for (let i = 0; i < s.length; i++) {
//         if (hash[s[i]] === 1) {
//             return i;
//         }
//     }
//     return -1;
// };

// console.log(firstUniqChar("leetcode"), 0);
// console.log(firstUniqChar("loveleetcode"), 2);
// console.log(firstUniqChar("aabb"), -1);


