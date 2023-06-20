// function sortIntegers(array) {
//   const left = [];
//   const right = [];

//   for (let i = 0; i < array.length; i++) {
//     const num = array[i];

//     debugger;
//     if (num > 50) {
//       right.push(num);
//     } else {
//       left.push(num);
//     }
//   }

//   return left.concat(right);
// }

// console.log(sortIntegers([30, 45, 50, 80, 40, 90]), [30, 45, 50, 40, 80, 90]);

function sortIntegers(array) {
  const sortedArray = [...array];

  let left = 0;
  let right = sortedArray.length - 1;

  while (left < right) {
    while (sortedArray[left] < 50) {
      left++;
    }

    while (sortedArray[right] > 50) {
      right--;
    }

    if (left < right) {
      const temp = sortedArray[left];
      sortedArray[left] = sortedArray[right];
      sortedArray[right] = temp;
    }
  }

  return sortedArray;
}

const input = [30, 45, 50, 80, 40, 90];
console.log(sortIntegers(input)); // Output: [30, 45, 50, 40, 80, 90]
