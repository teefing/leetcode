/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let res = []
  let choices = []
  function backtrack(sum = 0, start = 0){
    if(sum === target) {
      res.push(choices.slice())
      return
    }
    if(sum > target) {
      return
    }
    for(let i=start;i<candidates.length;i++) {
      choices.push(candidates[i])
      backtrack(sum+candidates[i], i)
      choices.pop()
    }
  }

  backtrack()
  return res
};

// @lc code=end

