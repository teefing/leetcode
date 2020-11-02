/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
var detectCycle = function(head) {
  let slow = head, fast = head, target
  while (fast && fast.next && !target) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      target = slow
    }
  }
  if (!target) return null

  slow = head, fast = target, target = null
  while (!target) {
    if (slow === fast) {
      return slow
    }
    slow = slow.next
    fast = fast.next
  }
};
// @lc code=end

