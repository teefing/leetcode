/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let m = text1.length, n = text2.length
  let dp = (new Array(m + 1)).fill(0).map(_ => (new Array(n + 1)).fill(0))
  // console.log(dp);
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++){
      if (text1[i-1] === text2[j-1]) {
        dp[i][j] = dp[i-1][j-1]+1
      } else {
        dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j])
      }
    }
  }
  return dp[m][n]
};
// @lc code=end

