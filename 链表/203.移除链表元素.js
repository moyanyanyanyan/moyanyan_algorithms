/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let dummy = new ListNode(0, head) //创建虚拟节点
  let cur = dummy //cur是一个在动的指针
  while (cur.next) {
    //只要cur的下一个的指针不是null，cur就能继续
    if (cur.next.val == val) {
      //判断cur的下一个是不是val为要删除的值
      cur.next = cur.next.next //把指向的链条断掉
      continue //指针不移动
    }
    cur = cur.next //如果没有断掉链条，说明下一个元素不会被删除，指针向后移动
  }
  return dummy.next
}
