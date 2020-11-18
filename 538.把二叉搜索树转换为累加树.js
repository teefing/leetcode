/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  
  let sum = 0
  function traverse (node) {
    if (node === null) return 0
    traverse(node.right)
    sum += node.val
    node.val = sum
    traverse(node.left)
  }

  traverse(root)
  return root
};
// @lc code=end

