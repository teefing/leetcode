/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  let stack = [root, "#"];
  let sumArr = [];
  let res = [];
  
  while (stack.length > 0) {
    // console.log('stack: ', stack);
    const cur = stack.shift();
    if (cur === "#") {
      const len = sumArr.length
      const sum = sumArr.reduce((prev, cur) => prev + cur, 0)
      const avg = sum / len
      res.push(avg);
      sumArr = [];
      if(stack.length)
        stack.push("#");
    } else {
      sumArr.push(cur.val);
      cur.left && stack.push(cur.left);
      cur.right && stack.push(cur.right);
    }
  }
  // console.log('res: ', res);
  return res
};
// @lc code=end
