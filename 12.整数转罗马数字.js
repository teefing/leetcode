/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const map = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000
  }

  let list = Object.entries(map).map(([key, value]) => ([value, key])).reverse()
  let res = ''
  while(num > 0) {
    const target = list.find(item => num >= item[0])
    res+=target[1]
    num-=target[0]
  }
  return res

};

// @lc code=end

