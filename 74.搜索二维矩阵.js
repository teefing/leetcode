/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let ROW = matrix.length
  let COL = matrix[0].length
  let i=ROW-1, j=0;
  while(i >= 0 && i <= ROW -1 && j >=0 && j<= COL - 1) {
    let cur = matrix[i][j]
    if(cur === target) return true
    if(target < cur) {
      i--
      continue
    } else {
      j++
      continue
    }
  }
  return false
};
// @lc code=end

