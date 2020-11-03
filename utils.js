function printLinkList (p) {
  const arr = []
  while (p) {
    arr.push(p.val)
    p = p.next
  }
  console.log(arr.join('->'))
}
exports.printLinkList = printLinkList

function ListNode(val) {
  this.val = val;
  this.next = null;
}
exports.ListNode = ListNode

function getLinkedList (arr) {
  const head = new ListNode()
  let p = head
  for (const val of arr) {
    p.next = new ListNode(val)
    p = p.next
  }
  return head.next
}
exports.getLinkedList = getLinkedList