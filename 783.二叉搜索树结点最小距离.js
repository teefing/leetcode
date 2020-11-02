/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树结点最小距离
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
var minDiffInBST = function(root) {
  let min = 999999
  const arr = []
  const inOrder = (p) => {
    if (!p) return
    inOrder(p.left)
    arr.push(p.val)
    inOrder(p.right)
  }
  inOrder(root)
  for (let i = 0; i < arr.length - 1; i++){
    min = Math.min(min, arr[i+1] - arr[i])
  }
  return min

};
// @lc code=end

