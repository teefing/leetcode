/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  let rowLen = image.length, colLen = image[0].length
  let color = image[sr][sc]
  if (color === newColor) return image
  const dfs = (r, c) => {
    if (image[r][c] === color) {
      image[r][c] = newColor
      r > 0 && dfs(r-1, c)
      r < rowLen -1 && dfs(r+1, c)
      c > 0 && dfs(r, c - 1)
      c < colLen - 1 && dfs(r, c+1)
    }
  }
  dfs(sr, sc)
  return image
};
// @lc code=end

