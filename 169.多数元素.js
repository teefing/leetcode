/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if(!nums.length) return 0
  let mainNum = nums[0]
  let count = 1
  for (let i = 1; i < nums.length; i++){
    if(count === 0) mainNum = nums[i]

    if (nums[i] !== mainNum) {
      count--
    } else {
      count++
    }
  }
  return mainNum
};
// @lc code=end

