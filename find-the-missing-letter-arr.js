let arr = ["a", "b", "c", "d", "f"];

const findMissingLetters = (array) => {
  let missingLetter;
  arr.forEach((item, i, { [i - 1]: prev }) => {
    if (i > 0) {
      missingLetter =
        item.charCodeAt() !== prev.charCodeAt() + 1 &&
        String.fromCharCode(item.charCodeAt() - 1);
    }
  });
  return missingLetter;
};

let test = findMissingLetters(arr);
console.log(test);
