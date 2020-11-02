/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let node1 = l1;
  let node2 = l2;
  let nodeRes = null;
  let res = null;
  let carry = 0
  let tmp = 0
  let val1 = 0, val2 = 0
  while (!(node1 === null && node2 === null) || carry) {
    val1 = node1 ? node1.val : 0
    val2 = node2 ? node2.val : 0
    tmp = val1 + val2 + carry
    // 进位处理
    if (tmp >= 10) {
      tmp -= 10
      carry = 1
    } else {
      carry = 0
    }
    if (nodeRes === null) {
      nodeRes = new ListNode(tmp)
      res = nodeRes
    } else {
      nodeRes.next = new ListNode(tmp)
      nodeRes = nodeRes.next
    }
    node1 && (node1 = node1.next)
    node2 && (node2 = node2.next)
  }
  return res
};
// @lc code=end

