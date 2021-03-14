/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  if (nums.length < 2) return false;
  let sum = nums.reduce((acc, cur) => acc + cur, 0);
  if (sum % 2 === 1) return false;
  let target = sum / 2;
  // [0, i]内是否包含和为j的子集
  let dp = new Array(nums.length + 1)
    .fill(false)
    .map((_) => new Array(target + 1).fill(false));
  dp[0][nums[0]] = true
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j <= target; j++) {
      if (j === 0) {
        dp[i][j] = true;
      } else if (j < nums[i]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
      }
    }
  }
  return dp[nums.length - 1][target];
};
// @lc code=end
