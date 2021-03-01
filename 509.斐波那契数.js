/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
const memo = {}
var fib = function (n) {
  if(n===0) return 0
  if(n === 1 || n===2) return 1
  let pre1 = 1, pre2 =1,  cur = 0
  for(let i=3;i<=n;i++){
    cur = pre1 + pre2
    pre1 = pre2
    pre2 = cur
  }
  return cur
};

// @lc code=end

