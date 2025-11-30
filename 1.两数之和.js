var twoSum = function (nums, target) {
  let sum = 0
  let res = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      sum = nums[i] + nums[j]
      if (sum == target) {
        res[0] = i
        res[1] = j
      }
    }
  }
  return res
}
