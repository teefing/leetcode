/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  // 方向矩阵
  let fx = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1 ,0],
  ];

  // 矩阵行数
  let ROW = matrix.length;
  // 矩阵列数
  let COL = matrix[0].length;

  // 当前的位置
  let i = 0,
    j = 0;
  let res = [];
  // 行上边界 行下边界 
  // 列上边界 列下边界
  let border = [
    [0, ROW - 1],
    [0, COL - 1],
  ];
  // 当前步数，当走到（ROW * COL - 1）步时代表已经结束
  let now = 0;
  // 当前方向
  let dt = 0;

  while (now < ROW * COL) {
    res.push(matrix[i][j]);
    // 计算一个的位置
    let ti = i + fx[dt][0]
    let tj = j + fx[dt][1]
    // 如果计算的下一个数的位置越界了
    if(ti < border[0][0] || ti > border[0][1] || tj < border[1][0] || tj > border[1][1]) {
      switch(dt) {
        case 0:
          border[0][0]++
          break
        case 1:
          border[1][1]--
          break
        case 2:
          border[0][1]--
          break
        case 3:
          border[1][0]++
          break
      }
      // 更改方向
      dt = (dt+1)%4
      // 重新计算下一个数的位置
      ti = i + fx[dt][0]
      tj = j + fx[dt][1]
    }
    i = ti
    j = tj
    now++
  }

  return res;
};
// @lc code=end

