/*
 * @lc app=leetcode.cn id=1663 lang=javascript
 *
 * [1663] 具有给定数值的最小字符串
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
  let arr = Array(n).fill('a'), sum = n, i = n-1
  while(sum < k) {
    const newDelta = Math.min(k - sum, 25)
    arr[i--] = String.fromCharCode(97 + newDelta)
    sum+=newDelta
    if(newDelta < 25) break
  }
  return arr.join('')
};
// @lc code=end

