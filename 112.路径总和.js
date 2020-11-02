/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  const hasSum = (p, sum) => {
    if(!p) return false
    if (!p.left && !p.right && p.val === sum) return true
    return hasSum(p.left, sum - p.val) || hasSum(p.right, sum - p.val)
  }
  return hasSum(root, sum)
};
// @lc code=end

