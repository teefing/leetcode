/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let head = new ListNode()
  let p = head;
  while(l1 || l2) {
    if(l1 && l2) {
      if(l1.val < l2.val) {
        p.next = l1
        l1 = l1.next
      } else {
        p.next = l2
        l2 = l2.next
      }
    } else if(l1) {
      p.next = l1
      l1 = l1.next
    } else if(l2) {
      p.next = l2
      l2 = l2.next
    }
    p = p.next
  }
  return head.next
};
// @lc code=end

