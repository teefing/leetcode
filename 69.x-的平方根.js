/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let i = 1, j = x, res = 0;
  while(i<=j) {
    let mid = Math.floor((i+j)/2)
    if(mid * mid <= x) {
      res = mid
      i = mid+1
    } else {
      j = mid-1
    }
  }
  return res
};
// @lc code=end
