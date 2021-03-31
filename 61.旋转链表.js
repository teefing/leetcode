/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function getLen(p){
  let len = 0
  while(p) {
    len++
    p = p.next
  }
  return len
}

function getLastKNode(k, head){
  let prev = null
  let targetNode = head
  let headPrev = null
  while(head) {
    headPrev = head
    head = head.next
    if(k > 0) {
      k--
    } else {
      prev = targetNode
      targetNode = targetNode.next
    }
  }
  return [targetNode, prev, headPrev]
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if(!head) return head
  let len = getLen(head)
  k = k % len
  if(k === 0) return head
  
  let [targetNode, prev, lastNode] = getLastKNode(k, head)
  lastNode.next = head
  prev.next = null
  return targetNode
};
// @lc code=end

