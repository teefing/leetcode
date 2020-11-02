/*
 * @lc app=leetcode.cn id=897 lang=javascript
 *
 * [897] 递增顺序查找树
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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  if(!root) return null
  const arr = []
  const inOrder = (p) => {
    if (!p) return
    inOrder(p.left)
    arr.push(p)
    inOrder(p.right)
  }
  inOrder(root)
  const res = arr.shift()
  let p = res
  while (arr.length) {
    p.right = arr.shift()
    p.left = null
    p = p.right
  }
  p.right = null
  return res
};
// @lc code=end

