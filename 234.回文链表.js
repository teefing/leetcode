/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
let left
var isPalindrome = function(head) {
  left = head
  return reverse(head)
};
// 可以将链表看作只有左子树的一棵树，对其进行后序遍历就能从后往前获得值
function reverse (right) {
  if (right === null) return true
  let res = reverse(right.next)
  res = res && (right.val === left.val)
  left = left.next
  return res
}
// @lc code=end

