/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
dp[i] = [...,i]最长递增子序列长度
*/
var lengthOfLIS = function(nums) {
  let length = nums.length
  let dp = new Array(length).fill(1)
  for(let i = 1;i<length;i++){
    for(let j = 0;j<i;j++){
      if(nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j]+1)
      }
    }
  }
  return Math.max(...dp)
};
// @lc code=end

