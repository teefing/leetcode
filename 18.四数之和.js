/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 回溯算法, 疯狂减枝
var fourSum = function (nums, target) {
  let res = [];
  let track = [];
  nums.sort((a, b) => a - b);
  if (
    nums.length &&
    (nums[nums.length - 1] * 4 < target || nums[0] * 4 > target)
  ) {
    return [];
  }

  function backtrack(start = 0, Sum) {
    if (Sum === target && track.length === 4) {
      res.push(track.slice());
      return;
    }
    if (track.length > 4) return;
    for (let i = start; i < nums.length; i++) {
      if (nums.length - i < 4 - track.length) continue;
      if (i > start && nums[i] === nums[i - 1]) continue;
      if (
        i < nums.length - 1 &&
        Sum + nums[i] + (3 - track.length) * nums[i + 1] > target
      ) continue;
        
      if (
        i < nums.length - 1 &&
        Sum + nums[i] + (3 - track.length) * nums[nums.length - 1] < target
      ) continue;

      track.push(nums[i]);
      backtrack(i + 1, Sum + nums[i]);
      track.pop(nums[i]);
    }
  }
  backtrack(0, 0);
  return res;
};
// @lc code=end

// console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
