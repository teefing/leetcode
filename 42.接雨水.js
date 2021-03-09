/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let len = height.length;
  let ans = 0;
  // lmax [0, ...,i]之间的最大值
  // rmax [i, .. len]之间的最大值
  let lmax = new Array(len).fill(0),
    rmax = new Array(len).fill(0);

  lmax[0] = height[0];
  for (let i = 1; i < len; i++) {
    lmax[i] = Math.max(lmax[i - 1], height[i]);
  }

  rmax[len - 1] = height[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    rmax[i] = Math.max(rmax[i + 1], height[i]);
  }

  for (let i = 0; i < len; i++) {
    ans += Math.min(lmax[i], rmax[i]) - height[i];
  }

  return ans;
};
// @lc code=end

// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
