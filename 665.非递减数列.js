/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let count = 0
  let index = 0
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      count++
      index = i
      if(count>1) return false
    }
  }

  if ([0, nums.length - 2].includes(index)) {
    return true
  } else if(nums[index-1] <= nums[index+1]) {
    return true
  } else if (nums[index] <= nums[index + 2]) {
    return true
  } else {
    return false
  }
};
// @lc code=end
