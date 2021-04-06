/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  let res = []
  if(!num) return '0'
  let map = [0,1,2,3,4,5,6,7,8,9,'a', 'b', 'c','d','e','f']
  if(num < 0) {
    num = 2 ** 32 + num
  }
  while(num) {
    res.push(map[num % 16])
    num = Math.floor(num / 16)
  }
  return res.reverse().join('')
};
// @lc code=end

