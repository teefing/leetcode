/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start

function backtrack (track, chooses, resList) {
  if (chooses.length === track.length) {
    resList.push(track.slice())
    return
  }
  const newChooses = chooses.slice()
  for (let i = 0; i < chooses.length; i++) {
    // 将选择项删去
    newChooses.splice(i, 1)
    // 作出选择
    track.push(chooses[i])

    backtrack(track, newChooses, resList)

    // 所做的选择反悔
    const revertChoose = track.pop()
    // 将选择恢复
    newChooses.splice(i, 0, revertChoose)
    
  }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = []
  backtrack([], nums, res)
  return res
};
// @lc code=end

