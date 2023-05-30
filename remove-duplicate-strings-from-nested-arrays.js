const arrayOfArrays = [
  ["apple", "banana", "pear", "orange"],
  ["apple", "pear", "kiwi", "strawberry"],
  ["apple", "pear", "pear", "pear", "pear", "grape"],
];

// Remove duplicates within each subarray
const uniqueArrays = arrayOfArrays.map(subarray => {
  const occurrences = {};
  const uniqueSubarray = [];

  for (let item of subarray) {
    if (!occurrences[item]) {
      occurrences[item] = true;
      uniqueSubarray.push(item);
    }
  }

  return uniqueSubarray;
});

console.log(uniqueArrays);
