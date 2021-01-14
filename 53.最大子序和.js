/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let len = nums.length;
  if (len === 0) return 0;
  if (len === 1) return nums[0];
  let dp = Array(len).fill(0);
  dp = nums[0];
  let max = -Infinity;
  for (let i = 1; i < len; i++) {
    dp = Math.max(dp + nums[i], nums[i]);
    max = Math.max(dp, max);
  }

  return max;
};
// @lc code=end
