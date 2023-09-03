const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+"];

// Pick four random letters, then four numbers, then four symbols, and push to an array
let passwordArr = [];
for (let i = 0; i < 4; i++) {
  let random_char = letters[Math.floor(Math.random() * letters.length)];
  passwordArr.push(random_char);
}
for (let i = 0; i < 4; i++) {
  let random_char = numbers[Math.floor(Math.random() * numbers.length)];
  passwordArr.push(random_char);
}
for (let i = 0; i < 4; i++) {
  let random_char = symbols[Math.floor(Math.random() * symbols.length)];
  passwordArr.push(random_char);
}

// Shuffle the array
let password_shuffled = shuffleArray(passwordArr);

// Convert the array to a string
let password = "";
for (const char of password_shuffled) {
  password += char;
}
console.log(password);

// The Durstenfeld shuffle
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
