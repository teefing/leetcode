/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
function Arr(n) {
  return Array(n).fill(0);
}
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let len = prices.length;
  let a = Arr(len).map((_) => Arr(3).map((_) => Arr(2)));

  for (let i = 0; i < len; i++) {
    for (let k = 0; k <= 2; k++) {
      if (k === 0) {
        a[i][k][0] = 0;
        a[i][k][1] = -Infinity;
        continue;
      }
      if (i === 0) {
        a[i][k][0] = 0;
        a[i][k][1] = -prices[0];
        continue;
      }
      a[i][k][0] = Math.max(a[i - 1][k][0], a[i - 1][k][1] + prices[i]);
      a[i][k][1] = Math.max(a[i - 1][k][1], a[i - 1][k - 1][0] - prices[i]);
    }
  }
  return a[len - 1][2][0];
};
// @lc code=end
