/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let rows = [],
    cols = [],
    subs = [];
  for (let i = 0; i < 9; i++) {
    rows[i] = new Set();
    cols[i] = new Set();
    subs[i] = new Set();
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j];
      if (num === ".") continue;
      if (rows[i].has(num)) return false;
      rows[i].add(num);

      if (cols[j].has(num)) return false;
      cols[j].add(num);

      let subIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (subs[subIndex].has(num)) return false;
      subs[subIndex].add(num)
    }
  }

  return true;
};
// @lc code=end