/*
 * @lc app=leetcode.cn id=872 lang=javascript
 *
 * [872] 叶子相似的树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const rootArr1 = [],rootArr2 = []
  const inOrder = (p, arrContainer) => {
    if (!p) return
    inOrder(p.left, arrContainer)
    if (!p.left && !p.right) {
      arrContainer.push(p.val)
    }
    inOrder(p.right, arrContainer)
  }
  inOrder(root1, rootArr1)
  inOrder(root2, rootArr2)

  if (rootArr1.length !== rootArr2.length) return false
  
  for (let i = 0; i < rootArr1.length; i++){
    if(rootArr1[i]!==rootArr2[i]) return false
  }

  return true
};
// @lc code=end

