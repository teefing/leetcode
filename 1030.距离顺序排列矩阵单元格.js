/*
 * @lc app=leetcode.cn id=1030 lang=javascript
 *
 * [1030] 距离顺序排列矩阵单元格
 */

// @lc code=start
/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function (R, C, r0, c0) {
  let arr = []
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++){
      arr.push([i, j])
    }
  }
  arr = arr.sort((a, b) => {
    const distA = Math.abs(r0 - a[0]) + Math.abs(c0 - a[1])
    const distB = Math.abs(r0 - b[0]) + Math.abs(c0 - b[1])
    return distA - distB
  })
  return arr
};
// @lc code=end

