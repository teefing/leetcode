/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
var findTilt = function (root) {
  let sum = 0;
  const getSum = (p) => {
    if (!p) return 0;
    let left = getSum(p.left);
    let right = getSum(p.right);
    let dist = Math.abs(left - right);
    sum += dist;
    return left + right + p.val;
  };
  getSum(root)
  return sum
};
// @lc code=end
