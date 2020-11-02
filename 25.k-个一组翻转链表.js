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
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  function reverse (prev, from, end) {
    const totalNext = end.next
    let cur = from, pre = null
    while (cur !== end) {
      [cur.next, pre, cur] = [pre, cur, cur.next]
    }
    prev.next = end
    from.next = totalNext
  }
  let dummy = new ListNode(0)
  dummy.next = head;
  let pre = dummy

  while (pre) {
    for (let i = 0, fixedPre = pre; i < k && pre.next; i++){
      pre = pre.next
      if (i === k - 1) {
        reverse(fixedPre, fixedPre.next, pre)
      }
    }
  }
  
};
// @lc code=end

