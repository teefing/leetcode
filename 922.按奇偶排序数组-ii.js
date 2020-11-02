/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let oddArr = A.filter(v => v % 2 === 1)
  let evenArr = A.filter(v => v % 2 === 0)
  let res= []
  for (let i = 0; i < oddArr.length; i++) {
    res.push(evenArr[i], oddArr[i])
  }
  return res
};
// @lc code=end

