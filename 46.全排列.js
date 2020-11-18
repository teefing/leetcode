/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = []
  let track = []
  function backtrack (chooses) {
    if (chooses.length === track.length) {
      res.push(track.slice())
      return
    }
    for (let i = 0; i < chooses.length; i++) {
      if(track.includes(chooses[i])) continue
      // 作出选择
      track.push(chooses[i])
  
      backtrack(chooses)
  
      // 所做的选择反悔
      track.pop()
    }
  }
  backtrack(nums)
  return res
};
// @lc code=end

