
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// row{"5", "3", "7", }  # Hash set for each row
// Input: board = 

// METHOD #1 - DIVIDE THE BOARD INTO 9 BOXES (3 X 3) AND USE COORDINATES LIKE (0,2), (1,1) TO IDENTIFY EACH BOX 
    // This is the method I am using in my Python solution (because I can use tuples for the coords)
//   [      0     ] | [    1     ]  [    2     ] --
//       0   1   2      3   4   5      6   7   8 
// 0 [["5","3",".", | ".","7",".", | ".",".","."]                                                                   
// 1 ,["6",".",".", | "1","9","5", | ".",".","."]  # 0
// 2 ,[".","9","8", | ".",".",".", | ".","6","."]
//                                        --
// 3 ,["8",".",".", | ".","6",".", | ".",".","3"]
// 4 ,["4",".",".", | "8",".","3", | ".",".","1"]  # 1
// 5 ,["7",".",".", | ".","2",".", | ".",".","6"]
//                                        --
// 6 ,[".","6",".", | ".",".",".", | "2","8","."]
// 7 ,[".",".",".", | "4","1","9", | ".",".","5"]  # 2
// 8 ,[".",".",".", | ".","8",".", | ".","7","9"]]
//                                         --             
// Output: true




// METHOD #2 - DIVIDE THE BOARD INTO 9 BOXES BUT CALCULATE WHICH BOX WITH SINGLE NUMBERS LIKE THIS
    // This is the method I am using in the JS solution (because I cannot use tuples)
//    0 1 2   3 4 5   6 7 8
// 0 [0 0 0 | 1 1 1 | 2 2 2]
// 1 [0 0 0 | 1 1 1 | 2 2 2]
// 2 [0 0 0 | 1 1 1 | 2 2 2]
// -- -- -- -- -- -- -- -- -- 
// 3 [3 3 3 | 4 4 4 | 5 5 5]
// 4 [3 3 3 | 4 4 4 | 5 5 5]
// 5 [3 3 3 | 4 4 4 | 5 5 5]
// -- -- -- -- -- -- -- -- -- 
// 6 [6 6 6 | 7 7 7 | 8 8 8]
// 7 [6 6 6 | 7 7 7 | 8 8 8]
// 8 [6 6 6 | 7 7 7 | 8 8 8]

// For cell at [4,7], we integer divide each val by 3, so [1, 2]
// So (1 * 3) + 2 = 5


// In JS, we have to start with the sets populated with null # Why?
//rows = {null, null, null, null, null, null, null, null, null}
//cols = {null, null, null, null, null, null, null, null, null}
//boxes = {null, null, null, null, null, null, null, null, null}

// NO - WE START WITH 3 ARRAYS POPULATED WITH EMPTY SETS LIKE THIS
// rows = [Set(0) {}, Set(0) {}, Set(0) {}, Set(0) {}, Set(0) {}, Set(0) {}, Set(0) {}, Set(0) {}, Set(0) {}] 
// cols = [Set(0) {}, Set(0) {}, Set(0) {}, Set(0) {}, Set(0) {}, Set(0) {}, Set(0) {}, Set(0) {}, Set(0) {}] 
// boxes = [Set(0) {}, Set(0) {}, Set(0) {}, Set(0) {}, Set(0) {}, Set(0) {}, Set(0) {}, Set(0) {}, Set(0) {}] 



  var isValidSudoku = function (board) {
    let rows = new Array(9).fill(null).map(() => new Set());
    let cols = new Array(9).fill(null).map(() => new Set());
    let boxes = new Array(9).fill(null).map(() => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            // let num = board[i][j];
            if (board[i][j] === '.') continue; 
            let boxIndex = (3 * Math.floor(i / 3)) + Math.floor(j / 3);

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
