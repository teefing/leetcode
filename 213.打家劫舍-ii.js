/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start

function robFunc(nums) {
  let len = nums.length;
  if (len === 0) return 0;
  if (len === 1) {
    return nums[0];
  }
  if (len === 2) {
    return Math.max(nums[0], nums[1]);
  }
  let dp = Array(len).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[len - 1];
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let len = nums.length;
  if (len === 1) return nums[0];
  return Math.max(robFunc(nums.slice(1)), robFunc(nums.slice(0, -1)));
};
// @lc code=end
