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
  if(s.length === 0) return 0
  let right = 0, left = 0, window = [], maxLen = -Infinity;
  while(right < s.length) {
    let rightVal = s[right]
    right++

    while(window.includes(rightVal)) {
      left++
      window.shift()
    }

    window.push(rightVal)
    maxLen = Math.max(window.length, maxLen)
  }
  return maxLen
}

// console.log(lengthOfLongestSubstring("abcabcbb"))

// @lc code=end

