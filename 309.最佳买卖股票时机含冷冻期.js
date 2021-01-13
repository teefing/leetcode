/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length == 0) return 0;
  let a_i_0 = 0,
    a_i_1 = -prices[0],
    a_pre_0 = 0;
  for (let i = 1; i < prices.length; i++) {
    let temp = a_i_0;
    a_i_0 = Math.max(a_i_0, a_i_1 + prices[i]);
    a_i_1 = Math.max(a_i_1, a_pre_0 - prices[i]);
    a_pre_0 = temp;
  }
  return a_i_0;
};
// @lc code=end
