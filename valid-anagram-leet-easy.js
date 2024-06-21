// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters 
// of a different word or phrase, typically using all the original letters exactly once.

// listen -> silent  # true
// state -> taste # true

// METHOD #1 - sort each word and compare the sorted strings O(N log N) * 2



// METHOD #2 - create two frequency maps ("hash table histograms") and compare the values
// {s: 1, t: 2, a: 1, e: 1}  # for "state"
// {s: 1, t: 2, a: 1, e: 1}  # for "taste"

function anagram(s, t) {
    return;
}

console.log(anagram("silent", "listen"), true)
console.log(anagram("state", "taste"), true)
console.log(anagram("rat", "car"), false)














