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
var reverseList = function (head) {
  let pre = null //这个地方，我一开始pre是定在head的，然后cur是head.next,疯狂报错说我head可能是空的，然后还没处理链表最后一个是null的事情
  let cur = head
  while (cur) {
    //
    let tem = cur.next //暂时存储
    cur.next = pre
    pre = cur
    cur = tem
  }
  return pre //最后cur是null,pre是头
}
