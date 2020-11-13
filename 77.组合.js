/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let res = []
  let track = []
  function backtrack (start) {
    if (track.length === k) {
      res.push(track.slice())
      return
    }

    for (let i = start; i <= n; i++){
      track.push(i)
      backtrack(i+1)
      track.pop()
    }
  }
  backtrack(1)
  return res
};
// @lc code=end

