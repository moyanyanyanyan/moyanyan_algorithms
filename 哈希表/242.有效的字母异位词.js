/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
  let arr = new Array(26).fill(0) //数字的计算要初始化为0，不然默认undefined
  let base = 'a'.charCodeAt(0) //把a的unicode值给出，一般符号和ASCLL码值相同
  for (let i of s) {
    //对s中的每一个i字符进行遍历
    arr[i.charCodeAt(0) - base] += 1 //相应的次数+1
  }
  for (let i of t) {
    //对s中的每一个i字符进行遍历
    arr[i.charCodeAt(0) - base] -= 1 //相应的次数-1
  }
  let flag = true //记录状态，初始化为true
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      //若为0就改变状态并且退出
      flag = false
      break
    }
  }
  return flag
}
