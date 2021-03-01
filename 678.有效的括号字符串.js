/*
 * @lc app=leetcode.cn id=678 lang=javascript
 *
 * [678] 有效的括号字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  
  let low = 0, high = 0
  for (let c of s) {
    if(c === '(') {
      low++
      high++
    } else if(c === ')') {
      if(low>0)low--
      high--
    } else {
      if(low>0)low--
      high++
    }

    if(high<0) return false
  }

  return low === 0
};
// @lc code=end
