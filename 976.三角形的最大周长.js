/*
 * @lc app=leetcode.cn id=976 lang=javascript
 *
 * [976] 三角形的最大周长
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  const sortedArr = A.sort((a, b) => b - a)
  while (sortedArr.length >= 3) {
    let [a, b, c, ...rest] = sortedArr
    if (a + b > c && a + c > b && b + c > a) return a + b + c
    sortedArr.shift()
  }
  return 0
};
// @lc code=end

