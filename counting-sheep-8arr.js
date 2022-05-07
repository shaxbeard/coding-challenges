// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

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

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
  let count = 0;
  arrayOfSheep.forEach((item) => item && count++);
  return count;
}

console.log(countSheeps(arr));
