/*
 * @lc app=leetcode.cn id=669 lang=javascript
 *
 * [669] 修剪二叉搜索树
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
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
  const trim = (p) => {
    if (!p) return p
    if (p.val > R) return trim(p.left)
    if(p.val < L) return trim(p.right)

    p.left = trim(p.left)
    p.right = trim(p.right)
    return p
  }
  return trim(root)
};
// @lc code=end

