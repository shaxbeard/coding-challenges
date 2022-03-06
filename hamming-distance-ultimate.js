/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/

function hammingDistance(strA, strB) {
  let result = 0;

  if (strA.length === strB.length) {
    for (let i = 0; i < strA.length; i++) {
      if (strA[i].toLowerCase() !== strB[i].toLowerCase()) {
        result++;
      }
    }
    return result;
  } else {
    throw new Error("Strings do not have equal length");
  }
}

console.log(hammingDistance("rover", "river"), 1);
console.log(hammingDistance("drummer", "dresser"), 3);
