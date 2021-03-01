/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let cols = matrix.length
  let rows = 0
  if(cols>0) rows = matrix[0].length
  let i=cols-1, j=0
  while(i>=0 && j <= rows-1) {
    let now = matrix[i][j]
    if(target === now) return true
    if(target < now) i--
    else if(target > now) j++
  }
  return false
};
// @lc code=end

