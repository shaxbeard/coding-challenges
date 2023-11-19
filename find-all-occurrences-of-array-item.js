// Finding all the occurrences of an array item

function findAllIndexes(arr, target) {
  // initialize an empty array
  const indices = [];
  // Set a variable to the first index of the target element
  let idx = arr.indexOf(target);

  //Use a while loop to repeatedly increment the STARTING INDEX in the indexOf() method
  while (idx !== -1) {
    indices.push(idx);
    // Use the second parameter of indexOf as a way of incrementing the array index of the loop
    idx = arr.indexOf(target, idx + 1);
  }
  return indices;
}

console.log(findAllIndexes(["a", "b", "a", "c", "a", "d"], "a"), [0, 2, 4]);
