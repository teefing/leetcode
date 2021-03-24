/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let ROW = grid.length;
  let COL = grid[0].length;
  function dfs(i, j) {
    if (i < 0 || i > ROW - 1) return;
    if (j < 0 || j > COL - 1) return;
    if (grid[i][j] === "0") return;
    grid[i][j] = "0";
    dfs(i + 1, j);
    dfs(i, j + 1);
    dfs(i - 1, j);
    dfs(i, j - 1);
  }

  let count = 0;
  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j);
      }
    }
  }
  return count;
};
// @lc code=end