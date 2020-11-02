/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if(s.length === 0) return true
  let i = s.length - 1
  let j = t.length - 1
  while (j >= 0) {
    if (t[j] === s[i]) {
      j--
      i--
      if(i === -1) return true
    } else {
      j--
    }
  }
  return i === -1
};
// @lc code=end

