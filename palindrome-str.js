//If the string is the same forward and reverse then true ELSE false
//String or number. If number, convert to string.
//Return - true or false

function isPalindrome(line) {
  return line.toString() === line.toString().split("").reverse().join("");
}

//"anna" -> true
//12321 -> true
//"walter" -> false
//123456 -> false

console.log(isPalindrome(123241));
