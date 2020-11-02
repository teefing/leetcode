/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function (root) {
  let isBalance = true
  const getDepth = (p) => {
    if (!p) return 0
    const left = getDepth(p.left)
    const right = getDepth(p.right)
    isBalance = isBalance && (Math.abs(left - right) <=1 )
    return Math.max(left, right) + 1
  }
  getDepth(root)
  return isBalance
};
// @lc code=end

