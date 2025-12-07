/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  //首先这个不是非递减数列
  // 所以双指针肯定不能一个指左一个指右
  //其实有暴力解法，但是时间复杂度是O(n^2)
  //暴力解法1：双重循环把所有的差值遍历出来，找到最大值
  //这个题目有一个典型特点是：
  // 每一天的持有股票的利润和不持有股票的利润都是由前一天决定的
  //所以可以用动态规划来模拟状态转移
  //dp[i][0]表示第i天持有股票的最大利润
  //dp[i][1]表示第i天不持有股票的最大利润
  //初始化
  let dp = new Array(prices.length).fill([0, 0])
  dp[0][0] = -prices[0] //第0天持有
  dp[0][1] = 0 //第0天不持有
  //然后要开始模拟状态，每次循环都去改变状态
  for (let i = 1; i < prices.length; i++) {
    //i就是第i天
    //我每次i+1过了一天就去更新状态
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i]) //第i天持有股票的最大利润，要么是前一天持有，要么是今天买入
    //tips:这个-prices[i]是今天买入，如果改成dp[i-1][1]-prices[i]就会成为另外一个情况，可以多次买入
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
  }
  return dp[prices.length - 1][1] //已经模拟完毕
}
