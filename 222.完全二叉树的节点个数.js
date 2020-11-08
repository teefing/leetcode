/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function getDepth (p) {
  if (!p) return 0
  return getDepth(p.left)+1
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if(!root) return 0
  
  const leftDepth = getDepth(root.left)
  const rightDepth = getDepth(root.right)

  if (leftDepth === rightDepth) {
    return (1 << leftDepth) + countNodes(root.right)
  } else {
    return (1 << rightDepth) + countNodes(root.left)
  }

};
// @lc code=end

