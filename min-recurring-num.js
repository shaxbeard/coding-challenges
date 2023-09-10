// Given an array of numbers, find the least frequently occurring number or numbers.
// Return a new array with one or more numbers that had the min frequency in the original array

// Examples
// [1, 2, 2, 3, 3] -> [1]
// [1, 2, 2, 2, 2, 3, 4, 11] -> [1, 3, 4, 11]

// SOLUTION FROM CHAT GPT
function leastFrequentNumbers(numbers) {
  //Call the separate frequency map function
  const numMap = freqeuncyMap(numbers);
  //{ 1: 1, 2: 4, 3: 1, 4: 1, 11: 1}

  //Find the value of the minimum frequency item in the numMap object
  //in this case the VALUE of the min frequency is 1 for multiple items
  let minNum = Infinity;
  for (const num in numMap) {
    if (numMap[num] < minNum) {
      minNum = numMap[num];
    }
  }

  //OPTION #2 for finding minNum: Sort the values from the freqMap and select the lowest frequency value
  // const minNum = Object.values(numMap).sort((a, b) => a - b)[0];

  // For every number in the numMap, check if its VALUE equals the min frequency
  // If so, push the NUMBER ITSELF ( WHICH IS THE KEY ) to a new array (but first cast the num back to an int)
  const minNums = [];
  for (const num in numMap) {
    if (numMap[num] === minNum) {
      minNums.push(parseInt(num));
    }
  }

  return minNums;
}

console.log(leastFrequentNumbers([1, 2, 2, 2, 2, 3, 4, 11]), [1, 3, 4, 11]);

function freqeuncyMap(numbers) {
  const numMap = {};

  for (const num of numbers) {
    if (numMap[num]) {
      numMap[num]++;
    } else {
      numMap[num] = 1;
    }
  }
  return numMap;
}
