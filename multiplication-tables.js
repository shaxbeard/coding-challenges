//Desired Output:

// Desired Output
//  x  1  2  3  4  5  6  7  8  9  10
//  1  1  2  3  4  5  6  7  8  9  10
//  2  2  4  6  8 10 12 14 16 18  20
//  3  3  6  9 12 15 18 21 24 27  30
//  4  4  8 12 16 20 24 28 32 36  40
//  5  5 10 15 20 25 30 35 40 45  50
//  6  6 12 18 24 30 36 42 48 54  60
//  7  7 14 21 28 35 42 49 56 63  70
//  8  8 16 24 32 40 48 56 64 72  80
//  9  9 18 27 36 45 54 63 72 83  90
// 10 10 20 30 40 50 60 70 80 90 100

//Nested loops
//Outer loop is i - starts at i = 0
//Inner loop is j - starts at j = 0

//First loop: i = 0, j = 0
//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] if(i === 0) console.log
//-x--1--2--3--4--5--6--7--8--9--10

//WITHOUT THE SPACING
// function printMultiplicationTable(size) {
//   // Print the header row
//   let header = "x";
//   for (let i = 1; i <= size; i++) {
//     header += ` ${i}`;
//   }
//   console.log(header);

//   // Print the table rows
//   for (let i = 1; i <= size; i++) {
//     let row = `${i}`;
//     for (let j = 1; j <= size; j++) {
//       row += ` ${i * j}`;
//     }
//     console.log(row);
//   }
// }

// // Example: Print a 10x10 multiplication table
// printMultiplicationTable(10);

function printMultiplicationTable(size) {
  // Calculate the maximum length of the numbers
  const maxLength = (size * size).toString().length + 1;

  // Print the header row
  let header = "x".padStart(maxLength);
  for (let i = 1; i <= size; i++) {
    header += `${i.toString().padStart(maxLength)} `;
  }
  console.log(header);

  // Print the table rows
  for (let i = 1; i <= size; i++) {
    let row = `${i.toString().padStart(maxLength)}`;
    for (let j = 1; j <= size; j++) {
      row += `${(i * j).toString().padStart(maxLength)} `;
    }
    console.log(row);
  }
}
printMultiplicationTable(10);
