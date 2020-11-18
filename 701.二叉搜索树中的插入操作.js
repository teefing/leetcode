/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST1 = function(root, val) {
  if (root === null) return new TreeNode(val)
  if (val > root.val) root.right = insertIntoBST(root.right, val)
  else if (val < root.val) root.left = insertIntoBST(root.left, val)
  return root
};

var insertIntoBST = function (root, val) {
  if(root === null) return new TreeNode(val)
  let p = root, prev = root
  while (p) {
    prev = p
    if (val < p.val) {
      p = p.left
    } else if (val > p.val) {
      p = p.right
    }
  }

  if (val < prev.val) prev.left = new TreeNode(val)
  else if(val > prev.val) prev.right = new TreeNode(val)

  return root
};
// @lc code=end

