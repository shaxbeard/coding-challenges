function mergeArrays(...arrays) {
  let jointArray = [];

  arrays.forEach(array => (jointArray = [...jointArray, ...array]));

  return [...new Set([...jointArray])];
}

console.log(mergeArrays([1, 2], [2, 3], [3, 4], [4, 5]));
