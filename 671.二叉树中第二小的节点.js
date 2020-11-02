/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
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
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
  const o = {}
  const inOrder = (p) => {
    if (!p) return
    inOrder(p.left)
    o[p.val] = Number(o[p.val] || 0) + 1
    inOrder(p.right)
  }
  inOrder(root)
  let arr = Object.keys(o).sort((a, b) => a-b)
  if (arr.length < 2) return -1
  return arr[1]
};
// @lc code=end

