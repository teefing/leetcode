/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let arr = []
  
  const inOrder = (p) => {
    if(!p) return
    inOrder(p.left)
    arr.push(p.val)
    inOrder(p.right)
  }
  inOrder(root)
  let sumArr =  [0]
  // console.log('arr: ', arr);
  for (let i = arr.length - 1; i > 0; i--){
    sumArr.unshift(sumArr[0]+arr[i])
  }

  const process = (p) => {
    if (!p) return
    process(p.left)
    const val = sumArr.shift()
    p.val += val
    process(p.right)
  }
  // console.log('sumArr: ', sumArr);
  process(root)
  return root
};
// @lc code=end

