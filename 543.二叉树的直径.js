/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
  if (!root) return 0
  let max = 0
  const getDepth = (p) => {
    if (!p) return 0
    let left = getDepth(p.left)
    let right = getDepth(p.right)
    max = Math.max(max, left + right)
    return Math.max(left, right) + 1
  }
  getDepth(root)
  return max
};
// @lc code=end

