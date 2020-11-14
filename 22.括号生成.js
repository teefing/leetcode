/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let track = []
  let res = []
  /**
  * leftNum 剩余左括号数量
  * rightNum 剩余右括号数量
  */
  function backtrack (leftNum, rightNum) {
    // 合格的括号对满足以下条件
    // 1. 任意字串[0,...,i]，左括号数量都大于右括号数量
    // 2. 对于所有合法的括号对，左括号数都等于右括号数

    // 剩余左括号数大于剩余右括号数，说明字串的左括号数小于右括号数，不符合条件
    if (leftNum > rightNum) return
    // 剩余左括号数或者剩余右括号数不足，不符合条件
    if (leftNum < 0 || rightNum < 0) return
    // 经过第一个判断，左括号数量肯定大于等于右括号数量，如果剩余左右括号数都为0，说明就是合格的括号对
    if (leftNum === 0 && rightNum === 0) {
      res.push(track.join(''))
      return
    }

    // 做选择
    track.push('(')
    backtrack(leftNum - 1, rightNum)
    // 回溯
    track.pop()
    

    // 做选择
    track.push(')')
    backtrack(leftNum, rightNum - 1)
    // 回溯
    track.pop()
  }

  // 剩余左右括号数各给n个
  backtrack(n, n)
  return res
};
// @lc code=end

