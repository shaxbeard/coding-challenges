
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// row{"5", "3", "7", }  # Hash set for each row
// Input: board = 
// [      0     ][    1     ][    2     ] --
// [["5","3",".",".","7",".",".",".","."]                                                                   
// ,["6",".",".","1","9","5",".",".","."]  # 0
// ,[".","9","8",".",".",".",".","6","."]
//                                        --
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]  # 1
// ,["7",".",".",".","2",".",".",".","6"]
//                                        --
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]  # 2
// ,[".",".",".",".","8",".",".","7","9"]]
//                                         --             
// Output: true


// #1 voted JS solution on Leetcode
// var isValidSudoku = function(board) {
//     for (let i = 0; i < 9; i++) {
//       let row = new Set(),
//           col = new Set(),
//           box = new Set();
  
//       for (let j = 0; j < 9; j++) {
//         let _row = board[i][j]; // row coordinates are [i][j]
//         let _col = board[j][i]; // column coordinates are [j][i]
//         let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)] // sub-box coordinates are (what??)
        
//         // track for repeated nums in each row
//         if (_row != '.') {
//           if (row.has(_row)) return false;
//           row.add(_row);
//         }
//         // track for repeated nums in each column
//         if (_col != '.') {
//           if (col.has(_col)) return false;
//           col.add(_col);
//         }
//         // track for repeated nums in each sub-box
//         if (_box != '.') {
//           if (box.has(_box)) return false;
//           box.add(_box);
//         } 
//         console.log(box);
//       }
//     }
//     return true
//   };

//rows = {"5", "3", null, null, null, null, null, null, null}
//cols = {"5", "3", null, null, null, null, null, null, null}
//boxes = {"5", "3", null, null, null, null, null, null, null}

//    [  0   1   2   3   4  5  6   7   8  9
//     ["5","3",".",".","7",".",".",".","."]  0
//    ,["6",".",".","1","9","5",".",".","."]  1
//    ,[".","9","8",".",".",".",".","6","."]  2
//    ,["8",".",".",".","6",".",".",".","3"]  3
//    ,["4",".",".","8",".","3",".",".","1"]  4
//    ,["7",".",".",".","2",".",".",".","6"]  5
//    ,[".","6",".",".",".",".","2","8","."]  6
//    ,[".",".",".","4","1","9",".",".","5"]  7
//    ,[".",".",".",".","8",".",".","7","9"]] 8
//       i
//                       j 
// Variation on the solution from a comment - more like Neetcode solution!!!
  var isValidSudoku = function (board) {
    let rows = new Array(9).fill(null).map(() => new Set());
    let cols = new Array(9).fill(null).map(() => new Set());
    let boxes = new Array(9).fill(null).map(() => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            // let num = board[i][j];
            if (board[i][j] === '.') continue; 
            let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            if (rows[i].has(board[i][j]) || 
                cols[j].has(board[i][j]) || 
                boxes[boxIndex].has(board[i][j])) {
                return false;
            }
            rows[i].add(board[i][j]);
            cols[j].add(board[i][j]);
            boxes[boxIndex].add(board[i][j]);
        }
    }
    return true;
}

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
