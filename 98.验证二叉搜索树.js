/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// min.val < p.val < max.val
/**
 * @param {*} p 当前子树的根结点
 * @param {*} min 子树中的值应该满足的下界
 * @param {*} max 子树中的值应该满足的上界
 */
function isValid (p, min, max) {
  if (p === null) return true
  if (p.val <= min || p.val >= max) return false
  return isValid(p.left, min, p.val) && isValid(p.right, p.val, max)
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  return isValid(root, -Infinity, Infinity)
};
// @lc code=end

