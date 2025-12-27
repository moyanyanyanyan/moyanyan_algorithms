//整理思路：
//把数字用number替代
//这里是创造了新的字符串，并且长度和原来的有关
//1.对原来字符串进行遍历，得到新字符串的长度
//2.对原来字符串遍历，对新字符串进行增加操作

const readline = require('readline') //导入工具包
const rl = readline.createInterface({
  input: process.stdin, //从键盘输入
  output: process.stdout, //显示屏输出
})

rl.on('line', (input) => {
  //没行读取的时候都在干下面的操作
  let n = 0 //新数组的长度
  for (const item of input) {
    //遍历input得到新数组的长度
    if (
      item.charCodeAt() >= '0'.charCodeAt() &&
      item.charCodeAt() <= '9'.charCodeAt() //判断某个字符是不是在0-9之间
    ) {
      n += 6 //是的话新数组+6
    } else {
      n += 1 //不是就+1
    }
    let res = new Array(n).fill(0) //搞一个新数组，每个元素初始化为0
    let index = 0 //index指向的是新数组
    for (const item of input) {
      //对input里面的东西再次遍历
      if (
        item.charCodeAt() >= '0'.charCodeAt() && //判断是不是数字字符
        item.charCodeAt() <= '9'.charCodeAt()
      ) {
        res[index] = 'n' //把number写进去
        res[index + 1] = 'u'
        res[index + 2] = 'm'
        res[index + 3] = 'b'
        res[index + 4] = 'e'
        res[index + 5] = 'r'
        index += 6 //更新index的值
      } else {
        //非数字
        res[index] = item //把item写进去
        index++ //更新index的值
      }
    }
    console.log(res.join('')) //把数组转为字符串进行打印
  }
})
