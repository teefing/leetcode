/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const length = s.length
  const P = new Array(length)
  for (let i = 0; i < length; i++){
    P[i] = new Array(length).fill(false)
  }
  let maxLen = 0
  let maxPal = ''
  let end = 0
  for (let len = 1; len <= length; len++) {
    for (let start = 0; start < length; start++){
      end = start + len - 1
      if (end >= length) break
      P[start][end] = (len === 1 || len === 2 || P[start + 1][end - 1]) && s[start] === s[end]
      if (P[start][end] && len > maxLen) {
        maxPal = s.substring(start, end+1)
        maxLen = len
      }
    }
  }
  return maxPal
  
};
// @lc code=end

