/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums.length === 0) return 0
  let slow=0, fast=1
  for(;fast < nums.length;fast++){
    if(nums[fast] !== nums[slow]) {
      slow++
      nums[slow] = nums[fast]
    }
  }
  return slow+1
};
// @lc code=end

