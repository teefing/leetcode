/*
 * @lc app=leetcode.cn id=606 lang=javascript
 *
 * [606] 根据二叉树创建字符串
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  const arr = []
  const preOrder = (p, insert = false) => {
    if (!p) {
      if (insert) {
        arr.push('(')
        arr.push(')')
      }
      return
    }
    arr.push('(')
    arr.push(p.val)
    if (!p.left && p.right) {
      preOrder(p.left, true)
    } else {
      preOrder(p.left)
    }
    
    preOrder(p.right)
    arr.push(')')
  }
  preOrder(t)
  arr.pop()
  arr.shift()
  return arr.join('')
  

};
// @lc code=end

