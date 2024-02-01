// Given a string of characters, return the character that appears the most often.

// MAKE A CHAR MAP THEN LOOP OVER THE COMPLETED MAP TO FIND MAX VALUE - O(n) + O(n) = O(2n) = O(n)
// Time complexity is O(n) - the second loop over the chars is constant time and insignificant overall
// function maxCharacter(str) {
//   const map = {};
//   for (const char of str) {
//     !map[char] ? (map[char] = 1) : map[char]++;
//   }
//   let maxCount = 0;
//   let maxChar = "";
//   for (const char in map) {
//     if (map[char] > maxCount) {
//       maxCount = map[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }

// console.log(maxCharacter("abracadabra"), "a");

// // MAKE A CHAR MAP THEN SORT THE MAP AND SELECT THE FIRST ELEMENT - O(n) + O(n log n) = O(n log n)
// // Time complexity if O(n log n) ???
function maxCharacter(str) {
  const map = charMap(str);
  const sortedChars = Object.keys(map).sort((a, b) => map[b] - map[a]);
  return sortedChars[0];
}
console.log(maxCharacter("Hello World!"), "l");
console.log(maxCharacter("abracadabra"), "a");

// I will put the charMap function at the bottom to keep it out of the way
function charMap(str) {
  return str.split("").reduce((map, char) => {
    !map[char] ? (map[char] = 1) : map[char]++;
    return map;
  }, {});
}
