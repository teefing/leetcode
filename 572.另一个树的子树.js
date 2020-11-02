/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一个树的子树
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  const isSame = (big, small) => {
    if (!big && !small) return true;
    if (big && small) {
      return (
        big.val === small.val &&
        isSame(big.left, small.left) &&
        isSame(big.right, small.right)
      );
    }
    return false;
  };
  const isSub = (big, small) => {
    if (!big) return false;
    if (isSame(big, small)) return true;
    return isSub(big.left, small) || isSub(big.right, small);
  };
  return isSub(s, t);
};
// @lc code=end
