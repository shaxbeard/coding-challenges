// You will be given an array a and a value x. 
// All you need to do is check whether the provided array contains the value, 
// without using a loop.

// Array can contain numbers or strings. x can be either. 
// Return true if the array contains the value, false if not.

// EXAMPLES
// assert.strictEqual(check([66, 101], 66), true);
// assert.strictEqual(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
// assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
// assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);



function check(a,b){
    return a.includes(b);
};

function check(a,x) {
    return a.some(v => v === x)
}

function check(a,b) {
    return a.indexOf(b) > 0;
}

console.log(check([66, 101], 66), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);

