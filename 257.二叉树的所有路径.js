/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const res = []
  
  const traverse = (p, path, first) => {
    if (!p) return
    path = `${path}${first ? '' : '->'}${p.val}`
    if (!p.left && !p.right) {
      res.push(path)
    }
    traverse(p.left, path, false)
    traverse(p.right, path, false)
  }
  traverse(root, '', true)
  return res
};
// @lc code=end

