// You need to write a function that reverses the words in a given string. 
// A word can also fit an empty string.

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// assert.strictEqual(reverse('I am an expert at this'), 'this at expert an am I');
// assert.strictEqual(reverse('This is so easy'), 'easy so is This');
// assert.strictEqual(reverse('no one cares'), 'cares one no');
// assert.strictEqual(reverse(''), '');

// ["an", "am, "I"]
// ["I", "am", "an", "expert", "at", "this"]
//        ^

function reverse(string) {
    return string.split(" ").reverse().join(" ");
}

// function reverse(string) {
//     const reversed = [];
//     string.split(" ").forEach(word => reversed.unshift(word));
//     return reversed.join(" ");
// }

// function reverse(string){
//     const stringArr = string.trim().split(" ");
//     const reversed = [];
//     for (let i = stringArr.length - 1; i >= 0; i--) {
//         reversed.push(stringArr[i]);
//     }
//     return reversed.join(" ");
//   }

  console.log(reverse('I am an expert at this'), 'this at expert an am I')
