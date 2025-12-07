/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 双重循环，时间复杂度O(n^2)，好像有点高
//感觉和两数之和差不多
var twoSum1 = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    rest = target - numbers[i]
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] === rest) {
        return [i + 1, j + 1] //返回索引+1，因为题目要求返回的是索引+1
      }
    }
  }
  return flase //执行完循环还是没找到，返回false
}

//由于题给是非递减数组，所以可以用双指针，时间复杂度O(n)，
// 感觉很多题给非递减数组都可以用双指针
//就是因为有序所以可以最开始下标在两边，根据条件减少
var twoSum2 = function (numbers, target) {
  let left = 0
  let right = numbers.length - 1
  let sum = 0
  while (left < right) {
    //left>right说明已经遍历完了
    sum = numbers[left] + numbers[right]
    if (sum === target) {
      return [left + 1, right + 1]
    }
    sum > target ? right-- : left++
  }
  return false
}
