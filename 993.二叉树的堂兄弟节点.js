/*
 * @lc app=leetcode.cn id=993 lang=javascript
 *
 * [993] 二叉树的堂兄弟节点
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  let arr = []
  const inOrder = (p, father, fatherLevel = 0) => {
    if(!p) return 0
    inOrder(p.left, p, fatherLevel + 1)
    if (p.val === x || p.val === y) {
      arr.push({
        father,
        value: p.val,
        level: fatherLevel
      })
    }
    inOrder(p.right, p, fatherLevel + 1)
  }
  inOrder(root, null)
  if (arr.length === 2 && arr[0].level === arr[1].level && arr[0].father !== arr[1].father) return true
  
  return false

};
// @lc code=end

