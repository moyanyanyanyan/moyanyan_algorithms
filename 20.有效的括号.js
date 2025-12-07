/**
 * @param {string} s
 * @return {boolean}
 */
//模拟题
//模拟出栈和入栈的过程
var isValid = function (s) {
  let stack = []
  let map = {
    //为了去映射判断匹配
    ')': '(',
    ']': '[',
    '}': '{',
  }
  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      //这些执行入栈
      stack.push(char)
    } else {
      //这些执行出栈
      if (stack.length === 0) return false
      if (stack[stack.length - 1] == map[char]) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}
