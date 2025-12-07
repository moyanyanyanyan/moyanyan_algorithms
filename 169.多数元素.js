/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let cal = {} //用一个对象来存储每个元素出现的次数
  for (let i = 0; i < nums.length; i++) {
    if (!cal[nums[i]]) {
      cal[nums[i]] = 1
    } else {
      cal[nums[i]]++
    }
    if (cal[nums[i]] > nums.length / 2) {
      return nums[i]
    }
  }
}
