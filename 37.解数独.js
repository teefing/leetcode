/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const maxRow = 9, maxCol = 9
  function isValid (i, j, ch) {
    for (let k = 0; k < 9; k++){
      if (board[i][k] === ch) return false
      if (board[k][j] === ch) return false
      const chunkI = Math.floor(i/3)
      const chunkJ = Math.floor(j/3)
      const chunkIStart = chunkI * 3
      const chunkJStart = chunkJ * 3
      const iIndex = chunkIStart + Math.floor(k / 3)
      const jIndex = chunkJStart+k%3
      if(board[iIndex][jIndex] === ch) return false
    }
    return true
  }

  function backtrack (i, j) {
    if (j === maxCol) {
      return backtrack(i + 1, 0)
    }
    if (i === maxRow) {
      return true
    }

    if (board[i][j] !== '.') {
      return backtrack(i, j + 1)
    }

    for (let t = 1; t <= 9; t++){
      const ch = String(t)
      if (!isValid(i, j, ch)) continue
      board[i][j] = ch
      
      if (backtrack(i, j + 1)) {
        return true
      }
      board[i][j] = '.'
    }
    return false
  }
  backtrack(0,0)
};
// @lc code=end

let matrix = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
solveSudoku(matrix)
console.log(matrix);
