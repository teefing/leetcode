/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST1 = function (root, val) {
  if(!root) return null
  let p = root
  while (p) {
    if (p.val === val) return p
    else if (val > p.val) p = p.right
    else p = p.left
  }
  return null
};

var searchBST = function (root, val) {
  if (!root) return null
  // 搜索到了，返回节点
  if (val === root.val) return root
  // 如果目标值小于root.val, 说明目标节点在左子树，去左子树搜索
  else if (val < root.val) {
    return searchBST(root.left, val)
  }
  // 如果目标值大于root.val, 说明目标节点在右子树，去右子树搜索
  else {
    return searchBST(root.right, val)
  }
};
// @lc code=end

