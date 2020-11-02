/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
  const res = []
  const postOrder = (p) => {
    if (!p) return
    for (let i = 0; i < p.children.length; i++){
      postOrder(p.children[i])
    }
    res.push(p.val)

  }
  postOrder(root)
  return res 
};
// @lc code=end

