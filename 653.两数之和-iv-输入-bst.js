/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入 BST
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  let arr = []
  const inOrder = (p) => {
    if (!p) return
    inOrder(p.left)
    arr.push(p.val)
    inOrder(p.right)
  }
  inOrder(root)

  let o = {}
  for (let i = 0; i < arr.length; i++){
    if (o[arr[i]]) {
      return true
    }
    o[k - arr[i]] = true
  }
  return false
};
// @lc code=end

