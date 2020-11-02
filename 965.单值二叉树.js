/*
 * @lc app=leetcode.cn id=965 lang=javascript
 *
 * [965] 单值二叉树
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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  const pivot = root.val
  const traverse = (p) => {
    if (!p) return true
    return p.val === pivot && traverse(p.left) && traverse(p.right)
  }
  return traverse(root)
};
// @lc code=end

