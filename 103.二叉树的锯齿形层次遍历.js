/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if(!root) return []
  const queue = [root]
  let level = 1
  const res = []
  while (queue.length) {
    const arr = []
    const len = queue.length
    for (let i = 0; i < len; i++){
      const cur = queue.shift()
      arr.push(cur)
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }
    if (level % 2 === 0) {
      res.push(arr.reverse().map(node => node.val))
    } else {
      res.push(arr.map(node => node.val))
    }
    level+=1
    
  }
  return res
};
// @lc code=end

