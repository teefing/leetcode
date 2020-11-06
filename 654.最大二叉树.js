/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if(nums.length === 0) return null
  let max = -Infinity
  let maxIndex = 0
  for (let i = 0; i < nums.length; i++) {
    if (max <= nums[i]) {
      max = nums[i]
      maxIndex = i
    }
  }
  let root = new TreeNode(max)
  root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex))
  root.right = constructMaximumBinaryTree(nums.slice(maxIndex+1))
  return root
};
// @lc code=end

