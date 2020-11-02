/*
 * @lc app=leetcode.cn id=1022 lang=javascript
 *
 * [1022] 从根到叶的二进制数之和
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
var sumRootToLeaf = function(root) {
  let sum = 0
  const getSum = (p, sumForNow) => {
    if (!p) return
    let t = sumForNow*2+p.val
    if (!p.left && !p.right) {
      sum+= t
    }
    getSum(p.left, t)
    getSum(p.right, t)
  }
  getSum(root, 0)
  return sum
};
// @lc code=end

