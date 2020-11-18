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

  // 取得前序遍历的第一个值即根节点的值
  let pivot = preorder[0]
  let root = new TreeNode(pivot)

  // 获得根节点在中序遍历的位置
  let pivotInOrderIndex = inorder.indexOf(pivot)
  // 将中序遍历数组分为三部分，左边是左子树的中序遍历数组，中间是根节点，右边是右子树的中序遍历数组
  const leftInOrderArr = inorder.slice(0, pivotInOrderIndex)
  const rightInOrderArr = inorder.slice(pivotInOrderIndex+1)
  const leftInOrderArrSize = leftInOrderArr.length
  
  // 左子树中序遍历数组的长度和左子树前序遍历的长度一致，由此可以取出左子树前序遍历的数组
  root.left = buildTree(preorder.slice(1, 1 + leftInOrderArrSize), leftInOrderArr)
  // 同理
  root.right = buildTree(preorder.slice(1+leftInOrderArrSize), rightInOrderArr)
  
  return root
};
// @lc code=end

