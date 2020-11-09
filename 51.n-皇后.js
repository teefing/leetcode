/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const getMatrix = (n, stuff = "") => {
    const res = [];
    for (let i = 0; i < n; i++) {
      const list = [];
      for (let j = 0; j < n; j++) {
        list.push(stuff);
      }
      res.push(list);
    }
    return res;
  };
  const res = [];
  const emptyBoard = getMatrix(n, ".");
  backtrack(emptyBoard, 0, res);
  return res;
};

function backtrack(matrix, row, res) {
  if (matrix.length === row) {
    res.push(matrix.map((item) => item.join("")));
    return;
  }

  const rowData = matrix[row];
  for (let col = 0; col < rowData.length; col++) {
    if (!isValid(matrix, row, col)) {
      continue;
    }
    rowData[col] = "Q";
    backtrack(matrix, row + 1, res);
    rowData[col] = ".";
  }
}

function isValid(matrix, row, col) {
  const size = matrix.length;
  for (let i = 0; i < size; i++) {
    if (
      matrix[i][col] === "Q" ||
      matrix[row][i] === "Q" ||
      matrix[i][row + col - i] === "Q" ||
      matrix[i][i + col - row] === "Q"
    )
      return false;
  }

  return true;
}
// @lc code=end
