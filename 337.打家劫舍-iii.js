/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
const cache = new Map();
var rob = function (root) {
  if (root === null) return 0;
  if (cache.has(root)) {
    return cache.get(root);
  }
  let doIt =
    root.val +
    (root.left === null ? 0 : rob(root.left.left) + rob(root.left.right)) +
    (root.right === null ? 0 : rob(root.right.left) + rob(root.right.right));

  let dont = rob(root.left) + rob(root.right);

  let res = Math.max(doIt, dont);
  cache.set(root, res);
  return res;
};
// @lc code=end
