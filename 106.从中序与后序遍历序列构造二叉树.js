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

  // 获得后序遍历数组最后的值作为根节点
  let pivot = postorder[len - 1]
  let root = new TreeNode(pivot)

  // 获得根节点在中序遍历的位置
  let pivotInOrderIndex = inorder.indexOf(pivot)
  // 将中序遍历数组分为三部分，左边是左子树的中序遍历数组，中间是根节点，右边是右子树的中序遍历数组
  const leftInOrderArr = inorder.slice(0, pivotInOrderIndex)
  const rightInOrderArr = inorder.slice(pivotInOrderIndex+1)
  const leftInOrderArrSize = leftInOrderArr.length
  
  // 左子树中序遍历数组的长度和左子树后序遍历数组的长度一致，由此可以取出左子树后序遍历的数组
  root.left = buildTree(leftInOrderArr, postorder.slice(0, leftInOrderArrSize))
  // 同理
  root.right = buildTree(rightInOrderArr, postorder.slice(leftInOrderArrSize, len-1))
  
  return root
};
// @lc code=end

