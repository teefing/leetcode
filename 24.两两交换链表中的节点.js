/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let pre = new ListNode(0), cur = head
  pre.next = head
  res = pre
  while (cur && cur.next) {
    let first = cur,
      second = cur.next,
      next = cur.next.next
    
      ;[pre.next, second.next, first.next] = [second, first, next]

    pre = first
    cur = next
  }
  return res.next
};
// @lc code=end

