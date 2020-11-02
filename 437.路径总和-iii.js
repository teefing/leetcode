/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @return {number}
 */
var pathSum = function(root, sum) {
  let count = 0
  const path = (p, sum) => {
    if (!p) return
    if(p.val === sum) count++
    path(p.left, sum - p.val)
    path(p.right, sum - p.val)
  }
  const traverse = (p, sum) => {
    if (!p) return
    traverse(p.left, sum)
    path(p, sum)
    traverse(p.right, sum)
  }

  traverse(root, sum)
  return count
};
// @lc code=end

