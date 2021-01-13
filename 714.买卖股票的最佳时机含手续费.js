/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  if (prices.length == 0) return 0;
  let a_i_0 = 0,
    a_i_1 = -prices[0] - fee;
  for (let i = 1; i < prices.length; i++) {
    let temp = a_i_0;
    a_i_0 = Math.max(a_i_0, a_i_1 + prices[i]);
    a_i_1 = Math.max(a_i_1, temp - prices[i] - fee);
  }
  return a_i_0;
};
// @lc code=end
