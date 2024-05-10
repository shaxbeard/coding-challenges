// Haskell has some useful functions for dealing with lists: 

// λ head [1,2,3,4,5] 1
// λ tail [1,2,3,4,5] [2,3,4,5]
// λ init [1,2,3,4,5] [1,2,3,4]
// λ last [1,2,3,4,5] 5

// Your job is to implement these functions in your given language. 
// Make sure it doesn't edit the array; that would cause problems!

function head(arr) {
    return arr[0];
}
function tail(arr) {
    return arr.slice(1);
}
function init(arr) {
    return arr.slice(0, -1);
}
function last(arr) {
    return arr[arr.length - 1];
}

console.log(head([1,2,3,4,5]), 1)
console.log(tail([1,2,3,4,5]), [2,3,4,5])
console.log(init([1,2,3,4,5]), [1,2,3,4])
console.log(last([1,2,3,4,5]), 5)
