
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// row{"5", "3", "7", }  # Hash set for each row
// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
//                                      ^
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true


// #1 voted JS solution on Leetcode
var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
      let row = new Set(),
          col = new Set(),
          box = new Set();
  
      for (let j = 0; j < 9; j++) {
        let _row = board[i][j];
        let _col = board[j][i];
        let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
        
        if (_row != '.') {
          if (row.has(_row)) return false;
          row.add(_row);
        }
        if (_col != '.') {
          if (col.has(_col)) return false;
          col.add(_col);
        }
        if (_box != '.') {
          if (box.has(_box)) return false;
          box.add(_box);
        } 
        console.log(box);
      }
    }
    return true
  };

  console.log(isValidSudoku([
 ["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]), true);


// Variation on the solution from a comment - more like Neetcode solution?
//   var isValidSudoku = function (board) {
//     let rows = new Array(9).fill(null).map(() => new Set());
//     let cols = new Array(9).fill(null).map(() => new Set());
//     let boxes = new Array(9).fill(null).map(() => new Set());

//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             let num = board[i][j];
//             if (num === '.') continue; 

//             let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

//             if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
//                 return false;
//             }

//             rows[i].add(num);
//             cols[j].add(num);
//             boxes[boxIndex].add(num);
//         }
//     }

//     return true;
// }


// Uses template literals so you only need ONE SET !!
// function isValidSudoku(board: string[][]): boolean {
//     const set = new Set()

//     for(let i = 0; i < board.length; i++) {
//         for(let j = 0; j < board[i].length; j++) {
//             const cell = board[i][j]
//             if(cell === '.') continue
//             const row = `row: ${i}, value: ${cell}`
//             const column = `column: ${j}, value: ${cell}`
//             const boxNumber = 3 * Math.floor(i / 3) + Math.floor(j / 3)
//             const box = `boxNumber: ${boxNumber}, value: ${cell}`
//             if(set.has(row) || set.has(column) || set.has(box)) return false
//             set.add(row).add(column).add(box)
//         }
//     }
//     return true
// };