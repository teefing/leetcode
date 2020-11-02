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
var maxDepthRecursive = function (root) {
  if (!root) return 0
  if (!root.left && !root.right) {
    return 1
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

var maxDepthBFS = function (root) {
  if (!root) return 0
  let p = [root]
  let depth = 0
  while (p.length) {
    let size = p.length
    for (let i = 0; i < size; i++) {
      const cur = p.shift()
      if (cur.left) {
        p.push(cur.left)
      }
      if (cur.right) {
        p.push(cur.right)
      }
    }
    depth++
  }

  return depth
}

var maxDepth = function (root) {
  if (!root) return 0
  let stack = [{ node: root, depth: 1 }]
  let maxD = 0
  while(stack.length) {
    let size = stack.length
    for (let i = 0; i < size; i++){
      const { node: cur, depth } = stack.pop()
      maxD = Math.max(depth, maxD)

      if (cur.right) {
        stack.push({node:  cur.right, depth: depth+1 })
      }
      if (cur.left) {
        stack.push({node: cur.left, depth: depth+1 })
      }
      
    }
  }
  return maxD
}