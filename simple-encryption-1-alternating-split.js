// Implement a pseudo-encryption algorithm,
// which given a string S and an integer N,
// concatenates all of the odd-indexed characters of S
// with all the even-indexed characters of S,
// this process should be repeated N times.

// Examples:
// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

// Together with the encryption function,
// you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive,
// return the first argument without changes.

// MY WORKSPACE
// #1 THE ENCRYPT() FUNCTION
// input ["0", "1", "2", "3", "4", "5"]
//         0    1    2    3    4    5
// output["1", "3", "5", "0", "2", "4"]
//              ^
// odds ["1", "3", "5"]
// evens ["0", "2", "4"]
// concat() = ["1", "3", "5", "0", "2", "4"]

//#2 THE DECRYPT() FUNCTION
// input: ["1", "3", "5", "0", "2", "4"]

// function encrypt(str, n) {
//   if (!str || n < 1) return str;
//   while (n--) {
//     let evens = "";
//     let odds = "";
//     for (let i = 0; i < str.length; i++) {
//       i % 2 === 1 ? (odds += str[i]) : (evens += str[i]);
//     }
//     str = odds + evens;
//   }
//   return str;
// }

// console.log(encrypt("012345", 1), "135024");
// console.log(encrypt("012345", 2), "304152");
// console.log(encrypt("012345", 3), "012345");
// console.log(encrypt("This is a test!", 1), "hsi  etTi sats!");

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  debugger;
  const ans = new Array(encryptedText.length);
  //   const ans = [];
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join("");
  }
  return encryptedText;
}

console.log(decrypt("135024", 1), "012345");
console.log(decrypt("hsi  etTi sats!", 1), "This is a test!");
