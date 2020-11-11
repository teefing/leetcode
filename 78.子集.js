/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let res = [], track = []
  function backtrack (nums, start, track) {
    res.push(track.slice())
    for (let i = start; i < nums.length; i++){
      track.push(nums[i])
      backtrack(nums, i+1, track)
      track.pop()
    }
  }
  backtrack(nums, 0, track, res)
  return res
};


// @lc code=end

