/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null

  let pivot = preorder[0]
  let root = new TreeNode(pivot)

  let pivotInOrderIndex = inorder.indexOf(pivot)
  const leftInOrderArr = inorder.slice(0, pivotInOrderIndex)
  const rightInOrderArr = inorder.slice(pivotInOrderIndex+1)
  const leftInOrderArrSize = leftInOrderArr.length
  
  root.left = buildTree(preorder.slice(1, 1+leftInOrderArrSize), leftInOrderArr)
  root.right = buildTree(preorder.slice(1+leftInOrderArrSize), rightInOrderArr)
  
  return root
};
// @lc code=end

