/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (!inorder.length || !postorder.length) return null
  const len = inorder.length

  let pivot = postorder[len-1]
  let root = new TreeNode(pivot)

  let pivotInOrderIndex = inorder.indexOf(pivot)
  const leftInOrderArr = inorder.slice(0, pivotInOrderIndex)
  const rightInOrderArr = inorder.slice(pivotInOrderIndex+1)
  const leftInOrderArrSize = leftInOrderArr.length
  
  root.left = buildTree(leftInOrderArr, postorder.slice(0, leftInOrderArrSize))
  root.right = buildTree(rightInOrderArr, postorder.slice(leftInOrderArrSize, len-1))
  
  return root
};
// @lc code=end

