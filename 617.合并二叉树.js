/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  let t = t1 || t2
  if(!t) return null
  let left = null, right = null
  if (t1 && t2) {
    t.val = t1.val + t2.val
    left = mergeTrees(t1.left, t2.left)
    right = mergeTrees(t1.right, t2.right)
  } else if (t) {
    left = t.left
    right = t.right
  }
  t.left = left
  t.right = right
  return t
};
// @lc code=end

