/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function reverse (a, b) {
  let pre = null, cur = a, next = a
  while (cur !== b) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let a, b
  a = b = head
  for (let i = 0; i < k; i++){
    if (b === null) return head
    b = b.next
  }
  let newHead = reverse(a, b)
  a.next = reverseKGroup(b, k)
  return newHead
};
// @lc code=end

