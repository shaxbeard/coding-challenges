

// Implement a function, multiples(m, n), 
// which returns an array of the first m multiples of the real number n. 

// Assume that m is a positive integer.

// Test.assertDeepEquals(multiples(3, 5), [5, 10, 15])
// Test.assertDeepEquals(multiples(1, 3.14), [3.14])
// Test.assertDeepEquals(multiples(5, -1), [-1, -2, -3, -4, -5])

// Num = 5
// Multiples = 3

// i = 1
// [x, x, x]
//  ^

// function multiples(m, n){
//     var arr=[];
//     for (var i=1; i<=m; ++i)
//       arr.push(n*i);
//     return arr;
// }

// Using Array.from()
// function multiples(m, n){
// 	return Array.from(Array(m), (_v, i) => (i + 1) * n);
// }

// This is Corky's version of Array.from - he thinks it is more readable
function multiples(m, n) {
    return Array.from({length: m}).map((_, i) => (i + 1) * n);
}

console.log(multiples(3, 5), [5, 10, 15]);
