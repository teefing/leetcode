/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function getMin (node) {
  while (node.left) {
    node = node.left
  }
  return node
}

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if(root === null) return null
  if (root.val === key) {
    if (!root.left && !root.right) return null
    if (root.left === null) return root.right
    if (root.right === null) return root.left
    if (root.left !== null && root.right !== null) {
      // 找到右子树中的最大值的节点
      let minNode = getMin(root.right)
      root.val = minNode.val
      root.right = deleteNode(root.right, minNode.val)
    }
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key)
  } else {
    root.right = deleteNode(root.right, key)
  }
  return root
};
// @lc code=end

