/*
 * @lc app=leetcode.cn id=938 lang=javascript
 *
 * [938] 二叉搜索树的范围和
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
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  let sum = 0
  const inOrder = (p) => {
    if (!p) return
    inOrder(p.left)
    if(p.val <= R && p.val >= L) sum+=p.val
    inOrder(p.right)
  }
  inOrder(root)
  return sum
};
// @lc code=end

