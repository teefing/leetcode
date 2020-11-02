/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const arr = []
  const preOrder = (r) => {
    if (!r) return
    if (!r.left && !r.right) return
    if ((r.val >= p.val && r.val <= q.val) || (r.val <= p.val && r.val >= q.val)) {
      arr.push(r)
    }
    preOrder(r.left)
    preOrder(r.right)
  }
  preOrder(root)
  return arr[0]
};
// @lc code=end

