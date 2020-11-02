/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  const res = []
  const preOrder = (p) => {
    if (!p) return
    res.push(p.val)
    for (let i = 0; i < p.children.length; i++){
      preOrder(p.children[i])
    }
  }
  preOrder(root)
  return res
};
// @lc code=end

