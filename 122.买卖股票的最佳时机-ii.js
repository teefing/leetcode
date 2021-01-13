/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length == 0) return 0;
  let a_i_0 = 0,
    a_i_1 = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    let temp = a_i_0;
    a_i_0 = Math.max(a_i_0, a_i_1 + prices[i]);
    a_i_1 = Math.max(a_i_1, temp - prices[i]);
  }
  return a_i_0;
};
// @lc code=end
