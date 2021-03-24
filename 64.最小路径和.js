/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const ROW = grid.length;
  const COL = grid[0].length;
  // dp[i][j]: 从左上角到i行j列位置的最小路径
  const dp = new Array(ROW).fill(0).map((_) => new Array(COL).fill(0));

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[0][0];
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      }
    }
  }
  return dp[ROW - 1][COL - 1];
};
// @lc code=end
