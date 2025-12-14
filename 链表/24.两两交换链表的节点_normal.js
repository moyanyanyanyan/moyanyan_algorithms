/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head
  }
  let cur = head
  let newhead = head.next
  let prev = null
  while (cur && cur.next) {
    const node1 = cur
    const node2 = cur.next
    const nextGroup = node2.next // 下一组的开始

    // 交换当前两个节点
    node2.next = node1
    node1.next = nextGroup

    // 关键：连接上一组
    if (prev) {
      prev.next = node2
    }

    // 更新指针
    prev = node1 // 当前组的尾节点是node1
    cur = nextGroup
  }
  return newhead
}
