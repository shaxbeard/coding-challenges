// You're given strings jewels representing the types of stones that are jewels,
// and stones representing the stones you have.
// Each character in stones is a type of stone you have.
// You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Input - two string - str1 is a set of unique chars; str2 is chars that may or may not match the unique chars in str1
// return - the total number of matches in str2 from the chars in str1
// hash map, if char in jewels, then set property to true
// counter, loop, if letter in "jewels" is in "stones", counter++

// function numJewelsInStones(jewels, stones) {
//   //hash map
//   const map = jewels.split("").reduce((obj, l) => {
//     !obj[l] && (obj[l] = true);
//     return obj;
//   }, {});
//   //loop over stones and increment
//   let counter = 0;
//   for (stone of stones) {
//     map[stone] && counter++;
//   }
//   return counter;
// }

function numJewelsInStones(jewels, stones) {
  const map = {};
  let count = 0;

  for (const jewel of jewels) {
    map[jewel] = true;
  }

  for (const stone of stones) {
    if (map[stone]) {
      count++;
    }
  }
  return count;
}

console.log(numJewelsInStones("aA", "aAAbbbb"), 3);
console.log(numJewelsInStones("z", "ZZ"), 0);
