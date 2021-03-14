/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// var lowestCommonAncestor = function (root, p, q) {
//   if (root === null) return null
//   if(root === p || root === q) return root
//   let left = lowestCommonAncestor(root.left, p, q)
//   let right = lowestCommonAncestor(root.right, p, q)
//   if (left && right) return root
//   return right || left || null
// };

var lowestCommonAncestor = function(root, p, q) {
  function lca(r){
    if(r === null) return null
    if([p,q].includes(r)) return r
    let left = lca(r.left)
    let right = lca(r.right)
    if(left && right) return r
    return left || right || null
  }

  return lca(root)
}
// @lc code=end

