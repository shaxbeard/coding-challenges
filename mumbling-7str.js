// This time no story, no theory. The examples below show you how to write function accum:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(str) {
  //repeat the char as many times as its position in the word
  //the 1st letter repeats 1 time, the 2nd letter repeats 2 times, the 3rd letter repeats 3 times, etc.
  const repeated = str
    .toLowerCase()
    .split("")
    .map((char, i) => char.repeat(i + 1));

  //convert the first letter of each word to uppercase then convert back to a string with a hyphen between each group of letters
  return repeated.map(word => word[0].toUpperCase() + word.slice(1)).join("-");
}

console.log(accum("abcd"), "A-Bb-Ccc-Dddd");
console.log(accum("RqaEzty"), "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy");
console.log(accum("ZpglnRxqenU"));
