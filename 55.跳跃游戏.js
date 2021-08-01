/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // 下一个能跳到的最远位置
  let nextMax = 0
  let len = nums.length

  // 特殊处理 如果数组长度为 1,最后一个下标就是第一个下标,肯定能跳转到
  if (len === 1) return true
  
  for (let i = 0; i < len - 1; i++){
    // 如果之前计算的下一个能跳到的最远位置够不到现在的位置, 直接返回 false
    if(nextMax < i) return false

    // 计算在 i 这个位置,能跳转到的最远距离
    nextMax = Math.max(nextMax, i + nums[i])

    // 如果能跳到的最远距离比最后一个下标还要远, 返回 true
    if (nextMax >= len - 1) return true
  }
  return false
};
// @lc code=end