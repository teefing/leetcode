/*
 * @lc app=leetcode.cn id=887 lang=javascript
 *
 * [887] 鸡蛋掉落
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function(k, n) {
  const min = Math.min;
  const max = Math.max;
  const memo = new Array(k+1).fill(undefined).map(_=> new Array(n+1).fill(undefined))

  function dp(K, N) {
    if (K === 1) return N;
    if (N === 0) return 0;
    
    if(memo[K][N] !== undefined) return memo[K][N]

    let res = Infinity;
    for (let i = 1; i <= N; i++) {
      res = min(res, max(dp(K, N - i), dp(K - 1, i - 1) ) + 1);
    }
    memo[K][N] = res
    return res;
  }
  return dp(k, n);
};
// @lc code=end
// console.log(superEggDrop(4, 5000));
