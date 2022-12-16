// DIRECT COMPARISON

// function isAnagram(strA, strB) {
//   const sortString = str => str.toLowerCase().split("").sort().join("");
//   return sortString(strA) === sortString(strB);
// }

// CHARACTER MAP COMPARISON

function isAnagram(strA, strB) {
  strA = strA.toLowerCase();
  strB = strB.toLowerCase();
  function createCharMap(text) {
    let charMap = {};
    for (let char of text) {
      if (charMap[char]) {
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
        // strA="silent", strB="piston"
        //Iteration #1 - strAMap[s] = 1, strBMap[s] = 1
        //Iteration #2 - strAMap[i] = 1, strBMap[i] = 1
        //Iteration #3 - strAMap[l] = 1, strBMap[l] = 0
        return false;
        //Exit the entire function and return false
      }
    }
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram("skywalker", "listen"), false); // different lengths
console.log(isAnagram("silent", "piston"), false); // same length
console.log(isAnagram("silent", "listen"), true); // anagrams
console.log(isAnagram("Buckethead", "DeathCubeK"), true); // anagrams
