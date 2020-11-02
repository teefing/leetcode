/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
  if(A.length !== B.length) return false
  let diffrentCount = 0
  let sa = new Set()
  let sb = new Set()
  for (let i = 0; i < A.length; i++){
    if (A[i] !== B[i]) {
      diffrentCount++
      if (diffrentCount > 2) return false
      sa.add(A[i])
      sb.add(B[i])
    }
  }

  // 如果是两个字母不同并且这两个数字内容相同
  if (diffrentCount === 2 && (new Set([...sa, ...sb])).size === sa.size) {
    return true
  }

  // 如果没有字母不同但是一个字符串中包含相同的字母
  if (diffrentCount === 0 && A.length > (new Set([...A])).size) {
    return true
  }
  
  return false
};
// @lc code=end
