/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

//这个写法是拿值判断的，血与泪的教训，反正都写了这么多，我就是要留下来
var getIntersectionNode = function (headA, headB) {
  // 空链表直接返回null（避免后续报错），这个很重要，链表经常因为空而报错，所以一定注意非空情况
  if (!headA || !headB) return null

  // 兼容空链表
  let getLength = function (head) {
    let N = 0 // 初始值改为0，兼容空链表
    let cur = head
    while (cur) {
      // 遍历到null为止，而非cur.next
      N++
      cur = cur.next
    }
    return N
  }

  let Na = getLength(headA)
  let Nb = getLength(headB)
  let extra = 0
  let cura = headA
  let curb = headB

  // 让长链表先单独走extra步（核心：对齐指针）
  if (Na - Nb > 0) {
    extra = Na - Nb
    // 长链表（cura）先走extra步，每一步都判断非null
    while (extra-- && cura) {
      cura = cura.next
    }
  } else {
    extra = Nb - Na
    // 长链表（curb）先走extra步
    while (extra-- && curb) {
      curb = curb.next
    }
  }

  let flag = 0 //记录这个数字是否开始相等
  let startNode = null //最后要return的东西

  // 先判断非null，再访问val，防止报错
  while (cura && curb) {
    // 只要一个为null就终止
    // 此时cura/curb一定非null，可安全访问val
    if (cura.val === curb.val && flag === 0) {
      //第一次相等
      flag = 1 //开始相等了
      startNode = cura
    } else if (cura.val !== curb.val && flag === 1) {
      //之前相等过，但是现在不一样了
      flag = 0
      startNode = null // 值不同，重置起始节点
    }
    //必须在判断完val后执行
    cura = cura.next
    curb = curb.next
  }

  return startNode
}

//正确写法

var getIntersectionNode = function (headA, headB) {
  // 空链表直接返回null（避免后续报错），这个很重要，链表经常因为空而报错，所以一定注意非空情况
  if (!headA || !headB) return null

  // 兼容空链表
  let getLength = function (head) {
    let N = 0 // 初始值改为0，兼容空链表
    let cur = head
    while (cur) {
      // 遍历到null为止，而非cur.next
      N++
      cur = cur.next
    }
    return N
  }

  let Na = getLength(headA)
  let Nb = getLength(headB)
  let extra = 0
  let cura = headA
  let curb = headB

  // 让长链表先单独走extra步（核心：对齐指针）
  if (Na - Nb > 0) {
    extra = Na - Nb
    // 长链表（cura）先走extra步，每一步都判断非null
    while (extra-- && cura) {
      cura = cura.next
    }
  } else {
    extra = Nb - Na
    // 长链表（curb）先走extra步
    while (extra-- && curb) {
      curb = curb.next
    }
  }
  while (cura && cura !== curb) {
    // 核心不同点
    cura = cura.next
    curb = curb.next
  }
  return cura
}
