function selectionSort(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

const unsortedArray = [64, 25, 12, 22, 11];
console.log(selectionSort(unsortedArray), [11, 12, 22, 25, 64]);
