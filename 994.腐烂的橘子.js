/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let ROW = grid.length;
  let COL = grid[0].length;
  let queue = [];
  let allZero = true;
  // 将所有腐烂的橘子存入queue
  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (grid[i][j] === 2) {
        queue.push(`${i},${j}`);
      }
      if (grid[i][j] !== 0) allZero = false;
    }
  }

  if (allZero) return 0;

  let day = 0;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      let pair = cur.split(",").map((v) => +v);
      const [r, c] = pair;
      // 遍历相邻节点
      // 相邻节点的橘子烂掉
      if (r - 1 >= 0 && grid[r - 1][c] === 1) {
        grid[r - 1][c] = 2;
        queue.push(`${r - 1},${c}`);
      }

      if (c - 1 >= 0 && grid[r][c - 1] === 1) {
        grid[r][c - 1] = 2;
        queue.push(`${r},${c - 1}`);
      }

      if (r + 1 <= ROW - 1 && grid[r + 1][c] === 1) {
        grid[r + 1][c] = 2;
        queue.push(`${r + 1},${c}`);
      }

      if (c + 1 <= COL - 1 && grid[r][c + 1] === 1) {
        grid[r][c + 1] = 2;
        queue.push(`${r},${c + 1}`);
      }
    }
    day++;
  }

  // 遍历grid，判断是否还有新鲜的橘子
  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }
  return day - 1;
};
// @lc code=end
