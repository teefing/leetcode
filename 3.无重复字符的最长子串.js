/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let maxLen = 0
  let i = 0
  const slideWindow = []
  while (i < s.length) {
    if (!slideWindow.includes(s[i])) {
      slideWindow.push(s[i])
    } else {
      slideWindow.shift()
      continue
    }
    maxLen = Math.max(maxLen, slideWindow.length)
    i++
  }
  return maxLen
};
// @lc code=end

