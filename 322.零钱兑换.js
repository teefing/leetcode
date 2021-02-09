/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange1 = function(coins, amount) {
  const dpTable = {};
  function dp(n) {
    if (n === 0) return 0;
    if (n < 0) return -1;
    let res = Infinity;
    for (let coin of coins) {
      const subproblem =
        dpTable[n - coin] || (dpTable[n - coin] = dp(n - coin));
      if (subproblem === -1) continue;
      res = Math.min(res, subproblem + 1);
    }
    return res !== Infinity ? res : -1;
  }

  return dp(amount);
};

// var coinChange = function (coins, amount) {
//   const dp = new Array(amount + 1).fill(amount + 1)
//   dp[0] = 0
//   for (let i = 0; i <= amount; i++){
//     for (let coin of coins) {
//       if (i - coin < 0) continue
//       dp[i] = Math.min(dp[i], dp[i-coin]+1)
//     }
//   }
//   return dp[amount] === amount + 1 ? -1 : dp[amount]
// };

var coinChange = function (coins, amount) {
  // 凑成总金额i的最少硬币个数
  const dp = new Array(amount+1).fill(amount+1)
  // dp[i] = min(dp[i-1]+1, )
  dp[0] = 0
  for(let i=0;i<=amount;i++){
    for(let coin of coins) {
      if(coin > i) continue
      dp[i] = Math.min(dp[i-coin]+1, dp[i])
    }
  }

  return dp[amount] === amount+1 ? -1 : dp[amount]
};
// @lc code=end
