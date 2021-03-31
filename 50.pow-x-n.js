/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  function pow(x, n) {
    if (n === 0) return 1;
    let y = pow(x, Math.floor(n / 2));
    return n % 2 === 0 ? y * y : y * y * x;
  }

  if (n >= 0) return pow(x, n);
  return 1 / pow(x, -n);
};
// @lc code=end
