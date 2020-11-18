/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  let map = new Map();
  let duplicateNodes = [];
  function collect(root) {
    if (!root) return '#';
    // 采用后序遍历的方式将每个子树的子树序列都存储起来
    const serializedTree = root.val + ','+ collect(root.left) + collect(root.right);
    if (map.has(serializedTree)) {
      const count = map.get(serializedTree);
      if (count === 1) duplicateNodes.push(root);
      map.set(serializedTree, count + 1);
    } else {
      map.set(serializedTree, 1);
    }
    return serializedTree
  }

  collect(root);
  // console.log(map);
  return duplicateNodes;
};
// @lc code=end
