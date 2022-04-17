// DIRECT COMPARISON

// function isAnagram(strA, strB) {
//   const sanitizeString = function (str) {
//     return str
//       .toLowerCase()
//       .replace(/[^a-z\d]/g, "")
//       .split("")
//       .sort()
//       .join("");
//   };
//   return sanitizeString(strA) === sanitizeString(strB);
// }

// CHARACTER MAP COMPARISON

function isAnagram(strA, strB) {
  function createCharMap(text) {
    let charMap = {};
    for (let char of text) {
      if (charMap.hasOwnProperty(char)) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }
    return charMap;
  }

  if (strA.length === strB.length) {
    let strAMap = createCharMap(strA);
    let strBMap = createCharMap(strB);

    for (let char in strAMap) {
      if (strAMap[char] !== strBMap[char]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram("silent", "listen"), true);
console.log(isAnagram("skywalker", "listen"), false);
