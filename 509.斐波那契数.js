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
var fib = function (n) {
  if (n === 0) return 0
  if (n === 2 || n === 1) 
    return 1;
  let pre = 1, cur = 1
  for (let i = 3; i <= n; i++){
    let next = pre + cur
    pre = cur
    cur = next
  }
  return cur
};
// @lc code=end

