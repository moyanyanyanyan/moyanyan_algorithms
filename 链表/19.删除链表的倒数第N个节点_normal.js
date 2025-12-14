/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let N = 1 //N为列表里面元素的个数，这个1是我画图画出来的，没有为什么
  let cur = head
  while (cur.next) {
    N++
    cur = cur.next
  }
  let number = 1 //这个number存的是目前走到第number个链表元素
  if (N == n) {
    //如果把第一个删除，就把后面的都输出出来
    head = head.next
    return head
  }
  cur = head //重置cur
  while (cur.next) {
    //不是删除第一个的情况
    if (number == N - n) {
      //当走到那个要被删除的元素之前
      cur.next = cur.next.next //删除元素
      break //退出循环
    }
    cur = cur.next //没找到删除的元素，继续走
    number++ //number继续加
  }
  return head
}
