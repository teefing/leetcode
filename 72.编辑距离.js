/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let word1Len = word1.length,
    word2Len = word2.length;
  let memo = new Map();
  let getKey = (i, j) => `${i - 1},${j - 1}`;
  let dp = function(i, j) {
    if (i === -1) return j + 1;
    if (j === -1) return i + 1;
    let key = getKey(i, j);
    if (memo.has(key)) {
      return memo.get(key);
    }
    
    let res;
    if (word1[i] === word2[j]) {
      res = dp(i - 1, j - 1);
    } else {
      res = Math.min(dp(i, j - 1), dp(i - 1, j), dp(i - 1, j - 1)) + 1;
    }
    memo.set(key, res);
    return res;
  };

  return dp(word1Len - 1, word2Len - 1);
};
// @lc code=end
