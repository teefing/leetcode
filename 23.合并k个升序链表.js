/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];
  function mergeTwoList(l, r) {
    let head = new ListNode();
    let p = head;
    while (l && r) {
      if (l.val < r.val) {
        p.next = l;
        l = l.next;
      } else {
        p.next = r;
        r = r.next;
      }
      p = p.next;
    }
    if (l) {
      p.next = l;
    } else {
      p.next = r;
    }
    return head.next;
  }

  function merge(l, r) {
    if (l > r) return null;
    if (l === r) return lists[l];
    let middle = Math.floor((l + r) / 2);
    return mergeTwoList(merge(l, middle), merge(middle + 1, r));
  }

  let res = merge(0, lists.length-1);
  return res;
};

// @lc code=end
