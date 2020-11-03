/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

let successor = null
function reverseN (head, n) {
  if (n === 1) {
    successor = head.next
    return head
  }
  const last = reverseN(head.next, n - 1)
  head.next.next = head
  head.next = successor
  return last
}

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if (m === 1) {
    return reverseN(head, n)
  }

  head.next = reverseBetween(head.next, m - 1, n - 1)
  return head
};
// @lc code=end

