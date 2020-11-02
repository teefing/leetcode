/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function (root) {
  let arr = []
  const inOrder = (p) => {
    if (!p) return 
    inOrder(p.left)
    arr.push(p.val)
    inOrder(p.right)
  }
  inOrder(root)
  let min = 9999
  for (let i = 0; i < arr.length - 1; i++){
    min = Math.min(min, Math.abs(arr[i+1] - arr[i]))
  }
  return min
};
// @lc code=end

