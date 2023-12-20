// Complete the method which returns the number which is most frequent in the given input array.
// If there is a tie for most frequent number, return the largest number among them.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

//freqMap: {12: 3, 10: 2, 8: 1, 7: 1, 6: 1, 4: 1}
// [12, 10, 8, 12, 7, 6, 4, 10, 12]
//

// {12: 3, 10: 2, 8: 1, 7: 1, 6: 1, 4: 1} // Only 1 num has highest frequency
// {12: 3, 10: 3, 8: 1, 7: 1, 6: 1, 4: 1} // MORE THAN 1 num has highest frequency
//  maxFreq = 3

// {12: 3} // only 1 maxFreq
// { 12: 3, 10: 3, 99: 3 }  // More than 1 maxFreq

// Method #1 - Make a frequency map, then extract the number(s) with the max frequency
function highestRank(arr) {
  const freqMap = {};
  for (let num of arr) {
    if (!freqMap[num]) {
      freqMap[num] = 1;
    } else {
      freqMap[num]++;
    }
  }

  let maxFreq = 0;
  for (let num in freqMap) {
    if (freqMap[num] > maxFreq) {
      maxFreq = freqMap[num];
    }
  }

  const filteredKeys = Object.keys(freqMap).filter(
    key => freqMap[key] === maxFreq
  );
  return Math.max(...filteredKeys.map(Number));
}

// Method #2 - Clever use of sort() along with filter()
function highestRank(arr) {
  var getNum = num => arr.filter(n => n === num).length;
  return arr.sort((a, b) => getNum(b) - getNum(a) || b - a)[0];
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]), 12);
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]), 12); // Both 10 and 12 appear two times
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]), 3);
