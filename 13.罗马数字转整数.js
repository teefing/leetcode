/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    'I': 1,
    'a': 4,
    'V': 5,
    'b': 9,
    'X': 10,
    'c': 40,
    'L': 50,
    'd': 90,
    'C': 100,
    'e': 400,
    'D': 500,
    'f': 900,
    'M': 1000
  }
  s = s.replace(/IV/g, 'a').replace(/IX/g, 'b').replace(/XL/g, 'c').replace(/XC/g, 'd').replace(/CD/g, 'e').replace(/CM/g, 'f')
  let res = 0
  for(let c of s) {
    res += map[c]
  }
  return res
};
// @lc code=end

