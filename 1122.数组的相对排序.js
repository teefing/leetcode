/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let res = []
  for (let i = 0; i < arr2.length; i++){
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] === arr2[i]) {
        res.push(arr1[j])
        arr1.splice(j, 1)
        j--
      }
    }
  }
  res.push(...arr1.sort((a,b) => a-b))
  return res
};
// @lc code=end

