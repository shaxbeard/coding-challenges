//PREP
//Parameter -
//Return -
//Example -
//Pseudocode -
//Methods!

const arr = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];

// function flattenAndSort(array) {
//   let newArray = [];
//   for(let i = 0; i < array.length; i++) {
//     for(let j = 0; j < array[i].length; j++) {
//       newArray.push(array[i][j])
//     }
//   }
//   return newArray.sort((a,b) => a-b);
// }

function flattenAndSort(array) {
  return [].concat(...array).sort((a, b) => a - b);
}

console.log(flattenAndSort(arr));
