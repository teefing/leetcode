/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  let sum = 0
  const inOrder = (p, add = false) => {
    if (!p) return
    inOrder(p.left, true)
    if(add && !p.left && !p.right) sum += p.val
    inOrder(p.right, false)
  }
  inOrder(root)
  return sum
};
// @lc code=end

