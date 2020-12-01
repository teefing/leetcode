/*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let m = word1.length, n = word2.length
  let lcs = longestCommonSubsequence(word1, word2)
  return m+n-2*lcs
};
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

