/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
// var reverseList = function(head) {
//   let cur = head, prev = null
//   while(cur) {
//     let next = cur.next
//     cur.next = prev
//     prev = cur
//     cur = next
//   }
//   return prev
// };


var reverseList = function(head) {
  if(!head || !head.next) {
    return head
  }
  let newHead = reverseList(head.next)
  head.next.next = head
  head.next = null
  return newHead
};
// @lc code=end

