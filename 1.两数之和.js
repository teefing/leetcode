/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const store = {}
  let diffIndex = -1
  for (let i = 0; i < nums.length; i++){
    diffIndex = store[target - nums[i]]
    if (diffIndex!==undefined && diffIndex !== i) {
      return [i, diffIndex]
    } else {
      store[nums[i]] = i
    }
  }
};
// @lc code=end
