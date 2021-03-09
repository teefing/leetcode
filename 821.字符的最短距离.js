/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  let arr1 = new Array(s.length).fill(0);
  let arr2 = new Array(s.length).fill(0);
  let arr3 = new Array(s.length).fill(0);
  for (let i = 0, prev = -Infinity; i < s.length; i++) {
    let element = s[i];
    if (element === c) {
      prev = i;
    }
    arr1[i] = i - prev
  }

  for (let i = s.length - 1, prev = Infinity; i >= 0; i--) {
    let element = s[i];
    if (element === c) {
      prev = i;
    }
    arr2[i] = prev - i;
  }
  for(let i=0;i<s.length;i++){
    arr3[i] = Math.min(arr1[i], arr2[i])
  }
  return arr3
};
// @lc code=end
