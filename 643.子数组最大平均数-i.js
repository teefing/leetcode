/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let left = 0, right = 0, total = 0, maxTotal = -Infinity
  while (right < nums.length) {
    let c = nums[right]
    right++
    total += c
    
    while (right - left === k) {
      if (total > maxTotal) {
        maxTotal = total
      }

      let d = nums[left]
      left++
      total -= d
    }
  }

  return maxTotal / k
};
// @lc code=end

