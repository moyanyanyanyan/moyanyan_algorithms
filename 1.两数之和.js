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
