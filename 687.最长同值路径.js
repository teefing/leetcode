/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
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
var longestUnivaluePath = function (root) {
  let getArrowLength = (p) => {
    if (!p) return 0;
    let left = getArrowLength(p.left),
      right = getArrowLength(p.right),
      arrowLeft = 0,
      arrowRight = 0;
    if (p.left && p.val === p.left.val) {
      arrowLeft += left + 1;
    }
    if (p.right && p.val === p.right.val) {
      arrowRight += right + 1;
    }
    max = Math.max(max, arrowLeft + arrowRight);
    return Math.max(arrowLeft, arrowRight);
  };
  let max = 0;
  getArrowLength(root);
  return max;
};
// @lc code=end
