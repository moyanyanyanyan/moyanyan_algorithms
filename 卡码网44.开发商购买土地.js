const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
let inputLines = []
rl.on('line', function (line) {
  inputLines.push(line.trim())
})

//以上为固定读取操作

rl.on('close', function () {
  let [n, m] = inputLines[0].split(' ').map(Number) //结构化赋值给m,n
  let r = new Array(n).fill(0) //r里面存储每行的和
  let rsum = new Array(n).fill(0) //rsum存储一个r的前缀和数组
  let rmin = Infinity //rmin来存储行比较后的最小差值，因为是最小值，初始赋值为无穷
  //列同理
  let c = new Array(m).fill(0)
  let csum = new Array(m).fill(0)
  let cmin = Infinity
  let min = Infinity
  //arr为二维数组，存储行列值
  let arr = new Array(n)
  for (let i = 1; i < inputLines.length; i++) {
    //从inputLines的第二行开始读取，也就是下标为1处
    arr[i - 1] = inputLines[i].split(' ').map(Number) //涉及inputLines的要字符串转化
  }
  for (let i = 0; i < n; i++) {
    //双重循环从二维数组arr中获取数据并且每行累计和
    for (let j = 0; j < m; j++) {
      r[i] += arr[i][j]
    }
  }
  rsum[0] = r[0] //给第一个值赋初值，防止下标左越界变为-1
  for (let i = 1; i < n; i++) {
    //从第一个开始给rsum赋值
    rsum[i] = r[i] + rsum[i - 1]
  }
  for (let i = 0; i < n - 1; i++) {
    //行比较得出rmin,把rsum分成两段，然后相减进行绝对值即可，我这里写得啰嗦了，但是我懒得改
    //这个i的右边界是n-1，因为这个东西是不能取到最后一个，不然相减就变成0了，那rmin会固定为0
    rmin =
      rmin > Math.abs(rsum[i] - (rsum[n - 1] - rsum[i]))
        ? Math.abs(rsum[i] - (rsum[n - 1] - rsum[i]))
        : rmin
  } //这个n-1是下标，刚好取到最后一个
  //列同理
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      c[i] += arr[j][i]
    }
  }
  csum[0] = c[0]
  for (let i = 1; i < m; i++) {
    csum[i] = c[i] + csum[i - 1]
  }
  for (let i = 0; i < m - 1; i++) {
    cmin =
      cmin > Math.abs(csum[i] - (csum[m - 1] - csum[i]))
        ? Math.abs(csum[i] - (csum[m - 1] - csum[i]))
        : cmin
  }
  //rimin和cmin比较
  min = rmin > cmin ? cmin : rmin
  console.log(min)
})
