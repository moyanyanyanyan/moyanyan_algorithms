var isHappy = function (n) {
  let already = [] //存储已经出现过的数
  let k = 0 //存储已经出现过的数的个数
  function sum(n) {
    //计算各位数字平方和
    let sum = 0 //各位数字平方和
    do {
      sum += (n % 10) * (n % 10) //计算各位数字平方和
      n = Math.floor(n / 10) //去掉最后一位
    } while (n > 0) //如果n大于0，继续循环
    return sum //返回各位数字平方和
  }
  while (n != 1) {
    //如果n不等于1，继续循环
    already[k] = n //存储已经出现过的数
    n = sum(n) //计算各位数字平方和
    for (let i = 0; i <= k; i++) {
      //遍历已经出现过的数
      if (n == already[i]) {
        //如果n等于已经出现过的数，说明已经进入循环，不是快乐数
        return false //返回false
      }
    }
    k++ //已经出现过的数的个数加1
  }
  return true
}
//set实现,优化了查找历史n的时间复杂度,在sum实现也有所不同
var isHappy = function (n) {
  let getN = function () {
    let sum = 0 //存储快乐数的值
    while (Math.floor(n / 10) != 0) {
      //不是个位数
      sum += (n % 10) ** 2 //加上这次的
      n = Math.floor(n / 10) //把个位数剪掉
    }
    sum += n * n //在这个循环中最后一次个位的是加不上的，要手动添加
    return sum
  }
  let alreadySet = new Set() //用set，就可以用set的has方法，可以减少时间复杂度
  if (n === 1) return true //判断如果一开始给的就是1就return过滤掉
  while (n !== 1) {
    //一开始不是1进入循环开始迭代
    if (n !== 1 && alreadySet.has(n)) {
      //如果出现闭环，则不是快乐数
      return false
    }
    alreadySet.add(n) //每一次n变幻都add到set里面
    n = getN(n) //n每次都要迭代
  }
  return true //如果退出循环说明n=1,则return true
}
