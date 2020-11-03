const { printLinkList, ListNode, getLinkedList } = require('./utils')

let successor = null
const reverseN = (head, n) => {
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
var reverseBetween = function(head, m, n) {
  if (m === 1) {
    return reverseN(head, n)
  }
  head.next = reverseBetween(head.next, m - 1, n - 1)
  return head
};
const linkedList = getLinkedList([1,2,3,4,5])
printLinkList(reverseBetween(linkedList, 2, 4))