// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).

// For example,

//PREP
//Parameter -
//Return -
//Example -
//Pseudocode -
//Methods!

const arr = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  true,
];
// The correct answer would be 17.

// Method #1 - Using a loop like forEach with && for the condition and count++
// function countSheeps(arrayOfSheep) {
//   let count = 0;
//   arrayOfSheep.forEach((item) => item && count++);
//   return count;
// }

// Method #2 - Using the reduce() method
function countSheeps(sheep) {
  // return sheep.reduce((a, c) => (c === true ? a + 1 : a), 0);
  return sheep.reduce((a, c) => (c ? a + 1 : a), 0);
}

console.log(countSheeps(arr), 17);
