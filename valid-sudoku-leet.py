# Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

# Each row must contain the digits 1-9 without repetition.
# Each column must contain the digits 1-9 without repetition.
# Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
# Note:
# A Sudoku board (partially filled) could be valid but is not necessarily solvable.
# Only the filled cells need to be validated according to the mentioned rules.

# row{"5", "3", "7", }  # Hash set for each row
# Input: board = 

# DIVIDE THE BOARD INTO 9 SUB-BOXES LIKE THIS
#    [      0    ] [    1     ] [    2     ] -- 
#      0   1   2    3   4   5    6   7   8
# 0  ["5","3",".", ".","7",".", ".",".","."]                                                                   
# 1 ,["6",".",".", "1","9","5", ".",".","."]  # 0
# 2 ,[".","9","8", ".",".",".", ".","6","."]
#                                        --
# 3 ,["8",".",".", ".","6",".", ".",".","3"]
# 4 ,["4",".",".", "8",".","3", ".",".","1"]  # 1
# 5 ,["7",".",".", ".","2",".", ".",".","6"]
#                                        --
# 6 ,[".","6",".", ".",".",".", "2","8","."]
# 7 ,[".",".",".", "4","1","9", ".",".","5"]  # 2
# 8 ,[".",".",".", ".","8",".", ".","7","9"]]
#                                         --             
# Output: true

# How can we tell which sub-box a given cell is in?
# Say we have cell 4x4, how can we tell it is in subbox 1x1?
# The 9x9 outer box converts to 3x3 subbox by int dividing by 3
    # So the sub-box is 4 // 3 x 4 //3 or 1x1

# These are the tuples that are the KEYS in the hash set
#     0     1     2   |   3     4     5   |   6     7      8
# 0 (0,0) (0,0) (0,0) | (0,1) (0,1) (0,1) | (0,2) (0,2) (0,2)
# 1 (0,0) (0,0) (0,0) | (0,1) (0,1) (0,1) | (0,2) (0,2) (0,2)
# 2 (0,0) (0,0) (0,0) | (0,1) (0,1) (0,1) | (0,2) (0,2) (0,2)
#   -------|-------|-------
# 3 (1,0) (1,0) (1,0) | (1,1) (1,1) (1,1) | (1,2) (1,2) (1,2)
# 4 (1,0) (1,0) (1,0) | (1,1) (1,1) (1,1) | (1,2) (1,2) (1,2)
# 5 (1,0) (1,0) (1,0) | (1,1) (1,1) (1,1) | (1,2) (1,2) (1,2)
#   -------|-------|-------
# 6 (2,0) (2,0) (2,0) | (2,1) (2,1) (2,1) | (2,2) (2,2) (2,2)
# 7 (2,0) (2,0) (2,0) | (2,1) (2,1) (2,1) | (2,2) (2,2) (2,2)
# 8 (2,0) (2,0) (2,0) | (2,1) (2,1) (2,1) | (2,2) (2,2) (2,2)


import collections
d = collections.defaultdict(list)

def isValidSudoku(board):
    cols = collections.defaultdict(set)
    rows = collections.defaultdict(set)
    squares = collections.defaultdict(set)

    for r in range(9):
        for c in range(9):
            if board[r][c] == ".":
                continue
            if (board[r][c] in rows[r] or
                board[r][c] in cols[c] or
                board[r][c] in squares[(r //3, c //3)]):
                return False
            cols[c].add(board[r][c])
            rows[r].add(board[r][c])
            squares[(r //3, c //3)].add(board[r][c])
    return True