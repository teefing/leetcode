/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let grid = obstacleGrid;
  const m = grid.length;
  const n = grid[0].length;
  const dp = new Array(m).fill(0).map((_) => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        dp[i][j] = 0;
        continue;
      }
      if (i === 0 && j === 0) dp[i][j] = 1;
      else if (i === 0) dp[i][j] = dp[i][j - 1];
      else if (j === 0) dp[i][j] = dp[i - 1][j];
      else dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};
// @lc code=end
