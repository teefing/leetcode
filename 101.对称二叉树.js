/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  const isPartialSame = (p, q) => {
    if (!p && !q) return true;
    if (
      p &&
      q &&
      p.val === q.val &&
      isPartialSame(p.left, q.right) &&
      isPartialSame(p.right, q.left)
    ) {
      return true;
    }
    return false;
  };
  if (!root) return true
  return isPartialSame(root.left, root.right)
};
// @lc code=end
