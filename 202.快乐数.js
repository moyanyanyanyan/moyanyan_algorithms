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
