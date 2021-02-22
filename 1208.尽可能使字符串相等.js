/*
 * @lc app=leetcode.cn id=1208 lang=javascript
 *
 * [1208] 尽可能使字符串相等
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
  let distances = []
  
  for (let i = 0; i < s.length; i++){
    distances[i] = Math.abs(s[i].charCodeAt(0) - t[i].charCodeAt(0))
  }
  let left = 0, right = 0, start = 0, len = -Infinity, sum = 0;
  while (right < distances.length) {
    let c = distances[right]
    sum += c
    right++

    while (sum > maxCost) {
      let d = distances[left]
      left++
      sum -= d
    }
    len = Math.max(len, right - left)
  }

  return len
};

// @lc code=end

