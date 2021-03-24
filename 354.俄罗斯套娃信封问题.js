/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  envelopes = envelopes.sort((a, b) => a[0] - b[0]);

  let len = envelopes.length
  // dp[i] = 考虑前i个数字，以nums[i]为结尾的最长上升子序列的长度
  let dp = new Array(len).fill(1)
  for(let i=0;i<len;i++) {
    for(let j=0;j<i;j++) {
      if(envelopes[i][1] > envelopes[j][1] && envelopes[i][0] > envelopes[j][0]) {
        dp[i] = Math.max(dp[i], dp[j]+1)
      }
    }
  }
  return Math.max(...dp)
};

// @lc code=end
