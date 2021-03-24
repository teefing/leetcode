/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let len = nums.length
  if(len < 2) return nums
  function swap(i, j) {
    let t = nums[i]
    nums[i] = nums[j]
    nums[j] = t
  }

  for(let i=len-1;i>=0;i--) {
    let j = i - 1
    // 往前找一个比当前位置的数小的数
    while(j >= 0) {
      if(nums[j] < nums[i]) {
        swap(i, j)
        let right = nums.slice(j+1).sort((a, b) => a - b)
        nums.splice(j+1, right.length, ...right)
        return 
      }
      j--
    }
  }
  return nums.reverse()
};

// @lc code=end

