/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let i = 0, j = height.length-1, res = -Infinity
  const getArea = (i, j) => {
    return (j-i) * Math.min(height[i], height[j])
  }
  while(i <= j) {
    res = Math.max(res, getArea(i, j))
    if(height[j] > height[i]) {
      i++
    } else {
      j--
    }
  }
  return res
};
// @lc code=end

