var twoSum = function (nums, target) {
  let sum = 0 // 记录两数之和
  let res = [] // 记录结果
  for (let i = 0; i < nums.length; i++) {
    // 遍历数组
    for (let j = i + 1; j < nums.length; j++) {
      // 从i+1开始遍历，避免重复计算
      sum = nums[i] + nums[j] // 计算两数之和
      if (sum == target) {
        // 如果两数之和等于目标值
        res[0] = i // 记录第一个数的索引
        res[1] = j // 记录第二个数的索引
      }
    }
  }
  return res
}
//时间复杂度为O(n(n-1)/2)
//其实可以优化为O(n)，只要去使用map或者对象即可，查询的时候时间复杂度是O(1)
//逻辑就是用map去保存我遍历过的数和下标，因为我这个要返回下标，所以得是map或者对象
//然后我就只要遍历一遍，每次都做记住和查找的工作就好
//ps:但是对象其实会把所有东西强制转换成字符串，所以我如果遍历的不是纯数字的数组其实会出问题，当然这道题目是没问题的
var twoSum = function (nums, target) {
  let memory = new Map() //创建一个map用来记录历史遍历过的num
  let extra = 0 //这个是需要在map里面查询的东西
  for (let i = 0; i < nums.length; i++) {
    extra = target - nums[i] //每次下标改变，就改变查询的extra
    if (memory.has(extra)) {
      //去map里面找extra,如果找到
      return [i, memory.get(extra)] //就返回下标，这个map的值用get方法
    }
    memory.set(nums[i], i) //每次循环在没找到extra时都去把历史记录下来，更新map
  }
}
