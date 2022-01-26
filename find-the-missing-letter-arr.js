// Given an array of letters that proceed through the alphabet one at a time,
// find the letter that is missing from the sequence.

// arr = ["a", "b", "c", "d", "f"]

//PREP
//Parameter -
//Return -
//Example -
//Pseudocode -
//Methods!

const findMissingLetters = myArr => {
  let missingLetter;
  myArr.forEach((item, i, { [i - 1]: prev, [i + 1]: next }) => {
    // what is { [i - 1: prev]}? AHA! It is the ITEM at index-1 set to the variable of "prev"
    if (i > 0) {
      missingLetter =
        item.charCodeAt() !== prev.charCodeAt() + 1 && //if the current item's charCode != the prev item's charCode + 1
        String.fromCharCode(item.charCodeAt() - 1); // then the charCode of the missing letter = the current item's charCode - 1
    }
  });
  return missingLetter;
};
//Examples
console.log(findMissingLetters(["a", "b", "c", "d", "f"]), "e");
console.log(findMissingLetters(["w", "x", "z"]), "y");
