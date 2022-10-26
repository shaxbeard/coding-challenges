// Given a magazine of words and a ransom note,
// determine if it’s possible to “cut out” and create
// the ransom note from the magazine words.

//parameters - the magazine has all the letters I can use.
//return - return true if magazine has enough of each individual letter
// to create the letters in "note" - if so, return TRUE; else FALSE
// pseudocode - tally the total of each letter in magazine
//      - tally the toal of each letter in note
//      - if any of the letters in note > that letter in magazine -> false
// ELSE -> return true

const magazine =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

function ransom(note, mag) {
  let magLetters = mag.replace(/[,.' ']/gi, "");
  let noteLetters = note.replace(/[" "]/gi, "");

  const hashMap = str => {
    const charMap = {};
    for (let char of str) {
      if (charMap[char]) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }
    return charMap;
  };
  const magMap = hashMap(magLetters);
  const noteMap = hashMap(noteLetters);
  return noteMap;
}

console.log(ransom("sit ad est sint", magazine), true);
// console.log(ransom("sit ad est love", magazine), false);
// console.log(ransom("sit ad est sint in in", magazine), true);
