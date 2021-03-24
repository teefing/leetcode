/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  function swap(i, j) {
    let t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
  }

  // 下一个放0的位置
  let l = 0,
  // 下一个放2的位置
    r = nums.length - 1,
    i = 0;
  while (i <= r) {
    if(nums[i] === 0) {
      swap(i, l)
      i++
      l++
    } else if(nums[i] === 2) {
      swap(i, r)
      // 这个时候i不能自增，我们只是把2的最终位置定了，当前i位置的数还没定
      r--
    } else {
      i++
    }
  }
  return nums;
};
// @lc code=end
