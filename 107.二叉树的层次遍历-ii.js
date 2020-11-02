/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 */
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
var levelOrderBottom = function (root) {
  if(!root) return []
  let queue = [];
  let levelArr = [];
  let res = []
  queue.push(root);
  queue.push('#');
  while (queue.length) {
    let p = queue.shift();
    if (p === '#') {
      res.push(levelArr)
      levelArr = []
      queue.length && queue.push('#');
    } else {
      levelArr.push(p.val)
      p.left && queue.push(p.left);
      p.right && queue.push(p.right);
    }
    
  }
  return res.reverse()
};
