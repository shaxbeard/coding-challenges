// Complete the method which returns the number which is most frequent in the given input array.
// If there is a tie for most frequent number, return the largest number among them.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

//[10, 12, 8, 12, 7, 6, 4, 10, 12, 10]

// {'12': 3, '10': 3, '8': 1, '7': 1, '6': 1, '4': 1} // MORE THAN 1 num has highest frequency
//  maxFreq = 3
// ['12','10','8','7','6','4'] # Just the keys in an array
// ['12','10']   # Just the keys with the value of maxFreq
// 12 - It looks like Math.max(...['12', '10']) changes '12' from a string to a num (12)??     

// Method #1 - Make a frequency map, then extract the number(s) with the max frequency
function highestRank(arr) {
  const freqMap = frequencyMap(arr);
  const maxFreq = maxFrequency(freqMap); // What is the value of the max frequency of any num?
  
  // Extract just the keys from the map and filter to keep just the keys with the max frequency VALUE
  const filteredKeys = Object.keys(freqMap).filter(
    key => freqMap[key] === maxFreq
  );
  // If 2 nums have the same frequency, select the higher num
  // return Math.max(...filteredKeys.map(Number)); 
  return Math.max(...filteredKeys); 
}

function frequencyMap(arr) {
  const freqMap = {};
  for (let num of arr) {
    if (!freqMap[num]) {
      freqMap[num] = 1;
    } else {
      freqMap[num]++;
    }
  }
  return freqMap;
}

function maxFrequency(freqMap) {
  let maxFreq = 0;
  for (let num in freqMap) {
    if (freqMap[num] > maxFreq) {
      maxFreq = freqMap[num];
    }
  }
  return maxFreq;
}

// Method #2 - Clever use of sort() along with filter()
// function highestRank(arr) {
//   var getNum = num => arr.filter(n => n === num).length;
//   return arr.sort((a, b) => getNum(b) - getNum(a) || b - a)[0];
// }

// console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]), 12);
console.log(highestRank([10, 12, 8, 12, 7, 6, 4, 10, 12, 10]), 12); // Both 10 and 12 appear two times
// console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]), 3);
