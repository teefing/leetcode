/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  let res = 0;
  let count = 0;
  function backtrack(i) {
    if (i === nums.length) {
      if (res === S) {
        count++;
      }
      return;
    }
    res += nums[i];
    backtrack(i + 1);
    res -= nums[i];

    res -= nums[i];
    backtrack(i + 1);
    res += nums[i];
  }
  backtrack(0);
  return count;
};
// @lc code=end
