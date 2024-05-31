

// console.log(Array.from('foo'))
// console.log(Array.from([1, 2, 3], x => x + x))
// console.log(Array.from({ length: 7 }, (_, i) => i + 1))

// const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

// console.log(range(0,4,1), [0,1,2,3,4])
// console.log(range(1,10,2), [1,3,5,7,9])
// console.log(range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map(x => String.fromCharCode(x)), "alphabet")

const alpha = Array.from({ length: 26}, (_, i) => "a".charCodeAt(0) + i).map(x => String.fromCharCode(x));
console.log(alpha)
