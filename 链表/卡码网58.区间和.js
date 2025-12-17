//这个里面用了一些node.js的知识，里面很多读取行的代码我第一次看，所以是copy的

const readline = require('readline') //获得readline这个工具
const rl = readline.createInterface({
  //创建读取接口
  input: process.stdin,
  output: process.stdout,
})

let inputLines = [] //读取到的东西存储的容器
rl.on('line', (line) => {
  inputLines.push(line.trim())
}) //读取，这个要把字符串和空格的影响消除掉

rl.on('close', () => {
  //所有数据读取完毕进行
  const n = parseInt(inputLines[0]) //获得参数个数
  let sum = new Array(n) //new一个，省得每次分配内存
  sum[0] = parseInt(inputLines[1]) //字符串转换
  for (let i = 1; i < n; i++) {
    //计算sum
    sum[i] = parseInt(inputLines[i + 1]) + sum[i - 1]
  }
  for (let i = n + 1; i < inputLines.length; i++) {
    let [left, right] = inputLines[i].split(' ').map(Number) //结构化赋值很香
    if (left === 0) {
      //防止下标变成-1
      console.log(sum[right])
    } else {
      console.log(sum[right] - sum[left - 1])
    }
  }
})
