/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
var findMode = function (root) {
  
  const o = {}
  const inOrder = (p) => {
    if(!p) return
    inOrder(p.left)
    o[p.val] = Number(o[p.val] || 0) + 1
    inOrder(p.right)
  }
  inOrder(root)
  const maxCount = Math.max(...Object.values(o))
  return Object.keys(o).filter(key => o[key] === maxCount)
};
// @lc code=end

