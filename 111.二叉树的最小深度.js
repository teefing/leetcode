/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth1 = function (root) {
  const getMinDepth = (p) => {
    if (!p) return 0;
    let left = getMinDepth(p.left),
      right = getMinDepth(p.right);
    // 如果左右子节点都不存在
    if (!p.left && !p.right) return 1;
    // 如果左右子节点都存在
    if (p.left && p.right) {
      return Math.min(left, right) + 1;
    }
    // 如果左右子节点有且只有一个存在
    if (p.left || p.right) {
      return Math.max(left, right) + 1;
    }
  };
  return getMinDepth(root);
};

var minDepth = function (root) {
  if (!root) return 0;
  const queue = [root];
  let depth = 1,
    cur;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      cur = queue.shift();
      if (!cur.left && !cur.right) return depth;
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }
    depth++;
  }
  return depth;
};

// @lc code=end
